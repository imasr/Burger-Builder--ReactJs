import React, { Component } from "react";

import classes from "./Modal.module.scss";
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Wrapper>
        <Backdrop show={this.props.show} closeFn={this.props.modalClose} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Wrapper>
    );
  }
}
export default Modal;
