import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_KEY } from '../data'


export const fetchPopularFilms = createAsyncThunk('films/fetchPopularFilms', () => {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
        return res.json()
    }).then(res => res.results )
})

export const fetchActionFilms = createAsyncThunk('films/fetchActionFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=Action`)
    .then((res) => {
        return res.json()
    })
    .then(res => res.results )
})

export const fetchAnimationFilms = createAsyncThunk('films/fetchAnimationFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=animation`)
    .then((res) => {
        return res.json()
    })
    .then(res => res.results )
})

export const fetchComedyFilms = createAsyncThunk('films/fetchComedyFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35`)
    .then((res) => {
        return res.json()
    })
    .then(res => res.results )
})

export const fetchDramaFilms = createAsyncThunk('films/fetchDramaFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=18`)
    .then((res) => {
        return res.json()
    })
    .then(res => res.results )
})

export const fetchRomanceFilms = createAsyncThunk('films/fetchRomanceFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=romance`)
    .then((res) => {
        return res.json()
    })
    .then(res => res.results )
})

export const fetchMusicFilms = createAsyncThunk('films/fetchMusicFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=music`)
    .then((res) => {
        return res.json()
    })
    .then(res => res.results )
})


export const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        popular: [],
        loadingPopular: false,
        errorPopular:null,
        actions: [],
        loadingAction: false,
        errorAction:null,
        animation: [],
        loadingAnimation: false,
        errorAnimation:null,
        comedy: [],
        loadingComedy: false,
        errorComedy:null,
        drama: [],
        loadingDrama: false,
        errorDrama:null,
        romance: [],
        loadingRomance: false,
        errorRomance:null,
        music: [],
        loadingMusic: false,
        errorMusic:null,
    },
    reducers: {
        initAllFilms: async (state, action) => {
            state.films = action.payload
        },
        initPopularFilms: (state, action) => {
            state.popular = action.payload
        }
    },
    extraReducers: (builder) => {

        // Genre : Popular
        builder.addCase(fetchPopularFilms.pending,(state)=>{
            state.loadingPopular=true
        })
        builder.addCase(fetchPopularFilms.fulfilled,(state,action)=>{
            state.loadingPopular=false
            state.popular=action.payload
            state.errorPopular=''
        })
        builder.addCase(fetchPopularFilms.rejected,(state,action) => {
            state.loadingPopular=false
            state.popular=[]
            state.errorPopular=action.error.message
        })

        // Genre : Action
        builder.addCase(fetchActionFilms.pending,(state)=>{
            state.loadingAction=true
        })
        builder.addCase(fetchActionFilms.fulfilled,(state,action)=>{
            state.loadingAction=false
            state.actions=action.payload
            state.errorAction=''
        })
        builder.addCase(fetchActionFilms.rejected,(state,action) => {
            state.loadingAction=false
            state.actions=[]
            state.errorAction=action.error.message
        })

        // Genre : Animation 
        builder.addCase(fetchAnimationFilms.pending,(state)=>{
            state.loadingAnimation=true
        })
        builder.addCase(fetchAnimationFilms.fulfilled,(state,action)=>{
            state.loadingAnimation=false
            state.animation=action.payload
            state.errorAnimation=''
        })
        builder.addCase(fetchAnimationFilms.rejected,(state,action) => {
            state.loadingAnimation=false
            state.animation=[]
            state.errorAnimation=action.error.message
        })

        // Genre : Comedy
        builder.addCase(fetchComedyFilms.pending,(state)=>{
            state.loadingComedy=true
        })
        builder.addCase(fetchComedyFilms.fulfilled,(state,action)=>{
            state.loadingComedy=false
            state.comedy=action.payload
            state.errorComedy=''
        })
        builder.addCase(fetchComedyFilms.rejected,(state,action) => {
            state.loadingComedy=false
            state.comedy=[]
            state.errorComedy=action.error.message
        })

        //Genre : Drama
        builder.addCase(fetchDramaFilms.pending,(state)=>{
            state.loadingDrama=true
        })
        builder.addCase(fetchDramaFilms.fulfilled,(state,action)=>{
            state.loadingDrama=false
            state.drama=action.payload
            state.errorDrama=''
        })
        builder.addCase(fetchDramaFilms.rejected,(state,action) => {
            state.loadingDrama=false
            state.drama=[]
            state.errorDrama=action.error.message
        })

        //Genre : Romance
        builder.addCase(fetchRomanceFilms.pending,(state)=>{
            state.loadingRomance=true
        })
        builder.addCase(fetchRomanceFilms.fulfilled,(state,action)=>{
            state.loadingRomance=false
            state.romance=action.payload
            state.errorRomance=''
        })
        builder.addCase(fetchRomanceFilms.rejected,(state,action) => {
            state.loadingRomance=false
            state.romance=[]
            state.errorRomance=action.error.message
        })

        // Genre : Music
        builder.addCase(fetchMusicFilms.pending,(state)=>{
            state.loadingMusic=true
        })
        builder.addCase(fetchMusicFilms.fulfilled,(state,action)=>{
            state.loadingMusic=false
            state.music=action.payload
            state.errorMusic=''
        })
        builder.addCase(fetchMusicFilms.rejected,(state,action) => {
            state.loadingMusic=false
            state.music=[]
            state.errorMusic=action.error.message
        })




    }
})


export const { initPopularFilms, initGenresFilms } = filmsSlice.actions



export default filmsSlice.reducer


