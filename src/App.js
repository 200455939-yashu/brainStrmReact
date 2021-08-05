import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCourse from './components/CreateCourse';
import AllCourse from './components/AllCourse';
import Course from './components/Course';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="AppBody">
          <Route
            path="/login"
            exact
            render={(props) => (
              <>
                <Login />
              </>
            )}>
          </Route>
          <Route
            path="/register"
            exact
            render={(props) => (
              <>
                <Register />
              </>
            )}>
          </Route>

          <Route
            path="/create"
            exact
            render={(props) => (
              <>
                <CreateCourse />
              </>
            )}>
          </Route>

          <Route
            path="/course/:id"
            exact
            render={(props) => (
              <>
                <Course />
              </>
            )}>
          </Route>

          <Route
            path="/"
            exact
            render={(props) => (
              <>
                <AllCourse />
              </>
            )}>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
