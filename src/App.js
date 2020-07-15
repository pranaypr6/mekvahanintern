import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import UserContext from "./context/UserContext";
import ManageAdresses from "./components/ManageAdresses";
import Login from "./components/Login";
import { Router } from "@reach/router";
const App = () => {
  const [user, setUser] = useState(0);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <ManageAdresses path="/" />
        <Login path="/login" />
      </Router>
    </UserContext.Provider>
  );
};

export default App;
