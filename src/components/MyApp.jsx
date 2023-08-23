import myapp from "../assets/app.json";
import imageImports from "./image";

const MyApp = () => {
  const apps = myapp.myApp;
  return (
    <section id="MyApp" className="pt-5 pb-10 bg-slate-100">
      <div className="container justify-center">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-5">
            <h4 className="font-semibold text-lg text-primary mb-2 lg:text-3xl">My App</h4>
          </div>
        </div>
        <div className="flex flex-wrap justify-center px-2">
          {apps.map((item) => (
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 " key={item.id}>
              <div className="shadow-lg overflow-hidden mb-10  p-2 bg-white">
                <img src={imageImports[item.img]} alt={item.title} className="w-full border border-gray-300" />
                <div className="py-3 px-3 flex flex-col items-center ">
                  <h3>{item.title}</h3>
                  <br />
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">
                    Lihat App
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyApp;
