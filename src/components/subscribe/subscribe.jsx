import { Form, InputGroup } from "react-bootstrap";
import styles from "./subscribe.module.css";
import MgButton from "../button/button";
import { FaHandPointer } from "react-icons/fa6";

const Subscribe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.subscribe}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Email Adderess"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className={styles.subscribeBtn}>
            <button className={styles.buttonContainer}>
              <FaHandPointer />
              Subscribe Now!
            </button>
          </div>
        </InputGroup>
      </div>
    </div>
  );
};

export default Subscribe;
