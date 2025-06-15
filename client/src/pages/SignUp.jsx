import React, { useState } from 'react'
import axios from 'axios';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import gourmetimg from '../assets/gourmet.png';
import { Mail, Lock, User, UserCircle } from 'lucide-react';

const SignUp = () => {


  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      login(res.data.user, res.data.token);
      navigate('/login');
    }
    catch(err)
    {
      alert(err.response?.data?.msg || 'SignUp Failed')
    }

  }

  const Tologin = () => {
    navigate('/login');
  }

  return (
    <div className='min-h-screen bg-gray-200'>

      <div className='flex flex-row items-end justify-center h-screen p-15'>
        {/* Left Flank */}

        <div className='bg-white flex flex-col items-center justify-center p-8 gap-6 w-[42%] h-full rounded-2xl shadow-lg  shadow-gray-400'>

          <div className='flex flex-col items-center justify-center w-full'>
            <img src={gourmetimg} width={250} height={200} className='cursor-pointer'></img>
            <p className='text-md font-medium text-gray-500 text-center'>Signup To Explore Asthestics of Delicacies WorldWide</p>
          </div>


          <hr className='w-[60%] border border-gray-400'></hr>

          <div className='flex items-center justify-center w-1/3 rounded-2xl bg-gray-300'>
            <div className='w-full text-center p-1 bg-black text-white rounded-xl cursor-pointer'>SignUp</div>
            <div className='w-full text-center p-1 cursor-pointer' onClick={Tologin}>Login</div>
          </div>


          <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-2 w-[70%]'>
            <div className='relative w-full'>
              <label className='absolute font-semibold -top-3 left-14 
            bg-white px-2 z-10'>
                Name
              </label>
              <div className='flex flex-row items-center justify-center gap-2'>
                <UserCircle size={28} />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={handleChange}
                  required
                  className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className='relative w-full'>
              <label className='absolute font-semibold -top-3 left-14 
            bg-white px-2 z-10'>
                Email Address
              </label>
              <div className='flex flex-row items-center justify-center gap-2'>
                <Mail size={28} />
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className='relative w-full'>
              <label className='absolute font-semibold -top-3 left-14 
            bg-white px-2 z-10'>
                Password
              </label>
              <div className='flex flex-row items-center justify-center gap-2'>
                <Lock size={28} />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  onChange={handleChange}
                  required
                  className="w-full py-2 px-3 border-2 border-gray-300 rounded-lg placeholder:text-gray-400"
                />
              </div>
            </div>


            <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg mb-10">Register</button>


          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
