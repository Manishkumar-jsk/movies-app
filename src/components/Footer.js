import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTwitter,faYoutube,faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    const mystyle = {
        backgroundColor:"#262626",
        height:"250px"
    }
  return (
    <div style={mystyle}>
      <h1 className='text-center' style={{"color":"white","paddingTop":"50px"}}>MyShow</h1>
        <div className="footer-icons text-center" style={{"marginLeft":"0px","marginTop":"25px"}}>
            <a style={{"color":"white","padding":"5px"}} href=''><FontAwesomeIcon icon={faEnvelope} style={{"fontSize":"35px"}}/></a>
            <a style={{"color":"white","padding":"5px"}}><FontAwesomeIcon icon={faFacebook} style={{"fontSize":"35px"}} /></a>
            <a style={{"color":"white","padding":"5px"}}><FontAwesomeIcon icon={faInstagram} style={{"fontSize":"35px"}} /></a>
            <a style={{"color":"white","padding":"5px"}}><FontAwesomeIcon icon={faTwitter} style={{"fontSize":"35px"}} /></a>
            <a style={{"color":"white","padding":"5px"}}><FontAwesomeIcon icon={faYoutube} style={{"fontSize":"35px"}} /></a>
            <a style={{"color":"white","padding":"5px"}}><FontAwesomeIcon icon={faLinkedin} style={{"fontSize":"35px"}} /></a>
        </div>
        <p style={{"color":"#cccccc","textAlign":"center","paddingTop":"20px"}}>Copyright 2023 &copy; Design by Manish Kumar</p>
    </div>
  )
}

export default Footer