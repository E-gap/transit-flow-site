import css from "./AboutUsClients.module.css";
import Container from "react-bootstrap/Container";
import ClientsList from "../ClientsList/ClientsList";

const AboutUsClients = () => {
  return (
    <section className={css.aboutUsClients}>
      <Container>
        <div className={css.allPartSection}>
          <ClientsList />
        </div>
      </Container>
    </section>
  );
};

export default AboutUsClients;
