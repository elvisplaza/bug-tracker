import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import s from "./ReactModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "white",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  },
  overlay: {
    background: "rgba(236, 237, 235, 0.9)",
  },
};

const ReactModal = ({ isOpen, onAfterOpen, onRequestClose, contentLabel, children, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={contentLabel}>
      <FontAwesomeIcon icon={faTimes} className={s.modal_close_icon} onClick={onClose} />
      {children}
    </Modal>
  );
};

export default ReactModal;
