import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadBioData from "./pages/UploadBioData";
import Contact from "./pages/Contact";
import VerifyEmailPage from "./pages/VerifyEmailPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload-bio-data" element={<UploadBioData />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
