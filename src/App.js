import logo from "./logo.svg";
import "./App.scss";
import VideoConferenceScreen from "./views/video-conference";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function App() {
  return <React.Fragment>
    <VideoConferenceScreen />
    <ToastContainer />
  </React.Fragment>;
}

export default App;
