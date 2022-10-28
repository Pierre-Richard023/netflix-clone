import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Slider from 'react-slick'
import { Link } from "react-router-dom"
import { API_KEY, Image_Link } from "../../data"
import { fetchActionFilms, fetchAdventureFilms, fetchAnimationFilms, fetchComedyFilms, fetchCrimeFilms, fetchDocumentaryFilms, fetchDramaFilms, fetchHorrorFilms, fetchMusicFilms, fetchPopularFilms, fetchRomanceFilms } from "../../Slice/filmSlice"


const Films = () => {

    const popularFilms = useSelector((state) => state.films.popular)
    const adventureFilms = useSelector((state) => state.films.adventure)
    const actionFilms = useSelector((state) => state.films.actions)
    const documentaryFilms = useSelector((state) => state.films.documentary)
    const horrorFilms = useSelector((state) => state.films.horror)
    const crimeFilms = useSelector((state) => state.films.crime)
    const animtationFilms = useSelector((state) => state.films.animation)
    const comedyFilms = useSelector((state) => state.films.comedy)
    const dramaFilms = useSelector((state) => state.films.drama)
    const romanceFilms = useSelector((state) => state.films.romance)
    const musicFilms = useSelector((state) => state.films.music)


    const dispatch = useDispatch()

    useEffect(() => {
        if (adventureFilms.length == 0) {
            dispatch(fetchPopularFilms())
        }
        if (adventureFilms.length == 0) {
            dispatch(fetchAdventureFilms())
        }
        if (actionFilms.length == 0) {
            dispatch(fetchActionFilms())
        }
        if (documentaryFilms.length == 0) {
            dispatch(fetchDocumentaryFilms())
        }
        if (horrorFilms.length == 0) {
            dispatch(fetchHorrorFilms())
        }
        if (crimeFilms.length == 0) {
            dispatch(fetchCrimeFilms())
        }
        if (animtationFilms.length == 0) {
            dispatch(fetchAnimationFilms())
        }
        if (comedyFilms.length == 0) {
            dispatch(fetchComedyFilms())
        }
        if (dramaFilms.length == 0) {
            dispatch(fetchDramaFilms())
        }
        if (romanceFilms.length == 0) {
            dispatch(fetchRomanceFilms())
        }
        if (musicFilms.length == 0) {
            dispatch(fetchMusicFilms())
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
                    <h2>Films populaires</h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {popularFilms && popularFilms.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/film/${val.title}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                        </div>
                    </Link>
                )}

            </Slider>


            <div className="title-genre">
                <div className="title">
                    <h2>Films - Action </h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {actionFilms && actionFilms.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/film/${val.title}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                        </div>
                    </Link>
                )}

            </Slider>

            <div className="title-genre">
                <div className="title">
                    <h2>Films - Aventure </h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {adventureFilms && adventureFilms.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/film/${val.title}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                        </div>
                    </Link>
                )}

            </Slider>


            <div className="title-genre">
                <div className="title">
                    <h2>Films - Comédie </h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {comedyFilms && comedyFilms.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/film/${val.title}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                        </div>
                    </Link>
                )}

            </Slider>


            <div className="title-genre">
                <div className="title">
                    <h2>Films - Policier </h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {crimeFilms && crimeFilms.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/film/${val.title}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                        </div>
                    </Link>
                )}

            </Slider>

            <div className="title-genre">
                <div className="title">
                    <h2>Films - Horreur </h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {horrorFilms && horrorFilms.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/film/${val.title}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                        </div>
                    </Link>
                )}

            </Slider>

            
            <div className="title-genre">
                <div className="title">
                    <h2>Films - Romantiques </h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {romanceFilms && romanceFilms.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/film/${val.title}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                        </div>
                    </Link>
                )}

            </Slider>


            <div className="title-genre">
                <div className="title">
                    <h2>Films - Dramatique </h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {dramaFilms && dramaFilms.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/film/${val.title}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                        </div>
                    </Link>
                )}

            </Slider>


            <div className="title-genre">
                <div className="title">
                    <h2>Films - Musique </h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {musicFilms && musicFilms.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/film/${val.title}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                        </div>
                    </Link>
                )}

            </Slider>

            <div className="title-genre">
                <div className="title">
                    <h2>Films - Anime </h2>
                </div>
                <div className="more">
                    <a href="#" >VOIR PLUS ...</a>
                </div>
            </div>

            <Slider {...settings}>

                {animtationFilms && animtationFilms.map((val, i) =>
                    <Link className="serie-overlay" key={i} to={`/film/${val.title}`} state={{ id: val.id }} >
                        <div className="card-view">
                            <img src={`${Image_Link}${val.poster_path}`} alt={val.title} />
                        </div>
                    </Link>
                )}

            </Slider>

        </div>
    )

}

export default Films