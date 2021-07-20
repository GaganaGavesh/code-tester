import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import ProtectedRoute from "./ProtectedRoute";
import Unauthorized from "./Unauthorized";
import { useState } from "react";

function MainAppForProtectedRoute() {
  const [user, setUser] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(true);
  };

  const handleLogout = (e) =>{
    e.preventDefault();
    setUser(false);
  }
  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          handleLogin={handleLogin}
          //methana props widiyata yanne routeProps, e kiyane match, history, location
          render={(routeProps) => (
            <Landing
              {...routeProps}
              user={user.toString()}
              handleLogin={handleLogin}
            />
          )}
        />
        {/* DSL way, meka render method eka liyanne nathuwa child kelinma liyanwa wage scene ekak */}
        {/* <ProtectedRoute exact path="/dashboard">
          {(routeProps) => <Dashboard {...routeProps} />}
        </ProtectedRoute> */}
        <ProtectedRoute exact path="/dashboard" handleLogout={handleLogout} user={user} component={Dashboard}/>
        <Route exact path='/unauthorized' component={Unauthorized} />
      </Router>
    </div>
  );
}

export default MainAppForProtectedRoute;
