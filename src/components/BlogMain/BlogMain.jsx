import css from "./BlogMain.module.css";
import Container from "react-bootstrap/Container";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import LittleText from "../LittleText/LittleText";

const BlogMain = () => {
  return (
    <>
      <section className={css.blogMain}>
        <NavBarComponent />
        <Container>
          <div className={css.allPartSection}>
            <LittleText text="Blog" view="dark" />
            <h1>Our Latest News</h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogMain;
