const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "0oac2l3f67qM9MChZ4x6";
const ISSUER =
  process.env.REACT_APP_ISSUER || "https://dev-750287.okta.com/oauth2/default";
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

// The callback path always goes to the same route

// The callback may be on HTTP or HTTPS; default to HTTPS

// The callback should always come back to this host; will be http or https depending on the setting

/* let REDIRECT_URI;
if (process.env.NODE_ENV === "development") {
  REDIRECT_URI = `http://localhost:3000/implicit/callback`;
} else if{
  REDIRECT_URI = `${CALLBACK_SSL === true ? "https" : "http"}://${
    window.location.host
  }${CALLBACK_PATH}`;
} */

const prod =
  "https://production.d3iery6e42ccvf.amplifyapp.com/implicit/callback";


const dev = "http://localhost:3000/implicit/callback";

const uriConfig = process.env.NODE_ENV === "development" ? dev : prod;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: uriConfig,
    scopes: ["openid", "profile", "email", "groups"],
    pkce: true,
    // If the callback is _not_ over SSL, disable the HTTPS check in the client
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
};
