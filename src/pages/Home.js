import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Home.css'
function Home(){
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, This is Amit</h2>
        <div className='prompt'><p>A software developer with a passion for helping,learning and creating</p>
        <LinkedInIcon />
        <GithubIcon />
        <EmailIcon />
        
        </div>

      </div>
      <h1> S  k  i  l  l  s</h1>
      <ul className='list'>
        <li className='item'>
          <h2>Front-End</h2>
          <span>HTML, CSS, Javascript & ReactJS</span>
        </li>
        <li className='item'>
          <h2>Back-End</h2>
          <span>MongoDB, MySQL, AWS, GCP, MS SQL  </span>
        </li>
        <li className='item'>
          <h2>Developer Tools</h2>
          <span>Github, Bash, GIT</span>
        </li>
        <li className='item'>
          <h2>Languages</h2>
          <span>Javascript, R, Python, Typescript</span>
        </li>
      </ul>
    </div>
  )
}

export default Home