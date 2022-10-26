import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { API_KEY, Image_Link } from "../../data"

const SeriesHome = () => {

    const [series, setSeries] = useState([])



    useEffect(() => {


        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
            return res.json()
        }).then(async (res) => {
            await setSeries(res.results)
        })

    }, [])

    return (
        <div className="">
            {series && series.map((val, i) =>

                <div key={i} className="card">
                    <div className="view">
                        <img src={`${Image_Link}${val.poster_path}`} alt={val.name} />
                    </div>
                    <div className="title">
                        <Link to={`serie/${val.name}`} state={{ id: val.id }} >{val.name}</Link>
                    </div>
                </div>

            )}
        </div>
    )

}


export default SeriesHome