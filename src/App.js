import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import { Login, SignUp } from "./components/auth";
import {PageNotExist} from "./components/common"
import { Home } from "./components/music";

function App() {
 
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/login" component={Login} />
        <Route  path="/signup" component={SignUp} />
        <Route component={PageNotExist} />
      </Switch>
    <ToastContainer autoClose={6000} hideProgressBar />
    </Router>
  );
}

export default App;
