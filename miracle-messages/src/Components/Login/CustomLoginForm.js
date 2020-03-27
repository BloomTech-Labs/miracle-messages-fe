import React, { useState } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';

import config from '../../config/config';

const CustomLoginForm = ({ baseUrl }) => { 
  const { authService } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { pkce, issuer, clientId, redirectUri, scopes } = config.oidc;

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const oktaAuth = new OktaAuth({
        /**
         * Note: when using the Sign-In Widget for an OIDC flow, it still
         * needs to be configured with the base URL for your Okta Org. Here
         * we derive it from the given issuer for convenience.
         */
        baseUrl: issuer.split('/oauth2')[0],
        clientId,
        redirectUri,
        issuer,
        logo: '/react.svg',
        i18n: {
          en: {
            'primaryauth.title': 'Sign in to React & Company',
          },
        },
        authParams: {
          pkce,
          issuer,
          display: 'page',
          scopes,
        },
      });
    oktaAuth.signIn({ username, password })
      .then(res => setSessionToken(res.sessionToken))
      .catch(err => console.log('Found an error', err));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (sessionToken) {
    authService.redirect({ sessionToken });
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          id="username" type="text"
          value={username}
          onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input
          id="password" type="password"
          value={password}
          onChange={handlePasswordChange} />
      </label>
      <input id="submit" type="submit" value="Submit" />
    </form>
  );
};
export default CustomLoginForm;