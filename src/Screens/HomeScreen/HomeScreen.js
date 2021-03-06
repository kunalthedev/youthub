import React from "react";
import { Container, Col } from "react-bootstrap";
import "./_homescreen.scss";
import Video from "../../Components/Video/Video";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";
import CategoriesBar from "../../Components/CategoriesBar/CategoriesBar";

import SkeletonVideo from "../../Components/Seletons/SkeletonVideo";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const data = useSelector((state) => state.homeVideos);
  const fetchData = () => {
    if (data?.activeCategory === "All") dispatch(getPopularVideos());
    else {
      dispatch(getVideosByCategory(data?.activeCategory));
    }
  };

  return (
    <Container>
      <CategoriesBar />

      <InfiniteScroll
        dataLength={data?.videos?.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!data?.loading
          ? data?.videos.map((video) => (
              <Col lg={3} md={4} key={video.id}>
                <Video video={video} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
