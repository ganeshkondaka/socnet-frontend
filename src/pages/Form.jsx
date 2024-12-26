import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Form() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false); // Set initial loading state to true

  const user_id = localStorage.getItem('user_id');
  const user_name = localStorage.getItem('user_name');

  const [fields, setFields] = useState([{ platform: "", link: "", user: user_id }]);

  const handleAddField = () => {
    setFields([...fields, { platform: "", link: "", user: user_id }]);
  };

  const handleInputChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const handle_submit = async (e) => {
    e.preventDefault();
    if (fields.length === 0 || fields[0].platform === "" || fields[0].link === "") {
      return alert('Please add atleast one link');
    }
    setloading(true);
    try {
      const response = await axios.post('https://socnet-backend.vercel.app/data', fields);
      // const response = await axios.post('http://localhost:3000/data', fields);
      // console.log('response', response.data);
      navigate(`/display/${user_name}`);
      setloading(false);
    } catch (error) {
      console.log('error', error.response.data.message);  
      setloading(false);
      return alert(error.response.data.message);
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
    <div className="min-h-screen flex flex-col items-center bg-black text-zinc-200 py-8 px-4 pixel-bg">
      <motion.h1
        className="text-3xl font-bold mb-6 text-zinc-100 pixel-text p-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Add u'r Links
      </motion.h1>
      <form onSubmit={handle_submit}>
        <div className="w-full max-w-2xl space-y-4 flex flex-col items-center">
          {fields.map((field, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row md:space-x-4 items-center space-y-4 md:space-y-0 border-4 border-zinc-500 p-4 rounded-lg w-auto hover:bg-zinc-800 transition duration-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.0 }}
            >
              <p className="hidden md:block">{index + 1}</p>
              <select
                name="platform names"
                value={field.platform}
                onChange={(e) => handleInputChange(index, "platform", e.target.value)}

                className="font-mono block w-full md:w-auto bg-zinc-800 text-zinc-200 border-4 border-zinc-600 rounded-md px-2 py-1 pixel-text hover:border-zinc-400 focus:outline-none focus:ring focus:ring-zinc-600"
              >
                <option value="" disabled>
                  Select Platform
                </option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="GitHub">GitHub</option>
                <option value="X">X</option>
                <option value="Instagram">Instagram</option>
                <option value="Mail">Mail</option>
                <option value="Phone">Phone</option>
                <option value="Telegram">Telegram</option>
              </select>
              <input
                type="text"
                placeholder="Enter link"
                value={field.link}
                onChange={(e) => handleInputChange(index, "link", e.target.value)}

                className="block w-full md:w-full bg-zinc-800 text-zinc-200 border-4 border-zinc-600 rounded-md px-2 py-1 pixel-text hover:border-zinc-400 focus:outline-none focus:ring focus:ring-zinc-600"
              />
            </motion.div>
          ))}
          <motion.button
            type="button"
            onClick={handleAddField}
            className="w-full bg-zinc-700 text-zinc-200 font-bold py-2 rounded-lg border-4 border-zinc-500 pixel-text hover:bg-zinc-600 hover:border-zinc-400 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add Another One +
          </motion.button>
          <motion.button
            type="submit"
            className="w-auto bg-blue-700 text-zinc-200 font-bold py-2 rounded-lg border-4 border-zinc-500 pixel-text hover:bg-zinc-600 hover:border-zinc-400 transition duration-200 p-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
}
