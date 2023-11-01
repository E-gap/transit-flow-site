import BlogSingleMain from "../../components/BlogSingleMain/BlogSingleMain";
import Container from "react-bootstrap/Container";
import css from "./BlogSinglePage.module.css";
import ship_photo from "../../images/blogSinglePage/ship_photo.jpg";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const BlogSinglePage = () => {
  return (
    <>
      <BlogSingleMain />
      <section className={`${css.blogSingle} ${css.section}`}>
        <Container>
          <div className={css.blogSingle_allPartSection}>
            <div className={css.textDiv}>
              <h2>Your Logistics Solutions</h2>
              <p className={css.textDiv_text}>
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit
                nec feugiat tempus.Phasellus at quam hendrerit semper feugiat id
                nunc. Morbi quis justo velit. Duis semper lacus scelerisque,
                aliquam leo quis, porttitor leo Fusce lectus ex pretium.
              </p>
              <p className={css.textDiv_text__white}>
                “Digitization within transport and logistics means seamless
                service to our customers, visibility in the supply chain, and
                driving a more efficient business.”
              </p>
              <h2>Safest Logistics Solutions Provider With Integrity</h2>
              <p className={css.textDiv_text}>
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit
                nec feugiat tempus.Phasellus at quam hendrerit semper feugiat id
                nunc. Morbi quis justo velit. Duis semper lacus scelerisque,
                aliquam leo quis, porttitor leo Fusce lectus ex pretium.
              </p>
              <img
                src={ship_photo}
                alt="ship"
                style={{ width: "100%", marginBottom: "15px" }}
              />
              <p className={css.textDiv_text} style={{ textAlign: "center" }}>
                The Cargo Ship
              </p>
              <p className={css.textDiv_text}>
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit
                nec attempus.Phasellus at quam hendrerit semper David Warner
                nunc. Morbi quis justo velit. Duis semper lacus scelerisque,
                aliquam leo quis, porttitor leo Fusce lectus ex pretium.
              </p>
              <p className={css.textDiv_text}>
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec
                feugiat tempus Phasellus atquam.
              </p>
              <div className={css.socialLinks}>
                <ul className={css.socialLinks_list}>
                  <li className={css.socialLinks_item}>
                    <BsInstagram className={css.socialLinks_icon} />
                  </li>
                  <li className={css.socialLinks_item}>
                    <BsFacebook className={css.socialLinks_icon} />
                  </li>
                  <li className={css.socialLinks_item}>
                    <BsTwitter className={css.socialLinks_icon} />
                  </li>
                  <li className={css.socialLinks_item}>
                    <BsLinkedin className={css.socialLinks_icon} />
                  </li>
                </ul>
                <p>Category : Shipping</p>
              </div>
            </div>
            <div className={css.blocksDiv}>
              <div className={`${css.blockItem} ${css.bg_grey}`}>
                <p className={css.blockItem_headline__dark}>Categories</p>
                <ul className={css.category_list}>
                  <li className={css.category_item}>
                    Shipping
                    <span className={css.category_item_quantity}>(3)</span>
                  </li>
                  <li className={css.category_item}>
                    Services
                    <span className={css.category_item_quantity}>(5)</span>
                  </li>
                  <li className={css.category_item}>
                    Transport
                    <span className={css.category_item_quantity}>(2)</span>
                  </li>
                  <li className={css.category_item}>
                    Warehouse
                    <span className={css.category_item_quantity}>(2)</span>
                  </li>
                  <li className={css.category_item}>
                    Transport Industries
                    <span className={css.category_item_quantity}>(5)</span>
                  </li>
                </ul>
              </div>
              <div className={`${css.blockItem} ${css.bg_grey}`}>
                <p className={css.blockItem_headline}>How can we help you?</p>
                <p className={css.blockItem_text}>
                  Duis semper lacus scelerisque, aliquam leo quis, porttitor
                  leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor
                  elit nec feugiat tempus Phasellus atquam.
                </p>
                <button className={css.sendButton} type="submit">
                  Contact
                </button>
              </div>
              <div className={`${css.blockItem} ${css.bg_dark}`}>
                <p className={css.blockItem_headline}>Get In Touch</p>
                <>
                  <p className={css.blockItem_contactData}>
                    Need help?
                    <br />
                    (00) 112 365 489
                  </p>
                  <p className={css.blockItem_contactData}>
                    Email <br />
                    contact@logistics.com
                  </p>
                </>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogSinglePage;
