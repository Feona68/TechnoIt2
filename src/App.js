import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Landing Page Components
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import ClientLogos from "./components/ClientLogos";
import ContactForm from "./components/ContactForm";

// Menu Page Components
import About from "./pages/About";
import ServicesComponent from "./pages/ServicesComponent"; // Import ServicesComponent
import FAQ from "./pages/FAQ";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <WhyChooseUs />
                <Stats />
                <ClientLogos />
                <ContactForm />
              </>
            }
          />

          {/* Menu Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesComponent />} /> {/* Add ServicesComponent Route */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
