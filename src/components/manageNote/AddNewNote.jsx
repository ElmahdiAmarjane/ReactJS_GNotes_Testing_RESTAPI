import axios from 'axios';
import React, { useState } from 'react';

const AddNewNote = ({getAllNotes}) => {

        const [body,setBody] = useState("");
        const [subject,setSubect]=useState("");
       console.log( sessionStorage.getItem("currentUserId"))
      const addNewNote=async()=>{
            
           await axios.post("http://localhost:9080/gnote/api/gnotes/v1/notes/addNote",{
               body : body,
               subject:subject,
               iduser:sessionStorage.getItem("currentUserId")
            }).then((res)=>{
                 console.log(res.data);
                 getAllNotes();
                 setBody("");
                 setSubect("");
            })
             
      }

     
  return (
    <div>
      <div className=" w-[60%] m-auto ">
        <div className="pt-5">
          <div className="">
        
            <div className="flex flex-col items-center">
              <div className=" w-[100%] ">
              
                <input
                 onChange={(e)=>{setSubect(e.target.value)}}
                  id="subject"
                  type="text"
                  value={subject}
                  placeholder="Subject"
                  className="  my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                onChange={(e)=>{setBody(e.target.value)}}
                  id="describe more your note"
                  rows="5"
                  placeholder="Say Something"
                  value={body}
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button
                onClick={()=>{addNewNote()}}
                className=" mb-5 border-2 text-md  rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Add new Note
              </button>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewNote;
