import React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import VideoHorizontal from "../../Components/VideoHorizontal/VideoHorizontal";
import { getSubscriptionChannel } from "../../redux/actions/videos.action";
import "./_subscriptionScreen.scss";

const SubscriptionScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscriptionChannel());
  }, [dispatch]);
  const data = useSelector((state) => state.subscribedChannels);
  return (
    <Container fluid>
      {!data?.loading ? (
        data?.videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id} subScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SubscriptionScreen;
