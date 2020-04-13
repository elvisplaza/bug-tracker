import React from "react";
import s from "./AppCard.module.css";

// helpers
import history from "./../../../helpers/history";

const AppCard = ({ appId, name }) => {
  const onOpenApp = () => {
    console.log("going to app id bitch!", appId);
    history.push(`/app/${appId}`);
    document.location.reload();
  };
  return (
    <section className={s.app_card} onClick={onOpenApp}>
      <h2>{name}</h2>
    </section>
  );
};

export default AppCard;
