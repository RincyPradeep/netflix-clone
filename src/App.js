import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost'
import { originals, action } from './urls'

function App() {
    return (
        <div>
            <NavBar />
            <Banner />
            <RowPost url={originals} title="Netflix Originals" />
            <RowPost url={action} title="Action Movies" isSmall />
        </div>
    )
}

export default App
