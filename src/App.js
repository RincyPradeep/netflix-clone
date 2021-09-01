import React,{useContext,useEffect} from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost'
import { originals, action, comedy, trending, horror, romance, documentary } from './urls'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import {FirebaseContext,AuthContext} from './store/Context'

function App() {
    const {setUser} = useContext(AuthContext)
    const {firebase} = useContext(FirebaseContext)

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            setUser(user)
        })
    },[])

    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                
                <Route exact path='/posts'>
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
                </Route>                       
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
