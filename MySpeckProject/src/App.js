import React, { useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import { Main } from "./lib/styles/GeneralStyles";
import { AuthContext } from './context/AuthContext';

// Components
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// Pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import Speakers from "./pages/Speakers";
import All from './pages/All';
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddEvent from "./pages/AddEvent";

const App = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  return (
    <>
      {/* On this way we can prevent components to render before we actually know if user is authenticated or not. */}
      {isAuthenticated === true || isAuthenticated === false ? (
        <>
          <Header />
          <Main>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/events" component={Events} />
            <PrivateRoute path="/speakers" component={Speakers} />
            <PrivateRoute path="/all" component={All} />
            <PrivateRoute path="/add-event" component={AddEvent} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Main>
        </>
      ) : null}
    </>
  );
};

export default App;
