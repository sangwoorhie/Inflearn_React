import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SignUp from "./chapter_11/signUp";
// import AttendanceBook from "./chapter_10/AttendanceBook";
// import LandingPage from "./chapter_09/LandingPage";
// import ConfirmButton from "./chapter_08/ConfirmButton";
// import Accommodate from "./chapter_07/Accommodate";
// import NotificationList from "./chapter_06/NotificationList";
// import CommentList from "./chapter_05/CommentList";
// import Library from "./chapter_03/Library";
// import Clock from "./chapter_04/Clock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Library /> */}
    {/* <Clock /> */}
    {/* <CommentList /> */}
    {/* <NotificationList /> */}
    {/* <Accommodate /> */}
    {/* <ConfirmButton /> */}
    {/* <LandingPage /> */}
    {/* <AttendanceBook /> */}
    <SignUp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
