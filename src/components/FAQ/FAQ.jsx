import css from "./FAQ.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import Accordion from "react-bootstrap/Accordion";
import ButtonUser from "../ButtonUser/ButtonUser";

const FAQ = () => {
  return (
    <section className={css.FAQ}>
      <Container>
        <div className={css.allPartSection}>
          <div className={css.FAQ_accordion}>
            <LittleText text="FAQ" view="light" />
            <h2 className={css.section_headline}>
              Frequently Asked <br />
              Questions
            </h2>
            <Accordion defaultActiveKey="0" className={`${css.accordionItems}`}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How can I pay for your logistics services?
                </Accordion.Header>
                <Accordion.Body className={css.accordion_body}>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className={css.accordion_header}>
                  What payment methods are supported?
                </Accordion.Header>
                <Accordion.Body className={css.accordion_body}>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={css.accordion_header}>
                  What options for logistics plans are available?
                </Accordion.Header>
                <Accordion.Body className={css.accordion_body}>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className={css.accordion_header}>
                  Can i specify a delivery date when ordering?
                </Accordion.Header>
                <Accordion.Body className={css.accordion_body}>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className={css.FAQ_contactUs}>
            <LittleText text="Let's Talk" view="dark" />
            <p className={css.FAQ_contactUs_headline}>
              You need any help? get free consultation
            </p>
            <div className={css.contactItem}>
              <p className={css.FAQ_contactInfo}>
                Have Any Questions <br />
                (00) 112 365 489
              </p>
            </div>
            <ButtonUser text="Contact Us" view="light" tel="00112365489" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
