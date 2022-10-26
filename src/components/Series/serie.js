import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { API_KEY, Image_Link } from "../../data"
import { useDispatch } from 'react-redux'
import { addSerie } from "../Favorites/favoritesSlice"

const Serie = () => {

    const location = useLocation()
    const { id } = location.state

    const dispatch = useDispatch()

    const [serie, setSerie] = useState({})
    const [saisonNb, setSaisonNb] = useState(0)
    const [saison, setSaison] = useState({})
    const [episodes, setEpisodes] = useState([])
    const [similar, setSimilar] = useState([])

    useEffect(() => {

        return async () => {

            await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`).then((res) => {
                return res.json()
            }).then(async (res) => {
                await setSerie(res)
            })

            // await fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_KEY}&language=en-US`).then((res) => {
            //     return res.json()
            // }).then(async (res) => {
            //     await setSimilar(res.results)
            //     console.log(res)
            // })

        }


    }, [])


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}/season/${saisonNb}?api_key=${API_KEY}&language=en-US`).then((res) => {
            return res.json()
        }).then(async (res) => {
            await setSaison(res)
            console.log(res)
        })

    }, [saisonNb])


    return (
        <div className="details-container">




            <div className="informations" style={{
                // backgroundImage: `url(${Image_Link}${saison.poster_path})`
            }}>

                <div className="infos">
                    <h1>{serie.name}</h1>
                    <div className="">
                        <select onChange={(e) => setSaisonNb(e.target.value)}>
                            {serie.seasons && serie.seasons.map((val, i) =>
                                <option key={i} value={val.season_number}>Saison {val.season_number}</option>
                            )}
                        </select>

                        <strong> {serie.vote_average}</strong>
                        <strong>{serie.first_air_date}</strong>
                    </div>

                    <div className="synopsis">
                        {saison.overview}
                    </div>
                    <div className="options">
                        <button typeof="button"  onClick={(e)=> dispatch(addSerie(serie)) } >ADD</button>
                        <button typeof="button" >aa</button>
                        <button typeof="button" >aa</button>
                        <button typeof="button" >aa</button>
                    </div>

                    <div className="">
                        <p>
                            <strong>Créateurs</strong> :
                            {serie.created_by && serie.created_by.map((val, i) =>
                                <small key={i}>&nbsp; {val.name}</small>
                            )}
                        </p>
                        <p> <strong>Rôles principaux</strong> : </p>
                        <p>
                            <strong>Genres</strong> :
                            {serie.genres && serie.genres.map((val, i) =>
                                <small key={i}>&nbsp; {val.name}</small>
                            )}
                        </p>
                    </div>



                </div>
                <div className="saison-cover">
                    {saison && <img src={`${Image_Link}${saison.poster_path}`} alt={saison.name} />}
                </div>
            </div>
            <div className="select-container">
                <div className="selector">
                    <div className="">
                        <button>présentation</button>
                    </div>
                    <div className="">
                        <button>épisodes</button>
                    </div>
                    <div className="">
                        <button> bandes-annonces</button>
                    </div>
                    <div className="">
                        <button>titres similaires</button>
                    </div>
                    <div className="">
                        <button>infos</button>
                    </div>
                </div>
            </div>

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

        </div>
    )
}

export default Serie