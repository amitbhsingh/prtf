import React from 'react'
import { Link } from 'react-router-dom'
// import InstagramIcon from '@material-ui/icons/Instagram'
// import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        {/* <InstagramIcon />
        <TwitterIcon /> */}
        <LinkedInIcon />
        <GithubIcon /> 
        <EmailIcon />
      </div>
      <p>&copy; 2023</p>
      <Link className='insta'></Link>
    </div>
  )
}

export default Footer