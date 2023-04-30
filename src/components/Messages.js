import React, { useState } from "react";

import { postMessage } from "../api/api";

import { useNavigate } from "react-router-dom";

const Message = ({ post, token }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const message = { content };

  return (
    <div key={post._id}>
      <h2>{post.title}</h2>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await postMessage(post._id, token, message);
          {
            result.success ? navigate("/") : console.log("send message");
          }
        }}
      >
        <input
          type="text"
          placeholder="Message"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Message;
