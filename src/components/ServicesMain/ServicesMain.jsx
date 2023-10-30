import css from "./ServicesMain.module.css";
import Container from "react-bootstrap/Container";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import LittleText from "../LittleText/LittleText";

const ServicesMain = () => {
  return (
    <>
      <section className={css.servicesMain}>
        <NavBarComponent />
        <Container>
          <div className={css.allPartSection}>
            <LittleText text="Services" view="dark" />
            <h1>
              Our Logistics <br />
              Service
            </h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServicesMain;
