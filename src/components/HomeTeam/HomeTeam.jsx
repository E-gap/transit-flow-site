import css from "./HomeTeam.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import member_1 from "../../images/homeTeam/member_1.jpg";
import member_2 from "../../images/homeTeam/member_2.jpg";
import member_3 from "../../images/homeTeam/member_3.jpg";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const HomeTeam = () => {
  return (
    <section className={css.homeTeam}>
      <Container>
        <div className={css.allPartSection}>
          <LittleText text="The Transporters" view="light" />
          <h2 className={css.homeTeam_headline}>Meet Expert Team</h2>
          <ul className={css.teamList}>
            <li className={css.teamItem}>
              <img src={member_1} alt="member appearance" />
              <div className={css.memberInfo}>
                <p className={css.memberName}>Jessca Arow</p>
                <p className={css.memberPosition}>Designer</p>
              </div>
              <ul className={css.memberLinkList}>
                <li className={css.memberLinkItem}>
                  <a href="/">
                    <BsTwitter className={css.linkIcon} />
                  </a>
                </li>
                <li className={css.memberLinkItem}>
                  <a href="/">
                    <BsFacebook className={css.linkIcon} />
                  </a>
                </li>
                <li className={css.memberLinkItem}>
                  <a href="/">
                    <BsInstagram className={css.linkIcon} />
                  </a>
                </li>
              </ul>
            </li>
            <li className={css.teamItem}>
              <img src={member_2} alt="member appearance" />
              <div className={css.memberInfo}>
                <p className={css.memberName}>Kathleen Smith</p>
                <p className={css.memberPosition}>Designer</p>
              </div>
              <ul className={css.memberLinkList}>
                <li className={css.memberLinkItem}>
                  <a href="/">
                    <BsLinkedin className={css.linkIcon} />
                  </a>
                </li>
                <li className={css.memberLinkItem}>
                  <a href="/">
                    <BsTwitter className={css.linkIcon} />
                  </a>
                </li>
                <li className={css.memberLinkItem}>
                  <a href="/">
                    <BsFacebook className={css.linkIcon} />
                  </a>
                </li>
                <li className={css.memberLinkItem}>
                  <a href="/">
                    <BsInstagram className={css.linkIcon} />
                  </a>
                </li>
              </ul>
            </li>
            <li className={css.teamItem}>
              <img src={member_3} alt="member appearance" />
              <div className={css.memberInfo}>
                <p className={css.memberName}>Rebecca Tylor</p>
                <p className={css.memberPosition}>Designer</p>
              </div>
              <ul className={css.memberLinkList}>
                <li className={css.memberLinkItem}>
                  <a href="/">
                    <BsFacebook className={css.linkIcon} />
                  </a>
                </li>
                <li className={css.memberLinkItem}>
                  <a href="/">
                    <BsInstagram className={css.linkIcon} />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default HomeTeam;
