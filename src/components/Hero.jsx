import imageImports from "./image";

const Hero = () => {
  return (
    <section id="home" className="pt-">
      <div className="container">
        <div className="flex flex-wrap md:flex-row-reverse">
          <div className="w-full self-center px-4 md:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Halo 🖐, saya <span className="block font-bold text-dark text-4xl lg:text-5xl mt-1"> Sohibul Khahfi</span>
            </h1>
            <h2 className="font-medium text-secondary text-lg lg:text-2xl mb-5">
              Web Developer | <span className="text-dark">Freelancer</span>
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">Bersemangat Mewujudkan Kode Luar Biasa..</p>

            <a href="mailto:sohibulkhahfi140310@gmail.com" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
              Hubungi Saya
            </a>
          </div>
          <div className="w-full self-end px-4 md:w-1/2">
            <div className="relative mt-10 md:mt-9 lg:right-0 bg-primary rounded-t-full">
              <img src={imageImports.khahfi} alt="Sohibul Khahfi" className="max-w-full mx-auto " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
