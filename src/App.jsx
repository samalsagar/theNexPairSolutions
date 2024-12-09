import { useState, useEffect } from 'react';
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
function App() {
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
    // Simulate a loading process (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Hide loader after 3 seconds
  }, []);
  return (
    <>
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <div>
          <Header />
            <HeroSection />
            <AboutUs />
            <ChhoseUs />
            <Services />
            <OurTeam />
            <RecentWork />
            <Review />
            <StayUpdate />
            <Contact />
            <FAQ />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
