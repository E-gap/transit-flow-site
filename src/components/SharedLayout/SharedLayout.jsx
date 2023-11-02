import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
