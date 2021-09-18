import React from 'react'
import {Link} from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h1>Lost your way?</h1>
            <h4>Sorry, we can't find that page. You'll find lots to explore on the home page.</h4>
            <Link to="/" className="page-not-found-btn">Netflix Home</Link>
        </div>
    )
}

export default PageNotFound
