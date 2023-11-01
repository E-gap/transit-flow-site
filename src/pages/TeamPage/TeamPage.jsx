import TeamMain from "../../components/TeamMain/TeamMain";
import Container from "react-bootstrap/Container";
import css from "./TeamPage.module.css";
import LittleText from "../../components/LittleText/LittleText";
import Team from "../../components/Team/Team";
import { team_teamPage } from "../../assets/team";

const TeamPage = () => {
  return (
    <>
      <TeamMain />
      <Team members={team_teamPage} bg="grey" />
    </>
  );
};

export default TeamPage;
