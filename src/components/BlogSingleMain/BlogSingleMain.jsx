import css from "./BlogSingleMain.module.css";
import Container from "react-bootstrap/Container";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import date from "../../images/blogSinglePage/date.png";

const BlogSingleMain = () => {
  return (
    <>
      <section className={css.blogSingleMain}>
        <NavBarComponent />
        <Container>
          <div className={css.allPartSection}>
            <img src={date} alt="date" style={{ marginBottom: "10px" }} />
            <h1>How technology can help redraw the supply chain map</h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogSingleMain;
