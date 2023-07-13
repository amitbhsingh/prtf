import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

export const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[  id];
  return (
    <a href={project.url}><div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="my project" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div></a>
  );
};
