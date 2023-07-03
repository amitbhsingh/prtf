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
        <Link to="https://www.linkedin.com/in/amitbhsingh/"target='_blank' rel='noreferrer'><LinkedInIcon /></Link>
        <Link to="https://github.com/amitbhsingh"target='_blank' rel='noreferrer'><GithubIcon /></Link>
        <Link to="mailto:amit.bh.singh@gmail.com"target='_blank' rel='noreferrer'><EmailIcon /></Link>
      </div>
      <p>&copy; 2023</p>
      <Link className='insta'></Link>
    </div>
  )
}

export default Footer
