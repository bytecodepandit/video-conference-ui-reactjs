import React from "react";
import ParticipantList from "../components/ParticipantList/ParticipantList";
import Footer from "../components/Footer/Footer";
import { Participants } from "../mocks/participants";

const VideoConferenceScreen = () => {
  const [participantList, setParticipantList] = React.useState(Participants)
  return (
    <div className="video_conf_wrapper">
      <ParticipantList participantList={participantList}/>
      <Footer />
    </div>
  );
};

export default VideoConferenceScreen;
