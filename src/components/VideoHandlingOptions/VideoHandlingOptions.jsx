import React from "react";
import "./VideoHandlingOptions.scss";
import { MicOutline, MicOffOutline, VideocamOutline, VideocamOffOutline, CallOutline } from "react-ionicons";

const VideoHandlingOptions = () => {
  const [audioOff, setAudioOff] = React.useState(true);
  const [videoOff, setVideoOff] = React.useState(true);
  return (
    <div className="video_handling_options_wrapper">
      <button type="button" className={`theme_btn ${audioOff ? 'active': null}`} onClick={() => setAudioOff(!audioOff)}>
        {audioOff ? <MicOffOutline color="#fff" /> : <MicOutline color="#fff"  />}
      </button>
      <button type="button" className={`theme_btn ${videoOff ? 'active': null}`} onClick={() => setVideoOff(!videoOff)}>
        {videoOff ? <VideocamOffOutline color="#fff" /> : <VideocamOutline color="#fff"  />}
      </button>
      <button type="button" className="theme_btn active" >
        {<CallOutline color="#fff" />}
      </button>
    </div>
  );
};

export default VideoHandlingOptions;
