import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import HomePage from "./pages/HomePage/HomePage";
// import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
/* import ServicesPage from "./pages/ServicesPage/ServicesPage"; */
// import ServiceSinglePage from "./pages/ServiceSinglePage/ServiceSinglePage";
// import GalleryPage from "./pages/GalleryPage/GalleryPage";
import TransportationPage from "./pages/TransportationPage/TransportationPage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage />
       <AboutUsPage /> */}
      {/* <ServicesPage /> */}
      {/* <ServiceSinglePage /> */}
      {/* <GalleryPage /> */}
      <TransportationPage />
      <Footer />
    </div>
  );
}

export default App;
