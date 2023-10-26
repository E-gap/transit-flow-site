import css from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../images/logo.png";
import Form from "react-bootstrap/Form";
// import Notiflix from "notiflix";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { SiLinkedin } from "react-icons/si";
import { FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <footer className={css.footer}>
      <div className={css.firstPartFooter}>
        <Container>
          <Row className={css.footerFirstRow}>
            <Col
              xs={4}
              className={`${css.footerColumn} ${css.footerFirstColumn}`}
            >
              <a href="/">
                <img src={logo} height="36px" alt="site logo" />
              </a>
            </Col>
            <Col xs={2} className={css.footerColumn}>
              Pages
            </Col>
            <Col xs={2} className={css.footerColumn}>
              Utility
            </Col>
            <Col xs={4} className={css.footerColumn}>
              Subscribe
            </Col>
          </Row>
        </Container>
      </div>
      <div className={css.secondPartFooter}>
        <Container>
          <Row className={css.footerSecondRow}>
            <Col xs={4} className={css.footerColumn}>
              <p className={css.footerText}>
                Leverage agile frameworks to provide a <br />
                robust synopsis for strategy collaborative thinking to further
                the overall value proposition.
              </p>
              <ul className={css.contactList}>
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
            </Col>
            <Col xs={2} className={css.footerColumn}>
              <ul className={css.footerList}>
                <li className={css.footerListItem}>
                  <a className={css.footerListLink} href="/">
                    About Us
                  </a>
                </li>
                <li className={css.footerListItem}>
                  <a className={css.footerListLink} href="/">
                    Our Team
                  </a>
                </li>
                <li className={css.footerListItem}>
                  <a className={css.footerListLink} href="/">
                    Our Project
                  </a>
                </li>
                <li className={css.footerListItem}>
                  <a className={css.footerListLink} href="/">
                    Pricing
                  </a>
                </li>
                <li className={css.footerListItem}>
                  <a className={css.footerListLink} href="/">
                    Contact
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={2} className={css.footerColumn}>
              <ul className={css.footerList}>
                <li className={css.footerListItem}>
                  <a className={css.footerListLink} href="/">
                    Style Guide
                  </a>
                </li>
                <li className={css.footerListItem}>
                  <a className={css.footerListLink} href="/">
                    Changelog
                  </a>
                </li>
                <li className={css.footerListItem}>
                  <a className={css.footerListLink} href="/">
                    Licenses
                  </a>
                </li>
                <li className={css.footerListItem}>
                  <a className={css.footerListLink} href="/">
                    Protected
                  </a>
                </li>
                <li className={css.footerListItem}>
                  <a className={css.footerListLink} href="/">
                    Not Found
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={4} className={css.footerColumn}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} xs="12" controlId="validationCustom01">
                    <Form.Control
                      className={css.emailInput}
                      required
                      type="email"
                      placeholder="Email here*"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <div className={css.divFlex}>
                  <Button className={css.sendButton} type="submit">
                    Send now
                  </Button>
                  <ul className={css.socialLinksList}>
                    <li className={css.socialLinksItem}>
                      <a href="/" className={css.linkIcon}>
                        <SiLinkedin />
                      </a>
                    </li>
                    <li className={css.socialLinksItem}>
                      <a href="/" className={css.linkIcon}>
                        <FaTwitter />
                      </a>
                    </li>
                    <li className={css.socialLinksItem}>
                      <a href="/" className={css.linkIcon}>
                        <FaFacebook />
                      </a>
                    </li>
                  </ul>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
