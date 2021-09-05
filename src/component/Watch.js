import React from 'react'
import MovieCard from './Movie/MovieCard'

const Watch = ({location:{state:{movie}},history,}) => {
    // console.log(movie)
    return (
        <div>
        {/* <img src={state.image} alt={state.titre}/>
         <h1>{state.titre}</h1>    
        <h2>{state.type}</h2>
        <h3>{state.description}</h3> */}
        
        {/* <iframe width={560} height={315} src={state.trailer} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>        
        <iframe title="YouTube video player">{state.trailer}</iframe> */}
        <MovieCard  Movie={movie}/>
        <div>{movie.trailer? (
        <iframe
         width="560" 
         height="315" 
         src={movie.trailer}
         title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; 
         autoplay; 
         clipboard-write; 
         encrypted-media; 
         gyroscope; 
         picture-in-picture" 
         allowfullscreen>
         </iframe>) : (<h2>There's no trailer here!</h2>)}
         </div>
    
        <button onClick={()=>history.goBack()}>Go bacK</button>
        </div>
    )
}

export default Watch
