import React, { useEffect, useState } from "react";
import { deletePost } from "../api/api";
import { useNavigate, useParams, Link } from "react-router-dom";

import { Search } from "./Search.js";

const Posts = ({ posts, token, getPosts, isLoggedIn, setPost }) => {
  const navigate = useNavigate();

  const [queryString, setQueryString] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
       setQueryString(event.target.value)};
       if (queryString.length > 0) {
           posts.filter((post) => { 
               const result = post.title.match(queryString);

               // (result ? console.log(result) : null)
               // console.log(result)
           if (result === null) {
               // console.log("nothing to see here")
           } else {
              //  console.log(result)
               return result
           }
           })
       }



  return (
    <>
      <h1 className="titles"> Lists of Posts</h1>

    <div className="searchBar">
      <input
          id="keywords"
          type="text"
          className="search"
          placeholder="enter keywords..."
          value={queryString}
          onChange= {handleChange}
        />
</div>
        {queryString.length ? (
          <Search posts={posts} queryString={queryString} isLoggedIn={isLoggedIn}/>
            ) : (
              
      <div className="postCards">
        {posts.map((post) => {
          return (
            <div key={post._id} className="postCard">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>Price: {post.price}</p>
              <p>Will Deliver? {post.willDeliver ? "Yes" : "No"}</p>
              <p>
                {post.isAuthor === true ? (
                  <>
                    <button
                      onClick={() => {
                        deletePost(token, post._id);
                        getPosts();
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
      </div>)}
    </>
  )
};

export default Posts;
