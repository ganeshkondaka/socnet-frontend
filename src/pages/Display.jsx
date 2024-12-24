import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaTelegram,
  FaHeart,
} from "react-icons/fa";

const links = [
  { platform: "LinkedIn", link: "https://www.linkedin.com/in/example" },
  { platform: "GitHub", link: "https://github.com/example" },
  { platform: "Twitter", link: "https://twitter.com/example" },
];

const Display = ({ links }) => {
  const renderIcon = (platform) => {
    switch (platform) {
      case "LinkedIn":
        return <FaLinkedin className="text-4xl text-zinc-200 hover:text-zinc-400 transition duration-200" />;
      case "GitHub":
        return <FaGithub className="text-4xl text-zinc-200 hover:text-zinc-400 transition duration-200" />;
      case "Twitter":
        return <FaTwitter className="text-4xl text-zinc-200 hover:text-zinc-400 transition duration-200" />;
      case "Instagram":
        return <FaInstagram className="text-4xl text-zinc-200 hover:text-zinc-400 transition duration-200" />;
      case "Mail":
        return <FaEnvelope className="text-4xl text-zinc-200 hover:text-zinc-400 transition duration-200" />;
      case "Phone":
        return <FaPhone className="text-4xl text-zinc-200 hover:text-zinc-400 transition duration-200" />;
      case "Telegram":
        return <FaTelegram className="text-4xl text-zinc-200 hover:text-zinc-400 transition duration-200" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen h-screen flex items-center flex-col justify-between bg-black pixel-bg px-4">
      <div className="text-zinc-300 text-center mt-16 text-[12px] p-2">
        {}username
      </div>
      <div className="space-y-4 border-4 border-zinc-700 p-6 py-10 md:p-8 rounded-lg w-full max-w-xl ">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 bg-zinc-800 border-4 border-zinc-600 rounded-lg px-4 py-2 hover:bg-zinc-700 transition duration-200 w-full"
          >
            {renderIcon(link.platform)}
            <span className="text-xl text-zinc-200 hover:text-zinc-400 transition duration-200 font-bold">
              {link.platform}
            </span>
          </a>
        ))}
      </div>
      <div className="text-zinc-800 text-center mt-16 text-[12px] bottom-1">
        <p>© 2025 SocNet. All rights reserved.</p>
        <p className="pb-6">made with <FaHeart className="inline"></FaHeart> by ganesh</p>
      </div>
    </div>
  );
};

export default Display;
