import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import { Image_Link } from "../../data"
import { fetchLastestFilms, fetchPopularFilms } from "../../Slice/filmSlice"
import { fetchLastestSeries, fetchPopularSeries } from "../../Slice/seriesSlice"


const Home = () => {

    const dispatch = useDispatch()

    const latestFilms = useSelector((state) => state.films.latest)
    const latestSeries = useSelector((state) => state.series.latest)
    const popularFilm = useSelector((state) => state.films.popular)
    const popularSeries = useSelector((state) => state.series.popular)

    useEffect(() => {

        if (popularFilm.length == 0) {
            dispatch(fetchPopularFilms())
        }
        if (popularSeries.length == 0) {
            dispatch(fetchPopularSeries())
        }

        if (latestFilms.length == 0) {
            dispatch(fetchLastestFilms())
        }
        if (latestSeries.length == 0) {
            dispatch(fetchLastestSeries())
        }

    }, [])



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4
    };


    return (

        <div className="container" >

            <div className="title-genre">
                <div className="title">
                    <h2>Films ajoutées récemment</h2>
                </div>
            </div>

            <Slider {...settings}>

                {latestFilms && latestFilms.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/film/${val.title}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                        </div>
                    </Link>
                )}

            </Slider>


            <div className="title-genre">
                <div className="title">
                    <h2>Séries ajoutés récemment</h2>
                </div>
            </div>

            <Slider {...settings}>

                {latestSeries && latestSeries.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/serie/${val.name}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.name} />
                        </div>
                    </Link>
                )}

            </Slider>


            <div className="title-genre">
                <div className="title">
                    <h2>Films populaires</h2>
                </div>
            </div>

            <Slider {...settings}>

                {popularFilm && popularFilm.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/film/${val.title}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                        </div>
                    </Link>
                )}

            </Slider>

            <div className="title-genre">
                <div className="title">
                    <h2>Séries populaires</h2>
                </div>
            </div>


            <Slider {...settings}>

                {popularSeries && popularSeries.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/serie/${val.name}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.name} />
                        </div>
                    </Link>
                )}

            </Slider>

        </div>
    )

}

export default Home