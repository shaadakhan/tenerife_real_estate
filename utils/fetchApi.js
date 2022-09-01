import axios from "axios";

export const baseUrl =
  "https://tenerifepropertyforsalenow.co.uk/wp-json/properties";

export const fetchApi = async (url) => {

  const { data } = await axios.get(url, {
    method: "GET",
  });
  return data;
};
