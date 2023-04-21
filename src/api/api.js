const COHORT_NAME = "2301-FTB-ET-WEB-PT";

const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`; 

export const fetchPosts = async() => {
  console.log('fetchPosts');
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    const posts = data.data.posts;
    console.log("posts:", posts)
    return posts;
  } catch (error) {
    throw (error)
  }
}


export const fetchUser = async (user) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user
        }),
      });
    const result = await response.json();

    console.log(result)
    return result
  } catch (err) {
    console.error(err);
  }
}

export const login = async (user) => {
  
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user
      }),
    });
    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err)
  }
}


export const makePost = async (post) => {

  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
      body: JSON.stringify({
        post: {
          title: {title},
          description: {description},
          price: {price},
          willDeliver: true
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}
