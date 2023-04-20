import React, {useEffect, useState} from "react";




const Posts = ({posts}) => {
   

    return <>
        <h2 className="titles"> Lists of Posts</h2>
        <div className="postCards">
         {posts.map((post) => {
            return <div key={post._id} className="postCard">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                </div>
         })}
         </div>
  </>
}



export default Posts;