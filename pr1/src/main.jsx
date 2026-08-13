import React from "react"; //React provides the functionality needed to create components
import ReactDOM from "react-dom/client"; //ReactDOM is responsible for displaying (rendering) React components in the browser.
import { BrowserRouter } from "react-router-dom";
import App from "./App" //imports the App component, which contains all our other components.
import "./index.css"


//in index.html we have <div id="root"></div>

//render() tells React what to display.Here display the app component

ReactDOM.createRoot(document.getElementById("root")).render( //This creates the root of the React application.
  <React.StrictMode> 
    {/* StrictMode that helps developers find mistakes and potential problems in their React application */}
    {/* it give warning  */}

    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)



