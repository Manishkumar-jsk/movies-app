import React,{useEffect,useState} from 'react';
import {fetchData,movieOptions} from '../utills/fetchData.js';


const Movies = ({movies,setMovies}) => {
    useEffect(() => {
        const fetchMoviesData = async () => {
            let moviesData = await fetchData('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page=6',movieOptions);
            console.log(moviesData.results)
        }
        fetchMoviesData()
    },[])
  return (
    <div className='container'>
       {/*<div className='row my-4'>
        {movies.map(movie => {
            const {image,titleOriginal,rating,index,_id} = movie;
            return (
                <div className='col-md-3' key={_id}>
                    <div className='card m-2' style={{"width":"14rem"}}>
                        <img src={image} className="card-img-top" alt={titleOriginal} style={{"height":"350px"}}/>
                        <div className="card-body">
                        <p className="card-text" style={{"fontSize":"1.2rem"}}><FontAwesomeIcon icon={faStarHalfStroke} /> {rating} {index}K votes</p>
                        </div>
                    </div>
                    <h5 style={{"marginLeft":"10px"}}>{titleOriginal}</h5>
                    <p style={{"marginLeft":"10px"}}>Drama/Romantic</p>
                </div>
        )
       })}
    </div>*/}
    </div>
  )
}

export default Movies
