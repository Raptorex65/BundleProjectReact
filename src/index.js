import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history"
import "./index.css";
import { AppProvider } from './components/Bundle/context'

ReactDOM.render(
<React.StrictMode>
<AppProvider>
  <Router>
    <Auth0ProviderWithHistory>
      <App /> 
    </Auth0ProviderWithHistory>
  </Router>
  </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
