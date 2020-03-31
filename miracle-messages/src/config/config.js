const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || '0oa4z3i22O2AsShIr4x6';
const ISSUER = process.env.REACT_APP_ISSUER || 'https://dev-636641.okta.com/oauth2/default';

// The callback path always goes to the same route
const CALLBACK_PATH = '/implicit/callback/';

// The callback may be on HTTP or HTTPS; default to HTTPS
const CALLBACK_SSL = process.env.REACT_APP_CALLBACK_SSL || true

// The callback should always come back to this host; will be http or https depending on the setting
const REDIRECT_URI = `${CALLBACK_SSL == true ? "https" : "http"}://${window.location.host}${CALLBACK_PATH}`;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,

    // If the callback is _not_ over SSL, disable the HTTPS check in the client
    disableHttpsCheck: !CALLBACK_SSL,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
