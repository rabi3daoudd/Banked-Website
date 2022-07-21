import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import HomeFrench from './pages/french';
import Faq from './pages/faq';
import FaqFr from './pages/faqFr';
import Terms from './pages/tos';
import TermsFr from './pages/tosFr';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/fr' component={HomeFrench} />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignupPage} exact />
        <Route path='/faq' component={Faq} />
        <Route path='/faq-fr' component={FaqFr} />
        <Route path='/tos' component={Terms} />
        <Route path='/tos-fr' component={TermsFr} />
      </Switch>
    </Router>
  );
}

export default App;
