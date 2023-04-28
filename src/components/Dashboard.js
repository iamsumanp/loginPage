import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.userAuth);

  const { full_name } = user || {};
  return (
    <div className="dashboard-container">Hello your name is : {full_name}</div>
  ); // ? fetch when reloading in redux action later on if possible
};

export default Dashboard;
