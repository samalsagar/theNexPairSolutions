import { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUs from './components/AboutUs/AboutUs';
import ChhoseUs from './components/ChhoseUs/ChhoseUs';
import Services from './components/Services/Services';
import Loader from './components/Loader/Loader';
import OurTeam from './components/OurTeam/OurTeam';
import RecentWork from './components/RecentWork/RecentWork';
import Review from './components/Review/Review';
import StayUpdate from './components/StayUpdate/StayUpdate';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import WhatsApp from './components/WhatsApp/WhatsApp';
function App() {

  const aboutUsRef = useRef(null);
  const ourTeamRef = useRef(null);
  // const ourTeamref = useRef(null);
  const servicesRef = useRef(null);
  const recentWorkRef = useRef(null);
  const contactRef = useRef(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Check if the user has visited before
  //   const hasVisited = localStorage.getItem('hasVisited');

  //   if (!hasVisited) {
  //     // Set 'hasVisited' to true if this is the user's first visit
  //     localStorage.setItem('hasVisited', 'true');
  //   }

  //   // Simulate a loading delay, after which we hide the loader
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000); // 2 seconds delay for the loader (can be adjusted)
  // }, []);

  // if (isLoading) {
  //   return <div className="loader">Loading...</div>; // Loader component here
  // }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Hide loader after 3 seconds
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header
            aboutUsRef={aboutUsRef}
            ourTeamRef={ourTeamRef}
            // ourTeamref={ourTeamref}
            servicesRef={servicesRef}
            recentWorkRef={recentWorkRef}
            contactRef={contactRef}

          />
          <main>
            <HeroSection />
            <section id='aboutus' ref={aboutUsRef}>
              <AboutUs />
            </section>
            <ChhoseUs />
            <section id='services' ref={servicesRef}>
              <Services />
            </section>
            <section id='ourteam' ref={ourTeamRef}>
              <OurTeam />
            </section>
            <section id='recentwork' ref={recentWorkRef}>
              <RecentWork />
            </section>
            <Review />
            <StayUpdate />
            <section id='contact' ref={contactRef}>
              <Contact />
            </section>
            <FAQ />
            <WhatsApp />
          </main>
          <Footer 
          aboutUsRef={aboutUsRef}
          ourTeamRef={ourTeamRef}
          // ourTeamref={ourTeamref}
          servicesRef={servicesRef}
          recentWorkRef={recentWorkRef}
          contactRef={contactRef}
          />
        </div>
      )}
    </>
  );
}

export default App;
