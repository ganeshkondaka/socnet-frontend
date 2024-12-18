import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CircuitBoard } from 'lucide-react';
import Form from './pages/Form';
// import Form from './pages/Form';
// import Display from './pages/Display';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<Form />} />
        {/* <Route path="/display" element={<Display />} /> */}
        <Route path="/display" element={<Landing />} />
      </Routes>
    </Router>
  );
}

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-cyan-500">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          <CircuitBoard size={80} className="text-purple-500 animate-pulse" />
          
          <h1 className="text-6xl font-bold text-center glitch-text">
            SocNet
          </h1>
          
          <p className="text-xl text-center max-w-2xl text-zinc-300">
            Unite your digital presence in a card. Share all your social media profiles with a single, sleek interface that stands out in the digital realm.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-12 w-full max-w-4xl">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/50 
              hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Easy Sharing</h3>
              <p className="text-zinc-300">Share your digital identity with a single link. Make it easier for others to find and connect with you.</p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-purple-500/50 
              hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Unified Presence</h3>
              <p className="text-zinc-300">Consolidate all your social media links in one card that captures attention.</p>
            </div>
            
          </div>
          
          <Link
            to="/form"
            className="mt-12 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 
              text-white font-bold rounded-lg transition-all hover:shadow-lg 
              hover:shadow-cyan-500/30 text-lg hover:from-cyan-500 hover:to-purple-500"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;