import React from "react";
import VideoHandlingOptions from "../VideoHandlingOptions/VideoHandlingOptions";
import Pagination from "../Pagination/Pagination";
import VideoOtherOptions from "../VideoOtherOptions/VideoOtherOptions";
import {PAGE_SIZE, FOOTER_HEIGHT} from '../../app.config';
import "./Footer.scss";
const Footer = ({onPageChange, totalItems}) => {
  return (
    <div className="footer_wrapper" style={{height: `${FOOTER_HEIGHT}PX`}}>
      <VideoHandlingOptions />
      <Pagination onPageChange={onPageChange} pageSize={PAGE_SIZE} totalItems={totalItems}/>
      <VideoOtherOptions />
    </div>
  );
};

export default Footer;
