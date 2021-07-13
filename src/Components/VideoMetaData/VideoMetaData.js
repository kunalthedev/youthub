import moment from "moment";
import numeral from "numeral";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import "./_videoMetaData.scss";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getChannelDetais,
  getSubscriptionStatus,
} from "../../redux/actions/channel.action";

const VideoMetaData = ({
  videos: { snippet: videoSnippet, statistics: videoStatistics },
  videoId,
}) => {
  const { channelId, channelTitle, description, title, publishedAt } =
    videoSnippet;
  const { viewCount, likeCount, dislikesCount } = videoStatistics;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannelDetais(channelId));

    dispatch(getSubscriptionStatus(channelId));
  }, [dispatch, channelId]);
  const data = useSelector((state) => state.channelDetails);
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-2">
          <span>
            <AiFillEye />
            &nbsp;
            {numeral(viewCount).format("0.a")} Views &nbsp;• &nbsp;&nbsp;
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={24} />
              &nbsp;
              {numeral(likeCount).format("0.a")}&nbsp;&nbsp;
            </span>
            <span className="mr-3">
              <MdThumbDown size={24} />
              &nbsp;
              {numeral(dislikesCount).format("0.a")}&nbsp;
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetaData__channel d-flex justify-content-between align-items-center py-3 my-2">
        <div className="d-flex">
          <img
            src={data?.channel?.snippet?.thumbnails?.default?.url}
            alt=""
            className="rounded-circle me-3"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>
              {numeral(data?.channel?.statistics?.subscriberCount).format(
                "0.a"
              )}
              &nbsp; Subscribers
            </span>
          </div>
        </div>
        <button
          className={`button border-0 p-2 m-2 ${
            data?.subscriptionStatus && "btn-grey"
          }`}
        >
          {data?.subscriptionStatus ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      <div className="videoMetaData__description">
        <ShowMoreText
          line={3}
          more="Show More"
          less="Show Less"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
