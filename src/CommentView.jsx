import { useState } from "react";
import CommentsForm from"./CommentsForm"
import "./Commentview.css"
export default function CommentView(){
    let[commentView,setCommentView]=useState([{
        username:"@sk",
        remarks:"Great job",
        rating:4
    }])

    let addNewComment=(commentView)=>{
        setCommentView((currComment)=>[...currComment,commentView]);
    }
    return(
        <div>
            <h3>All Comments</h3>
            
                {commentView.map((commentView,idx)=>(
                    <div className="comment" key={idx}>
                    <span>{commentView.remarks}</span>
                    &nbsp;&nbsp;&nbsp;
                    <span>(rating={commentView.rating})</span>
                    <p>-{commentView.username}</p>
                    </div>
                ))}
                
           
            <hr />
            <CommentsForm addNewComment={addNewComment}/>
        </div>
        
    );
}