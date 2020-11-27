import Project from "./Project";

const ProjectList = () => {
  const myProjects = [];

  return (
    <>
      {myProjects &&
        myProjects.map((project) => {
          return (
            <Project
              title={project.title}
              img={project.img}
              description={project.description}
              tech={project.tech}
              repo={`https://github.com/tylerbroadway/portfolio`}
              demo={`https://tylerbroadway.dev`}
            />
          );
        })}
    </>
  );
};

export default ProjectList;
