import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyApp from "./components/MyApp";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <>
      <div>
        <Sidenav />
        <Hero />
        <About />
        <MyApp />
        <Footer />
      </div>
    </>
  );
}

export default App;
