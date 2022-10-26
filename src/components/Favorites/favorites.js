import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image_Link } from '../../data';
import { selectFavoritesFilm, selectFavoritesSerie } from './favoritesSlice';

const Favorites = () => {

    const films = useSelector(selectFavoritesFilm);
    const series = useSelector(selectFavoritesSerie);

    const dispatch = useDispatch();

    return (
        <div className="container">

            <h1>Series</h1>

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

            <h1>Films</h1>
            {films && films.map((val, i) =>

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


export default Favorites