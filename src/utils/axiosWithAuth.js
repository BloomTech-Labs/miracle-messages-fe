import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("okta-token-storage"));

  let baseUrl;
  if (process.env.NODE_ENV === "development") {
    baseUrl = "https://miracle-messages-dev.herokuapp.com/";
  } else {
    baseUrl = `https://miracle-messages-dev.herokuapp.com/`;
  }
  if (token) {
    return axios.create({
      baseURL: baseUrl,
      headers: {
        Bearer: token.accessToken.value,
      },
    });
  } else {
    return axios.create({
      baseURL: baseUrl,
    });
  }
};
