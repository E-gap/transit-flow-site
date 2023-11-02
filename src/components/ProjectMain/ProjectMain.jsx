import css from "./ProjectMain.module.css";
import Container from "react-bootstrap/Container";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import LittleText from "../LittleText/LittleText";

const GalleryMain = () => {
  return (
    <>
      <section className={css.projectMain}>
        <NavBarComponent />
        <Container>
          <div className={css.allPartSection}>
            <LittleText text="Gallery" view="dark" />
            <h1>Our Project</h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default GalleryMain;
