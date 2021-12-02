import React from "react";
import ParticipantList from "../components/ParticipantList/ParticipantList";
import Footer from "../components/Footer/Footer";
import { Participants } from "../mocks/participants";
import { PAGE_SIZE } from "../app.config";
import './video-conference.scss'

const VideoConferenceScreen = () => {
  const [participantList, setParticipantList] = React.useState(Participants);
  const [selectedPageIndex, setSelectedPageIndex] = React.useState(0);
  
  const getParticipantsForPageNumber = React.useCallback((index) => {
    return participantList.slice(index*PAGE_SIZE, (index + 1)*PAGE_SIZE)
  }, [participantList])

  const addParticipant = () => {
    const newParticipant = {
      name: 'Jon Doe',
      uri: 'https://s.hdnux.com/photos/51/23/24/10827008/3/rawImage.jpg',
      id: Math.random(2)
    }
    participantList.splice(selectedPageIndex*PAGE_SIZE, 0, newParticipant);
    alert(`${newParticipant.name} join the call`)
    setParticipantList([...participantList]);
  }

  return (
    <div className="video_conf_wrapper">
      <button type="button" className="btn_add_participant" onClick={addParticipant}>Add Participant</button>
      <ParticipantList participantList={getParticipantsForPageNumber(selectedPageIndex)}/>
      <Footer totalItems={participantList.length} onPageChange={(index) => setSelectedPageIndex(index)}/>
    </div>
  );
};

export default VideoConferenceScreen;
