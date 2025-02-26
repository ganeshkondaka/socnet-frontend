import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CircuitBoard } from 'lucide-react';
import { motion } from 'framer-motion';
import Form from './pages/Form';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Display from './pages/Display';
import SignUp from './pages/Signup';
import AllUsers from './pages/AllUsers';

function App() {
  const links = [
    { platform: "LinkedIn", link: "https://www.linkedin.com/in/example" },
    { platform: "GitHub", link: "https://github.com/example" },
    { platform: "Twitter", link: "https://github.com/example" },
    { platform: "Mail", link: "megatronoptimus@gmail.com" },
    { platform: "Phone", link: "9999999999" },
    { platform: "Telegram", link: "https://github.com/example" },
    { platform: "Instagram", link: "https://github.com/example" },

  ]

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<Form />} />
        <Route path="/display/:user_name" element={<Display links={links} />} />
        <Route path="/register" element={<SignUp links={links} />} />
        <Route path="/superuser/:admin" element={<AllUsers />} />
        {/* <Route path="/:admin" element={<AllUsers />} /> */}
        {/* <Route path="/signin" element={<SignIn links={links}/>} /> */}
      </Routes>
    </Router>
  );
}

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            className="text-6xl font-bold leading-none"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SocNet
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CircuitBoard size={80} className="text-blue-400 animate-spin" />
          </motion.div>
          <motion.p
            className="text-xl text-center max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Share all your social media profiles with a single, sleek interface. Unite your digital presence in a card.
          </motion.p>
          <p>like this ⬇</p>
          <img src="./demo.png" alt="demo image" className='animate-pulse'/>
          {/* <div class="relative">
            <img src="./demo.png" alt="demo" class="block rounded-lg" />
            <div class="absolute top-0 left-0 w-full h-full bg-blue-950 opacity-20 pointer-events-none"></div>
          </div> */}

          {/* <motion.div
            className="grid grid-cols-1  gap-4 w-full md:w-2/4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg border-2 hover:shadow-lg hover:shadow-gray-500/50 transition-all space-x-4">
              <FaLinkedin size={24} />
              <h3>LinkedIn</h3>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg border-2 hover:shadow-lg hover:shadow-gray-500/50 transition-all space-x-4">
              <FaGithub size={24} />
              <h3>GitHub</h3>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg border-2 hover:shadow-lg hover:shadow-gray-500/50 transition-all space-x-4">
              <FaTwitter size={24} />
              <h3>Twitter</h3>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg border-2 hover:shadow-lg hover:shadow-gray-500/50 transition-all space-x-4">
              <FaInstagram size={24} />
              <h3>Instagram</h3>
            </div>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='mt-8'
          >
            <Link
              to="/register"
              className="mt-8 px-8 py-4 bg-zinc-900 hover:bg-blue-800 text-white font-8old no-underline rounded-lg border-2 hover:shadow-lg hover:shadow-gray-500/50 transition-all"
            >
              Make your SocNet
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App;