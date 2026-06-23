import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Services } from "./components/Services"
import { WhyChooseUs } from "./components/WhyChooseUs"
import { Process } from "./components/Process"
import { ServiceAreas } from "./components/ServiceAreas"
import { FAQ } from "./components/FAQ"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <ServiceAreas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
