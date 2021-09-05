
import React from 'react'
import './Movielist.css';
import MovieCard from '../Movie/MovieCard';





const Movielist = ({Data , abc,cba, }) => {
    console.log(abc)
    return (
        <div>
            
               
            {Data.filter((el)=>el.name.toUpperCase().includes(abc.toUpperCase()))
            .filter((el)=>el.rating>=cba)
            .map((el)=>(
            <MovieCard Movie={el} key={el.id}/>
            ))}
        </div>
    )


            
}

export default Movielist;