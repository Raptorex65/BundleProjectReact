import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history"
import "./index.css";
import { ItemsProvider } from "./context/items-context";
import { ImagesProvider } from "./context/images-context";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { FilterProvider } from './context/filter_context'

ReactDOM.render(
  <React.StrictMode>
    <ItemsProvider>
      <ImagesProvider>
        <Auth0ProviderWithHistory>
          <Router>
            <App />
          </Router>
        </Auth0ProviderWithHistory>
      </ImagesProvider>
    </ItemsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
