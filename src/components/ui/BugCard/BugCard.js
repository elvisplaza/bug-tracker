import React from "react";

import s from "./BugCard.module.css";

// helpers
import { riskLevelConverter } from "../../../helpers/applicationHelper";

const BugCard = ({ title, expectedResult = "", riskLevel = "low", isFixed = false }) => {
  return (
    <section className={s.bug_card}>
      <h2 className={s.bug_card_title}>{title}</h2>
      <div>
        <p className={s.bug_card_p}>Risk Level:{riskLevelConverter(riskLevel)}</p>

        <p className={s.bug_card_p}>Fixed: {isFixed ? "Yes" : "Not yet"}</p>
      </div>
    </section>
  );
};

export default BugCard;
