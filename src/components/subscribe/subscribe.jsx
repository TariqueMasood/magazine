import { Form, InputGroup } from "react-bootstrap";
import styles from "./subscribe.module.css";
import MgButton from "../button/button";
import handIcon from "../../../public/images/news-letter-handIcon.png";
import SocialIcon from "../social-icon/social-icon";
import Image from "next/image";

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
          <MgButton
            style={{
              backgroundColor: "#000",
              border: "1px solid #000",
            }}
          >
            <Image src={handIcon} alt="hand" /> Subscribe Now!
          </MgButton>
        </InputGroup>
        
      </div>
    </div>
  );
};

export default Subscribe;
