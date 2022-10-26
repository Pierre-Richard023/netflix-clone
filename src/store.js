import { configureStore } from '@reduxjs/toolkit'

import favoritesReducer from './components/Favorites/favoritesSlice'

export default configureStore({
    reducer: {
        favorites:favoritesReducer,
    },
}); 