import { useEffect, useState } from "react"
import { API_KEY } from "../../data"
import FilmsHome from "./filmsHome"
import SeriesHome from "./seriesHome"


const Home = () => {

    return (

        <div className="container" >

            <h1>Series</h1>
            <SeriesHome />
            <h1>Films</h1>
            <FilmsHome />
            
        </div>
    )

}

export default Home