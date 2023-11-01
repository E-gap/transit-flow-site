import ContactMain from "../../components/ContactMain/ContactMain";
import Container from "react-bootstrap/Container";
import css from "./ContactPage.module.css";
import LittleText from "../../components/LittleText/LittleText";
import ClientsList from "../../components/ClientsList/ClientsList";
import FormContact from "../../components/FormContact/FormContact";
import FAQ from "../../components/FAQ/FAQ";

const ContactPage = () => {
  return (
    <>
      <ContactMain />
      <section className={`${css.contact} ${css.section}`}>
        <Container>
          <div className={css.contact_allPartSection}>
            <LittleText text="Contact" view="dark" />
            <h2 className={css.contact_headline}>Get in touch with us</h2>
            <p className={css.contact_text}>
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
                  Contact@logistics.com
                </a>
              </li>
              <li className={css.contactItem}>
                <a
                  href="tel:00112365489"
                  className={`${css.contactInfo} ${css.contactIconPhone}`}
                >
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
            <FormContact width="100%" align="center" />
          </div>
        </Container>
      </section>
      <section className={css.contactClients}>
        <Container>
          <ClientsList />
        </Container>
      </section>
      <FAQ />
    </>
  );
};

export default ContactPage;
