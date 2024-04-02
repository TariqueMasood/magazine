"use client";

import Image from "next/image";
import logo from "../../../public/images/project-leader-logo-2-w.png";
import searchIcon from "../../../public/images/search-icon.svg";
import styles from "./navbar.module.css";
import Link from "next/link";
import NavList from "../nav-list/nav-list";
import { Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";

const MgNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
      <Container>
        <Link href="/">
          <Image className={styles.logoImage} src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
          bg="dark"
          data-bs-theme="dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Project Leaders Magazine
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center align-items-center  flex-grow-1">
              <NavList />
            </Nav>
            <div className={styles.actions}>
              <Form className="d-flex align-items-center">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className={styles.searchBox}
                  aria-label="Search"
                />
                <div className={styles.searchLabel}>Find</div>
                <Image
                  src={searchIcon}
                  alt="search-icon"
                  className={styles.searchIcon}
                />
              </Form>
              <div className={styles.divider}>|</div>
              <Link href="#" className={styles.actionLink}>
                Advertise
              </Link>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MgNavbar;
