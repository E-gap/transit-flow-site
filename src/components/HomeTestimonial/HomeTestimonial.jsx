import css from "./HomeTestimonial.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import Carousel from "../Carousel/Carousel";

const HomeTestimonial = () => {
  return (
    <section className={css.homeTestimonial}>
      <Container>
        <div className={css.allPartSection}>
          <LittleText text="Testimonial" view="light" />
          <Carousel />
        </div>
      </Container>
    </section>
  );
};

export default HomeTestimonial;
