
import React from 'react';
import './MovieCard.css';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom"

const MovieCard = ({Movie}) => {
	console.log(Movie)
    
    return (
        <div>
           <div className="wrapper">
	<div className="main_card">
		<div className="card_left">
			<div className="card_datails">
				<h1>{Movie.name}</h1>
				<div className="card_cat">
					<p className="PG">PG - 13</p>
					<p className="year">{Movie.date}</p>
					<p className="genre">{Movie.type} </p>
					<p className="time">2h 28m</p>
				</div>
				<p className="disc">{Movie.description}</p>
				<Link to={{
					pathname:"/watch",
					// state:{titre:Movie.name, date:Movie.date, type:Movie.type, trailer:Movie.trailer, image:Movie.image,description:Movie.description},
					// state: {movie:Movie},
					state:{movie:Movie}
					
				}}
				>
				Description
				 </Link>
				<Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating name="read-only" value={Movie.rating} readOnly />
      </Box>
			</div>
		</div>
		<div className="card_right">
			<div className="img_container">
				<img src={Movie.image} alt=""/>
				</div>
				<div className="play_btn">
					<a href={Movie.deails} target="_blank">
						<i className="fas fa-play-circle"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
    </div>
        
    )
       
    
}

export default MovieCard
