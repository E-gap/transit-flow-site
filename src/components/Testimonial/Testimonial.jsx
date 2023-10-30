import css from "./Testimonial.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import Carousel from "../Carousel/Carousel";

const Testimonial = ({ bg }) => {
  const style = css[bg];

  return (
    <section className={`${css.testimonial} ${style}`}>
      <Container>
        <div className={css.allPartSection}>
          <LittleText text="Testimonial" view="light" />
          <Carousel />
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
