const API_KEY = "bb1bc9fee2af4797bd0113801251810";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    //add the query string to the base url
    const res = await fetch(BASE_URL + queryString);
    //the api data is json format, covert to js object
    const data = await res.json();
    console.log("Data:", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { show };
