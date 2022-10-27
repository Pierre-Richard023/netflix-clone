import { configureStore } from '@reduxjs/toolkit'

import favoritesReducer from './components/Favorites/favoritesSlice'
import seriesReducer from './Slice/seriesSlice'

export default configureStore({
    reducer: {
        favorites:favoritesReducer,
        series:seriesReducer
    },
}); 