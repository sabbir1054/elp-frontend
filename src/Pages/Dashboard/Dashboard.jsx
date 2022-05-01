import React from "react";
import StudentDashboard from "./StudentDashboard/StudentDashboard";

import TeacherDashboard from "./TeacherDashboard/TeacherDashboard";

const Dashboard = () => {
  return (
    <div>
      <TeacherDashboard></TeacherDashboard>
    <StudentDashboard></StudentDashboard>
    </div>
  );
};

export default Dashboard;
