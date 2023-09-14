import React, { useState, useRef, useEffect } from "react";

import Button from "./Button";

import classes from "./ModalDialog.module.css";

const ModalDialog = (props) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const title = props.title || "SnareMaster";
  const acceptButtonText = props.acceptButtonText || "OK";
  const onAccept = props.onAccept;
  const hasCancelButton = props.hasCancelButton;
  const cancelButtonText = props.cancelButtonText || "Cancel";
  const formIsValid =
    props.formIsValid !== undefined && props.formIsValid !== null
      ? props.formIsValid
      : true;

  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  const acceptButtonOnClickHandler = () => {
    if (onAccept) {
      onAccept();
    }
    handleCloseModal();
  };

  const cancelButtonOnClickHandler = () => {
    handleCloseModal();
  };

  return (
    <dialog ref={modalRef} className={classes.modal} onKeyDown={handleKeyDown}>
      {title && <h2>{title}</h2>}
      <div>{props.children}</div>
      <div className={classes.buttons}>
        {hasCancelButton && (
          <button
            onClick={cancelButtonOnClickHandler}
            className={classes.button}
          >
            {cancelButtonText}
          </button>
        )}
        <Button onClick={acceptButtonOnClickHandler} disabled={!formIsValid}>
          {acceptButtonText}
        </Button>
      </div>
    </dialog>
  );
};

export default ModalDialog;
