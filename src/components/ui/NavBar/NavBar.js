import React, { useState, setState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./NavBar.module.css";

// images
import userIcon from "./user-icon.jpg";

const NavBar = (props) => {
  const [_isShowModal, setIsShowModal] = useState(false);
  const [_userId, setUserId] = useState("");
  // ================== end of state =======================

  const onShowModal = (e) => setIsShowModal((prevIsShowModal) => !prevIsShowModal);

  return (
    <section className={s.nav_bar}>
      <h2 className={s.nav_bar_title}>
        <a href='/home'>Buginator</a>
      </h2>
      <div className={s.nav_bar_user_info_container}>
        <img
          src={userIcon}
          id='userIcon'
          className={s.nav_bar_user_icon}
          alt='user generated profile picture or default to a user icon'
          onClick={onShowModal}
        />
        {_isShowModal && (
          <div className={s.nav_bar_profile_container}>
            <h2>Organization</h2>
            <a href={"/profile/0c2b7a10-73a7-11ea-9d3d-5964f30f2a67"}>Edit Profile</a>
            <p></p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NavBar;
