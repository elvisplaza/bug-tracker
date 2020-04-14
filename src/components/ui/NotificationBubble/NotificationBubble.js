import React from "react";
import s from "./NotificationBubble.module.css";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NotificationBubble = ({ message, onHideNotification }) => {
  return (
    <section className={s.notification_bubble}>
      {message}
      <FontAwesomeIcon icon={faTimes} onClick={onHideNotification} className={s.notification_icon} />
    </section>
  );
};

export default NotificationBubble;
