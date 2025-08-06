import React, { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";
import { withAlert } from "./withProvider";

const themeMap = {
  success: {
    color: "bg-green-100 text-green-800",
    iconColor: "text-green-600",
    Icon: AiOutlineCheckCircle,
    label: "Success",
  },
  error: {
    color: "bg-red-100 text-red-800",
    iconColor: "text-red-600",
    Icon: MdOutlineDangerous,
    label: "Error",
  },
};

function Alert({alert, setAlert, removeAlert }) {

    useEffect(function(){
        if(alert){
            const timeout = setTimeout(removeAlert , 5 * 1000);
            return function(){
                clearTimeout(timeout);
            };
        }
    },[alert]);


    if(!alert){
        return;
    }

    const { message, type}= alert;
    const { Icon, color,iconColor,label } = themeMap[type];

   return (
    <div className="flex justify-center fixed top-5 inset-x-0 z-50 px-4">
      <div className={`w-full max-w-3xl flex items-center justify-between px-4 py-3 rounded-md shadow-md ${color}`}>
        <div className="flex items-center space-x-3">
          <Icon className={`w-5 h-5 ${iconColor}`} />
          <p className="text-sm font-semibold">{label.toUpperCase()}</p>
          <p className="text-sm">{message}</p>
        </div>
        <button
          className="text-sm font-medium text-gray-500 hover:underline focus:outline-none"
          onClick={removeAlert}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

export default withAlert(Alert);
