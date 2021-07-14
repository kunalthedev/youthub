import React, { useEffect, useState } from "react";
import "./_comments.scss";
import ListedComment from "../ListedComment/ListedComment";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsByVideoId,
} from "../../redux/actions/comments.action";
const Comments = ({ videoId, totalComments }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsByVideoId(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentList.comments);
  var result = Object.keys(comments)?.map((key) => [
    Number(key),
    comments[key],
  ]);

  const [text, setText] = useState("");
  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    dispatch(addComment(videoId, text));
    setText("");
  };
  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt=""
          className="rounded-circle me-3"
        />
        <form className="d-flex flex-grow-1" onSubmit={handleComment}>
          <input
            className="flex-grow-1"
            placeholder="Write a text.."
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>

      <div className="comments__list">
        {result?.map((comment, i) => (
          <ListedComment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
