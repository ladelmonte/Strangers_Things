const COHORT_NAME = "2301-FTB-ET-WEB-PT";

const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const fetchPosts = async (token) => {
  console.log("fetchPosts");
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }); /// ADD HEADERS, CONTENT TYPE AND TOKEN
    const data = await response.json();
    const posts = data.data.posts;
    // console.log("posts:", posts);
    return posts;
  } catch (error) {
    throw error;
  }
};

export const fetchUser = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
      }),
    });
    const result = await response.json();

    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const login = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
      }),
    });
    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const makePost = async (post, token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const myData = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const deletePost = async (token, postId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const postMessage = async (postID, token, message) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postID}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = async (postID, token, updatedPost) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: updatedPost,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// export const fetchQueryResults = async (query) => {

//   const url = `${BASE_URL}/posts`
// }
