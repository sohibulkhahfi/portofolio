import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaTwitter, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-transparent transition-transform duration-300 ${isScrolled ? "" : ""}`}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a className="font-bold text-lg text-primary block py-6 cursor-pointer">Web Portofolio</a>
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" className={`block absolute -right-4 transition duration-500  md:hidden z-50 ${isOpen ? "-rotate-90" : "rotate-90 "}`} onClick={handleToggle}>
              <AiOutlineClose className={`scale-150 -rotate-90 mb-12 ${isOpen ? "" : "opacity-0 "}`} />
              <AiOutlineMenu className={`scale-150 -rotate-90  ${isOpen ? "opacity-0" : " "}`} />
            </button>
          </div>
          <nav
            id="nav-menu"
            className={`absolute md:static flex p-5 bg-white shadow-lg md:shadow-none rounded-lg w-10/12 justify-between my-4 sm:max-w-[280px]  transform transition-transform duration-300 ${
              isOpen ? "-translate-x-0" : "-translate-x-full shadow-none md:translate-x-0"
            } `}
          >
            <a href="https://github.com/sohibulkhahfi">
              <FaGithub className="icon" />
            </a>
            <a href="https://twitter.com/khaahfi">
              <FaTwitter className="icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCpfwFAYleO5Iz4_1L_uLGng">
              <FaYoutube className="icon" />
            </a>
            <a href="https://www.instagram.com/sohibulkhahfi/">
              <FaInstagram className="icon" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Sidenav;
