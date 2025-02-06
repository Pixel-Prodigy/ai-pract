import React from "react";
import { useContext } from "react";
import { Context } from "./Context";

export function OpenAuth() {
  const { box, toggleBox } = useContext(Context);

 

  return (
    <>
      {box && (
        <div 
          className="fixed z-10 bg-black/80 h-screen w-screen" 
          onClick={toggleBox}
        >
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg h-100 w-86 p-4"
            onClick={e => e.stopPropagation()} 
          >
            <h2 className="text-2xl font-semibold mb-4 text-center ">Sign in to your account</h2>
           
          </div>
        </div>
      )}
    </>
  );
}
