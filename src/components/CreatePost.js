import React, { useState, useEffect } from "react";
import { makePost } from "../api/api";

import { useNavigate } from "react-router-dom";

const navigate = useNavigate

const CreatePost = ({ token, getPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const post = { title, description, price };

    const results = await makePost(post, token);

    if (results.success) {
      getPosts();
      navigate("/posts")
    }
  }

  return (
    <>
      <h1 className="titles">CREATE A LISTING</h1>

      <form className="createpost" onSubmit={handleSubmit}>
        <p>Title</p>
        <input
          type="text"
          placeholder="post.title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <p>Description</p>
        <input
          type="text"
          placeholder="post.description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <p>Price</p>
        <input
          type="text"
          placeholder="post.price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <p>Will Deliver?</p>
        <select
          type="text"
          value={willDeliver}
          onChange={(event) => {
            setWillDeliver(event.target.value);
          }}
        >
          <option value={"No"}>No</option>
          <option value={"Yes"}>Yes</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreatePost;
