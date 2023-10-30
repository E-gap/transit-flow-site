import css from "./AboutUsWeDo.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import ButtonUser from "../ButtonUser/ButtonUser";
import ship_icon from "../../images/aboutUsWeDo/ship_icon.png";
import house_icon from "../../images/aboutUsWeDo/house_icon.png";
import plane_icon from "../../images/aboutUsWeDo/plane_icon.png";
import ring_icon from "../../images/aboutUsWeDo/ring_icon.png";
import car_icon from "../../images/aboutUsWeDo/car_icon.png";
import user_icon from "../../images/aboutUsWeDo/user_icon.png";

const AboutUsWeDo = () => {
  return (
    <>
      <section className={css.aboutUsWeDo}>
        <Container>
          <div className={css.allPartSection}>
            <LittleText text="What We Do" view="light" />
            <h2 className={css.section_headline}>Our Logistics Services</h2>
            <ul className={css.works_list}>
              <li className={css.works_item}>
                <img
                  src={ship_icon}
                  alt="ship icon"
                  className={css.icon}
                  height="56px"
                />
                <h3>Sea Transport Services</h3>
                <p className={css.works_item_text}>
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </li>
              <li className={css.works_item}>
                <img
                  src={house_icon}
                  alt="ship icon"
                  className={css.icon}
                  height="56px"
                />
                <h3>Warehousing Services</h3>
                <p className={css.works_item_text}>
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </li>
              <li className={css.works_item}>
                <img
                  src={plane_icon}
                  alt="ship icon"
                  className={css.icon}
                  height="56px"
                />
                <h3>Air Fright Services</h3>
                <p className={css.works_item_text}>
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </li>
              <li className={css.works_item}>
                <img
                  src={ring_icon}
                  alt="ship icon"
                  className={css.icon}
                  height="56px"
                />
                <h3>Project & Exhibition</h3>
                <p className={css.works_item_text}>
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </li>
              <li className={css.works_item}>
                <img
                  src={car_icon}
                  alt="ship icon"
                  className={css.icon}
                  height="56px"
                />
                <h3>Local Shipping Services</h3>
                <p className={css.works_item_text}>
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </li>
              <li className={css.works_item}>
                <img
                  src={user_icon}
                  alt="ship icon"
                  className={css.icon}
                  height="56px"
                />
                <h3>Customer Clearance</h3>
                <p className={css.works_item_text}>
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </li>
            </ul>
            <ButtonUser text="More Works" view="dark" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutUsWeDo;
