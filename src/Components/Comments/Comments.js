import React from "react";
import "./_comments.scss";
import ListedComment from "../ListedComment/ListedComment";
const Comments = () => {
  return (
    <div className="comments">
      <p>1234 coomments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt=""
          className="rounded-circle me-3"
        />
        <form className="d-flex flex-grow-1">
          <input
            className="flex-grow-1"
            placeholder="Write a text.."
            type="text"
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>

      <div className="comments__list">
        {[...Array(10)].map(() => (
          <ListedComment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
