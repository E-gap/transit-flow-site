import ProjectMain from "../../components/ProjectMain/ProjectMain";
import GalleryProjects from "../../components/GalleryProjects/GalleryProjects";
import Indicators from "../../components/Indicators/Indicators";
import { indicators_services } from "../../assets/indicators";

const ProjectPage = () => {
  return (
    <>
      <ProjectMain />
      <GalleryProjects />
      <Indicators indicators={indicators_services} />
    </>
  );
};

export default ProjectPage;
