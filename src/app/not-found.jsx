import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <h2>Not found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </Container>
  );
};

export default NotFound;
