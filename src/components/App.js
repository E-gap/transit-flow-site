import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import ServiceSinglePage from "../pages/ServiceSinglePage/ServiceSinglePage";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import ProjectSinglePage from "../pages/ProjectSinglePage/ProjectSinglePage";
import BlogPage from "../pages/BlogPage/BlogPage";
import BlogSinglePage from "../pages/BlogSinglePage/BlogSinglePage";
import TeamPage from "../pages/TeamPage/TeamPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import PricingPage from "../pages/PricingPage/PricingPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SharedLayout from "../components/SharedLayout/SharedLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/id" element={<ServiceSinglePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/id" element={<BlogSinglePage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="projects/id" element={<ProjectSinglePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
