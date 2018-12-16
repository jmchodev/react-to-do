import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Album from './components/Album';
import Library from './components/Library';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {/*for logical page layout*/}
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
          {/*to match path in browser address bar w value of path*/}
          {/*exact path will match the specific path of "/" and no other paths*/}
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
