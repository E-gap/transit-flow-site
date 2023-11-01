import css from "./ContactMain.module.css";
import Container from "react-bootstrap/Container";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import LittleText from "../LittleText/LittleText";

const ContactMain = () => {
  return (
    <>
      <section className={css.contactMain}>
        <NavBarComponent />
        <Container>
          <div className={css.allPartSection}>
            <LittleText text="Contact" view="dark" />
            <h1>Contact Us</h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactMain;
