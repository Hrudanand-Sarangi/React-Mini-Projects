import { useState } from "react";
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required cannot be empty';
    }
  
    return errors;
  };

export default function CommentsForm({addNewComment}){
    const formik = useFormik({
        initialValues: {
            username:"",
            remarks:"",
            rating:"",
        },
        validate,
        onSubmit: (values,{resetForm}) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          addNewComment(values);
        },
      });
    // let [comment,setComment]=useState({
    //     username:"",
    //     remarks:"",
    //     rating:"",
    // });
    // let commentInput=(event)=>{
    //     setComment((currData)=>{
    //         return{...currData,[event.target.name]:event.target.value};
    //     });
    // };
    // let afterSubmition=(event)=>{
    //     event.preventDefault();
    //     console.log(comment);
    //     addNewComment(comment);
    //     setComment({
    //         username:"",
    //         remarks:"",
    //         rating:"",
    //     });
    // };
    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username</label>&nbsp;&nbsp;
            <input type="text" placeholder="username" id="username"  value={formik.values.username} name="username" onChange={formik.handleChange}/>
            {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
            &nbsp;&nbsp;<br /><br />
            <label htmlFor="remarks">Remarks</label>&nbsp;&nbsp;
            <textarea name="remarks" placeholder="Write a Comment" id="remarks" value={formik.values.remarks} onChange={formik.handleChange}></textarea>&nbsp;&nbsp;<br /><br />
            <label htmlFor="rating">Rating</label>&nbsp;&nbsp;
            <select name="rating" id="rating" value={formik.values.rating} onChange={formik.handleChange}>
                <option >Select a Rating</option>
                <option > 1</option>
                <option > 2</option>
                <option > 3</option>
                <option > 4</option>
                <option > 5</option>
            </select><br /><br />
            <button type="submit">Submit</button>
        </form>
    );
}