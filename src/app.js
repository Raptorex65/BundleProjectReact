import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './auth/protected-route'
import { NavBar, Footer } from "./components";
import { Home, About, SingleDetail, Forms, Profile, ErrorPage  } from "./pages";
//import ItemDetail from './components/bundle/itemdetail'
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
          <Route path='/form'>
            <Forms/>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/items/:id' children={<SingleDetail />}/>
          <ProtectedRoute path="/profile" component={Profile} />
        </Switch>
        <Footer/>
    </Router>

  );
};

export default App;
