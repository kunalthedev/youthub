import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps, MdNotifications } from "react-icons/md";
const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={()=>handleToggleSidebar()}
      />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />
      {/* <p>Youtube</p> */}
      <form>
        <input type="text" placeholder="search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
