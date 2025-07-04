import React,{useState} from "react";
import TableRow from "./TableRow";



function Table() {
    const [num,updateNum]= useState(2);

    function nextTable(){
        updateNum(num+1);
    }


    return (
        <div className="flex flex-col">
            <button onClick={nextTable} class="bg-purple-500 text-white p-4">
                Next 
            </button>
            <div >
            <TableRow number ={num} index={1}/>
            <TableRow number ={num} index={2}/>
            <TableRow number ={num} index={3}/>
            <TableRow number ={num} index={4}/>
            </div>
        </div>
    );
}

export default Table;
