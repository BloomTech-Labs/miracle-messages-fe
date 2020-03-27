const CLIENT_ID = process.env.CLIENT_ID || '0oa4z3i22O2AsShIr4x6';
const ISSUER = process.env.ISSUER || 'https://dev-636641.okta.com/oauth2/default';
const REDIRECT_URI = process.env.REDIRECT_URI || 'http://localhost:3000/implicit/callback';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
