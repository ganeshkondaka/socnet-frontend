import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setuser] = useState('')
  const navigate = useNavigate()
  const handle_submit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', { username: user })
      cossole.log('user registered', response)
      navigate('/form')
    } catch (error) {

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black pixel-bg">
      <div className="w-full max-w-sm bg-zinc-800 border-8 border-zinc-700 p-6 md:p-8 rounded-lg">
        <h1 className="text-3xl text-zinc-100 font-bold mb-6 text-center pixel-text">Welcome</h1>
        <form className="space-y-4" onSubmit={handle_submit}>
          <div>
            <label className="block text-zinc-200 font-bold mb-2">Username</label>
            <input
              type="text"
              placeholder="enter your name"
              value={user}
              className="w-full bg-zinc-900 border-4 border-zinc-600 text-zinc-200 rounded-lg px-4 py-2 pixel-text"
              onChange={(e) => setuser(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-zinc-700 text-zinc-200 font-bold py-2 rounded-lg border-4 border-zinc-500 hover:bg-zinc-600 transition duration-200 pixel-text"
          >
            Register
          </button>
        </form>

      </div>
    </div>
  );
};

export default SignUp;
