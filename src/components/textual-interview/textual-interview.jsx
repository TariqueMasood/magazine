import { FirstRowCard, SecondRowCard } from "@/app/interview/page";
import { Container } from "react-bootstrap";
import styles from "./textual-interview.module.css";

const TextualInterview = () => {
  return (
    <div className={styles.container}>
      <Container>
        <FirstRowCard />
        <SecondRowCard />
      </Container>
    </div>
  );
};

export default TextualInterview;
