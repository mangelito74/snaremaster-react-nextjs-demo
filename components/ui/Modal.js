import { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const [portalElement, setPortalElement] = useState();

  // useEffect because "document" is not known on the server side
  useEffect(() => {
    // Safe to use the "document" object here
    setPortalElement(document.getElementById("overlays"));
  }, []);

  return (
    <Fragment>
      {portalElement &&
        ReactDOM.createPortal(
          <Backdrop onClose={props.onClose} />,
          portalElement
        )}
      {portalElement &&
        ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
    </Fragment>
  );
};

export default Modal;
