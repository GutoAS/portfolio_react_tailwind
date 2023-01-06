import asbook from "../assets/portfolio/asbook.png";
import asfood from "../assets/portfolio/asfood.png";
import aspatrix from "../assets/portfolio/aspatrix.png";
import gcorpmosh from "../assets/portfolio/gcorpmosh.png";
import gcorporationBank from "../assets/portfolio/gcorporationBank.png";
import todoapp from "../assets/portfolio/todoapp.png";
import stopwatch from "../assets/portfolio/stopwatch.png";
import astheburguer from "../assets/portfolio/asburguerhouse.png";
import game2048v1 from "../assets/portfolio/game2048v1.png";
import gameHex2048 from "../assets/portfolio/gameHex2048.png";
import reactvaral from "../assets/portfolio/reactvaral.png";
import reactanimated2048 from "../assets/portfolio/reactanimated2048.png";
import figmagcorporation from "../assets/portfolio/figmagcorporation.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      source: asbook,
      linkDemo: "https://asninja.netlify.app/",
      linkCode: "https://github.com/GutoAS/bootstrap_project.git",
    },
    {
      id: 2,
      source: asfood,
      linkDemo: "https://asfoodninja.netlify.app/",
      linkCode: "https://github.com/GutoAS/tailwind_foodninja.git",
    },
    {
      id: 3,
      source: aspatrix,
      linkDemo: "https://aspatrix.vercel.app/",
      linkCode: "https://github.com/GutoAS/sass_project_patrix.git",
    },
    {
      id: 4,
      source: gcorpmosh,
      linkDemo: "https://gcorpmosh.netlify.app/",
      linkCode: "https://github.com/GutoAS/moshified.git",
    },
    {
      id: 5,
      source: gcorporationBank,
      linkDemo: "https://gcorporationbank.netlify.app/",
      linkCode: "https://github.com/GutoAS/react_tailwind_hoodbank.git",
    },
    {
      id: 6,
      source: todoapp,
      linkDemo: "https://gutotodoapp.netlify.app/",
      linkCode: "https://github.com/GutoAS/react_tailwind_todoapp.git",
    },
    {
      id: 7,
      source: stopwatch,
      linkDemo: "https://gutoas.github.io/javascript_stopwatch",
      linkCode: "https://github.com/GutoAS/javascript_stopwatch.git",
    },
    {
      id: 8,
      source: astheburguer,
      linkDemo: "https://astheburger.netlify.app/",
      linkCode: "https://github.com/GutoAS/reactBurguerHouse",
    },
    {
      id: 10,
      source: game2048v1,
      linkDemo: "https://agostinho2048v1.netlify.app/",
      linkCode: "https://github.com/GutoAS",
    },
    {
      id: 11,
      source: gameHex2048,
      linkDemo: "https://agostinhohex-2048.vercel.app/game.html",
      linkCode: "https://github.com/GutoAS",
    },
    {
      id: 12,
      source: reactvaral,
      linkDemo: "https://reactbootstrapvaral.vercel.app/",
      linkCode: "https://github.com/GutoAS",
    },
    {
      id: 13,
      source: reactanimated2048,
      linkDemo: "https://reactbootstrapvaral.vercel.app/",
      linkCode: "https://github.com/GutoAS",
    },
    {
      id: 13,
      source: figmagcorporation,
      linkDemo: "https://figmagcorporation.vercel.app/",
      linkCode: "https://github.com/GutoAS",
    },
  ];

  return (
    <section
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </h1>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0  w-full h-full">
          {portfolios.map(({ id, source, linkDemo, linkCode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={source}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <button className="px-6 py-3 w-1/2 duration-200 hover:scale-105">
                  <a href={linkDemo} target="_blank">
                    Demo
                  </a>
                </button>
                <button className="px-6 py-3 w-1/2 duration-200 hover:scale-105">
                  <a href={linkCode} target="_blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
