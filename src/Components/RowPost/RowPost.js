import React,{useState,useEffect} from 'react'
import axios from '../../axios'
import { API_KEY, imgUrl } from '../../Constants/Constants';
import './RowPost.css'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies,setMovies] = useState([]);
    const [urlId,setUrlId] = useState('');

    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data.results)
            setMovies(response.data.results);
        }).catch(err=>{
            alert(err)
        })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleMovie = (id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length !== 0){
                setUrlId(response.data.results[0])
            }else{
                console.log("No results")
            }
        })
    }
    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                
                {
                    movies.map((movie,index)=>{
                        return(
                            <div>
                            <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'small-poster' : 'poster'} 
                                    src={props.isSmall ? imgUrl+movie.backdrop_path : imgUrl+movie.poster_path} alt="" key={index}/>
                            <p>{props.isSmall ? movie.title || movie.name : null}</p>
                            </div>
                        )
                    })
                }
            </div>
            { urlId && <Youtube videoId={urlId.key} opts={opts} /> }
        </div>
    )
}

export default RowPost
