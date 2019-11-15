import ReactGA from "react-ga"
require("dotenv").config()

export const gaEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  })
}
