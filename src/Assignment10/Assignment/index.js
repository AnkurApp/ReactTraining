import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";

import LoginForm from "../Modules/Login";
import UserDashboard from "../Modules/UserDashboard";
import UserDescription from "../Components/UserDescription";

export default function Assignment10() {
  const [userData, setUserData] = useState([]);

  const getUser = async () => {
    try {
      const apiData = await axios.get("https://reqres.in/api/users/");
      console.log(apiData);
      localStorage.setItem("UserData", JSON.stringify(apiData.data.data));
      setUserData(apiData.data.data);
      console.log(userData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path={"/"} exact>
          <LoginForm />
        </Route>
        <Route path={"/dashboard"} exact>
          <UserDashboard userData={userData} setUserData={setUserData} />
        </Route>
        <Route path={"/userDescription/:Id"} exact>
          <UserDescription userData={userData} setUserData={setUserData} />
        </Route>
      </Switch>
    </Router>
  );
}
