import { createSlice } from '@reduxjs/toolkit'

export const seriesSlice = createSlice({
    name:'favorites',
    initialState: {
        films: [],
        series: [],
    },
    reducers: {
        addSerie: (state,action) =>{
            state.series=[...state.series,action.payload]
        },
        removeSerie: (state,action) =>{
            state.series = state.series.filter(item => item.id !== action.payload.id)

        },
        addFilm: (state,action) =>{
            state.films=[...state.films,action.payload]

        },
        removeFilm:(state,action) =>{
            state.films = state.films.filter(item => item.id !== action.payload.id)
        },
    },
})


export const { addSerie, removeSerie, addFilm , removeFilm } = seriesSlice.actions


export const selectFavoritesFilm = (state) => state.favorites.films
export const selectFavoritesSerie = (state) => state.favorites.series

export default seriesSlice.reducer
