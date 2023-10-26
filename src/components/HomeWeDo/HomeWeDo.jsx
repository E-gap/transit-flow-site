import css from "./HomeWeDo.module.css";
import Container from "react-bootstrap/Container";
import ButtonUser from "../ButtonUser/ButtonUser";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import LittleText from "../LittleText/LittleText";

const HomeWeDo = () => {
  return (
    <section className={css.homeWeDo}>
      <Container>
        <div className={css.allPartSection}>
          <LittleText text="What We Do" view="light" />
          <h1>
            Safe & Reliable <br />
            Cargo Solutions
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default HomeWeDo;
