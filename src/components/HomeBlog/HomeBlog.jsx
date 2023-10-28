import css from "./HomeBlog.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import blog_1 from "../../images/homeBlog/blog_1.jpg";
import date_1 from "../../images/homeBlog/date_1.png";
import blog_2 from "../../images/homeBlog/blog_2.jpg";
import date_2 from "../../images/homeBlog/date_2.png";
import blog_3 from "../../images/homeBlog/blog_3.jpg";
import date_3 from "../../images/homeBlog/date_3.png";
import ButtonUser from "../ButtonUser/ButtonUser";

const HomeBlog = () => {
  return (
    <section className={css.homeBlog}>
      <Container>
        <div className={css.allPartSection}>
          <LittleText text="Our Blog" view="light" />
          <h2 className={css.homeBlog_headline}>Our Latest News</h2>
          <ul className={css.blogList}>
            <li className={css.blogItem}>
              <a href="/" className={css.blogItem_photoLink}>
                <img src={blog_1} alt="blog appearance" className={css.block} />
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
                  We are dedicated in creating added value for our customers by
                  implementing modern technology in our work.
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
                  We are dedicated in creating added value for our customers by
                  implementing modern technology in our work.
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
                  We are dedicated in creating added value for our customers by
                  implementing modern technology in our work.
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
          <ButtonUser text="More Blog" view="dark" />
        </div>
      </Container>
      <div className={css.bg_bottom} />
    </section>
  );
};

export default HomeBlog;
