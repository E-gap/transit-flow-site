import css from "./HomeContact.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import FormContact from "../FormContact/FormContact";

const HomeContact = () => {
  return (
    <section className={css.homeContact}>
      <Container>
        <div className={css.allPartSection}>
          <LittleText text="Contact" view="dark" />
          <div className={css.grid}>
            <div className={css.grid_first_column}>
              <h2 className={css.homeContact_headline}>Get in touch with us</h2>
              <p className={css.homeContact_text}>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </p>
              <ul className={css.contactList}>
                <li className={css.contactItem}>
                  <a
                    href="mailto:contact@logistics.com"
                    className={`${css.contactInfo} ${css.contactIconEmail}`}
                  >
                    Email <br />
                    contact@logistics.com
                  </a>
                </li>
                <li className={css.contactItem}>
                  <a
                    href="tel:00112365489"
                    className={`${css.contactInfo} ${css.contactIconPhone}`}
                  >
                    Call Us <br />
                    (00) 112 365 489
                  </a>
                </li>
                <li className={css.contactItem}>
                  <p className={`${css.contactInfo} ${css.contactIconTime}`}>
                    Mon - Sat 9.00 - 18.00 <br />
                    Sunday Closed
                  </p>
                </li>
              </ul>
            </div>
            <div className={css.form}>
              <FormContact />
            </div>
          </div>
          <div className={css.homeContact_bottom_background}></div>
        </div>
      </Container>
    </section>
  );
};

export default HomeContact;
