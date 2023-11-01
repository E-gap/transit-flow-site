import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import HomePage from "./pages/HomePage/HomePage";
// import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
// import ServicesPage from "./pages/ServicesPage/ServicesPage"; */
// import ServiceSinglePage from "./pages/ServiceSinglePage/ServiceSinglePage";
// import GalleryPage from "./pages/GalleryPage/GalleryPage";
// import TransportationPage from "./pages/TransportationPage/TransportationPage";
// import BlogPage from "./pages/BlogPage/BlogPage";
// import BlogSinglePage from "./pages/BlogSinglePage/BlogSinglePage";
// import TeamPage from "./pages/TeamPage/TeamPage";
// import ContactPage from "./pages/ContactPage/ContactPage";
// import PricingPage from "./pages/PricingPage/PricingPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
      {/* <AboutUsPage /> */}
      {/* <ServicesPage /> */}
      {/* <ServiceSinglePage /> */}
      {/* <GalleryPage /> */}
      {/* <TransportationPage /> */}
      {/* <BlogPage /> */}
      {/* <BlogSinglePage /> */}
      {/* <TeamPage /> */}
      {/* <ContactPage /> */}
      {/* <PricingPage /> */}
      <NotFoundPage />
      <Footer />
    </div>
  );
}

export default App;
