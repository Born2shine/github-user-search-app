import { useEffect, useState } from "react"
import ICON_MOON from "../assets/images/icon-moon.svg"
import ICON_SUN from "../assets/images/icon-sun.svg"
import ICON_SEARCH from "../assets/images/icon-search.svg"
import LOADER from "../assets/images/loader.gif"
import { BsGithub } from "react-icons/bs"

import UserDetails from "./UserDetails"
import axios from "axios"

const Home = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [theme, setTheme] = useState('')
    const [searching, setSearching] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState(null)

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }
    const getGithubUser = async () => {
        try {
           const res = await axios.get(`https://api.github.com/users/${username}`)
           setUserData(res.data)
           setSearching(false)
           setLoading(false)
        } catch (error) {
            console.log(error.message)
            setLoading(false)
            setError(error.message)
        }
    }
    const handleSearch = () => {
       if (!username) {
           setError('Please enter username')
       }else{
           setError('')
           setLoading(true)
           setSearching(true)
           getGithubUser()
           setLoading(true)
           setUsername('')
       }
    }

    useEffect(() => {
         darkMode ? setTheme('dark') : setTheme('light')
    }, [darkMode])

    return (
        <section className={`content ${theme}`}>
            <div className="main">
                <header>
                    <h2 className="title">devfinder</h2>
                    <nav>
                        <h1 className="color-title">{darkMode ? 'LIGHT' : 'DARK'}</h1>
                        <div className="toggle-theme" onClick={toggleTheme}>
                            <img src={darkMode ? ICON_SUN : ICON_MOON} alt="toggle-icon" />
                        </div>
                    </nav>
                </header>
                <div className="search-user">
                    <div className="search-input">
                        <div className="search-icon">
                            
                            <img src={ICON_SEARCH} alt="search-icon" />
                        </div>
                        <input type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Search Github username"/>
                        <button onClick={handleSearch} className="btn"> Search </button>
                    </div>
                </div>
                {

                }
            {
                searching && (
                    <div className="placeholder">
                        <div className="icon">
                            <BsGithub/>
                        </div>
                        GiTHUB FINDER
                        {
                            loading && (
                                <div className="loader">
                                    <img src={LOADER} alt="loader" />
                                </div>
                            )
                        }
                        {
                            error && (
                                <div className="error">
                                    {error === 'Request failed with status code 404' ? 'Not Found': error}
                                </div>
                            )
                        }
                    </div>
                )
            }
            {!searching && !loading && userData &&
                <UserDetails user={userData}/>
            }
            </div>
        </section>
    )
}

export default Home