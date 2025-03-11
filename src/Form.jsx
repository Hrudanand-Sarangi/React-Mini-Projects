import { useState } from "react";

export default function Form(){
    let[formInfo,setFormInfo]= useState({
        fullname:"",
        username:"",
        password:"",
    });

    let handelNamechange=(event)=>{
    setFormInfo((currData)=>{
        return{...currData,[event.target.name]:event.target.value};
    });
};

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formInfo);
        setFormInfo({
            fullname:"",
            username:"",
            password:"",
        });
    };
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>&nbsp;&nbsp;
            <input type="text" placeholder="write your full Name"
            value={formInfo.fullname} onChange={handelNamechange} id="fullname" name="fullname"/>&nbsp;&nbsp;

            <label htmlFor="username">User Name</label>&nbsp;&nbsp;
            <input type="text" placeholder="User Name"
            value={formInfo.username} onChange={handelNamechange} id="username" name="username"/>&nbsp;&nbsp;

            <label htmlFor="password">Password</label>&nbsp;&nbsp;
            <input type="text" placeholder="write your full Name"
            value={formInfo.password} onChange={handelNamechange} id="password" name="password"/>&nbsp;&nbsp;


            <button>Submit</button>
        </form>
    );
}