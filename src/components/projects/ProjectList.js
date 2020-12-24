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
      title: "Algo View",
      img:
        "https://media-exp1.licdn.com/dms/image/sync/C4E27AQFgWgJ9lLHFgA/articleshare-shrink_480/0/1608698751048?e=1608872400&v=beta&t=XtCYWvnvzsoPCt-cwMzxQG8tjuNJA6YdvYpHh0K5_5c",
      description: "A sorting algorithm visualizer",
      tech: ["JavaScript", "React"],
      repo: "https://github.com/tylerbroadway/algo-visualizer",
      demo: "https://algo-view.netlify.app",
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
