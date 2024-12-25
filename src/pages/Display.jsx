import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";

const Display = () => {

  const [links, setlinks] = useState([])
  const { user_name } = useParams()

  const fetch_function = async () => {

    // const userid = localStorage.getItem("user_id");
    // const username = localStorage.getItem("user_name");
    // setusername(user_name)

    try {
      const response = await axios.get(`http://localhost:3000/getsocials/${user_name}`)
      console.log('the response', response.data.usersocials)
      setlinks(response.data.usersocials)
    } catch (error) {
      console.log('error', error)
    }

  }

  useEffect(() => {
    fetch_function();
    console.log('all user links :',links)
  }, []);

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
    <div className="min-h-screen h-full flex items-center flex-col justify-between bg-black pixel-bg px-2">
      <div className="text-zinc-200 text-center mt-16 text-[22px] p-2 font-bold">
        {user_name.toUpperCase()}
      </div>
      <div className="space-y-4 border-2 border-zinc-200 p-2 py-10 md:p-8 rounded-lg w-full max-w-xl ">
        {links.map((link, index) => (

          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 bg-zinc-800 border-2 border-white rounded-lg px-4 py-2 hover:bg-zinc-700 transition duration-200 w-full"
          >
            {renderIcon(link.platform)}
            {
              (link.platform === "Mail" || link.platform === "Phone") ?
                (
                  <span className="text-sm text-zinc-200 hover:text-zinc-400 transition duration-200 font-bold">
                    {link.link}
                  </span>
                )
                :
                (
                  <span className="text-sm text-zinc-200 hover:text-zinc-400 transition duration-200 font-bold">
                    {link.platform}
                  </span>
                )
            }
            {/* <span className="text-xl text-zinc-200 hover:text-zinc-400 transition duration-200 font-bold">
              {link.platform}
            </span> */}
          </a>
        ))}
      </div>
      <div className="text-zinc-600 text-center mt-16 text-[13px] bottom-1">
        <p>© 2025 SocNet. All rights reserved.</p>
        <p className="pb-6">made with <FaHeart className="inline"></FaHeart> by <a href="https://x.com/ganesh_kondaka" className="underline text-zinc-500">Ganesh</a></p>
      </div>
    </div>
  );
};

export default Display;
