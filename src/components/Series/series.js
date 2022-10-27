import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { API_KEY, Image_Link } from "../../data"
import { selectPopular } from "../../Slice/seriesSlice"


const Series = () => {

    const [series, setSeries] = useState([])
    const [genres, setGenres] = useState([])

    const popular = useSelector(selectPopular)

    useEffect(() => {
        // fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
        //     return res.json()
        // }).then(async (res) => {
        //     await setSeries(res.results)
        // })

        // fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
        //     return res.json()
        // }).then(async (res) => {
        //     await setGenres(res.genres)
        // })

        getPopularSeries().then((res) =>{
            console.log(res)
        })
    }, [])


    const getPopularSeries = async () => {


        return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
            return res.json()
        }).then(res => res)

    }





    return (
        <div className="container">

            {genres && genres.map((val, i) =>
                <div key={i} className="">
                    <h2>{val.name}</h2>
                </div>
            )}

            {series && series.map((val, i) =>

                <div key={i} className="card">
                    <div className="view">
                        <img src={`${Image_Link}${val.poster_path}`} alt={val.name} />
                    </div>
                    <div className="title">
                        <Link to={`/serie/${val.name}`} state={{ id: val.id }} >{val.name}</Link>
                    </div>
                </div>


            )}

        </div>
    )

}

export default Series