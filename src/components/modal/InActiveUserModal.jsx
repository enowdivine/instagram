import React from "react";
import Modal from "react-bootstrap/Modal";
import AdsPerformance from "../users/inactive/AdsPerformance";
import "./Modal.css";

const InActiveUserModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="md "
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-center"
      >
        <Modal.Header closeButton>
          <Modal.Title>Mark Jordan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="cards">
            <div className="card">
              <div className="card-body">
                <h6>ACCOUNT TYPE</h6>
                <p>PERSONAL</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h6>NUMBER OF ADS</h6>
                <p class="ads-number">10</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card mt-2">
              <div className="card-body">
                <div class="ads-performance-header">ADS PERFORMANCE</div>
                <AdsPerformance />
              </div>
            </div>
          </div>
          <div>
            <div className="card mt-2">
              <div className="card-body">
                <div className="details-header">FULL DETAILS</div>
                <div className="details">
                  <div>
                    <span className="details-key">NAME</span>: Mark Jordan
                  </div>
                  <div>
                    <span className="details-key">PHONE</span>: +2370672491296
                  </div>
                  <div>
                    <span className="details-key">EMAIL</span>:
                    infocmrtest@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <div class="text-success danger-zone">
          DANGER ZONE: ACTIONS DONE HERE CAN CAUSE SERIOUS DAMAGE
        </div>
        <Modal.Footer>
          <button
            className="btn btn-outline-success btn-sm"
            onClick={props.onHide}
          >
            ACTIVATE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InActiveUserModal;
