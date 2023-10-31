import css from "./ServiceSingleMain.module.css";
import Container from "react-bootstrap/Container";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import LittleText from "../LittleText/LittleText";

const ServiceSingleMain = () => {
  return (
    <>
      <section className={css.serviceSingleMain}>
        <NavBarComponent />
        <Container>
          <div className={css.allPartSection}>
            <LittleText text="Service Single" view="dark" />
            <h1>Service Details</h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServiceSingleMain;
