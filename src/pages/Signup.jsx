import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const [user, setuser] = useState('');
  const navigate = useNavigate();

  const handle_submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', { username: user });
      console.log('user registered', response.data.new_user);
      localStorage.setItem("user_id", response.data.new_user._id);
      localStorage.setItem("user_name", response.data.new_user.username);
      navigate('/form');
    } catch (error) {
      console.log('error', error);
    }
  };

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
