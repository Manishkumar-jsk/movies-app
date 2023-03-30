import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Upcoming from '../MovieData/Upcoming';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-regular-svg-icons';
import {faStarHalfStroke} from '@fortawesome/free-regular-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
const Recommended = () => {
  return (
    <>
    <div>
        <div className='container'>
            <h2 className='pt-4'>Recommended Movies<span style={{"float":"right"}}><FontAwesomeIcon icon={faArrowRight} /></span></h2>
            <Carousel responsive={responsive}>
            {Upcoming.map((movie) => {
                    const {id,image,rating,title,genres,votes} = movie;
                    return (
                      <div className='' key={title}>
                      <div className="card m-2" style={{"width": "15rem"}}>
                          <img src={image} className="card-img-top" alt="..." height="340px" />
                          <ul className="list-group list-group-flush">
                              <li className="list-group-item"><FontAwesomeIcon icon={faStarHalfStroke} /> {rating} {votes}K votes</li>
                          </ul>
                      </div>
                      <h5 style={{"marginTop":"20px"}} className="m-2">{title}</h5>
                      <p className="m-2">{genres}</p>
                      <p></p>
                  </div>
                )
            })}
            </Carousel>
        </div>
    </div>
    </>
  )
}

export default Recommended

