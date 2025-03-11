import { useState,useEffect } from "react";

export default function Joker(){
    const URL="https://official-joke-api.appspot.com/random_joke";
    const[joke,setJoke]=useState({});

    const getNewjoke=async()=>{
        let responce= await fetch(URL);
        let jsonResponce= await responce.json();
        console.log(jsonResponce);
        setJoke({setup:jsonResponce.setup,punchline:jsonResponce.punchline});
    }
    useEffect(()=>{
        const getfirstJoke= async()=>{
            let responce= await fetch(URL);
            let jsonResponce= await responce.json();
            console.log(jsonResponce);
            setJoke({setup:jsonResponce.setup,punchline:jsonResponce.punchline});
        }
        getfirstJoke();
    },[]);
    return(
        <div>
            <h3>Joker!</h3>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewjoke}>New Joke</button>
        </div>
    );
}