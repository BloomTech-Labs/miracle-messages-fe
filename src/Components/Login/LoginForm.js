import React, { useEffect } from "react";
import * as OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";

import config from "../../config/config";

const LoginForm = () => {
  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config.oidc;
    const widget = new OktaSignIn({
      baseUrl: issuer.split("/oauth2")[0],
      clientId,
      redirectUri,
      logo: "/react.svg",
      i18n: {
        en: {
          "primaryauth.title": "Miracle Messages",
        },
      },
      authParams: {
        pkce,
        issuer,
        display: "page",
        scopes,
      },
    });

    widget.renderEl(
      { el: "#sign-in-widget" },
      () => {},
      (err) => {
        throw err;
      }
    );
    return function cleanUp() {
      widget.remove();
    };
  }, []);

  return (
    <div className="navBar" style={{ margin: "0", padding: "0" }}>
      <div>
        <div id="sign-in-widget" />
      </div>
    </div>
  );
};
export default LoginForm;
