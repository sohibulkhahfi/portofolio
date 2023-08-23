import imageImports from "./image";

const About = () => {
  return (
    <section id="about" className="pt-36 pb-32">
      <div className="container text-center">
        <h4 className="font-bold uppercase text-primary text-lg mb-4 md:text-2xl">Tentang Saya</h4>
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 md:w-1/2">
            <div className="w-full">
              <h3 className="font-semibold text-dark text-lg mb-4">Pendidikan dan Pelatihan</h3>
              <div id="skills" className="flex flex-wrap items-center justify-center">
                <img src={imageImports.teknokrat} alt="HTML" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
                <img src={imageImports.dicoding} alt="CSS" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
                <img src={imageImports.codepolitan} alt="JavaScript" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <h3 className="font-semibold text-dark text-lg mb-4">Teknologi yang dikuasai</h3>
            <div id="skills" className="flex flex-wrap items-center">
              <img src={imageImports.html} alt="HTML" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
              <img src={imageImports.css} alt="CSS" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
              <img src={imageImports.js} alt="JavaScript" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
              <img src={imageImports.bootstrap} alt="Bootstrap" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
              <img src={imageImports.tailwind} alt="Tailwind CSS" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
              <img src={imageImports.reactimg} alt="React" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
              <img src={imageImports.git} alt="Git" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
              <img src={imageImports.mongodb} alt="MongoDB" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
              <img src={imageImports.nodejs} alt="Node.js" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
              <img src={imageImports.express} alt="Express" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
              <img src={imageImports.firebase} alt="Firebase" className="w-16  m-2  hover:-translate-y-2 transition duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
