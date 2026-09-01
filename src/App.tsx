import { Background } from '@/components/ui/Background'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Achievements } from '@/components/Achievements'
import { Certifications } from '@/components/Certifications'
import { Education } from '@/components/Education'
import { GitHub } from '@/components/GitHub'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
