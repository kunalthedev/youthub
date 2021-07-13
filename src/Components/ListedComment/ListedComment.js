import moment from "moment";
import React from "react";
import "./_listedComment.scss";
const ListedComment = ({ comment }) => {
  // console.log(comment[1]?.snippet?.topLevelComment?.snippet);
  // const { authorDisplayName, publishedAt, textDisplay, authorProfileImageUrl } =
  //   comment[1]?.snippet?.topLevelComment?.snippet;
  return (
    <div className="comment p-2 d-flex">
      <img
        src={
          comment[1]?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
        }
        alt={comment[1]?.snippet?.topLevelComment?.snippet?.textDisplay}
        className="rounded-circle me-3"
      />
      <div className="comment__body">
        <p className="comment__body__header mb-1">
          {comment[1]?.snippet?.topLevelComment?.snippet?.authorDisplayName}{" "}
          &nbsp;• &nbsp;{" "}
          {moment(
            comment[1]?.snippet?.topLevelComment?.snippet?.publishedAt
          ).fromNow()}
        </p>
        <p className="mb-1">
          {comment[1]?.snippet?.topLevelComment?.snippet?.textDisplay}
        </p>
      </div>
    </div>
  );
};

export default ListedComment;
