import Hero from './component/Hero'
import About from './component/About'
import Projects from './component/Projects'
import Skills from './component/Skills'
import Contact from './component/Contact'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
