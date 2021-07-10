import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./_homescreen.scss";
import Video from "../../Components/Video/Video";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopularVideos } from "../../redux/actions/videos.action";
const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  const { videos } = useSelector((state) => state.homeVideos);
  return (
    <Container>
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4} key={video.id}>
            <Video video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
