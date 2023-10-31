import css from "./GalleryMain.module.css";
import Container from "react-bootstrap/Container";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import LittleText from "../LittleText/LittleText";

const GalleryMain = () => {
  return (
    <>
      <section className={css.galleryMain}>
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
