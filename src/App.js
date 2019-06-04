import React, { Component } from 'react';
import Header from './common/header';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Writer from './pages/writer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail} ></Route>
              <Route path='/login' exact component={Login} ></Route>
              <Route path='/writer' exact component={Writer} ></Route>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
