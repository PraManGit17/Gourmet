import React from 'react';
import { Link } from 'react-router-dom';
import gourmet from '../assets/only.png';
import useAuthStore from '../store/authStore';
import { UserCircle, UserCircle2 } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className='px-8 py-5'>
      <nav className="flex items-center justify-between px-3 rounded-lg shadow-xl shadow-gray-400 bg-white">

        <Link to="/" className="font-bold"><img src={gourmet} width={130} /></Link>

        <div className='flex flex-row items-center justify-center space-x-9 text-md font-medium'>
          <div className='hover:ml-2 transition-all hover:bg-black hover:text-white hover:px-3 py-1 rounded-md hover:font-normal hover:scale-105
          cursor-pointer'>About Us</div>
          <div className='hover:ml-2 transition-all hover:bg-black hover:text-white hover:px-3 py-1 rounded-md hover:font-normal hover:scale-105 cursor-pointer'>Your Recipes</div>
          <div className='hover:ml-2 transition-all hover:bg-black hover:text-white hover:px-3 py-1 rounded-md hover:font-normal hover:scale-105 cursor-pointer'>New Recipes</div>
          <div className='hover:ml-2 transition-all hover:bg-black hover:text-white hover:px-3 py-1 rounded-md hover:font-normal hover:scale-105 cursor-pointer'>Contact Us</div>
        </div>

        <div className='flex items-center justify-center gap-8'>
          <div className='flex items-center justify-center gap-2'>
            <UserCircle size={30} />
            <p className='font-medium'>{user.name}</p>
          </div>
          <button onClick={logout} className="bg-red-600 text-white px-3 py-1 rounded-md text-center">Logout</button>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
