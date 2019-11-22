import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../header/header.js";
import Sidebar from "../sidebar/sidebar.js";
import Footer from "../footer/footer.js";
import ThemeRoutes from "../routes/routing.js";

class Fulllayout extends React.Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      isOpen: false,
      width: window.innerWidth
    };

    this.props.history.listen((location, action) => {
      if (
        window.innerWidth < 767 &&
        document
          .getElementById("main-wrapper")
          .className.indexOf("show-sidebar") !== -1
      ) {
        document
          .getElementById("main-wrapper")
          .classList.toggle("show-sidebar");
      }
    });
  }

  componentDidMount() {
    window.addEventListener("load", this.updateDimensions);
    window.addEventListener("resize", this.updateDimensions);
  }

  //Previous settings for media queries
  // updateDimensions() {
  //   let element = document.getElementById("main-wrapper");
  //   this.setState({
  //     width: window.innerWidth
  //   });
  //   if (this.state.width < 1170) {
  //     element.setAttribute("data-sidebartype", "mini-sidebar");
  //     element.classList.add("mini-sidebar");
  //   } else {
  //     element.setAttribute("data-sidebartype", "full");
  //     element.classList.remove("mini-sidebar");
  //   }
  // }

    updateDimensions() {
    let element = document.getElementById("main-wrapper");
    this.setState({
      width: window.innerWidth
    });
    if (this.state.width < 767) {
      element.setAttribute("data-sidebartype", "mini-sidebar");
      element.classList.add("mini-sidebar");
    } else {
      element.setAttribute("data-sidebartype", "full");
      element.classList.remove("mini-sidebar");
    }
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.updateDimensions);
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div
        id="main-wrapper"
        data-theme="light"
        data-layout="vertical"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
        data-boxed-layout="full"
      >
        <Header data={this.state} />

        <Sidebar data={this.state} {...this.props} routes={ThemeRoutes} />

        <div className="page-wrapper d-block">
          <div className="page-content container-fluid">
            <Switch>
              {ThemeRoutes.map((prop, key) => {
                // console.log(prop)
                if (prop.redirect) {
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  );
                } else {
                  return (
                    <Route
                      exact
                      key={key}
                      path={prop.path}
                      render={props => <prop.component {...props} />}
                    />
                  );
                }
              })}
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Fulllayout;
