import React, { useState, setState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import s from "./NavBar.module.css";

// images
import userIcon from "./user-icon.jpg";

//context
import UserInfoContext from "../../../context/UserInfoContext";

const NavBar = (props) => {
  const [_isShowModal, setIsShowModal] = useState(false);
  // ================== end of state =======================
  const user = useContext(UserInfoContext);
  const onShowModal = (e) => setIsShowModal((prevIsShowModal) => !prevIsShowModal);
  return (
    <section className={s.nav_bar}>
      <h2 className={s.nav_bar_title}>
        <a href={`/home/${user.userId}`}>Buginator</a>
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
            <a href={`/profile/${user.userId}`}>Edit Profile</a>
            <p></p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NavBar;
