import Modal from "react-bootstrap/Modal";
import "./Modal.css";

const OptionModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-center"
      >
        <Modal.Body>
          <div className="options">
            <ul>
              <li>
                <a className="report" href="#">
                  Report
                </a>
              </li>
              <li>
                <a className="unfollow" href="#">
                  Unfollow
                </a>
              </li>
              <li>
                <a href="#">Go to post</a>
              </li>
              <li>
                <a href="#">Share to...</a>
              </li>
              <li>
                <a href="#">Copy link</a>
              </li>
              <li>
                <a href="#">Embed</a>
              </li>
              <li>
                <a className="cancel" href="#">
                  Cancel
                </a>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OptionModal;
