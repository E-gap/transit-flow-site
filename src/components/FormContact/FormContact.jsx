import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import css from "./FormContact.module.css";

const FormContact = () => {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-4 mx-0">
        <Form.Group
          as={Col}
          xs="6"
          controlId="validationCustom01"
          className={css.formColumn}
        >
          <Form.Control
            required
            type="text"
            placeholder="Your name*"
            className={css.formControl}
          />
        </Form.Group>
        <Form.Group
          as={Col}
          xs="6"
          controlId="validationCustom02"
          className={css.formColumn}
        >
          <Form.Control
            required
            type="email"
            placeholder="Email*"
            className={css.formControl}
          />
        </Form.Group>
      </Row>
      <Row className="mb-4 mx-0">
        <Form.Group
          as={Col}
          xs="6"
          controlId="validationCustom04"
          className={css.formColumn}
        >
          <Form.Control
            type="phone"
            placeholder="Phone number*"
            required
            className={css.formControl}
          />
        </Form.Group>
        <Form.Group
          as={Col}
          xs="6"
          controlId="validationCustom03"
          className={css.formColumn}
        >
          <Form.Control
            type="text"
            placeholder="City*"
            required
            className={css.formControl}
          />
        </Form.Group>
      </Row>
      <Row className="mb-4 mx-0">
        <Form.Group as={Col} xs="12" className={css.formColumn}>
          <Form.Control
            as="textarea"
            placeholder="Your message"
            className={`${css.formControl} ${css.textArea}`}
          />
        </Form.Group>
      </Row>
      <Row className="mx-0">
        <Col xs="4" className={css.formColumn}>
          <Button type="submit" className={css.submitButton}>
            Submit message
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormContact;
