import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.userAuth);

  const { full_name } = user;
  return <div>Hellos your name is:{full_name}</div>; // ? fetch when reloading in redux action later on
};

export default Dashboard;
