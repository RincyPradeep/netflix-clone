import React, { useEffect, useState,useContext } from 'react'
import "./NavBar.css"
import {Link, useHistory} from 'react-router-dom'
import {AuthContext, FirebaseContext} from '../../store/Context'

function NavBar() {

    const {user} =useContext(AuthContext)
    const {firebase} = useContext(FirebaseContext)
    const history = useHistory();

    const [show, handleShow] = useState(false);
    const [toggle, setToggle] = useState(false);

    const checkToggle = () => {
        if (toggle) {
            setToggle(false);
        } else {
            setToggle(true)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll",null);
        }
    }, [])

    const handleLogout = () =>{
        firebase.auth().signOut();
        history.push('/login')
    }

    return (
        <div className={`navbar ${show && "nav__black"}`}>
            {/* -------left navbar-------------- */}
            <div className="left">
                <img className="navbar__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="logo" />
                <nav className="browse_nav" onClick={checkToggle}>
                    <ul>
                        <li className="browse"><a>Browse</a></li>
                        <li className="browse">{toggle ? <i className="fas fa-sort-up"></i> : <i class="fas fa-caret-down"></i>}</li>
                    </ul>
                </nav>

                <div className="left__nav">
                    <nav className={toggle ? "nav_active" : "nav_notactive"}>
                        <ul>
                            <li className="active hide__left_navlinks"><Link to="#">Home</Link></li>
                            <li className="hide__left_navlinks"><Link to="#">TV Shows</Link></li>
                            <li className="hide__left_navlinks"><Link to="#">Movies</Link></li>
                            <li className="hide__left_navlinks"><Link to="#">New & Popular</Link></li>
                            <li className="hide__left_navlinks"><Link to="#">My List</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* ----------right navbar------------- */}
            <div className="right">
                <div className="right__nav">
                    <nav>
                        <ul>
                            <li><i className="fas fa-search"></i></li>
                            <li className="hide__right_navlinks" >CHILDREN</li>
                            <li className="hide__right_navlinks" ><i className="fas fa-gift"></i></li>
                            <li className="hide__right_navlinks" ><i className="fas fa-bell"></i></li>
                            <li>                               
                                    <img className="navbar__avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
                                    <span style={{color:"#fff"}}>
                                        {user && `Hi,${user.displayName}` }
                                    </span>                                
                            </li>
                            <li className="logout" >
                            {user && <span className="logout" onClick={()=>{
                                            firebase.auth().signOut();
                                            history.push('/login')
                            }}>Logout</span>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar