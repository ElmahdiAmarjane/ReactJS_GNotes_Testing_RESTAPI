import React from "react";

const NoteCard = ({note}) => {
  return (
    <>
      <div className="group block h-70 relative  max-w-[14rem] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  bg-neutral-700 hover:bg-gray-900">
        <div className="p-6    ">
          <h5 className="overflow-auto max-h-[5rem] mb-1 text-xl font-medium  text-neutral-800 dark:text-neutral-50">
            {note.subject}
            
          </h5>

          <p className="mb-10 text-base text-neutral-600 dark:text-neutral-200  overflow-auto max-h-[10rem]">
          {note.body}
          </p>
          <div className="  opacity-0 transition-opacity group-hover:opacity-100 w-[10rem] bottom-0 absolute flex justify-evenly  mt-5 mb-5">
          <a
            type="button"
            href="#"
            className=" bg-indigo-600 px-3 py-1 text-white pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:scale-105 bg-black  focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
          >
            Edit
          </a>

          <a
            type="button"
            
            className=" hover:scale-105 bg-gray-600 px-3 py-1 text-rose-600 pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
          >
            Delete
          </a>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default NoteCard;
