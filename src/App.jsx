import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import Footer from './components/Footer/Footer.jsx'
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx';
import PhotoPage from './pages/PhotoPage/PhotoPage.jsx';

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photo" element={<PhotoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
