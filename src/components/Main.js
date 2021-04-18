import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import App from './App';
import About from './About';
import PrivacyAndTerm from './PrivacyAndTerm';
import Detail from './Detail';
import Intro from './Intro';



const MainPage = () => {

  const [image, setImage] = useState({});


  return (
    <Router>
      <div className="ui container">
        <nav style={{ display: 'flex', paddingTop: '30px', paddingBottom: '30px', justifyContent: 'center', backgroundColor: 'lightblue' }}>
          <div style={{ marginRight: '15px' }}>
            <Link to="/"><h3>Home</h3></Link>
          </div>
          <div style={{ marginRight: '15px' }}>
            <Link to="/about"> <h3>About</h3></Link>
          </div>
          <div style={{ marginRight: '15px' }}>
            <Link to="/privacy-and-terms"> <h3>Privacy and Terms </h3> </Link>
          </div>
        </nav>
        <Intro />
        <Switch>
          <Route exact={true} path="/">
            <App setImage={setImage} />
          </Route>
          <Route exact={true} path="/about">
            <About />
          </Route>
          <Route exact={true} path="/privacy-and-terms">
            <PrivacyAndTerm />
          </Route>
          <Route exact={true} path={`/detail`}>
            <Detail image={image} />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}





export default MainPage;