import NavBar from "../Nav";
import ProjectList from "./ProjectList";

const ProjectsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="projects-container">
        <ProjectList />
      </div>
    </div>
  );
};

export default ProjectsPage;
