import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Upcoming from '../MovieData/Upcoming';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-regular-svg-icons';
import {faStarHalfStroke} from '@fortawesome/free-regular-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
const UpcomingMov = () => {
    const myStyle = {
        backgroundColor:" #1a1a1a",
        color:"white"
    }
  return (
    <>
    <div style={myStyle}>
        <div className='container'>
            <h2 className='pt-4'>Upcoming Movies<span style={{"float":"right"}}><FontAwesomeIcon icon={faArrowRight} /></span></h2>
            <Carousel responsive={responsive}>
            {Upcoming.map((movie) => {
                    const {id,image,title,genres,release,likes} = movie;
                    return (
                      <div className='' key={title}>
                      <div className="card m-2" style={{"width": "15rem"}}>
                        <img src={image} className="card-img-top" alt="..." height="300px" />
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{release}</li>
                            </ul>
                      </div>
                        <h6 style={{"marginTop":"20px"}} className="m-2">{title}</h6>
                        <p className="m-2">{genres} <br></br><FontAwesomeIcon icon={faThumbsUp} /> {likes} likes</p>
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

export default UpcomingMov
