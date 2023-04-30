import React from "react";

export const Search = ({ posts, queryString }) => {

  return (
    <>
      <div className="postCards">
        {posts.map((post) => {
          if (post.title.includes(queryString)) {
            console.log(post);
            const { _id, title, description, price } = post;

            return (
              <>
                <div key={_id} className="postCard">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <p>Price:{price}</p>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default Search;
