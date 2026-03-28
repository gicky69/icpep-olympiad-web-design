import { useState } from 'react'
import './App.css'
import Header from '../pages/Header.jsx'
import Explain from '../pages/Explain-section.jsx'
import HardwareSoftware from '../pages/HardwareSoftware-section.jsx'
import Projects from '../pages/Projects-section.jsx'
import Careers from '../pages/Careers-section.jsx' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className="header-container">
      <Header/>
    </section>
    <section className="explaination-container">
      <Explain/>
    </section>
    <section className="hardwaresoftware-container">
      <HardwareSoftware/>
    </section>
    <section className="projects-container">
      <Projects/>
    </section>
    <section className="careers-container">
      <Careers/>
    </section>
    </>
  )
}

export default App
