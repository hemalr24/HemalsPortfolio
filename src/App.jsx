import { Element } from 'react-scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-primary animate-fade-in">
      <Navbar />
      <div className="px-40 pb-40"> 
        <Element name="home">
          <Hero />
        </Element >
        <Element name="about">
          <AboutMe />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
      </div>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  )
}