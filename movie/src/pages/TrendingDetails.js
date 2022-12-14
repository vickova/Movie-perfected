import React from 'react';
import { Link } from 'react-router-dom';


const TrendingDetails = ({trendingId, setTrendingId}) => {
  const image_base_url= 'https://image.tmdb.org/t/p/w500';
  return (
    <div className="moviedetails-card">
 			<img src={`${image_base_url}${trendingId.backdrop}`} alt={`${trendingId.original_title}`}/>
 			<div className="moviedetails-text">
 			<h3>{trendingId.original_title}</h3>
 			<p>{trendingId.overview}</p>
 			<p>{trendingId.release_date}</p>
			 <div className="youtube">
 				<button><Link to='/trending'>Back</Link></button>
			 </div>
 			</div>
 		</div>
  )
}


export default TrendingDetails