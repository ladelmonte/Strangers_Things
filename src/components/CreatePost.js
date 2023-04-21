import React from "react";

import { makePost } from "../api/api";


const CreatePost = () => {




    return (
        <>
        <h2 className="titles">CREATE A LISTING</h2>
        

        <form className="createpost">
        <input placeholder="post.title"/> 
        <input  placeholder="post.description"/> 
        <input  placeholder="post.price"/> 
        <input  placeholder="post.location"/> 
        <input  placeholder="post.willDeliver"/> 

        </form>
</>
    )
}

export default CreatePost;
