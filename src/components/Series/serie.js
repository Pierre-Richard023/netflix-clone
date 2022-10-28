import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { API_KEY, Image_Link } from "../../data"
import { useDispatch, useSelector } from 'react-redux'
import { addSerie } from "../../Slice/favoritesSlice"
import { fetchSerieSelected } from "../../Slice/seriesSlice"

import Slider from 'react-slick'


import { IoAddCircleOutline, IoCloudUploadOutline, IoCaretForwardOutline } from "react-icons/io5";

const Serie = () => {

    const dispatch = useDispatch()

    const location = useLocation()
    const { id } = location.state

    const serie = useSelector((state) => state.series.serieSelected)

    const [saisonNb, setSaisonNb] = useState(1)
    const [saison, setSaison] = useState({})
    const [similar, setSimilar] = useState([])
    const [optsSelected, setOptsSelected] = useState('episode')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        dispatch(fetchSerieSelected(id))

    }, [])


    useEffect(() => {


        fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
            return res.json()
        }).then(async res => {
            await setSimilar(res.results)
        })

    }, [id])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}/season/${saisonNb}?api_key=${API_KEY}&language=en-US`).then((res) => {
            return res.json()
        }).then(async (res) => {
            await setSaison(res)
            await setLoading(true)
        })

    }, [id, saisonNb])


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4
    };


    return (
        (loading && <div className="details-container">


            <div className="">

                <div className="informations" >

                    <div className="infos">
                        <h1>{serie.name}</h1>
                        <div className="">
                            <select onChange={(e) => setSaisonNb(e.target.value)}>
                                {serie.seasons && serie.seasons.map((val, i) =>
                                    (val.season_number > 0 && <option key={i} value={val.season_number}>Saison {val.season_number}</option>)
                                )}
                            </select>

                            <strong>&nbsp;  {serie.vote_average} &nbsp; </strong>
                            <strong>&nbsp; {serie.first_air_date} &nbsp; </strong>
                        </div>

                        <div className="synopsis">
                            {saison.overview > 0 && saison.overview}
                            {(saison.overview == 0 || null) && serie.overview}
                        </div>
                        <div className="options">

                            <button typeof="button" >
                                <IoCaretForwardOutline /> Regarder
                            </button>

                            <button className="acts tooltip" typeof="button" onClick={(e) => dispatch(addSerie(serie))} >
                                <IoAddCircleOutline />
                                <span className="tooltiptext">Ajouter dans la listes de favoris</span>
                            </button>
                            <button className="acts" typeof="button" >
                                <IoCloudUploadOutline />
                            </button>
                        </div>

                        <div className="">
                            <p>
                                <strong>Créateurs</strong> :
                                {serie.created_by && serie.created_by.map((val, i) =>
                                    <small key={i}>&nbsp; {val.name}</small>
                                )}
                            </p>
                            <p>
                                <strong>Genres</strong> :
                                {serie.genres && serie.genres.map((val, i) =>
                                    <small key={i}>&nbsp; {val.name}</small>
                                )}
                            </p>
                        </div>



                    </div>
                    <div className="cover">
                        {saison.poster_path && <img src={`${Image_Link}${saison.poster_path}`} alt={saison.name} />}
                    </div>
                </div>
                <div className="select-container">
                    <div className="selector">
                        <div className="">
                            <button className={optsSelected == 'episode' ? 'selected' : ''} onClick={() => setOptsSelected('episode')} >épisodes</button>
                            <button className={optsSelected == 'othersSame' ? 'selected' : ''} onClick={() => setOptsSelected('othersSame')} >titres similaires</button>
                        </div>
                    </div>
                </div>
                {optsSelected == 'episode' &&
                    <div className="listes-episodes">
                        {saison.episodes && saison.episodes.map((val, i) =>
                            <div className="episode" key={i}>
                                <div className="episode-view">
                                    <img src={`${Image_Link}${val.still_path}`} alt={saison.name} />
                                </div>
                                <div className="episode-informations">
                                    <h1>{val.episode_number}. {val.name}</h1>
                                    <p>{val.air_date}  - <em>{val.runtime} min</em></p>
                                    <p>{val.overview}</p>

                                </div>
                            </div>
                        )}
                    </div>
                }

                {
                    optsSelected == 'othersSame' &&
                    <div className="container">
                        <h3>TITRES SIMILAIRES</h3>

                        <Slider {...settings}>

                            {similar && similar.map((val, i) =>
                                <Link className="serie-overlay" key={i} to={`/serie/${val.name}`} state={{ id: val.id }} >
                                    <div className="card-view">
                                        <img src={`${Image_Link}${val.poster_path}`} alt={val.name} />
                                    </div>
                                </Link>
                            )}

                        </Slider>
                    </div>
                }
            </div>

        </div>)
    )
}

export default Serie