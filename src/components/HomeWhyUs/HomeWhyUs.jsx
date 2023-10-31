import css from "./HomeWhyUs.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import plane_photo from "../../images/homeWhyUs/plane_photo.jpg";
import girl_photo from "../../images/homeWhyUs/girl_photo.png";
import ButtonUser from "../ButtonUser/ButtonUser";

const HomeWhyUs = () => {
  return (
    <section className={css.homeWhyUs}>
      <div className={css.bg_1}></div>
      <Container>
        <div className={css.allPartSection}>
          <div className={css.whyUsDiv}>
            <div className={css.whyUsDiv_text}>
              <LittleText text="Why Us" view="light" />
              <h2>We provide full range global logistics solution</h2>
              <p className={css.text_1}>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </p>
              <p className={css.text_2}>
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment.
              </p>
              <ul className={css.advantagesList}>
                <li className={css.advantagesItem_1}>Delivery on Time</li>
                <li className={css.advantagesItem_2}>Optimized Travel Cost</li>
              </ul>
            </div>
            <div className={css.whyUsDiv_photo}>
              <img src={plane_photo} alt="plane appearance" />
              <img
                src={girl_photo}
                alt="plane appearance"
                className={css.whyUsDiv_photo_girl}
              />
            </div>
          </div>
          <ul className={css.indicatorsList}>
            <li className={css.indicatorsItem}>
              <span>1294</span>
              <p>Delivered Packages</p>
            </li>
            <li className={css.indicatorsItem}>
              <span>3594</span>
              <p>Satisfied Clients</p>
            </li>
          </ul>
        </div>
      </Container>
      <div className={css.transporting}>
        <div className={css.transporting_relative_div}>
          <h2>Transporting Across The World</h2>
          <ul className={css.transportingList}>
            <li>
              <p className={css.transportingText}>
                Liquid Transportation <span>Premium Tankers</span>
              </p>
            </li>
            <li>
              <p className={css.transportingText}>
                Packaging Solutions <span>Warehouse Management</span>
              </p>
            </li>
            <li>
              <p className={css.transportingText}>
                Contract Logistics <span>Road Transportation</span>
              </p>
            </li>
            <li>
              <p className={css.transportingText}>
                Warehouse & Distribution <span>Large Warehouse</span>
              </p>
            </li>
            <li>
              <p className={css.transportingText}>
                Specialized Transport <span>Ocean Transports</span>
              </p>
            </li>
          </ul>
          <ButtonUser text="More work" view="dark" />
        </div>

        <div className={css.bg_2} />
      </div>
    </section>
  );
};

export default HomeWhyUs;
