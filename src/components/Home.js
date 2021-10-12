import { useEffect, useRef, useState } from "react"
import ICON_MOON from "../assets/images/icon-moon.svg"
import ICON_SUN from "../assets/images/icon-sun.svg"
import ICON_SEARCH from "../assets/images/icon-search.svg"

import UserDetails from "./UserDetails"

const Home = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [theme, setTheme] = useState('')
    const darkRef = useRef()

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }
    useEffect(() => {
         darkMode ? setTheme('dark') : setTheme('light')
    }, [darkMode])

    return (
        <section className={`content ${theme}`} ref={darkRef}>
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
                        <input type="text" placeholder="Search Github username"/>
                        <a href="#" className="btn"> Search </a>
                    </div>
                </div>
            {
                <UserDetails/>
            }
            </div>
        </section>
    )
}

export default Home