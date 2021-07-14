import React from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosByChannel } from "../../redux/actions/videos.action";
import "./_channelScreen.scss";
import Video from "../../Components/Video/Video";
import SkeletonVideo from "../../Components/Seletons/SkeletonVideo";
import { getChannelDetais } from "../../redux/actions/channel.action";
import numeral from "numeral";

const ChannelScreen = () => {
  const dispatch = useDispatch();
  const { channelId } = useParams();

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
    dispatch(getChannelDetais(channelId));
  }, [dispatch, channelId]);
  const data = useSelector((state) => state.channelVideos);

  const channelData = useSelector((state) => state.channelDetails.channel);
  return (
    <>
      <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader">
        <div className="d-flex align-items-center rounded-border me-2">
          <img
            src={channelData?.snippet?.thumbnails?.default?.url}
            alt=""
            className="rounded-border me-2"
          />

          <div className="ml-3 channelHeader__details">
            <h3>{channelData?.snippet?.title}</h3>
            <span>
              {numeral(channelData?.statistics?.subscriberCount).format("0.a")}{" "}
              subscribers
            </span>
          </div>
        </div>

        <button>Subscribe</button>
      </div>
      <Container>
        <Row>
          {!data?.loading
            ? data?.videos?.map((video) => (
                <Col md={4} lg={3}>
                  <Video video={video} channel />
                </Col>
              ))
            : [...Array(20)].map(() => (
                <Col lg={3} md={4}>
                  <SkeletonVideo />
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
};

export default ChannelScreen;
