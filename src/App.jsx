import React from 'react'
import Weather from './components/Weather.jsx'
import HeadSection from './components/HeadSection.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div>
      <HeadSection/>
      <Weather/>
      <Footer/>
    </div>
  )
}

export default App 