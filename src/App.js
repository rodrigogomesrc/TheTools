import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import RegraDe3 from './components/pages/RegraDe3';
import Porcentagem from './components/pages/Porcentagem';
import Notfound from './components/pages/NotFound';
import Sorteio from './components/pages/Sorteio';
import SorteioGrupos from './components/pages/SorteioGrupos';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
  
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/calculadora-regra-de-tres" component={RegraDe3} />
            <Route path="/calculadora-porcentagem" component={Porcentagem} />
            <Route path="/sorteio" component={Sorteio} />
            <Route path="/gerador-de-grupos" component={SorteioGrupos} />
            <Route path="*" component={Notfound} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;                                                                                                 
