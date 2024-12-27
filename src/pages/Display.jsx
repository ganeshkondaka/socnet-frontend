import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaTelegram,
  FaHeart,
  FaSpinner,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiFinnTheHumanDuotone } from "react-icons/pi";
import { useParams } from "react-router-dom";

const Display = () => {

  const [links, setlinks] = useState([])
  const [loading, setloading] = useState(true); // Set initial loading state to true
  const { user_name } = useParams()

  const fetch_function = async () => {

    try {
      const response = await axios.get(`https://socnet-backend.vercel.app/getsocials/${user_name}`)
      // const response = await axios.get(`http://localhost:3000/getsocials/${user_name}`)
      // console.log('the response', response.data.usersocials)
      setlinks(response.data.usersocials)
      setloading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.log('error', error.response.data.message);  
      setloading(false);
      return alert(error.response.data.message);
    }

  }

  useEffect(() => {
    fetch_function();
    // console.log('all user links :', links)
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <motion.div
          className="text-zinc-200 text-center text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>

        </motion.div>
      </div>
    );
  }

  const renderIcon = (platform) => {
    switch (platform) {
      case "LinkedIn":
        return <FaLinkedin className="text-4xl text-zinc-200 hover:text-zinc-400 transition duration-200" />;
      case "GitHub":
        return <FaGithub className="text-4xl text-zinc-200 hover:text-zinc-400 transition duration-200" />;
      case "X":
        return <FaXTwitter className="text-4xl text-zinc-200 hover:text-zinc-400 transition duration-200" />;
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
    <div className="min-h-screen h-full flex items-center  flex-col justify-between bg-black pixel-bg px-2">
      <motion.div
        className="text-zinc-200 text-center mt-8 text-[22px] p-2 font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-center text-6xl"
          animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.4, repeatDelay: 2 }}
        >
          <PiFinnTheHumanDuotone className="inline text-blue-300" />
        </motion.p>
        {user_name.toUpperCase()}
      </motion.div>
      <motion.div
        className="space-y-4 border-2 border-zinc-200 p-4 py-10 md:p-8 rounded-lg w-full max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 bg-zinc-900 border-2 border-white rounded-lg px-6 py-2 hover:bg-zinc-700 transition duration-200 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {renderIcon(link.platform)}
            {
              (link.platform === "Mail" || link.platform === "Phone") ? (
                <span className="text-sm text-zinc-200 hover:text-zinc-400 transition duration-200 font-bold">
                  {link.link}
                </span>
              ) : (
                <span className="text-sm text-zinc-200 hover:text-zinc-400 transition duration-200 font-bold">
                  {link.platform}
                </span>
              )
            }
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="text-zinc-600 text-center mt-16 text-[13px] bottom-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      > <a href="/" className="text-[13px] p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 my-2 rounded-lg animate-pulse border-2 border-zinc-700 ">Create your ' SocNet '</a>
        <p className="mt-4">© 2025 SocNet. All rights reserved.</p>
        <p className="pb-6">
          made with <FaHeart className="inline"></FaHeart> by{" "}
          <a href="https://x.com/ganesh_kondaka" className="underline text-zinc-500 hover:text-purple-800">
            Ganesh
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Display;
