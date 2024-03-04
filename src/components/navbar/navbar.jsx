"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import searchIcon from "../../../public/images/search-icon.svg";
import styles from "./navbar.module.css";
import Link from "next/link";
import NavList from "../nav-list/nav-list";
import NavLink from "../link/link";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";

const MgNavbar = () => {
  return (
    <Navbar expand="md" className={`bg-body-dark ${styles.navbar}`}>
      <Container>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center align-items-center  flex-grow-1">
              <NavList />
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MgNavbar;
