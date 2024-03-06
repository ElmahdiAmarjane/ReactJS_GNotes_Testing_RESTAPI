import React, { useEffect, useState } from "react";
import axios from "axios";
const EditNote =({note,cancelEditPop,hideEditPop,saveEdit,getAllNotes})=>{
   //console.log("note from edit  ! iji: ", note.subject);
    const [body , setBody] = useState(note.body);
    const [subject , setSubject] = useState(note.subject);
    //const [hideEditpop , setHideEditPop] = useState(true);
    console.log(subject , body , "id note : ",note.id);
      const saveChange = ()=>{
             console.log(subject , body , "id note : ",note.id);
             console.log("ddd")
           axios.post("http://localhost:9080/gnote/api/gnotes/v1/notes/updateNote" , 
              { id:note.id,
                subject : subject,
                body : body }

            ).then((res)=>{
                console.log("data from save : ",res.data);
                //setHideEditPop(false);
                getAllNotes();
                
            })

            
       
      }
        const handleInputBody=(e)=>{
             setBody(e.target.value);
             note.body=e.target.value;
        }      
        const handleInputSubject=(e)=>{
            setSubject(e.target.value);
            note.subject=e.target.value;
       }  
 



    return (

        <>
        {hideEditPop? 
<div className="flex justify-center mt-5 px-8   items-center    ">
    <form className="max-w-2xl">
        <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
            <h2 className="text-xl text-gray-600 dark:text-gray-300 pb-2">Edit note</h2>

            <div className="flex flex-col gap-2 w-full border-gray-400">

                <div>
                    <label className="text-gray-600 dark:text-gray-400">
                        Title
                    </label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text" value={note.subject} onChange={(e)=>{handleInputSubject(e)}} />
                </div>

               

                <div>
                    <label className="text-gray-600 dark:text-gray-400">Body </label>
                    <textarea
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                       
                        value={note.body}  onChange={(e)=>handleInputBody(e)}
                        ></textarea>
                </div>
                <div className="flex justify-end ">
                    <button
                        className="py-1.5 px-3 m-1 text-center bg-green-700  rounded-md text-white  hover:bg-green-700 hover:text-gray-100 dark:text-gray-200 dark:bg-green-600"
                         onClick={()=>{saveEdit();saveChange()}}>Save changes</button>
                        <button
                        className="py-1.5 px-3 m-1 text-center bg-rose-600  rounded-md text-white  hover:bg-rose-600 hover:text-gray-100 dark:text-gray-200 dark:bg-rose-400"
                         onClick={()=>{cancelEditPop()}} >Cancel</button>
                </div>
            </div>
        </div>
    </form>
</div>
   
  : null}

        </>
    )
}

export default EditNote;