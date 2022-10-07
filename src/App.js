import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// constants
import { HOME_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "./constants/routes";
// contexts
import UserContext from "./contexts/userContext";
// pages
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <UserContext.Provider value={{user, setUser}}>
        <Routes>
          <Route exact path={HOME_ROUTE} element={<Home />} />
          <Route exact path={SIGN_IN_ROUTE} element={<SignIn />} />
          <Route exact path={SIGN_UP_ROUTE} element={<SignUp />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
