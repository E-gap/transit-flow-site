import css from "./Team.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Team = ({ members, bg }) => {
  console.log(bg);
  const style = css[bg];
  return (
    <section className={`${css.team} ${style}`}>
      <Container>
        <div className={css.allPartSection}>
          <LittleText text="The Transporters" view="light" />
          <h2 className={css.team_headline}>Meet Expert Team</h2>
          <ul className={css.teamList}>
            {members.map((member, index) => {
              return (
                <li key={index} className={css.teamItem}>
                  <img src={member.photo} alt="member appearance" />
                  <div className={css.memberInfo}>
                    <p className={css.memberName}>{member.name}</p>
                    <p className={css.memberPosition}>{member.position}</p>
                  </div>
                  <ul className={css.memberLinkList}>
                    {member.links.map((link, index) => {
                      return (
                        <li key={index} className={css.memberLinkItem}>
                          <a href={link.link}>
                            {link.name === "linkedin" && (
                              <BsLinkedin className={css.linkIcon} />
                            )}
                            {link.name === "twitter" && (
                              <BsTwitter className={css.linkIcon} />
                            )}
                            {link.name === "facebook" && (
                              <BsFacebook className={css.linkIcon} />
                            )}
                            {link.name === "instagram" && (
                              <BsInstagram className={css.linkIcon} />
                            )}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Team;
