const CLIENT_ID = process.env.CLIENT_ID || '0oa4sulf3qW8OTVdF4x6';
const ISSUER = process.env.ISSUER || 'https://dev-662389.okta.com/oauth2/default';
//might not need profile 
export default {
    oidc: {
      clientId: CLIENT_ID,
      issuer: ISSUER,
      redirectUri: window.location.origin + '/implicit/callback',
      //redirectUri: 'http://localhost:3001/implicit/callback',
      scopes: ['openid', 'profile', 'email'],
      //onAuthRequired={onAuthRequired},
      pkce: true,
    },
    /*
    resourceServer: {
      messagesUrl: 'http://localhost:8000/api/messages',
    },
    */
  };