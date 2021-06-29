import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar, Footer } from "./components";
import { Home, About, SingleDetail  } from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";


const App = () => {

  return (

    <Router>
      <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/item/:id'>
            <SingleDetail/>
          </Route>
        </Switch>
        <Footer/>
    </Router>

  );
};

export default App;
