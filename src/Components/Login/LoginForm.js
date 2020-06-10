import React, { useEffect } from "react";
import * as OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import "./LoginForm.scss";
import mmLogo from "../../Assets/Imgs/MM_black_logo.png";
import config from "../../config/config";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { loginSuccess } from "../../Actions/AdminPageActions";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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

      /*       authScheme: "SESSION",
       */ i18n: {
        en: {
          "primaryauth.title": "Sign In",
        },
      },
      authParams: {
        pkce: true,
        issuer,
        display: "page",
        responseMode: "query",
        scopes,
      },
    });

    widget.renderEl(
      { el: "#sign-in-widget" },
      () => {
        /* console.log(res);
        console.log("user", res.user);
                console.log("token", res.session.token);
        
        if (res.status === "SUCCESS") {
          localStorage.setItem("okToken", res.session.token);
          localStorage.setItem("userId", res.user.id);
          props.loginSuccess(res.user);
          history.push("/");
        } */
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
        <div
          className="back-btn"
          onClick={() => {
            history.push("/");
          }}
        >
          <ArrowBackIcon /> Back to main page
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.loginReducer.isFetching,
    isLoggedIn: state.loginReducer.isLoggedIn,
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps, {
  loginSuccess,
})(LoginForm);
