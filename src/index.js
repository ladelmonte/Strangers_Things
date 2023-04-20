import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"; //switch === routes
import { Home, Posts, Register } from "./components";
import { fetchPosts, fetchUser } from "./api/api";


const Pages = () => {

  return <>
  <div className="header">
<h1 className="title">Stranger's Things</h1>

  <nav id="links">
  <Link to="/" id="link"  >Home</Link>
  <Link to="/posts" id="link">Posts</Link>
  <Link to="/profile" id="link">Profile</Link>
  <Link to="/login" id="link">Log In</Link>
  </nav>
  </div>
  </>
}

 

const App = () => {
  const [posts, setPosts] = useState([]);
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  function tokenCheck() {
  if (window.localStorage.getItem('token')) {
    setToken(window.localStorage.getItem('token'))
  }
  }

  useEffect(() => {
    tokenCheck();
  }, [])

  console.log("token: ", token)


  useEffect (() => {

    const getPosts = async() => {
        try {
            const result = await fetchPosts(posts)
            setPosts(result)
        } catch(error) {
            console.error(" ERROR AT APP USEEFFECT")
        }
    };
    getPosts();
  }, [])
  

  return <>
  <BrowserRouter>
  <Pages />
<Routes>
  <Route exact path="/">
    <Route exact path="/" element={<Home/>} />
  </Route>
  <Route exact path="/posts">
    <Route exact path="/posts" element={<Posts posts={posts} />} />
  </Route>
  <Route exact path="/login">
    <Route exact path="/login" element={<Register setToken={setToken}/>} />
  </Route>
</Routes>
</BrowserRouter>

  
     </>

};


ReactDOM.createRoot(document.getElementById("app")).render(<App />); // .render = .createRoot().render()
