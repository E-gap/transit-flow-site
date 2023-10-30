import css from "./AboutUsMain.module.css";
import Container from "react-bootstrap/Container";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import LittleText from "../LittleText/LittleText";

const AboutUsMain = () => {
  return (
    <>
      <section className={css.aboutUsMain}>
        <NavBarComponent />
        <Container>
          <div className={css.allPartSection}>
            <LittleText text="About Us" view="dark" />
            <h1>About Our Logistics</h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutUsMain;
