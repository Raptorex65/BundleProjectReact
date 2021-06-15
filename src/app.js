import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProtectedRoute from "./auth/protected-route";
import { NavBar, Footer } from "./components";
import { Home, Profile } from "./views";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
        </Switch>
      </Container>
      <Footer/>
    </div>
  );
};

export default App;
