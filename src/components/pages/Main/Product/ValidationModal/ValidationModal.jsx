import React, { Component } from "react";
import Overlay from "../../../../Overlay/Overlay";
import { connect } from "react-redux";
import { CLOSE_VALIDATION_MESSAGE } from "../../../../../redux/actions";
import {
  ModalWrapper,
  Modal,
  Validationtext,
  CloseModalButton,
} from "./ValidationModal.styles";

class ValidationModal extends Component {
  render() {
    const showModal = this.props.showValidationModal;
    return (
      <>
        {showModal && (
          <Overlay>
            <ModalWrapper
              onClick={() => {
                this.props.dispatch({ type: CLOSE_VALIDATION_MESSAGE });
              }}
            >
              <Modal>
                <Validationtext>
                  Please Select product attribute(s)
                </Validationtext>
                <CloseModalButton
                  onClick={() => {
                    this.props.dispatch({ type: CLOSE_VALIDATION_MESSAGE });
                  }}
                >
                  close
                </CloseModalButton>
              </Modal>
            </ModalWrapper>
          </Overlay>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { showValidationModal: state.showValidationModal };
};

export default connect(mapStateToProps)(ValidationModal);
