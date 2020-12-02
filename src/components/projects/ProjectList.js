import Project from "./Project";

const ProjectList = () => {
  const myProjects = [
    {
      title: "Conway's Game of Life",
      img: "https://pi.math.cornell.edu/~lipa/mec/banner.png",
      description: "An implementation of the Game of Life in React.",
      tech: ["JavaScript", "React", "Styled Components"],
      repo: "https://github.com/tylerbroadway/game-of-life",
      demo: "https://conways-game-of-life-tb.netlify.app",
    },
    {
      title: "Post It Here (API)",
      img:
        "https://rdwgroup.com/wp-content/uploads/2018/10/reddit2-800x450-1.png",
      description:
        "I architected and built an API that uses a Machine Learning API to suggest which sub-reddit to post in.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "Heroku"],
      repo: "https://github.com/Post-It-Here/backend",
      demo: "",
    },
    {
      title: "Amazon Clone (Coming Soon!)",
      img:
        "https://concordanceacademy.org/wp-content/uploads/2018/11/Amazon-Logo-Black.jpg",
      description: "A fully functional clone of Amazon.",
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
              key={project.title}
            />
          );
        })}
    </>
  );
};

export default ProjectList;
