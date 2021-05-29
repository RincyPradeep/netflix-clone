import React from 'react'
import './NavBar.css';

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
            <div className="menu left-menu">
            <ul>
                <li>Home</li>
                <li>TV shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
            </ul>
            </div>
            <div className="menu right-menu">           
            <ul>
                <li>
                    <div className="search-field">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Titles,people,genres"></input>
                        <i class="fas fa-times"></i>
                    </div>
                </li>
                <li>CHILDREN</li>
                <li><i class="fas fa-gift"></i></li>
                <li><i class="fas fa-bell"></i></li>
            </ul>            
            </div>
            <div className="avatar-block">
                <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
                {/* <span><i class="fas fa-caret-down"></i></span> */}
            </div>
        </div>
    )
}

export default NavBar
