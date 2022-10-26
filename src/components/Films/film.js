import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"



const Film = () => {


    const location = useLocation()
    const { id } = location.state

    const [film, setFilm] = useState({})


    return (
        <div className="">

            {id}

        </div>
    )
}


export default Film