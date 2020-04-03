import React from "react";
import { Redirect } from "react-router-dom";
import CustomLoginForm from "./CustomLoginForm";
import { useOktaAuth } from "@okta/okta-react";

const CustomLogin = ({ baseUrl }) => {
  const { authState } = useOktaAuth();

  if (authState.isPending) {
    return <div>Loading...</div>;
  }
  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: "/admin" }} />
  ) : (
    <CustomLoginForm baseUrl={baseUrl} />
  );
};

export default CustomLogin;
