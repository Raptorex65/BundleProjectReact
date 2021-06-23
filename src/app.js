import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar, Footer } from "./components";
import { Home, About, Bundle } from "./views";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";
import { Container } from "react-bootstrap";
import SingleItem from "./components/Bundle/item"
const App = () => {

  return (
    <div id="app" className="d-flex flex-column h-100">

    <Router>
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/bundle'>
            <Bundle/>
          </Route>
          <Route path='/bundle/:id' children={<SingleItem/>} />
        </Switch>
        </Container>
        <Footer/>
    </Router>
    </div>

  );
};

export default App;
