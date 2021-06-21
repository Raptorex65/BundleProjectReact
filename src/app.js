import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from "./auth/protected-route";
import { NavBar, Footer } from "./components";
import { Home, Profile, About, Bundle } from "./views";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";
import Item from './components/Bundle/Item';
import bundleItems from './components/BundleItems'
import { Container } from "react-bootstrap";

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
          <Route path='/bundle'>
            <Bundle bundleItems={bundleItems}/>
          </Route>
          
          <Route path='/bundle/:id' children={<Item/>} />

          <ProtectedRoute path="/checkout" component={Profile}/>

        </Switch>
        </Container>

        <Footer/>
    </Router>
    </div>

  );
};

export default App;
