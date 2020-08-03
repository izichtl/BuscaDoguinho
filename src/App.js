import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'
// import Content from './components/Content' //atualizar module


//import view's
import BodyContainer from './views/BodyContainer'
import About from './components/About'

function App() {
  let url = 'http://bdoguinhoapi.herokuapp.com/doguinho/'
  console.log(axios.get(url))
  return (

    <div >
      <Router >
        
        <div className='appView'>
        <Header/>
        <div className='appBody'>
        <Switch>
        <Route exact path='/'>
        <BodyContainer/> 
        </Route>
        <Route exact path='/about'>
        <About/> 
        </Route>

        </Switch>
        </div>
        <Footer />
        </div>
        
      </Router>
    </div>
  );
}

export default App;
