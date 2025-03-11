import { useState } from "react";

export default function LudoBord(){

    let[moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0});
    let[count,setCount]=useState(0);

    let updateBlue=()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,blue:prevMoves.blue+=1};
        });
    };
    let updateYellow=()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,yellow:prevMoves.yellow+=1};
        });
    };
    let updateGreen=()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,green:prevMoves.green+=1};
        });
    };
    let updateRed=()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,red:prevMoves.red+=1};
        });
    };
   

    return(
        <div>
            <h1>Ludo Bord</h1>
            <div>
                <p>Blue moves:{moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>yellow moves:{moves.yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>+1</button>
                <p>Green moves:{moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves:{moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
            
        </div>
    );
}