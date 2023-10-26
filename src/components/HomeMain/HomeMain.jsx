import css from "./HomeMain.module.css";
import Container from "react-bootstrap/Container";
import ButtonUser from "../ButtonUser/ButtonUser";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import LittleText from "../LittleText/LittleText";

const HomeMain = () => {
  return (
    <>
      <section className={css.homeMain}>
        <NavBarComponent />
        <Container>
          <div className={css.allPartSection}>
            <LittleText text="Logistics & Supply Chain Solutions" view="dark" />
            <h1>
              Your Gateway <br />
              to any Destination <br />
              in the World
            </h1>
            <p className={css.textDescription}>
              In augue ligula, feugiat ut nulla consequat. Ut est lacus,
              molestie in arcu <br />
              no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
              finibus, enim <br />
              diam interdum nulla, sed laoreet risus lectus.
            </p>
            <ButtonUser text="Explore More" view="light" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeMain;
