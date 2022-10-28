import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_KEY } from '../data'


export const fetchSerieSelected = createAsyncThunk('series/fetchSerieSelected', (id) => {
    return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`).then((res) => {
        return res.json()
    }).then( res => res )
})

export const fetchPopularSeries = createAsyncThunk('series/fetchPopularSeries', () => {
    return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
        return res.json()
    }).then(res => res.results)
})

export const fetchLastestSeries = createAsyncThunk('films/fetchLastestSeries', () => {
    return fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
        return res.json()
    }).then(res => res.results)
})

export const fetchActionSeries = createAsyncThunk('series/fetchActionSeries', () => {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10759`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchAnimationSeries = createAsyncThunk('series/fetchAnimationSeries', () => {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=16`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchComedySeries = createAsyncThunk('series/fetchComedySeries', () => {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchDramaSeries = createAsyncThunk('series/fetchDramaSeries', () => {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=18`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchDocumentarySeries = createAsyncThunk('series/fetchDocumentarySeries', () => {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=99`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})

export const fetchMysterySeries = createAsyncThunk('series/fetchMysterySeries', () => {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=9648`)
        .then((res) => {
            return res.json()
        })
        .then(res => res.results)
})


export const seriesSlice = createSlice({
    name: 'series',
    initialState: {
        serieSelected: {},
        loadingSerieSelect: false,
        errorSerieSelect: null,
        popular: [],
        loadingPopular: false,
        errorPopular: null,
        latest:[],
        loadingLatest: false,
        errorLatest: null,
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
        documentary: [],
        loadingDocumentary: false,
        errorDocumentary: null,
        mystery: [],
        loadingMystery: false,
        errorMystery: null,
    },
    reducers: {
        initAllSeries: async (state, action) => {
            state.series = action.payload
        },
        initPopularSeries: (state, action) => {
            state.popular = action.payload
        }
    },
    extraReducers: (builder) => {

        // Serie selectionné
        builder.addCase(fetchSerieSelected.pending, (state) => {
            state.loadingPopular = true
        })
        builder.addCase(fetchSerieSelected.fulfilled, (state, action) => {
            state.loadingSerieSelect = false
            state.serieSelected = action.payload
            state.errorSerieSelect = ''
        })
        builder.addCase(fetchSerieSelected.rejected, (state, action) => {
            state.loadingSerieSelect = false
            state.serieSelected = []
            state.errorSerieSelect = action.error.message
        })

        // Genre : Popular
        builder.addCase(fetchPopularSeries.pending, (state) => {
            state.loadingPopular = true
        })
        builder.addCase(fetchPopularSeries.fulfilled, (state, action) => {
            state.loadingPopular = false
            state.popular = action.payload
            state.errorPopular = ''
        })
        builder.addCase(fetchPopularSeries.rejected, (state, action) => {
            state.loadingPopular = false
            state.popular = []
            state.errorPopular = action.error.message
        })

        // lastest
        builder.addCase(fetchLastestSeries.pending, (state) => {
            state.loadingLatest = true
        })
        builder.addCase(fetchLastestSeries.fulfilled, (state, action) => {
            state.loadingLatest = false
            state.latest = action.payload
            state.errorLatest = ''
        })
        builder.addCase(fetchLastestSeries.rejected, (state, action) => {
            state.loadingLatest = false
            state.latest = []
            state.errorLatest = action.error.message
        })

        // Genre : Action
        builder.addCase(fetchActionSeries.pending, (state) => {
            state.loadingAction = true
        })
        builder.addCase(fetchActionSeries.fulfilled, (state, action) => {
            state.loadingAction = false
            state.actions = action.payload
            state.errorAction = ''
        })
        builder.addCase(fetchActionSeries.rejected, (state, action) => {
            state.loadingAction = false
            state.actions = []
            state.errorAction = action.error.message
        })

        // Genre : Animation 
        builder.addCase(fetchAnimationSeries.pending, (state) => {
            state.loadingAnimation = true
        })
        builder.addCase(fetchAnimationSeries.fulfilled, (state, action) => {
            state.loadingAnimation = false
            state.animation = action.payload
            state.errorAnimation = ''
        })
        builder.addCase(fetchAnimationSeries.rejected, (state, action) => {
            state.loadingAnimation = false
            state.animation = []
            state.errorAnimation = action.error.message
        })

        // Genre : Comedy
        builder.addCase(fetchComedySeries.pending, (state) => {
            state.loadingComedy = true
        })
        builder.addCase(fetchComedySeries.fulfilled, (state, action) => {
            state.loadingComedy = false
            state.comedy = action.payload
            state.errorComedy = ''
        })
        builder.addCase(fetchComedySeries.rejected, (state, action) => {
            state.loadingComedy = false
            state.comedy = []
            state.errorComedy = action.error.message
        })

        //Genre : Drama
        builder.addCase(fetchDramaSeries.pending, (state) => {
            state.loadingDrama = true
        })
        builder.addCase(fetchDramaSeries.fulfilled, (state, action) => {
            state.loadingDrama = false
            state.drama = action.payload
            state.errorDrama = ''
        })
        builder.addCase(fetchDramaSeries.rejected, (state, action) => {
            state.loadingDrama = false
            state.drama = []
            state.errorDrama = action.error.message
        })

        //Genre : Documentary
        builder.addCase(fetchDocumentarySeries.pending, (state) => {
            state.loadingDocumentary = true
        })
        builder.addCase(fetchDocumentarySeries.fulfilled, (state, action) => {
            state.loadingDocumentary = false
            state.documentary = action.payload
            state.errorDocumentary = ''
        })
        builder.addCase(fetchDocumentarySeries.rejected, (state, action) => {
            state.loadingDocumentary = false
            state.documentary = []
            state.errorDocumentary = action.error.message
        })

        // Genre : Mystery
        builder.addCase(fetchMysterySeries.pending, (state) => {
            state.loadingMystery = true
        })
        builder.addCase(fetchMysterySeries.fulfilled, (state, action) => {
            state.loadingMystery = false
            state.mystery = action.payload
            state.errorMystery = ''
        })
        builder.addCase(fetchMysterySeries.rejected, (state, action) => {
            state.loadingMystery = false
            state.mystery = []
            state.errorMystery = action.error.message
        })




    }
})


export const { initPopularSeries, initGenresSeries } = seriesSlice.actions



export default seriesSlice.reducer


