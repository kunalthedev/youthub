import moment from "moment";
import React from "react";
import "./_listedComment.scss";
const ListedComment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        alt=""
        className="rounded-circle me-3"
      />
      <div className="comment__body">
        <p className="comment__body__header mb-1">
          Kunal Arora &nbsp;• &nbsp; {moment("2020-12-06").fromNow()}
        </p>
        <p className="mb-1">This is a comment</p>
      </div>
    </div>
  );
};

export default ListedComment;
