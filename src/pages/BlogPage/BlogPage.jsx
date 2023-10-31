import BlogMain from "../../components/BlogMain/BlogMain";
import Container from "react-bootstrap/Container";
import css from "./BlogPage.module.css";
import LittleText from "../../components/LittleText/LittleText";
import blog_1 from "../../images/blogPage/blog_1.jpg";
import blog_2 from "../../images/blogPage/blog_2.jpg";
import blog_3 from "../../images/blogPage/blog_3.jpg";
import blog_4 from "../../images/blogPage/blog_4.jpg";
import blog_5 from "../../images/blogPage/blog_5.jpg";
import date_1 from "../../images/blogPage/date_1.png";
import date_2 from "../../images/blogPage/date_2.png";
import date_3 from "../../images/blogPage/date_3.png";
import date_4 from "../../images/blogPage/date_4.png";
import date_5 from "../../images/blogPage/date_5.png";
const BlogPage = () => {
  return (
    <>
      <BlogMain />
      <section className={`${css.blog} ${css.section}`}>
        <Container>
          <div className={css.blog_allPartSection}>
            <LittleText text="Our Blog" view="light" />
            <h2>Our Latest News</h2>
            <ul className={css.blogList}>
              <li className={css.blogItem}>
                <a href="/" className={css.blogItem_photoLink}>
                  <img
                    src={blog_1}
                    alt="blog appearance"
                    className={css.block}
                  />
                  <div className={css.photoLink_overlay}>
                    <div className={css.photoLink_overlay_button}>
                      <p>Read More</p>
                    </div>
                  </div>
                </a>
                <img src={date_1} alt="date" />
                <div className={css.blogItem_text_div}>
                  <a href="/" className={css.blogItem_headline}>
                    Inland freight a worthy solution for your business
                  </a>
                  <p className={css.blogItem_text}>
                    We are dedicated in creating added value for our customers
                    by implementing modern technology in our work.
                  </p>
                  <ul className={css.blogItem_list_text}>
                    <li>Urgent transport solutions</li>
                    <li>Reliable & experienced staffs</li>
                    <li>Urgent transport solutions</li>
                    <li>Reliable & experienced staffs</li>
                  </ul>
                </div>
              </li>
              <li className={css.blogItem}>
                <a href="/" className={css.blogItem_photoLink}>
                  <img src={blog_2} alt="blog appearance" />
                  <div className={css.photoLink_overlay}>
                    <div className={css.photoLink_overlay_button}>
                      <p>Read More</p>
                    </div>
                  </div>
                </a>
                <img src={date_2} alt="date" />
                <div className={css.blogItem_text_div}>
                  <a href="/" className={css.blogItem_headline}>
                    How technology can help redraw the supply chain map
                  </a>
                  <p className={css.blogItem_text}>
                    We are dedicated in creating added value for our customers
                    by implementing modern technology in our work.
                  </p>
                  <ul className={css.blogItem_list_text}>
                    <li>Urgent transport solutions</li>
                    <li>Reliable & experienced staffs</li>
                    <li>Urgent transport solutions</li>
                    <li>Reliable & experienced staffs</li>
                  </ul>
                </div>
              </li>
              <li className={css.blogItem}>
                <a href="/" className={css.blogItem_photoLink}>
                  <img src={blog_3} alt="blog appearance" />
                  <div className={css.photoLink_overlay}>
                    <div className={css.photoLink_overlay_button}>
                      <p>Read More</p>
                    </div>
                  </div>
                </a>
                <img src={date_3} alt="date" />
                <div className={css.blogItem_text_div}>
                  <a href="/" className={css.blogItem_headline}>
                    Five things you should have ready for your broker
                  </a>
                  <p className={css.blogItem_text}>
                    We are dedicated in creating added value for our customers
                    by implementing modern technology in our work.
                  </p>
                  <ul className={css.blogItem_list_text}>
                    <li>Urgent transport solutions</li>
                    <li>Reliable & experienced staffs</li>
                    <li>Urgent transport solutions</li>
                    <li>Reliable & experienced staffs</li>
                  </ul>
                </div>
              </li>
              <li className={css.blogItem}>
                <a href="/" className={css.blogItem_photoLink}>
                  <img src={blog_4} alt="blog appearance" />
                  <div className={css.photoLink_overlay}>
                    <div className={css.photoLink_overlay_button}>
                      <p>Read More</p>
                    </div>
                  </div>
                </a>
                <img src={date_4} alt="date" />
                <div className={css.blogItem_text_div}>
                  <a href="/" className={css.blogItem_headline}>
                    Four simple tips for becoming a healthier truck driver
                  </a>
                  <p className={css.blogItem_text}>
                    We are dedicated in creating added value for our customers
                    by implementing modern technology in our work.
                  </p>
                  <ul className={css.blogItem_list_text}>
                    <li>Urgent transport solutions</li>
                    <li>Reliable & experienced staffs</li>
                    <li>Urgent transport solutions</li>
                    <li>Reliable & experienced staffs</li>
                  </ul>
                </div>
              </li>
              <li className={css.blogItem}>
                <a href="/" className={css.blogItem_photoLink}>
                  <img src={blog_5} alt="blog appearance" />
                  <div className={css.photoLink_overlay}>
                    <div className={css.photoLink_overlay_button}>
                      <p>Read More</p>
                    </div>
                  </div>
                </a>
                <img src={date_5} alt="date" />
                <div className={css.blogItem_text_div}>
                  <a href="/" className={css.blogItem_headline}>
                    What Is The Role Of A Logistics Operations Manager
                  </a>
                  <p className={css.blogItem_text}>
                    We are dedicated in creating added value for our customers
                    by implementing modern technology in our work.
                  </p>
                  <ul className={css.blogItem_list_text}>
                    <li>Urgent transport solutions</li>
                    <li>Reliable & experienced staffs</li>
                    <li>Urgent transport solutions</li>
                    <li>Reliable & experienced staffs</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogPage;
