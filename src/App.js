import './App.css';
import {useState} from "react";
import { PanelList } from './components/PanelList';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { CreateAccount } from './components/CreateAccount';
import { BrowserRouter, Switch, Route, Redirect  } from "react-router-dom";

export default function App() {

  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <div className='admin-dashboard'>
        <BrowserRouter>
          <Switch>
          <Route exact path="/">
							<Login login={login} setLogin={setLogin} />
						</Route>

          <Route path="/login">
							<Login login={login} setLogin={setLogin} />
						</Route>

            <Route path="/dashboard">
              {login ? <PanelList /> : ""}
              {login ? <Dashboard />: <Redirect to="/login" />}
            </Route>

            <Route path="/forgot-password">
							<h2>Forgot Password Page</h2>
						</Route>

            <Route path="/create-account">
							<CreateAccount />
						</Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}