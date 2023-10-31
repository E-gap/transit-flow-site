import GalleryMain from "../../components/GalleryMain/GalleryMain";
import GalleryList from "../../components/GalleryList/GalleryList";
import Indicators from "../../components/Indicators/Indicators";
import { indicators_services } from "../../assets/indicators";

const GalleryPage = () => {
  return (
    <>
      <GalleryMain />
      <GalleryList />
      <Indicators indicators={indicators_services} />
    </>
  );
};

export default GalleryPage;
