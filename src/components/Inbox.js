import React from "react";

const Inbox = ({ userData }) => {
  const { posts, messages } = userData || {};

  console.log(userData);

  console.log(posts);

  return (
    <>
      <h1 className="titles">Inbox</h1>

      <div className="myPosts">
        {posts
          ? posts.map((post) => {
              if (post.active === true) {
                return (
                  <div key={post._id} className="postCard">
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    {post.messages
                      ? post.messages.map((message) => {
                          return (
                            <div key={post._id}>
                              <p id="post-text">
                                <b>Message:</b> {message.content}
                              </p>
                              <p id="post-text">
                                <b>From:</b> {message.fromUser.username}
                              </p>
                            </div>
                          );
                        })
                      : null}
                  </div>
                );
              }
              // console.log(post)
            })
          : null}
      </div>
    </>
  );
};

export default Inbox;
