import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { API_KEY, Image_Link } from "../../data"


const Films = () => {

    const [flms, setFilms] = useState([])


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
            return res.json()
        }).then(async (res) => {
            await setFilms(res.results)
        })

    }, [])


    return (
        <div className="container">
            {flms && flms.map((val, i) =>

                <div key={i} className="card">
                    <div className="view">
                        <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                    </div>
                    <div className="title">
                        <Link to={`/film/${val.title}`} state={{ id: val.id }} >{val.title}</Link>
                    </div>
                </div>


            )}

        </div>
    )

}

export default Films