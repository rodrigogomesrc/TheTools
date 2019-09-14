import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import RegraDe3 from './components/pages/RegraDe3';
import Porcentagem from './components/pages/Porcentagem';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Main}/>
        <Route path="/calculadora-regra-de-tres" component={RegraDe3}/>
        <Route path="/calculadora-porcentagem" component={Porcentagem}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;                                                                                                 
