import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Skill } from "./component/Skill";
import { Contact } from "./component/Contact";
import { Demo } from "./component/Demo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/demo" element={<Demo />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      {/* <Home />
      <About />
      <Skill />
      <Demo />
      <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
