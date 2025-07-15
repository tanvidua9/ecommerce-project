import React from "react";
import { ImSpinner9 } from "react-icons/im";

function Loading(){
    return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <ImSpinner9 className="animate-spin text-5xl text-indigo-800" />
    </div>
  );
}

export default Loading;