import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import DayPage from './DayPage'
import WeekPage from './WeekPage'

class App extends Component {
  render() {
    return (
        <div>
          <header>
              <img src={logo} alt = 'React Logo'> </img>
          </header>
        </div>
        
/*      <Router>
       <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">NewsFeed</Link>
        </li>a
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/news" component={NewsFeed} />
    </div>
      </Router>
    );
  }
} */

export default App;

/* <div className="App">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
*/