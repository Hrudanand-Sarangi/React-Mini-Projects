import { useState,useEffect } from "react";

export default function UseEffect(){
    let[counter,setCounter]=useState(0);
    const newcounter=()=>{
        setCounter((counter)=>counter+1);
    }
    useEffect(function printSomething(){
        console.log("this is side-effect");
    },[counter]);
    return(
        <div>
            <h3>Counter:{counter}</h3>
            <button onClick={newcounter}>Submit</button>
        </div>
        
    );
}