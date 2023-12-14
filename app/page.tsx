'use client'

// import { useFetch } from './hooks/useFetch';
import Information from './components/information';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';

export default function Home() {
  return (

    <>
      <Information />

      <Skills />

      <Projects />
    </>
  )
}