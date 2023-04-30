import React, { useEffect, useState } from "react";
import { deletePost } from "../api/api";
import { useNavigate, useParams, Link } from "react-router-dom";

const Posts = ({ posts, token, getPosts, isLoggedIn, setPost }) => {
  const navigate = useNavigate();
  const postID = useParams();

  return (
    <>
      <h1 className="titles"> Lists of Posts</h1>
      <div className="postCards">
        {posts.map((post) => {
          console.log(post.isAuthor);
          return (
            <div key={post._id} className="postCard">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>Price: {post.price}</p>
              <p>
                {post.isAuthor === true ? (
                  <>
                    <button
                      onClick={() => {
                        deletePost(token, post._id);
                        getPosts();
                        // navigate("/deletedpost")
                        // window.location.reload();
                      }}
                    >
                      DELETE
                    </button>
                    <Link to={`/update-post/${post._id}`}>
                      <button onClick={() => {}}>EDIT POST</button>
                    </Link>
                  </>
                ) : isLoggedIn ? (
                  <button
                    onClick={() => {
                      let postID = post._id;
                      setPost(post);
                      navigate(`posts/${postID}`);
                    }}
                  >
                    Message
                  </button>
                ) : null}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
