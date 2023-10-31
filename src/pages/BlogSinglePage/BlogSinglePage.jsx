import BlogSingleMain from "../../components/BlogSingleMain/BlogSingleMain";
import Container from "react-bootstrap/Container";
import css from "./BlogSinglePage.module.css";

const BlogSinglePage = () => {
  return (
    <>
      <BlogSingleMain />
      <section className={`${css.blogSingle} ${css.section}`}>
        <Container>
          <div className={css.blogSingle_allPartSection}></div>
        </Container>
      </section>
    </>
  );
};

export default BlogSinglePage;
