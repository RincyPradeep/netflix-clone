import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="social-media-icons">
                <Link to="#"><i className="fab fa-facebook-square"></i></Link>
                <Link to="#"><i className="fab fa-instagram-square"></i></Link>
                <Link to="#"><i className="fab fa-twitter-square"></i></Link>
                <Link to="#"><i className="fab fa-youtube-square"></i></Link>
            </div>
            <div className="list-items">
                <div className="column">
                    <Link to="#">Audio and Subtitles</Link>
                    <Link to="#">Media Centre</Link>
                    <Link to="#">Privacy</Link>
                    <Link to="#">Contact Us</Link>
                </div>
                <div className="column">
                    <Link to="#">Audio Description</Link>
                    <Link to="#">Investor Relations</Link>
                    <Link to="#">Legal Notices</Link>
                </div>
                <div className="column">
                    <Link to="#">Help Centre</Link>
                    <Link to="#">Jobs</Link>
                    <Link to="#">Cookie Preferences</Link>
                </div>
                <div className="column">
                    <Link to="#">Gift Cards</Link>
                    <Link to="#">Terms of Use</Link>
                    <Link to="#">Corporate Information</Link>
                </div>
            </div>
            <div className="service-button">
                <button>Service Code</button>
            </div>
            <div className="copyright">
                <p>copyright@RincyPradeep2021</p>
            </div>
        </div>
    )
}
export default Footer
