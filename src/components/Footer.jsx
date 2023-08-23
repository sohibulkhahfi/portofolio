import { FaTwitter, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="max-w-[1240px] mx-auto flex flex-col px-4 mb-3">
          <div className="sm:flex text-center justify-between items-center">
            <div className="px-4">
              <a className="cursor-pointer font-bold text-lg text-primary block py-6">Web Portofolio</a>
            </div>
            <div className="flex justify-between my-4 w-full sm:max-w-[280px]">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
