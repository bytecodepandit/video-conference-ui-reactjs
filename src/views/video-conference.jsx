import React from "react";
import { toast } from "react-toastify";
import ParticipantList from "../components/ParticipantList/ParticipantList";
import Footer from "../components/Footer/Footer";
import { PersonAddOutline } from "react-ionicons";
import { PAGE_SIZE } from "../app.config";
import "./video-conference.scss";
import { getUser } from "../services/user.service";
import { FOOTER_HEIGHT } from "../app.config";

const VideoConferenceScreen = () => {
  const [participantList, setParticipantList] = React.useState([]);
  const [selectedPageIndex, setSelectedPageIndex] = React.useState(0);

  React.useEffect(() => {
    getParticipants();
  }, []);

  const getParticipantsForPageNumber = React.useCallback(
    (index) => {
      return participantList.slice(index * PAGE_SIZE, (index + 1) * PAGE_SIZE);
    },
    [participantList]
  );

  const addParticipant = async () => {
    const {
      data: { results },
    } = await getUser(1);
    const user = results[0];
    participantList.splice(selectedPageIndex * PAGE_SIZE, 0, user);
    toast.success(
      `${user.name.title} ${user.name.first} ${user.name.last} join the call`
    );
    setParticipantList([...participantList]);
  };

  const getParticipants = async () => {
    const {
      data: { results },
    } = await getUser(PAGE_SIZE);
    console.log("hello result", results);
    setParticipantList(results);
  };

  return (
    <div className="video_conf_wrapper">
      <div style={{ height: `calc(100vh - ${FOOTER_HEIGHT}px)` }}>
        {participantList.length > 0 && (
          <ParticipantList
            participantList={getParticipantsForPageNumber(selectedPageIndex)}
          />
        )}
      </div>
      <Footer
        totalItems={participantList.length}
        onPageChange={(index) => setSelectedPageIndex(index)}
        onAddParticipant={addParticipant}
      />
    </div>
  );
};

export default VideoConferenceScreen;
