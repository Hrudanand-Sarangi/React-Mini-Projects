import { useState } from "react";
export default function Lottery(){
    let[ticket,setTicket]= useState(0);
    let[bingo,setBingo]= useState(0);

    // let lotteryticket=()=>{
    //     setticket((prevticket)=>{
    //         return (Math.floor(Math.random()*900)+100);
    //     });
    // };

    // let sumofDigits=()=>{
    //     setBingo((prevbingo)=>{
    //         return(ticket.toString().split('').reduce((acc, digit) => acc + Number(digit)));
    //     })
    // }

    let lotteryticket = () => {
        let newTicket = Math.floor(Math.random() * 900) + 100;
        setTicket(newTicket);
        sumofDigits(newTicket); // Call function to update bingo
    };

    let sumofDigits = (newTicket) => {
        let sum = newTicket.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
        setBingo(sum);
    };

    return(
        <div>
            <h1>Lottery, Find your Luck!</h1>
            {bingo === 15 && <p>Congratulations, you won!</p>}
            {/* <p onChange={sumofDigits} style={bingo==!15 ? {display:"none"}: {}}>Congratulations, you won!</p>  */}
            <div>
                <p>Lottery Ticket={ticket} </p>
                <button onClick={lotteryticket}>Get New Ticket</button>
            </div>
        </div>
    );
};