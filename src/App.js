import React from 'react';
import './App.css';

//components
import Home from './component/Home/Home';
import Portfolio from './component/Portfolio/Portfolio'


//rooter
import { BrowserRouter as Rooter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Rooter>
        <Route path='/' exact component={Home}/>
        <Route path='/Portfolio' exact component={Portfolio}/>
      </Rooter>
    </div>
  );
}

export default App;
