import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProject from './components/Project/AddProject';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
