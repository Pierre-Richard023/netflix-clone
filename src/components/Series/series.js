import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import Slider from 'react-slick'
import { Link } from "react-router-dom"
import { API_KEY, Image_Link } from "../../data"
import { fetchActionSeries, fetchAnimationSeries, fetchComedySeries, fetchDramaSeries, fetchMysterySeries, fetchPopularSeries, fetchDocumentarySeries } from "../../Slice/seriesSlice"


const Series = () => {

    const popularSeries = useSelector((state) => state.series.popular)
    const actionSeries = useSelector((state) => state.series.actions)
    const animationSeries = useSelector((state) => state.series.animation)
    const comedySeries = useSelector((state) => state.series.comedy)
    const dramaSeries = useSelector((state) => state.series.drama)
    const documentarySeries = useSelector((state) => state.series.documentary)
    const mysterySeries = useSelector((state) => state.series.mystery)
    const dispatch = useDispatch()


    useEffect(() => {
        if (popularSeries.length == 0) {
            dispatch(fetchPopularSeries())
        }
        if (actionSeries.length == 0) {
            dispatch(fetchActionSeries())
        }

        if (animationSeries.length == 0) {
            dispatch(fetchAnimationSeries())
        }

        if (comedySeries.length == 0) {
            dispatch(fetchComedySeries())
        }

        if (dramaSeries.length == 0) {
            dispatch(fetchDramaSeries())
        }

        if (documentarySeries.length == 0) {
            dispatch(fetchDocumentarySeries())
        }
        if (mysterySeries.length == 0) {
            dispatch(fetchMysterySeries())
        }

    }, [])


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4
    };




    return (
        <div className="container">

            <div className="title-genre">
                <div className="title">
                    <h2>Séries populaires</h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {popularSeries && popularSeries.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/serie/${val.name}`} state={{ id : val.id}} >
                        <div  className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.name} />
                        </div>
                    </Link>
                )}

            </Slider>

            

            <div className="title-genre">
                <div className="title">
                    <h2>Séries d'action et d'aventure</h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>


            <Slider {...settings}>

                {actionSeries && actionSeries.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/serie/${val.name}`} state={{ id : val.id}} >
                        <div  className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.name} />
                        </div>
                    </Link>
                )}

            </Slider>



            <div className="title-genre">
                <div className="title">
                    <h2>Séries – Comédie</h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {comedySeries && comedySeries.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/serie/${val.name}`} state={{ id : val.id}} >
                        <div  className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.name} />
                        </div>
                    </Link>
                )}

            </Slider>



            <div className="title-genre">
                <div className="title">
                    <h2>Séries - Dramatique</h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {dramaSeries && dramaSeries.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/serie/${val.name}`} state={{ id : val.id}} >
                        <div  className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.name} />
                        </div>
                    </Link>
                )}

            </Slider>



            <div className="title-genre">
                <div className="title">
                    <h2>Séries - Documentaire</h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {documentarySeries && documentarySeries.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/serie/${val.name}`} state={{ id : val.id}} >
                        <div  className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.name} />
                        </div>
                    </Link>
                )}

            </Slider>



            <div className="title-genre">
                <div className="title">
                    <h2>Séries – Mystere</h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {mysterySeries && mysterySeries.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/serie/${val.name}`} state={{ id : val.id}} >
                        <div  className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.name} />
                        </div>
                    </Link>
                )}

            </Slider>


            <div className="title-genre">
                <div className="title">
                    <h2>Séries – Anime</h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {animationSeries && animationSeries.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/serie/${val.name}`} state={{ id : val.id}} >
                        <div  className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.name} />
                        </div>
                    </Link>
                )}

            </Slider>

        </div>
    )

}

export default Series