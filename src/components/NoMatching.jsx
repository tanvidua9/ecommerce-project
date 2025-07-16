import React from "react";

function NoMatching({ children }) {
  return (
    <div className="bg-orange-100 border border-orange-400 text-orange-800 px-4 py-2 rounded text-center my-2">
      {children}
    </div>
  );
}

export default NoMatching;
