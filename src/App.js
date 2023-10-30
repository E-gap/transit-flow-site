import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
      <AboutUsPage />
      <Footer />
    </div>
  );
}

export default App;
