import css from "./ProjectSingleMain.module.css";
import Container from "react-bootstrap/Container";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import LittleText from "../LittleText/LittleText";

const TransportationMain = () => {
  return (
    <>
      <section className={css.projectSingleMain}>
        <NavBarComponent />
        <Container>
          <div className={css.allPartSection}>
            <LittleText text="Warehouse Transportation" view="dark" />
            <h1>Air Cargo Transportation</h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TransportationMain;
