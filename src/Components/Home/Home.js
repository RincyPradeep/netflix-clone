import React,{useState,useContext} from 'react'
import './Home.css'
import {Link, useHistory} from 'react-router-dom'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FirebaseContext } from '../../store/Context';

const Home = () => {

    const {firebase} = useContext(FirebaseContext)

    const history = useHistory();

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSignup =(e)=>{
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
            result.user.updateProfile({displayName:username}).then(()=>{
                firebase.firestore().collection("user").add({
                    id:result.user.uid,
                    username:username
                }).then(()=>{
                    history.push('/posts')
                })               
            })            
        })
    }

    return (
        <div className="home">           
            <div className="home-head">
                <img className="navbar__logo_home" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="logo" />                
                <div className="buttons">
                    <button className="language-btn"><LanguageIcon/> English <ExpandMoreIcon/></button>
                    <Link to="/login"><button className="signin-btn">Sign In</button></Link>
                </div>              
            </div>
            
                <div className="content">
                    <h1>Unlimited movies, TV <br/> shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="home-input">
                        <form onSubmit={handleSignup} className="home-input-form">
                            <input type="text" placeholder="Enter your name" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                            <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                            <button type="submit">
                                Get Started <ArrowForwardIosIcon />
                            </button>
                        </form>
                    </div>
                </div>           
        </div>
    )
}

export default Home
