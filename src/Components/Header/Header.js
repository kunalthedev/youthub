import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps, MdNotifications } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 0) return;
    history.push(`/search/${input}`);
  };
  const data = useSelector((state) => state?.auth);
  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
          className="header__logo"
        />
      </Link>
      {/* <p>Youtube</p> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={data?.user?.photoUrl} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
