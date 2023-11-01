import TeamMain from "../../components/TeamMain/TeamMain";
import Container from "react-bootstrap/Container";
import css from "./TeamPage.module.css";
import LittleText from "../../components/LittleText/LittleText";
import Team from "../../components/Team/Team";
import { team_teamPage } from "../../assets/team";
import track_photo from "../../images/teamPage/track_photo.jpg";
import storage_photo from "../../images/teamPage/storage_photo.jpg";
import user_icon from "../../images/teamPage/user_icon.png";
import clock_icon from "../../images/teamPage/clock_icon.png";
import ClientsList from "../../components/ClientsList/ClientsList";

const TeamPage = () => {
  return (
    <>
      <TeamMain />
      <Team members={team_teamPage} bg="grey" />
      <section className={css.section}>
        <Container>
          <div className={css.allPartSection}>
            <div className={css.about_div_photo}>
              <img src={storage_photo} alt="track" width="726px" />
              <img
                src={track_photo}
                alt="man"
                width="264px"
                className={css.absolute}
              />
            </div>
            <div className={css.about_div_text}>
              <LittleText text="About" view="light" />
              <h2>Why Choose Us</h2>
              <p className={css.about_text}>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </p>
              <ul className={css.advantageList}>
                <li className={css.advantageItem}>
                  <img
                    src={user_icon}
                    alt="icon user"
                    className={css.advantage_icon}
                  />
                  <p className={css.advantage_headline}>Our Vission</p>
                  <p className={css.advantage_text}>
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster.
                  </p>
                </li>
                <li className={css.advantageItem}>
                  <img
                    src={clock_icon}
                    alt="icon clock"
                    className={css.advantage_icon}
                  />
                  <p className={css.advantage_headline}>Estimate Shipping</p>
                  <p className={css.advantage_text}>
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster.
                  </p>
                </li>
              </ul>
            </div>
          </div>
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

export default TeamPage;
