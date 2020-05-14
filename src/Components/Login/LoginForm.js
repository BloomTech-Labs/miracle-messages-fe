import React, { useEffect } from "react";
import * as OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import "./LoginForm.scss";
import mmLogo from "../../Assets/Imgs/MM_black_logo.png";
import config from "../../config/config";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config.oidc;

    const widget = new OktaSignIn({
      baseUrl: issuer.split("/oauth2")[0],
      clientId,
      redirectUri,
      logo: mmLogo,
      features: {
        registration: true,
      },

      authScheme: "SESSION",
      i18n: {
        en: {
          "primaryauth.title": "Sign In",
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
      (res) => {
        console.log(res);
        res.status === "SUCCESS" && history.push("/");
      },
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
