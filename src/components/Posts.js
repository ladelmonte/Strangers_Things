import React, { useEffect, useState } from "react";
import { deletePost } from "../api/api";
import { useNavigate } from "react-router-dom";


const Posts = ({ posts, token, result }) => {
  const navigate = useNavigate()

  return (
    <>
      <h2 className="titles"> Lists of Posts</h2>
      <div className="postCards">
        {posts.map((post) => {
          console.log(post.isAuthor)
          return (
            <div key={post._id} className="postCard">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>Price: {post.price}</p>
              <p>
                {post.isAuthor === true
                  ? <button onClick={() => {
                    deletePost(token, post._id)
                    navigate("/deletedpost")
                  }}>DELETE</button>
                  : console.log(post.author._id)}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
