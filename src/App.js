import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost'
import { originals, action, comedy, trending, horror, romance, documentary } from './urls'

function App() {
    return (
        <div>
            <NavBar />
            <Banner />
            <RowPost url={originals} title="Netflix Originals" />
            <RowPost url={action} title="Action Movies" isSmall />
            <RowPost url={comedy} title="Comedy Movies" isSmall />
            <RowPost url={trending} title="Trending" isSmall />
            <RowPost url={horror} title="Horror" isSmall />
            <RowPost url={romance} title="Romance" isSmall />
            <RowPost url={documentary} title="Documentaries" isSmall />
            <Footer />
        </div>
    )
}

export default App
