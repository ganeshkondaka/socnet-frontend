import axios from "axios";
import React, { useState } from "react";

export default function Form() {
  const [fields, setFields] = useState([{ platform: "", link: "" }]);

  const handleAddField = () => {
    setFields([...fields, { platform: "", link: "" }]);
  };

  const handleInputChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const handle_submit = async()=>{
     const reponse=await axios.post('http://localhost:5000/data',fields)
    
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-zinc-200 py-8 px-4 pixel-bg">
      <h1 className="text-3xl font-bold mb-6 text-zinc-100 pixel-text border-4 border-zinc-500 p-2">
        Social Media Links
      </h1>
        <form onSubmit={handle_submit} >
          <div className="w-full max-w-2xl space-y-4">
              {fields.map((field, index) => (
                <div key={index} className="flex flex-col md:flex-row md:space-x-4 items-center space-y-4 md:space-y-0 border-4 border-zinc-500 p-4 rounded-lg w-auto hover:bg-zinc-800 transition duration-200">
                  <p className="hidden md:block">{index + 1}</p>
                  <select
                    value={field.platform}
                    onChange={(e) => handleInputChange(index, "platform", e.target.value)}
                    className="font-mono block w-full md:w-auto bg-zinc-800 text-zinc-200 border-4 border-zinc-600 rounded-md px-2 py-1 pixel-text hover:border-zinc-400 focus:outline-none focus:ring focus:ring-zinc-600"
                  >
                    <option className="" value="" disabled >
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
                </div>
              ))}
              <button
                onClick={handleAddField}
                className="w-full bg-zinc-700 text-zinc-200 font-bold py-2 rounded-lg border-4 border-zinc-500 pixel-text hover:bg-zinc-600 hover:border-zinc-400 transition duration-200"
              >
                Add Another One
              </button>

              <button type="submit">submit</button>

          </div>
        </form>
    </div>
  );
}




// import React, { useState } from 'react'


// export default function Form() {
//   const [socials, setsocials] = useState([{ platform: '', link: '' }])
  
//   const handlechange=(index,key,value)=>{
//     const allsocials=[...socials]
//     allsocials[index][key]=value;
//     setsocials(allsocials)
//   }
//   return (
//     <div>
//       {
//         socials.map((social,index)=>(
//           <div key={index}>
//             <select name="platform names" 
//             value={social.platform} 
//             onChange={(e)=>{handlechange(index,'platform',e.target.value)}}></select>
//             <input 
//             type="text"
//             value={social.link}
//             onChange={(e)=>{handlechange(index,'link',e.target.value)}} />
//           </div>
//         ))
//       }

//     </div>
//   )
// }
