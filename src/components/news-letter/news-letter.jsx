import { Container, Form, InputGroup } from "react-bootstrap";
import styles from "./news-letter.module.css";
import MgButton from "../button/button";
import handIcon from "../../../public/images/news-letter-handIcon.png";
import Image from "next/image";
import SocialIcon from "../social-icon/social-icon";
import SectionHeader from "../section-header/section-header";

const NewsLetter = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionHeader
          title="News Letter"
          subTitle="Subscribe to monthly creative magazine"
          desc="Get notified to our exclusive releases & events."
        />
        <div className={styles.newsLetter}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email Adderess"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <MgButton>
              <Image src={handIcon} alt="hand" /> Subscribe Now!
            </MgButton>
          </InputGroup>
          <SocialIcon />
        </div>
      </Container>
    </div>
  );
};

export default NewsLetter;
