
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import NoteCard from "./NoteCard";
import { Navigate } from "react-router-dom";
import axios from "axios"
const ManageNote = ()=>{
   const [allNotes , setAllNotes] = useState([])
   const getAllNotes = async()=>{
      if(sessionStorage.getItem("currentUser")!=null){
        let  id = sessionStorage.getItem("currentUserId")
         console.log(sessionStorage.getItem("currentUserId"));
       await axios.post("http://localhost:9080/gnote/api/gnotes/v1/notes/allNotes", {
           id
           
         })
         .then(res => {
           console.log(res.data)
           console.log(typeof(res.data))
            setAllNotes(res.data);
           
         });

      }else{
        Navigate("/");
      }
}
getAllNotes();

     return (
        <>
        <Navbar/>
        <h1> welcom to manage  you notes , normal user , {sessionStorage.getItem("currentUser")}</h1>
           <div className="allNotes  w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 m-auto mt-10 ">
               {
                  allNotes.map((note, index) => (
                     <>
                      <NoteCard key={index} note={note} />
                     <NoteCard key={index} note={note} />
                     <NoteCard key={index} note={note} />
                     <NoteCard key={index} note={note} />
                     <NoteCard key={index} note={note} />
                     <NoteCard key={index} note={note} />
                     </>
                    
                   ))
                   
               }
              
              

           </div>
        </>
     )

}

export default ManageNote;


//allNotes w-4/5 mx-auto  bg-black flex  flex-wrap justify-evenly"