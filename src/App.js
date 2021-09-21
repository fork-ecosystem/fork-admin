import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from '@/src/pages/LandingPage/lazy';
import HomePage from '@/src/pages/HomePage/lazy';
import LoginPage from '@/src/pages/LoginPage/lazy';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/landing-page" component={LandingPage} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
    </BrowserRouter>
  );
};

export default App;
