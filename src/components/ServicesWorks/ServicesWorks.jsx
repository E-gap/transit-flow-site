import css from "./ServicesWorks.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import photo_delivery_man from "../../images/servicesWorks/image_delivery_man.jpg";
import photo_sky_scraper from "../../images/servicesWorks/image_sky_scraper.jpg";
import box_icon from "../../images/servicesWorks/box_icon.png";
import sheild_icon from "../../images/servicesWorks/sheild_icon.png";
import tree_icon from "../../images/servicesWorks/tree_icon.png";

const ServicesWorks = () => {
  return (
    <section className={css.servicesWorks}>
      <Container>
        <div className={css.allPartSection}>
          <LittleText text="Our Goodness" view="light" />
          <h2>How We Works</h2>
          <div className={css.servicesInfo}>
            <div className={css.services_div_photo}>
              <img src={photo_delivery_man} alt="delivery man" width="726px" />
              <img
                src={photo_sky_scraper}
                alt="sky scraper"
                width="319px"
                className={css.absolute}
              />
            </div>
            <div className={css.services_div_text}>
              <ul className={css.services_list}>
                <li>
                  <img src={box_icon} alt="box icon" width={47} height={53} />
                  <div>
                    <p className={css.service_name}>Warehousing Services</p>
                    <p className={css.service_description}>
                      Leverage agile frameworks to provide a robust synopsis for
                      strategy foster collaborative thinking
                    </p>
                  </div>
                </li>
                <li>
                  <img
                    src={sheild_icon}
                    alt="sheild icon"
                    width={47}
                    height={52}
                  />
                  <div>
                    <p className={css.service_name}>Safety & Quality</p>
                    <p className={css.service_description}>
                      Leverage agile frameworks to provide a robust synopsis for
                      strategy foster collaborative thinking
                    </p>
                  </div>
                </li>
                <li>
                  <img src={tree_icon} alt="tree icon" width={47} height={48} />
                  <div>
                    <p className={css.service_name}>Care for Environment</p>
                    <p className={css.service_description}>
                      Leverage agile frameworks to provide a robust synopsis for
                      strategy foster collaborative thinking
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesWorks;
