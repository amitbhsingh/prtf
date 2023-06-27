import React from 'react'
import "../styles/Projects.css"
import ProjectItem from '../components/ProjectItem'
// import Proj01task from "../assets/Proj01task.png"
import { projectList } from '../helpers/ProjectList'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projectList'>
        {projectList.map((project,idx)=>{
          return (
             <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>

      {/* <ProjectItem name="Social Media Website" image={Proj01task}/> */}
      {/* <ProjectItem /> */}
    
    </div>
  );
}

export default Projects;