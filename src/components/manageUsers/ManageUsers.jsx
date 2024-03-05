
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";
import removeicon from "../../assets/icons/iconremovewhite.png"
import verifyicon from "../../assets/icons/iconeverify.png"
import searchicon from "../../assets/icons/iconsearchlignt.png"
const ManageUsers =  ()=>{
         const [allUsers,setAllUsers ]= useState([]);
                
      const getAllUsers= async ()=>{
            
         await axios.get("http://localhost:9080/gnote/api/gnotes/v1/admin/allUsers" )
                 .then((res)=>{

                  if(res.data!=null){
                    console.log(res.data)
                      setAllUsers(res.data);
                  }

             })

      }
      useEffect(()=>{getAllUsers()},[]);

     return (

        <>
          
      <Navbar/>
       <h1 className="text-center font-100">All users </h1>
        <div className="search  flex  justify-center mt-[50px]">
         <div className=" w-[50%] bg-green flex border-2 rounded-md  border-gray-500 bg-gray-300   justify-center align-center">
             <img src={searchicon} alt="" className=" w-[28px] h-[28px] mt-4  "/>
             <input type="text" className="w-[500px] h-[60px] outline-none  bg-gray-300 pl-4 " placeholder="Search by email" />
         </div>
           
        </div>

   <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[20px]">
    <table className="w-200 m-auto  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col"  className=" px-6 py-3">
                    User Email
                </th>
               
              
                <th scope="col" className="px-6 py-3">
                    isAdmin
                </th>
                <th scope="col" className="px-6 py-3">
                    isVerify
                </th>
                
                <th scope="col" className="px-0 py-0">
                    Accept or Remove
                </th>
            </tr>
        </thead>
        <tbody>
           {allUsers.map((user , index)=>(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {user.email}
             </th>
             <td className="px-6 py-4">
                 {user.admin?<p >YES</p>:<p>NO</p>}
             </td>
             <td className="px-6 py-4">
             {user.verify?<img src={verifyicon} className="w-5"/>:<p className="text-rose-500">Not verify</p>}
             </td>
            
             
           
             <td className="flex items-center px-2 py-4">
                 <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-5 px-2  ">Accept</a>
                 <img src={removeicon} alt="" className="w-5 ml-10  " />
             </td>
         </tr>
           ))}
            
           
           
   
     
           

        </tbody>
    </table>
</div>

        </>
     )


}
export default ManageUsers;