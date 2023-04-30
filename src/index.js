import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {
  Home,
  Posts,
  Register,
  CreatePost,
  Login,
  Logout,
  Delete,
  Inbox,
  Message,
  UpdatePost,
} from "./components";
import { fetchPosts, myData } from "./api/api";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [post, setPost] = useState("");

  const tokenCheck = () => {
    {
      window.localStorage.getItem("token: ")
        ? setToken(window.localStorage.getItem("token: "), setIsLoggedIn(true))
        : null;
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  const getPosts = async () => {
    try {
      const result = await fetchPosts(token);
      setPosts(result);
    } catch (error) {
      console.error(" ERROR AT getPosts");
    }
  };

  useEffect(() => {
    getPosts();
  }, [token]);

  const getMyData = async () => {
    try {
      const result = await myData(token);
      setUserData(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Error At getMyInfo");
    }
  };

  useEffect(() => {
    getMyData();
  }, [token]);

  const Pages = () => {
    return (
      <>
        <div className="header">
          <h1 className="title">Stranger's Things</h1>

          <nav id="links">
            <Link to="/" id="link">
              Home
            </Link>
            <Link to="/posts" id="link">
              Posts
            </Link>

            {token ? null : (
              <>
                <Link to="/register" id="link">
                  Register
                </Link>
                <Link to="/login" id="link">
                  Log In
                </Link>
              </>
            )}
            {!token ? null : (
              <>
                <Link to="/createpost" id="link">
                  CreatePost
                </Link>
                <Link to="/inbox" id="link">
                  Inbox
                </Link>
                <Link
                  to="/loggedout"
                  id="link"
                  onClick={() => {
                    setToken(null);
                    window.localStorage.removeItem("token: ", token);
                  }}
                >
                  Log Out
                </Link>
              </>
            )}
          </nav>
        </div>
      </>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Pages />
        <Routes>
          <Route exact path="/">
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route exact path="/posts">
            <Route
              exact
              path="/posts"
              element={
                <Posts
                  posts={posts}
                  token={token}
                  getPosts={getPosts}
                  isLoggedIn={isLoggedIn}
                  setPost={setPost}
                />
              }
            />
          </Route>
          <Route exact path="/inbox">
            <Route
              exact
              path="/inbox"
              element={<Inbox userData={userData} />}
            />
          </Route>
          <Route exact path="/login">
            <Route
              exact
              path="/login"
              element={<Login token={token} setToken={setToken} />}
            />
          </Route>
          <Route exact path="/register">
            <Route
              exact
              path="/register"
              element={<Register token={token} setToken={setToken} />}
            />
          </Route>
          <Route exact path="/createpost">
            <Route
              exact
              path="/createpost"
              element={<CreatePost token={token} getPosts={getPosts} />}
            />
          </Route>
          <Route exact path="/loggedout">
            <Route
              exact
              path="/loggedout"
              element={<Logout setToken={setToken} />}
            />
          </Route>
          <Route exact path="/deletedpost">
            <Route exact path="/deletedpost" element={<Delete />} />
          </Route>
          <Route exact path={`/posts/:postId`}>
            <Route
              exact
              path={`:postId`}
              element={<Message post={post} token={token} />}
            />
          </Route>
          <Route exact path={"/update-post/:postId"}>
            <Route
              exact
              path={"/update-post/:postId"}
              element={
                <UpdatePost posts={posts} token={token} getPosts={getPosts} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
