import ContactMain from "../../components/ContactMain/ContactMain";
import Container from "react-bootstrap/Container";
import css from "./ContactPage.module.css";
import LittleText from "../../components/LittleText/LittleText";
import track_photo from "../../images/teamPage/track_photo.jpg";
import storage_photo from "../../images/teamPage/storage_photo.jpg";
import user_icon from "../../images/teamPage/user_icon.png";
import clock_icon from "../../images/teamPage/clock_icon.png";
import ClientsList from "../../components/ClientsList/ClientsList";

const ContactPage = () => {
  return (
    <>
      <ContactMain />
      <section className={`${css.contact} ${css.section}`}>
        <Container>
          <div className={css.allPartSection}></div>
        </Container>
        <section className={css.teamClients}>
          <Container>
            <ClientsList />
          </Container>
        </section>
      </section>
    </>
  );
};

export default ContactPage;
