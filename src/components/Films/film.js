import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { API_KEY, Image_Link } from "../../data"
import { fetchFilmSelected } from "../../Slice/filmSlice"
import { addFilm } from "../../Slice/favoritesSlice"
import Slider from 'react-slick'

import { IoAddCircleOutline, IoCloudUploadOutline, IoCaretForwardOutline } from "react-icons/io5";


const Film = () => {


    const location = useLocation()
    const { id } = location.state
    const dispatch = useDispatch()
    const film = useSelector((state) => state.films.filmSelected)

    const [similar, setSimilar] = useState([])
    const [credits, setCreadits] = useState({})

    useEffect(() => {
        dispatch(fetchFilmSelected(id))

    }, [])

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`).then((res) => {
            return res.json()
        }).then(async res => {
            await setCreadits(res)
        })


        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
            return res.json()
        }).then(async res => {
            await setSimilar(res.results)
        })

    }, [id])


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4
    };

    return (
        <div className="details-container">

            <div className="informations" >

                <div className="infos">
                    <h1>{film.title}</h1>
                    <div className="">

                        <strong>&nbsp;  {film.runtime} min&nbsp; </strong>
                        <strong>&nbsp;  {film.vote_average} &nbsp; </strong>
                        <strong>&nbsp; {film.release_date} &nbsp; </strong>
                    </div>

                    <div className="synopsis">
                        {film.overview}
                    </div>
                    <div className="options">

                        <button typeof="button" >
                            <IoCaretForwardOutline /> Regarder
                        </button>

                        <button className="acts tooltip" typeof="button" onClick={(e) => dispatch(addFilm(film))} >
                            <IoAddCircleOutline />
                            <span className="tooltiptext">Ajouter dans la listes de favoris</span>
                        </button>
                        <button className="acts" typeof="button" >
                            <IoCloudUploadOutline />
                        </button>
                    </div>

                    <div className="">
                        <p>
                            <strong>Réalisation</strong> :
                            {film.created_by && film.created_by.map((val, i) =>
                                <small key={i}>&nbsp; {val.name}</small>
                            )}
                        </p>
                        <p>
                            <strong>Acteur</strong> :
                            <div className="">
                                {credits.cast && credits.cast.map((val, i) =>
                                    <small key={i}>&nbsp; {val.name}</small>
                                )}
                            </div>
                        </p>
                        <p>
                            <strong>Genres</strong> :
                            {film.genres && film.genres.map((val, i) =>
                                <small key={i}>&nbsp; {val.name}</small>
                            )}
                        </p>
                    </div>



                </div>
                <div className="cover">
                    {film.poster_path && <img src={`${Image_Link}${film.poster_path}`} alt={film.title} />}
                </div>
            </div>
            <div className="select-container">
                <div className="selector">
                    <div className="">
                        <button className='selected' >titres similaires</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <h3>TITRES SIMILAIRES</h3>

                <Slider {...settings}>

                    {similar && similar.map((val, i) =>
                        <Link className="serie-overlay" key={i} to={`/serie/${val.title}`} state={{ id: val.id }} >
                            <div className="card-view">
                                <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                            </div>
                        </Link>
                    )}

                </Slider>
            </div>



        </div>
    )
}


export default Film