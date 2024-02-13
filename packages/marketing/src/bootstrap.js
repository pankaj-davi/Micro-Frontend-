import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

// define mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <App />
        , el
    )
}


// if we are in development and isoaltion
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_marketing-dev-root")
    if (devRoot) {
        mount(devRoot)
    }
}
//call mount immediately


//we are running through container
//and we should export the mount function
export { mount };