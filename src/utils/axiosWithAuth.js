import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("okta-token-storage"));

  const accessToken = token ? (token.accessToken ? token.accessToken.value : null) : null

  let baseUrl;

  if (process.env.NODE_ENV === "development") {
    baseUrl = "https://miracle-messages-dev.herokuapp.com/";
  } else {
    baseUrl = `https://miracle-messages-dev.herokuapp.com/`;
  }

  return axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
};
