import css from "./Header.module.css";
import Container from "react-bootstrap/Container";
/* import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"; */
import logo from "../../images/logo.png";
// import ButtonUser from "../Button/Button";
// import { useState } from "react";

const Header = () => {
  /* const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false); */
  /* const handleShow = () => setIsModalOpen(true); */

  return (
    <header className={css.header}>
      <Container className="d-flex align-items-center">
        <a href="/">
          <img src={logo} height="36px" alt="site logo" />
        </a>
        <ul className={css.contactList}>
          <li className={css.contactItem}>
            <p className={`${css.contactInfo} ${css.contactIconTime}`}>
              Mon - Sat 9.00 - 18.00 <br />
              Sunday Closed
            </p>
          </li>
          <li className={css.contactItem}>
            <a
              href="mailto:contact@logistics.com"
              className={`${css.contactInfo} ${css.contactIconEmail}`}
            >
              Email <br />
              contact@logistics.com
            </a>
          </li>
          <li className={css.contactItem}>
            <a
              href="tel:00112365489"
              className={`${css.contactInfo} ${css.contactIconPhone}`}
            >
              Call Us <br />
              (00) 112 365 489
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
