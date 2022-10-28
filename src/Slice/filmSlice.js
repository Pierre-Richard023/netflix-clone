import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_KEY } from '../data'




export const fetchFilmSelected = createAsyncThunk('films/fetchFilmSelected', (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`).then((res) => {
        return res.json()
    }).then(res => res)
})

export const fetchPopularFilms = createAsyncThunk('films/fetchPopularFilms', () => {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
        return res.json()
    }).then(res => res.results)
})

export const fetchLastestFilms = createAsyncThunk('films/fetchLastestFilms', () => {
    return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
        return res.json()
    }).then(res => res.results)
})

export const fetchAdventureFilms = createAsyncThunk('films/fetchAdventureFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=12`).then((res) => {
        return res.json()
    }).then(res => res.results)
})

export const fetchActionFilms = createAsyncThunk('films/fetchActionFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=28`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchDocumentaryFilms = createAsyncThunk('films/fetchDocumentaryFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=99`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchHorrorFilms = createAsyncThunk('films/fetchHorrorFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=27`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchCrimeFilms = createAsyncThunk('films/fetchCrimeFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=80`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchAnimationFilms = createAsyncThunk('films/fetchAnimationFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=16`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchComedyFilms = createAsyncThunk('films/fetchComedyFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchDramaFilms = createAsyncThunk('films/fetchDramaFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=18`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchRomanceFilms = createAsyncThunk('films/fetchRomanceFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchMusicFilms = createAsyncThunk('films/fetchMusicFilms', () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10402`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})


export const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        filmSelected: {},
        loadingFilmSelect: false,
        errorFilmSelect: null,  
        popular: [],
        loadingPopular: false,
        errorPopular: null,
        latest:[],
        loadingLatest: false,
        errorLatest: null,
        adventure: [],
        loadingAdventure: false,
        errorAdventure: null,
        crime: [],
        loadingCrime: false,
        errorCrime: null,
        horror: [],
        loadingHorror: false,
        errorHorror: null,
        documentary: [],
        loadingDocumentary: false,
        errorDocumentary: null,
        actions: [],
        loadingAction: false,
        errorAction: null,
        animation: [],
        loadingAnimation: false,
        errorAnimation: null,
        comedy: [],
        loadingComedy: false,
        errorComedy: null,
        drama: [],
        loadingDrama: false,
        errorDrama: null,
        romance: [],
        loadingRomance: false,
        errorRomance: null,
        music: [],
        loadingMusic: false,
        errorMusic: null,
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

        // Film selectionné
        builder.addCase(fetchFilmSelected.pending, (state) => {
            state.loadingPopular = true
        })
        builder.addCase(fetchFilmSelected.fulfilled, (state, action) => {
            state.loadingFilmSelect = false
            state.filmSelected = action.payload
            state.errorFilmSelect = ''
        })
        builder.addCase(fetchFilmSelected.rejected, (state, action) => {
            state.loadingFilmSelect = false
            state.filmSelected = []
            state.errorFilmSelect = action.error.message
        })

        // Popular
        builder.addCase(fetchPopularFilms.pending, (state) => {
            state.loadingPopular = true
        })
        builder.addCase(fetchPopularFilms.fulfilled, (state, action) => {
            state.loadingPopular = false
            state.popular = action.payload
            state.errorPopular = ''
        })
        builder.addCase(fetchPopularFilms.rejected, (state, action) => {
            state.loadingPopular = false
            state.popular = []
            state.errorPopular = action.error.message
        })

        // lastest
        builder.addCase(fetchLastestFilms.pending, (state) => {
            state.loadingLatest = true
        })
        builder.addCase(fetchLastestFilms.fulfilled, (state, action) => {
            state.loadingLatest = false
            state.latest = action.payload
            state.errorLatest = ''
        })
        builder.addCase(fetchLastestFilms.rejected, (state, action) => {
            state.loadingLatest = false
            state.latest = []
            state.errorLatest = action.error.message
        })


        // Genre : Adventure
        builder.addCase(fetchAdventureFilms.pending, (state) => {
            state.loadingAdventure = true
        })
        builder.addCase(fetchAdventureFilms.fulfilled, (state, action) => {
            state.loadingAdventure = false
            state.adventure = action.payload
            state.errorAdventure = ''
        })
        builder.addCase(fetchAdventureFilms.rejected, (state, action) => {
            state.loadingAdventure = false
            state.adventure = []
            state.errorAdventure = action.error.message
        })

        // Genre : Documentary
        builder.addCase(fetchDocumentaryFilms.pending, (state) => {
            state.loadingDocumentary = true
        })
        builder.addCase(fetchDocumentaryFilms.fulfilled, (state, action) => {
            state.loadingDocumentary = false
            state.documentary = action.payload
            state.errorDocumentary = ''
        })
        builder.addCase(fetchDocumentaryFilms.rejected, (state, action) => {
            state.loadingDocumentary = false
            state.documentary = []
            state.errorDocumentary = action.error.message
        })

        // Genre : Crime
        builder.addCase(fetchCrimeFilms.pending, (state) => {
            state.loadingCrime = true
        })
        builder.addCase(fetchCrimeFilms.fulfilled, (state, action) => {
            state.loadingCrime = false
            state.crime = action.payload
            state.errorCrime = ''
        })
        builder.addCase(fetchCrimeFilms.rejected, (state, action) => {
            state.loadingCrime = false
            state.crime = []
            state.errorCrime = action.error.message
        })

        // Genre : Horror
        builder.addCase(fetchHorrorFilms.pending, (state) => {
            state.loadingHorror = true
        })
        builder.addCase(fetchHorrorFilms.fulfilled, (state, action) => {
            state.loadingHorror = false
            state.horror = action.payload
            state.errorHorror = ''
        })
        builder.addCase(fetchHorrorFilms.rejected, (state, action) => {
            state.loadingCrime = false
            state.horror = []
            state.errorHorror = action.error.message
        })

        // Genre : Action
        builder.addCase(fetchActionFilms.pending, (state) => {
            state.loadingAction = true
        })
        builder.addCase(fetchActionFilms.fulfilled, (state, action) => {
            state.loadingAction = false
            state.actions = action.payload
            state.errorAction = ''
        })
        builder.addCase(fetchActionFilms.rejected, (state, action) => {
            state.loadingAction = false
            state.actions = []
            state.errorAction = action.error.message
        })

        // Genre : Animation 
        builder.addCase(fetchAnimationFilms.pending, (state) => {
            state.loadingAnimation = true
        })
        builder.addCase(fetchAnimationFilms.fulfilled, (state, action) => {
            state.loadingAnimation = false
            state.animation = action.payload
            state.errorAnimation = ''
        })
        builder.addCase(fetchAnimationFilms.rejected, (state, action) => {
            state.loadingAnimation = false
            state.animation = []
            state.errorAnimation = action.error.message
        })

        // Genre : Comedy
        builder.addCase(fetchComedyFilms.pending, (state) => {
            state.loadingComedy = true
        })
        builder.addCase(fetchComedyFilms.fulfilled, (state, action) => {
            state.loadingComedy = false
            state.comedy = action.payload
            state.errorComedy = ''
        })
        builder.addCase(fetchComedyFilms.rejected, (state, action) => {
            state.loadingComedy = false
            state.comedy = []
            state.errorComedy = action.error.message
        })

        //Genre : Drama
        builder.addCase(fetchDramaFilms.pending, (state) => {
            state.loadingDrama = true
        })
        builder.addCase(fetchDramaFilms.fulfilled, (state, action) => {
            state.loadingDrama = false
            state.drama = action.payload
            state.errorDrama = ''
        })
        builder.addCase(fetchDramaFilms.rejected, (state, action) => {
            state.loadingDrama = false
            state.drama = []
            state.errorDrama = action.error.message
        })

        //Genre : Romance
        builder.addCase(fetchRomanceFilms.pending, (state) => {
            state.loadingRomance = true
        })
        builder.addCase(fetchRomanceFilms.fulfilled, (state, action) => {
            state.loadingRomance = false
            state.romance = action.payload
            state.errorRomance = ''
        })
        builder.addCase(fetchRomanceFilms.rejected, (state, action) => {
            state.loadingRomance = false
            state.romance = []
            state.errorRomance = action.error.message
        })

        // Genre : Music
        builder.addCase(fetchMusicFilms.pending, (state) => {
            state.loadingMusic = true
        })
        builder.addCase(fetchMusicFilms.fulfilled, (state, action) => {
            state.loadingMusic = false
            state.music = action.payload
            state.errorMusic = ''
        })
        builder.addCase(fetchMusicFilms.rejected, (state, action) => {
            state.loadingMusic = false
            state.music = []
            state.errorMusic = action.error.message
        })




    }
})


export const { initPopularFilms, initGenresFilms } = filmsSlice.actions



export default filmsSlice.reducer


