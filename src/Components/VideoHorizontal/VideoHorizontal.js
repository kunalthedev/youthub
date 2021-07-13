import React, { useEffect } from "react";
import "./_videoHorizontal.scss";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import request from "../../api";
import { useHistory } from "react-router-dom";

const VideoHorizontal = ({ video, searchScreen }) => {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const _videoId = video?.id?.videoId;
  const _channelId = video?.snippet?.channelId;
  const isVideo = video?.id?.kind === "youtube#video";
  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [_videoId]);

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: _channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    getChannelIcon();
  }, [_channelId]);
  const history = useHistory();
  const handleVideoClick = () => {
    isVideo
      ? history.push(`/watch/${_videoId}`)
      : history.push(`/chnnel/${_channelId}`);
  };

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row
      className="videoHorizontal m-1 py-2 align-items-center"
      onClick={handleVideoClick}
    >
      <Col xs={6} md={searchScreen ? 4 : 6} className="videoHorizontal__left">
        <LazyLoadImage
          src={video?.snippet?.thumbnails?.medium?.url}
          effect="blur"
          className={
            isVideo
              ? "videoHorizontal__thumbnail"
              : "videoHorizontal__thumbnail-channel"
          }
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        {isVideo && (
          <span className="videoHorizontal__duration">{_duration}</span>
        )}
      </Col>
      <Col
        xs={6}
        md={searchScreen ? 8 : 6}
        className="videoHorizontal__right p-0"
      >
        <p className="videoHorizontal__title mb-1">{video?.snippet?.title}</p>
        {isVideo && (
          <div className="videoHorizontal__details">
            <AiFillEye /> {numeral(views).format("0.a")} Views •&nbsp;
            {moment(video?.snippet?.publishedAt).fromNow()}
          </div>
        )}
        {searchScreen && (
          <p className="mt-1 mt-1 videoHorizontal__desc">
            {video?.snippet?.description}
          </p>
        )}
        <div className="videoHorizontal__channel d-flex align-items-center m-1">
          {isVideo && (
            <LazyLoadImage
              src={channelIcon?.url}
              effect="blur"
              className="videoHorizontal__thumbnail rounded-border"
              wrapperClassName="videoHorizontal__thumbnail-wrapper"
            />
          )}
          <p className="mb-0">{video?.snippet?.channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
