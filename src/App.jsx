import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CircuitBoard } from 'lucide-react';
import Form from './pages/Form';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Display from './pages/Display';
import SignUp from './pages/Signup';

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
        <Route path="/display/:user_name" element={<Display links={links}/>} />
        <Route path="/register" element={<SignUp links={links}/>} />
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
          <div className="text-6xl font-bold leading-none f">
            SocNet
          </div>

          <CircuitBoard size={80} className="text-blue-400 animate-pulse" />
          <p className="text-xl text-center max-w-xl">
            Unite your digital presence in a card. Share all your social media profiles with a single, sleek interface.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg border border-white hover:shadow-lg hover:shadow-gray-500/50 transition-all space-x-4">
              <FaLinkedin size={24} />
              <h3>LinkedIn</h3>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg border border-white hover:shadow-lg hover:shadow-gray-500/50 transition-all space-x-4">
              <FaGithub size={24} />
              <h3>GitHub</h3>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg border border-white hover:shadow-lg hover:shadow-gray-500/50 transition-all space-x-4">
              <FaTwitter size={24} />
              <h3>Twitter</h3>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg border border-white hover:shadow-lg hover:shadow-gray-500/50 transition-all space-x-4">
              <FaInstagram size={24} />
              <h3>Instagram</h3>
            </div>
          </div>

          <Link
            to="/register"
            className="mt-8 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold no-underline rounded-lg border border-white hover:shadow-lg hover:shadow-gray-500/50 transition-all"
          >
            Make your SocNet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;