import { configureStore } from '@reduxjs/toolkit'

import favoritesReducer from './components/Favorites/favoritesSlice'
import seriesReducer from './Slice/seriesSlice'
import filmsReducer from './Slice/filmSlice'

export default configureStore({
    reducer: {
        favorites:favoritesReducer,
        series:seriesReducer,
        films:filmsReducer,
    },
}); 