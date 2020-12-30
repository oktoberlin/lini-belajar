import Root from "./Root";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/NotFound"
import { ToastContainer } from "react-toastify";
import axios from "axios";
import requireAuth from "./utils/RequireAuth";

axios.defaults.baseURL = "http://127.0.0.1:8000";

function App() {
  return (
    <div>
      <Root>
      <ToastContainer hideProgressBar={true} newestOnTop={true} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={requireAuth(Dashboard)} />
            <Route path='*' component={NotFound} />
          </Switch>
      </Root>
    </div>
  );
}

export default App;
