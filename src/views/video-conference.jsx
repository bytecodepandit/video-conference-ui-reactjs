import React from "react";
import ParticipantList from "../components/ParticipantList/ParticipantList";
import Footer from "../components/Footer/Footer";
import { Participants } from "../mocks/participants";
import { PAGE_SIZE } from "../app.config";

const VideoConferenceScreen = () => {
  const [participantList, setParticipantList] = React.useState(Participants);
  const [selectedPageIndex, setSelectedPageIndex] = React.useState(0);
  
  const getParticipantsForPageNumber = React.useCallback((index) => {
    return participantList.slice(index*PAGE_SIZE, (index + 1)*PAGE_SIZE)
  }, [])

  return (
    <div className="video_conf_wrapper">
      <ParticipantList participantList={getParticipantsForPageNumber(selectedPageIndex)}/>
      <Footer totalItems={participantList.length} onPageChange={(index) => setSelectedPageIndex(index)}/>
    </div>
  );
};

export default VideoConferenceScreen;
