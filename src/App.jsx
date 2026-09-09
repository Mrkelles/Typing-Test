import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TypingTest from './components/TypingTest';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import TypingInfo from './components/TypingInfo';
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<><TypingTest /><TypingInfo /></>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
