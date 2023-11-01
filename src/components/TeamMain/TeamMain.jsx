import css from "./TeamMain.module.css";
import Container from "react-bootstrap/Container";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import LittleText from "../LittleText/LittleText";

const TeamMain = () => {
  return (
    <>
      <section className={css.teamMain}>
        <NavBarComponent />
        <Container>
          <div className={css.allPartSection}>
            <LittleText text="Team" view="dark" />
            <h1>Our Team</h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TeamMain;
