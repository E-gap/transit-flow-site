import css from "./PricingMain.module.css";
import Container from "react-bootstrap/Container";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import LittleText from "../LittleText/LittleText";

const PricingMain = () => {
  return (
    <>
      <section className={css.pricingMain}>
        <NavBarComponent />
        <Container>
          <div className={css.allPartSection}>
            <LittleText text="Pricing" view="dark" />
            <h1>Our Best Price</h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PricingMain;
