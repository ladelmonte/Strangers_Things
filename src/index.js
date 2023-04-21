import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"; //switch === routes
import { Home, Posts, Register, CreatePost, Login, Logout } from "./components";
import { fetchPosts, fetchUser } from "./api/api";

 

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
  

  const Pages = () => {

    return <>
    <div className="header">
  <h1 className="title">Stranger's Things</h1>
  
    <nav id="links">
    <Link to="/" id="link"  >Home</Link>
    <Link to="/posts" id="link">Posts</Link>
    {/* <Link to="/profile" id="link">Profile</Link> */} 
    
    {token ? null : (
    <>
      <Link to="/register" id="link">Register</Link>
      <Link to='/login' id="link">Log In</Link>
    </>
    )}
    {!token ? null : (
      <>
          <Link to="/createpost" id="link">CreatePost</Link>
          <Link to="/loggedout" id="link" onClick={() => {
            setToken(null)
            window.localStorage.removeItem("token: ", token)


          }}>Log Out</Link>
      </>    
    )}
    </nav>
    </div>
    </>
  }


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
    <Route exact path="/login" element={<Login setToken={setToken}/>} />
  </Route>
  <Route exact path="/register">
    <Route exact path="/register" element={<Register token={token} setToken={setToken}/>} />
  </Route>
  <Route exact path="/createpost">
    <Route exact path="/createpost" element={<CreatePost />} />
  </Route>
  <Route exact path="/loggedout">
    <Route exact path="/loggedout" element={<Logout setToken={setToken} />} />
  </Route>
</Routes>
</BrowserRouter>

  
     </>

};


ReactDOM.createRoot(document.getElementById("app")).render(<App />); // .render = .createRoot().render()
