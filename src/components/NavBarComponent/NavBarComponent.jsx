import css from "./NavBarComponent.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SiLinkedin } from "react-icons/si";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const NavBarComponent = () => {
  return (
    <section className={css.navBarComponent}>
      <Container className="d-flex align-items-center">
        <Navbar className={css.navBar}>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className={`${css.navLink} navbarLink`}>
                Home
              </Nav.Link>
              <div className={`${css.navDivider} vr`} />
              <Nav.Link href="/about" className={`${css.navLink} navbarLink`}>
                About
              </Nav.Link>
              <div className={`${css.navDivider} vr`} />
              <NavDropdown
                title="Pages"
                id="basic-nav-dropdown"
                className={`${css.navLink} ${css.dropdown}`}
              >
                <NavDropdown.Item href="#action/3.1">Page1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Page2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Page3</NavDropdown.Item>
              </NavDropdown>
              <div className={`${css.navDivider} vr`} />
              <Nav.Link href="#project" className={`${css.navLink} navbarLink`}>
                Project
              </Nav.Link>
              <div className={`${css.navDivider} vr`} />
              <Nav.Link href="#contact" className={`${css.navLink} navbarLink`}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <ul className={css.socialLinksList}>
          <li className={css.socialLinksItem}>
            <a href="/" className={css.socialLink}>
              <BsInstagram className={css.linkIcon} />
            </a>
          </li>
          <li className={css.socialLinksItem}>
            <a href="/" className={css.socialLink}>
              <FaFacebook className={css.linkIcon} />
            </a>
          </li>
          <li className={css.socialLinksItem}>
            <a href="/" className={css.socialLink}>
              <FaTwitter className={css.linkIcon} />
            </a>
          </li>
          <li className={css.socialLinksItem}>
            <a href="/" className={css.socialLink}>
              <SiLinkedin className={css.linkIcon} />
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default NavBarComponent;
