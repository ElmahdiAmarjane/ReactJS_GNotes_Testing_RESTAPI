
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import iconhome from "../../assets/icons/homeicon.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = ()=>{
     const [email , setEmail] = useState("");
     const [password , setPassword] =useState("");
     const [errorInputs,setErrorInputs] = useState("");
     const navigate = useNavigate("");
    const handleLogin = async()=>{
           if(email !== "" && password!==""){
              console.log(email , password);
            await axios.post("http://localhost:9080/gnote/api/gnotes/v1/user/login", {
                email,
                password,
              })
              .then(res => {
                console.log(res.data)
                console.log(typeof(res.data))
                if(res.data!=="" ){
                  sessionStorage.setItem('currentUser', res.data.email);
                  sessionStorage.setItem('currentUserId', res.data.id);
                     if(res.data.admin) navigate("/manageUsers");
                     else navigate("/manageNote");
                }
                else{
                    setErrorInputs("Email or password incorrect")
                }
                
              });




































           }else{
            setErrorInputs("Please fill in all fields");
           }
    }


  
  return(
<div className="overflow-hidden bg-gray-900">
    <div className='float-right '>
      <Link to="/"><img src={iconhome} alt="" className='mr-10 mt-5 w-8'  /></Link> 
    </div>

      <div className="  h-screen    lg:px-8 lg:py-20">
      
        <div className="flex flex-col items-center justify-between xl:flex-row">
           
             
              <div className=" bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-0 text-center text-xl font-semibold sm:text-center sm:mb-4 sm:text-2xl">
                 Log in 
                </h3>
               
                    <p className='text-rose-600 text-center'>{errorInputs}</p>
                  <div className="mb-1 sm:mb-2">
                    <label
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input onChange={(e)=>{setEmail(e.target.value)}}
                      placeholder="your email here"
                     
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input onChange={(e)=>setPassword(e.target.value)}
                      placeholder="your password here"
                      
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="mt-4  bg-gray-400 ">
                    <button onClick={()=>{handleLogin()}}
                     
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 hover:border-2 border-black focus:shadow-outline focus:outline-none "
                    >
                      Log in 
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm mt-5 text-center">
                    don't have an account ,<Link to="/create-account"><span className="text-white text-green-600 p-2 font-bold hover:cursor-pointer ">sign up now</span> </Link> 
                  </p>
               
              </div>

            </div>
          </div>
          
        </div>


   )
}

export default Login;