import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Form() {
  const navigate = useNavigate();
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
    if(fields.length === 1 && fields[0].platform === "" && fields[0].link === "") {
      return alert('Please add atleast one link');
    }

    try {
      const response = await axios.post('http://localhost:3000/data', fields);
      // console.log('response', response.data);
      navigate(`/display/${user_name}`);
    } catch (error) {
      console.log('error', error);
    }
  };

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
                <option value="Twitter">Twitter</option>
                <option value="Instagram">Instagram</option>
                <option value="Mail">Mail</option>
                <option value="Phone">Phone</option>
                <option value="Telegram">Telegram</option>
              </select>
              <input
                type="url"
                placeholder="Enter link"
                value={field.link}
                onChange={(e) => handleInputChange(index, "link", e.target.value)}
                
                className="block w-full md:w-full bg-zinc-800 text-zinc-200 border-4 border-zinc-600 rounded-md px-2 py-1 pixel-text hover:border-zinc-400 focus:outline-none focus:ring focus:ring-zinc-600"
              />
            </motion.div>
          ))}
          <motion.button
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
