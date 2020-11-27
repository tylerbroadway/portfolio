import Project from "./Project";

const ProjectList = () => {
  const myProjects = [
    {
      title: "Conway's Game of Life",
      img: "https://pi.math.cornell.edu/~lipa/mec/banner.png",
      description: "I built a cool app that does cool stuff",
      tech: ["JavaScript", "React", "Styled Components"],
      repo: "https://github.com/tylerbroadway/game-of-life",
      demo: "https://conways-game-of-life-tb.netlify.app",
    },
    {
      title: "Post It Here (API)",
      img:
        "https://rdwgroup.com/wp-content/uploads/2018/10/reddit2-800x450-1.png",
      description: "I built an API for a project",
      tech: ["Node.js", "Express.js", "PostgreSQL", "Heroku"],
      repo: "https://github.com/Post-It-Here/backend",
      demo: "",
    },
    {
      title: "Netflix Clone (Coming Soon!)",
      img:
        "https://cdn.vox-cdn.com/thumbor/NpKOdQxdJD8OpkLfH8oaxFJtD00=/39x0:3111x2048/1400x788/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png",
      description: "An exact clone of Netflix",
      tech: ["JavaScript", "React", "Redux", "Styled Components"],
      repo: "",
      demo: "",
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
