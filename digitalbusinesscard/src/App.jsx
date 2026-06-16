import { useState } from 'react'
import Interests from './components/Interests'
import Info from './components/Info'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


// deleted App.css file, since this is a small project, there is not a need for 2 CSS files, and will instead focus on using index.css, the highest global css file in the framework.

function App() {

  return (
    <>
      <Navbar />
      <Info />
      <Interests />
      <Footer />
    </>
  )
}

export default App
