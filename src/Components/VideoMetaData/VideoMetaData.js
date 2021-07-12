import moment from "moment";
import numeral from "numeral";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import "./_videoMetaData.scss";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-2">
          <span>
            <AiFillEye />
            &nbsp;
            {numeral(100000).format("0.a")} Views &nbsp;• &nbsp;&nbsp;
            {moment("2020-05-06").fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={24} />
              &nbsp;
              {numeral(10000).format("0.a")}&nbsp;
            </span>
            <span className="mr-3">
              <MdThumbDown size={24} />
              &nbsp;
              {numeral(10).format("0.a")}
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetaData__channel d-flex justify-content-between align-items-center py-3 my-2">
        <div className="d-flex">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            alt=""
            className="rounder-circle me-3"
          />
          <div className="d-flex flex-column">
            <span>Kunal Arora</span>
            <span>{numeral(100000).format("0.a")}&nbsp; Subscribers</span>
          </div>
        </div>
        <button className="button border-0 p-2 m-2"> SubScribe</button>
      </div>

      <div className="videoMetaData__description">
        <ShowMoreText
          line={3}
          more="Show More"
          less="Show Less"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
