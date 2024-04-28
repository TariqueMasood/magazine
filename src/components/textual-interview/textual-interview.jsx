import { Container } from "react-bootstrap";
import styles from "./textual-interview.module.css";
import InterviewCard from "../interview-card/interview-card";
import InterviewCard2 from "../interview-card/interview-card-2";

const TextualInterview = () => {
  return (
    <div className={styles.container}>
      <Container>
        <InterviewCard />
        <InterviewCard2 />
      </Container>
    </div>
  );
};

export default TextualInterview;
