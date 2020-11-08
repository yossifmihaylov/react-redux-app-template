import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LandingPage from '../pages/landingPage';

class AppNavigation extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
  
                    <Switch>
                        <Route exact path="/">
                            <LandingPage />
                        </Route>
                        <Route path="/about">
                            <div>About page</div>
                        </Route>
                        <Route path="/users">
                            <div>Users page</div>
                        </Route>
                    </Switch>
                </div>
          </Router>
        );
    }
}

export default AppNavigation;