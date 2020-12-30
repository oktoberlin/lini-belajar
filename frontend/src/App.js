import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/NotFound"
function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path='*' component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
