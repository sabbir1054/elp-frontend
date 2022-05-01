import React from "react";
import StudentDashboard from "./StudentDashboard/StudentDashboard";

import TeacherDashboard from "./TeacherDashboard/TeacherDashboard";
import style from './Dashboard.module.css'
const Dashboard = () => {
  return (
      <div className={style.dashboard_wrapper}>
          
      <TeacherDashboard></TeacherDashboard>
    <StudentDashboard></StudentDashboard>
    </div>
  );
};

export default Dashboard;
