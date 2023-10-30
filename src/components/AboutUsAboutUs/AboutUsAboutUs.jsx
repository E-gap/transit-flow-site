import css from "./AboutUsAboutUs.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import ButtonUser from "../ButtonUser/ButtonUser";
import photo_track from "../../images/aboutUsAboutAs/photo_track.jpg";
import photo_man from "../../images/aboutUsAboutAs/photo_man.jpg";

const AboutUsAboutUs = () => {
  return (
    <>
      <section className={css.aboutUsAboutUs}>
        <Container>
          <div className={css.allPartSection}>
            <div className={css.aboutUs_div_photo}>
              <img src={photo_track} alt="track" width="726px" />
              <img
                src={photo_man}
                alt="man"
                width="239px"
                className={css.absolute}
              />
            </div>
            <div className={css.aboutUs_div_text}>
              <LittleText text="About Us" view="light" />
              <h2>Our Company Overview</h2>
              <p className={`${css.aboutUs_text} ${css.text_1}`}>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </p>
              <ul className={css.aboutUs_buttons_list}>
                <li>
                  <button>Our Approch</button>
                </li>
                <li>
                  <button>Our Approch</button>
                </li>
                <li>
                  <button>Our Approch</button>
                </li>
              </ul>
              <p className={`${css.aboutUs_text} ${css.text_2}`}>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia
                voluptassit.
              </p>
              <ButtonUser text="Learn More" view="dark" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutUsAboutUs;
