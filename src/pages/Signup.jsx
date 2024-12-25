import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const SignUp = () => {
  const [user, setuser] = useState('');
  const navigate = useNavigate();
  const [loading, setloading] = useState(false); // Set initial loading state to true


  const handle_submit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios.post('https://socnet-backend.vercel.app/signup', { username: user });
      // const response = await axios.post('http://localhost:3000/signup', { username: user });
      // console.log('user registered', response.data.new_user);
      localStorage.setItem("user_id", response.data.new_user._id);
      localStorage.setItem("user_name", response.data.new_user.username);
      setloading(false);
      navigate('/form');
    } catch (error) {
      console.log('error', error);
    }
  };

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


  return (
    <div className="min-h-screen flex items-center justify-center bg-black pixel-bg px-2">
      <motion.div
        className="w-full max-w-sm bg-zinc-800 border-8 border-zinc-700 p-6 md:p-8 rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form className="space-y-4" onSubmit={handle_submit}>
          <div>
            <label className="block text-zinc-200 font-bold mb-2">Username</label>
            <input
              type="text"
              placeholder="Create your username"
              value={user}
              onChange={(e) => setuser(e.target.value)}
              required
              className="w-full bg-zinc-900 border-4 border-zinc-600 text-zinc-200 rounded-lg px-4 py-2 pixel-text"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-zinc-700 text-zinc-200 font-bold py-2 rounded-lg border-4 border-zinc-500 hover:bg-zinc-600 transition duration-200 pixel-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;
