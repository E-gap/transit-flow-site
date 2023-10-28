import css from "./HomeContact.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import member_1 from "../../images/homeTeam/member_1.jpg";
import member_2 from "../../images/homeTeam/member_2.jpg";
import member_3 from "../../images/homeTeam/member_3.jpg";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const HomeContact = () => {
  return (
    <section className={css.homeContact}>
      <Container>
        <div className={css.allPartSection}>
          <LittleText text="Contact" view="dark" />
          <h2 className={css.homeContact_headline}>Get in touch with us</h2>
          <p>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HomeContact;
