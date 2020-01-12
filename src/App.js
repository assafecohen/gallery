import React, { Component, Fragment } from 'react';
import Header from './Layout/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movies from './Components/Movies';
import Home from './Components/Home';
import Gallery from './Conatiners/Gallery/Gallery';
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/movies' component={Movies} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
