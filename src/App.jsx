import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import AboutUs from './components/AboutUs/AboutUs'
import ChhoseUs from './components/ChhoseUs/ChhoseUs'
import Services from './components/Services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <ChhoseUs />
      <Services />
    </>
  )
}

export default App
