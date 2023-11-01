import Container from "react-bootstrap/Container";
import css from "./NotFoundPage.module.css";
import Button from "react-bootstrap/Button";

const NotFoundPage = () => {
  return (
    <>
      <section className={css.notFound}>
        <Container>
          <div className={css.allPartSection}>
            <p className={css.section_headline}>
              4<span className={css.yellow_zero}>0</span>4
            </p>
            <p className={css.text_middle}>Oops! Page not found.</p>
            <p className={css.text_little}>
              Let’s get you to where you need to be.
            </p>
            <Button className={css.backButton} type="button">
              Back to home
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFoundPage;
