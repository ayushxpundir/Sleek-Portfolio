import { useEffect, useLayoutEffect } from 'react'
/* FIX: Changed back to useLocation */
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Stack from './Components/Stack'
import About from './Components/About'
import Projects from './Components/Projects'
import AllProjects from './Components/AllProjects'
import AllExperience from './Components/AllExperience'
import AllCertifications from './Components/Allcertifications'
import Experience from './Components/Experience'
import Links from './Components/Links'
import Loader from './Components/Loader'
import Certifications from './Components/Certifications'
import GitHub from './Components/GitHub'

// FIX: This component resets position BEFORE the browser draws the frame
function InstantStartAtTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  useEffect(() => {
    const savedY = sessionStorage.getItem("homeScrollY");
    if (savedY !== null) {
      window.scrollTo(0, parseInt(savedY, 10));
      sessionStorage.removeItem("homeScrollY");
    }
  }, []);

  return (
    <>
      <Header />
      <About />
      <Links />
      <GitHub />
      <Stack />
      <Experience />
      <Projects />
      <Certifications />
    </>
  )
}

function App() {
  return (
    <>
      <Loader />
      <BrowserRouter>
        {/* FIX: Replaced broken element with our instant-frame blocker */}
        <InstantStartAtTop /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/experience" element={<AllExperience />} />
          <Route path="/certifications" element={<AllCertifications />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;