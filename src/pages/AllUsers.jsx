import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash, FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { admin } = useParams()

    const secret = import.meta.env.VITE_ADMIN_SECRET
    // console.log('process', secret)

    const fetchUsers = async () => {
        if (admin !== secret) {
            setLoading(false);
            return alert("Unauthorized...! you are not admin");

        }
        try {
            const response = await axios.get(`https://socnet-backend.vercel.app/all/${admin}`);
            // const response = await axios.get(`http://localhost:3000/all/${admin}`);
            setUsers(response.data.users);
            setLoading(false);
            console.log("users by axios", response.data.users);
        } catch (error) {
            console.log("error", error.response.data.message);
            setLoading(false);
            return alert(error.response.data.message);
        }finally {
            setLoading(false);
        }
    };

    const deleteUser = async (username) => {
            console.log('process', secret)

        if (admin !== secret) {
            setLoading(false);
            return alert("Unauthorized...!! you are not admin");
        }
        alert(`Are you sure you want to delete ${username}`, "Confirm Delete", "Yes", "No");
        try {
            await axios.delete(`https://socnet-backend.vercel.app/del/${admin}/${username}`);
            // await axios.delete(`http://localhost:3000/del/${admin}/${username}`);
            setUsers(users.filter(user => user.username !== username));
        } catch (error) {
            console.log("error", error.response.data.message);
            return alert(error.response.data.message);
        }finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="text-zinc-200 text-center text-5xl">
                    <div role="status">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-black pixel-bg px-4 py-8">
            <h1 className="text-zinc-200 text-2xl font-bold mb-8">
                All Users
            </h1>

            <div className="w-full max-w-xl space-y-4 border-2 border-zinc-200 rounded-lg p-6">
                {users.map((user, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-zinc-900 border border-zinc-700 rounded-lg px-6 py-3 hover:bg-zinc-800 transition-all duration-200"
                    >
                        <span className="text-zinc-200 font-medium">
                            {user.username}
                        </span>
                        <button
                            onClick={() => deleteUser(user.username)}
                            className="text-red-500 hover:text-red-600 hover:scale-110 transition-all duration-200"
                        >
                            <FaTrash />
                        </button>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default AllUsers;
