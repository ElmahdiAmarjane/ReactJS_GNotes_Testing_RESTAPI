import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import NoteCard from "./NoteCard";
import EditNote from "./EditNote";
import { Navigate } from "react-router-dom";

const ManageNote = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [isEditClicked, setEditClicked] = useState(false);
  const [hideEditPop, setHideEditPop] = useState(true);
  const [noteClicked, setNoteClicked] = useState(null);

  const getAllNotes = async () => {
    if (sessionStorage.getItem("currentUser") != null) {
      let id = sessionStorage.getItem("currentUserId");
      await axios
        .post("http://localhost:9080/gnote/api/gnotes/v1/notes/allNotes", {
          id,
        })
        .then((res) => {
          setAllNotes(res.data);
        });
    } else {
      Navigate("/");
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const isEditClickedHandler = (note) => {
    setEditClicked(true);
    setNoteClicked(note);
    setHideEditPop(true); // Ensure EditNote is visible when Edit is clicked
  };

  const cancelEditPop = () => {
    setHideEditPop(false);
  };

  const saveEdit = () => {
   
    setHideEditPop(false); // Hide EditNote after saving changes
  };

  return (
    <>
      <Navbar />
      <h1>
        Welcome to manage your notes, normal user,{" "}
        {sessionStorage.getItem("currentUser")}
      </h1>
      {isEditClicked ? (
        <EditNote
          note={noteClicked}
          hideEditPop={hideEditPop}
          cancelEditPop={cancelEditPop}
          saveEdit={saveEdit}
          getAllNotes={getAllNotes}
        />
      ) : null}

      <div className="allNotes w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 m-auto mt-10">
        {allNotes.map((note, index) => (
          <NoteCard
            key={note.id}
            note={note}
            getAllNotes={getAllNotes}
            isEditClickedHandler={()=>isEditClickedHandler}
          />
        ))}
      </div>
    </>
  );
};

export default ManageNote;
