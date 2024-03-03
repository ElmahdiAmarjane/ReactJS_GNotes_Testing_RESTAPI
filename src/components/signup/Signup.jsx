
import React from 'react';
import { Link } from 'react-router-dom';
import iconhome from "../../assets/icons/homeicon.png"

const Signup = ()=>{

   return(
<div className="overflow-hidden bg-gray-900 ">
<div className='float-right '>
      <Link to="/"><img src={iconhome} alt="" className='mr-10 mt-5 w-8'  /></Link> 
    </div>
      <div className="   h-screen  lg:px-8 lg:py-10">

        <div className="flex flex-col items-center justify-between xl:flex-row">
       
             
              <div className=" bg-white rounded shadow-2xl p-5 sm:p-6">
                <h3 className="mb-4 text-xl text-center font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                 Create your account 
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="your email here"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="your password here"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium"
                    >
                      Confirm Password
                    </label>
                    <input
                      placeholder="Retype password here"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      
                    />
                  </div>
                  <div className="mt-4  bg-gray-400 ">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 hover:border-2 border-black focus:shadow-outline focus:outline-none "
                    >
                      Sign up 
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm mt-5 text-center">
                    Already have  Account ,<Link to="/login"><span className="text-white text-green-600 p-2 font-bold hover:cursor-pointer ">Log in now</span> </Link> 
                  </p>
                </form>
              </div>

            </div>
          </div>
          
        </div>


   )
}

export default Signup;