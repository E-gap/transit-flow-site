import css from "./HomeWeDo.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import shipIcon from "../../images/homeWeDo/ship-icon.svg";
import houseIcon from "../../images/homeWeDo/house-icon.svg";
import planeIcon from "../../images/homeWeDo/plane-icon.svg";
import carIcon from "../../images/homeWeDo/car-icon.svg";

const HomeWeDo = () => {
  return (
    <section className={css.homeWeDo}>
      <Container>
        <div className={css.allPartSection}>
          <div className={css.divText}>
            <LittleText text="What We Do" view="light" />
            <h2>
              Safe & Reliable <br /> Cargo Solutions
            </h2>
          </div>
          <ul className={css.servicesList}>
            <li className={css.servicesItem}>
              <img src={shipIcon} alt="ship icon" className={css.icon} />
              <div className={css.servicesItemText}>
                <div className={css.flex_column}>
                  <a href="/services/id" className={css.servise_headline}>
                    Sea Transport Services
                  </a>
                  <p>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </p>
                </div>
              </div>
            </li>
            <li className={css.servicesItem}>
              <img src={houseIcon} alt="house icon" className={css.icon} />
              <div className={css.servicesItemText}>
                <div className={css.flex_column}>
                  <a href="/services/id" className={css.servise_headline}>
                    Warehousing Services
                  </a>
                  <p>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </p>
                </div>
              </div>
            </li>
            <li className={css.servicesItem}>
              <img src={planeIcon} alt="plane icon" className={css.icon} />
              <div className={css.servicesItemText}>
                <div className={css.flex_column}>
                  <a href="/services/id" className={css.servise_headline}>
                    Air Fright Services
                  </a>
                  <p>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </p>
                </div>
              </div>
            </li>
            <li className={css.servicesItem}>
              <img src={carIcon} alt="car icon" className={css.icon} />
              <div className={css.servicesItemText}>
                <div className={css.flex_column}>
                  <a href="/services/id" className={css.servise_headline}>
                    Local Shipping Services
                  </a>
                  <p>
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default HomeWeDo;
