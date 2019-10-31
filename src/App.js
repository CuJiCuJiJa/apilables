import React from 'react';
import ReactDom from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import VerticalNav from './components/VerticalNav/VerticalNav';
import Footer from './components/Footer/Footer';
import Home from './views/Home';
import Profile from './views/Profile';
import About from './views/About';
import { NoMatch } from './views/NoMatch';
import './App.scss';
import SignIn from './views/SignIn';


export const App = () => {
  return (
    <div className="container-fluid">
      <VerticalNav />

      <Switch>
        <Route exact path="/Home" component={Home} />


        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
  
      <Route exact path="/Profile" component={Profile} />
        
      <Route exact path="/Login" component={SignIn} />
        
        
        <Route exact path="/About" component={About} />
     
        <Route component={NoMatch} />
      </Switch>

      <Footer />  
    </div>
  ); 
};

export default App;
