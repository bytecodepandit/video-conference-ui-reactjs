import React from "react";
import PropTypes from "prop-types";
import VideoHandlingOptions from "../VideoHandlingOptions/VideoHandlingOptions";
import Pagination from "../Pagination/Pagination";
import VideoOtherOptions from "../VideoOtherOptions/VideoOtherOptions";
import {PAGE_SIZE, FOOTER_HEIGHT} from '../../app.config';
import "./Footer.scss";
const Footer = ({onPageChange, totalItems, onAddParticipant}) => {
  return (
    <div className="footer_wrapper" style={{height: `${FOOTER_HEIGHT}PX`}}>
      <VideoHandlingOptions />
      <Pagination onPageChange={onPageChange} pageSize={PAGE_SIZE} totalItems={totalItems}/>
      <VideoOtherOptions onAddParticipant={onAddParticipant}/>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  onAddParticipant: PropTypes.func,
  onPageChange: PropTypes.func,
  totalItems: PropTypes.number
}
