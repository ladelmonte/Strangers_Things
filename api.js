const COHORT_NAME = "2301-FTB-ET-WEB-PT";

const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`; // success: false, route doesnt exist

// const BASE_URL = `https://strangers-things.herokuapp.com/api/2301-FTB-ET-WEB-PT`

export async function fetchPosts() {
  console.log(fetchPosts);

  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error, "ERROR FETCHING POSTS");
  }
}
