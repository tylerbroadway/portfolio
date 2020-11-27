import Project from "./Project";

const ProjectList = () => {
  const myProjects = [
    {
      title: "Conway's Game of Life",
      img: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
      description: "I built a cool app that does cool stuff",
      tech: ["JavaScript", "React", "Styled Components"],
      repo: "https://github.com/tylerbroadway/portfolio",
      demo: "https://tylerbroadway.dev",
    },
  ];

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
              repo={project.repo}
              demo={project.demo}
            />
          );
        })}
    </>
  );
};

export default ProjectList;
