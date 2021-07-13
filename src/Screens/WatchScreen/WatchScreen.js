import React from "react";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../Components/VideoMetaData/VideoMetaData";
import Comments from "../../Components/Comments/Comments";
import "./watchScreen.scss";
import VideoHorizontal from "../../Components/VideoHorizontal/VideoHorizontal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getRelatedVideos,
  getVideoById,
} from "../../redux/actions/videos.action";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoById(id));

    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);

  const { videos, loading } = useSelector((state) => state.selectedVideo);
  const { videos: relatedVideos, loading: relatedLoading } = useSelector(
    (state) => state.relatedVideo
  );
  return (
    <Row>
      <Col lg={8}>
        <div className="watchscreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={videos?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData videos={videos} videoId={id} />
        ) : (
          <h1>Loadigg</h1>
        )}

        <Comments
          videoId={id}
          totalComments={videos?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {!relatedLoading ? (
          relatedVideos
            ?.filter((video) => video.snippet)
            .map((video) => (
              <VideoHorizontal video={video} key={video.id.videoId} />
            ))
        ) : (
          <SkeletonTheme color="#343a40" highlightColor="#3c4147">
            <Skeleton width="100%" height="130px" count={15} />
          </SkeletonTheme>
        )}
      </Col>
    </Row>
  );
};

export default WatchScreen;
