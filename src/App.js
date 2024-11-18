import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./footer/footer";
import Header from "./header/Header";
import Home from "./homePage/home";
import Login from "./user/logInPage";
import Sign from "./user/SignUpPage";
import Advertise from "./advirtise/Advertise";
import ContactPage from "./Contact/ContactPage";
import InformationApartment from "./pageDetails/InformationApartment";
import Apartments from "./shopPage/Apartments";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="px-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Sign />} />
          <Route path="/advirtise" element={<Advertise />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/details" element={<InformationApartment />} />
          <Route path="/shop" element={<Apartments />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
