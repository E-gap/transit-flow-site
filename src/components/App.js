import { Route, Routes } from "react-router-dom";
import SharedLayout from "../components/SharedLayout/SharedLayout";
import { lazy } from "react";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage/AboutUsPage"));
const ServicesPage = lazy(() => import("../pages/ServicesPage/ServicesPage"));
const ServiceSinglePage = lazy(() =>
  import("../pages/ServiceSinglePage/ServiceSinglePage")
);
const ProjectPage = lazy(() => import("../pages/ProjectPage/ProjectPage"));
const ProjectSinglePage = lazy(() =>
  import("../pages/ProjectSinglePage/ProjectSinglePage")
);
const BlogPage = lazy(() => import("../pages/BlogPage/BlogPage"));
const BlogSinglePage = lazy(() =>
  import("../pages/BlogSinglePage/BlogSinglePage")
);
const TeamPage = lazy(() => import("../pages/TeamPage/TeamPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const PricingPage = lazy(() => import("../pages/PricingPage/PricingPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

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
