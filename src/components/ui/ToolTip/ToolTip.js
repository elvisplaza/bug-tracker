import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./ToolTip.module.css";

const ToolTip = (props) => {
  return (
    <div style={props.style} onClick={props.onClick} className={s.tooltip}>
      {props.children}
      <span className={cx(s.tooltiptext, props.right ? s.tooltipRight : s.tooltipLeft)}>
        <p style={{ margin: "0px" }} className={s.text_small}>
          {props.text}
        </p>
      </span>
    </div>
  );
};

ToolTip.propTypes = {
  text: PropTypes.string.isRequired,
  right: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

ToolTip.defaultProps = {
  style: {},
  right: false,
};

export default ToolTip;
