import React from "react";
import { Redirect } from "react-router-dom";
import CustomLoginForm from "./CustomLoginForm";
import { useOktaAuth } from "@okta/okta-react";

import config from '../../config/config';


const CustomLogin = ({ baseUrl }) => {
  const { authState } = useOktaAuth();

  const { pkce, issuer, clientId, redirectUri, scopes } = config.oidc;


  if (authState.isPending) { 
    return <div>Loading...</div>;
  }
  return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/admin' }}/> :
    <CustomLoginForm baseUrl={issuer.split('/oauth2')[0]} />;
};

export default CustomLogin;
