import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { API_KEY, Image_Link } from "../../data"


const Search = () => {

    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [resultsPage, setResultsPage] = useState(1)
    const [resultsNbPages, setResultsNbPages] = useState(0)

    useEffect(() => {

        setResultsPage(1)
        setResultsNbPages(0)
        if (search.length == 0)
            setResults([])
        else
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${search}&page=${resultsPage}&include_adult=false`).then((res) => {
                return res.json()
            }).then(async (res) => {
                await setResults(res.results)
                await setResultsNbPages(res.total_pages)
            })


    }, [search])


    const moreResults = async () => {

        let p = resultsPage


        if (p >= resultsNbPages)
            return
        else
            p += 1


        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${search}&page=${p}&include_adult=false`).then((res) => {
            return res.json()
        }).then(async (res) => {
            for ( let r of res.results )
                await setResults ( tab => [...tab, r])
        })
        await setResultsPage(p)
    }

    
    return (
        <div className="container">

            <div className="">
                <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className="" >
                {
                    results && results.map((val, i) =>
                        <div className="search-list" key={i}>
                            {val.media_type == "movie" &&

                                <div key={i} className="card">
                                    <div className="view">
                                        { val.poster_path && <img src={`${Image_Link}${val.poster_path}`} alt={val.title} /> }
                                        { val.poster_path == null && <img src="./Images/noPicture.jpg" alt={val.title} /> }
                                        
                                    </div>
                                    <div className="title">
                                        <Link to={`/film/${val.title}`} state={{ id: val.id }} >{val.title}</Link>
                                    </div>
                                </div>
                            }
                            {val.media_type == "tv" &&

                                <div key={i} className="card">
                                    <div className="view">
                                        { val.poster_path && <img src={`${Image_Link}${val.poster_path}`} alt={val.name} /> }
                                        
                                    </div>
                                    <div className="title">
                                        <Link to={`/serie/${val.name}`} state={{ id: val.id }} >{val.name}</Link>
                                    </div>
                                </div>
                            }


                        </div>
                    )
                }
            </div>
            {
                resultsNbPages > resultsPage && <button typeof="button" onClick={moreResults} >PLus de resultats</button>
            }

        </div>
    )

}

export default Search