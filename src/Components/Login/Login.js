import React,{useContext,useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import { FirebaseContext } from '../../store/Context';
import Loader from '../Loader/Loader';


const Login = () => {

    const {firebase} = useContext(FirebaseContext)
    const history = useHistory();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] =useState(false)

    const handleSignIn =(e) =>{
        e.preventDefault();
        setLoading(true)
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            setLoading(false)
            history.push('/posts')
        }).catch((err)=>{
            alert("Invalid username or password")
            setLoading(false)
        })
    }

    return (
        <div className="login">
            {loading && <Loader />}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" className="navbar__logo_home" />
            <div className="login-content-wrapper">
                <div className="login-content">
                    <h1>Sign In</h1>
                    <form onSubmit={handleSignIn}>
                        <input className="form-element" type="email" placeholder='Email or phone number' onChange={(e)=>setEmail(e.target.value)} required/>
                        <input className="form-element" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required />
                        <button className="form-element" type="submit">Sign In</button>
                    </form>
                    <div className="login-sub1">
                        <div className="remember-me">
                            <input type="checkbox" name="remember" value="false" id="remember" />
                            <label for="remember" >Remember me</label>
                        </div>
                        <Link to="#">Need help?</Link>
                    </div>
                    <div className="login-sub2">
                        <Link to="#" className="facebook"><FacebookIcon color="primary" /> <span className="facebook-text">Login with Facebook</span></Link>
                        <p>New to Netflix?<Link to="/" className="signup"> Sign up now.</Link></p>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></p>
                    </div>
                </div>              
            </div>           
        </div>
    )
}

export default Login
