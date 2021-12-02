import React from "react";
import ParticipantList from "../components/ParticipantList/ParticipantList";
import Footer from "../components/Footer/Footer";
import { Participants } from "../mocks/participants";

const VideoConferenceScreen = () => {
  return (
    <div className="video_conf_wrapper">
      <ParticipantList participantList={Participants}/>
      <Footer />
    </div>
  );
};

export default VideoConferenceScreen;
