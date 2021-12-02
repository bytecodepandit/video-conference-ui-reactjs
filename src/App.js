import React from "react";
import "./App.scss";
import VideoConferenceScreen from "./views/video-conference";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getLocalStream } from "./utils/permission";

function App() {
  React.useEffect(() => {
    getLocalStream();
  }, []);
  return (
    <React.Fragment>
      <VideoConferenceScreen />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
