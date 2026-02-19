// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import Footer from './components/Footer/Footer.jsx'
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
