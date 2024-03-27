import { Container } from "react-bootstrap";
import styles from "./term-condition.module.css";

const TermCondition = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h1>Term & Conditions</h1>
        <div className={styles.termDiveder}></div>
        <h6>Introduction </h6>
        <p>
          This Term & Conditions explains how personal data is collected and
          used by BizClik Media Limited (company number: 06039571) and any other
          entities within our group or under common ownership from time to time
          (together referred to as “BizClik”, “we”, “us”, “our” throughout this
          Privacy Policy). At BizClik, we respect your privacy and are committed
          to protecting your personal data. We take data protection very
          seriously and will ensure that we uphold the trust that our customers
          and others place in us when they provide us with their personal
          information. This Privacy Policy will inform you as to how we collect,
          use, handle and disclose your personal data, as well as telling you
          about your privacy rights and how the law protects you. If you need
          any more information about our data protection practices, please
          contact us using the details below.
        </p>
      </Container>
    </div>
  );
};

export default TermCondition;
