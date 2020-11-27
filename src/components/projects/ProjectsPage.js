import NavBar from "../Nav";
import Project from "./Project";

const ProjectsPage = () => {
  return (
    <div>
      <NavBar />
      <Project
        title="Conway's Game of Life"
        img="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
        description="I built a cool app that does cool stuff"
        tech="React"
      />
    </div>
  );
};

export default ProjectsPage;
