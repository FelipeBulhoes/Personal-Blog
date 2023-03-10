import React, { useEffect, useRef } from 'react';
import "./Global/index.css"
import { useState } from 'react';
import Sidebar from './Components/sidebar';
import Profile from './Components/profile';
import Technologies from './Components/technologies';
import AboutMe from './Components/aboutme';
import Projects from './Components/projects';
import Skills from './Components/skills';

function App() {
  const [language, setLanguage] = useState("English");

  function setLangPortuguese(){
    setLanguage("Portuguese")
  }

  function setLangEnglish() {
    setLanguage("English")
  }

  const observingElement = useRef<Element[]>([])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    })

    observingElement.current.forEach((el) => intersectionObserver.observe(el as Element))
    console.log(observingElement.current)

    return () => {
      intersectionObserver.disconnect()
    }

  }, [])

  return (
    <main className="App">
        <Sidebar setLangPortuguese={setLangPortuguese} setLangEnglish={setLangEnglish} ></Sidebar>
        <div style={{margin: "100px 0 0 0"}}>
          <Profile language={language} observingElement={observingElement}></Profile>
          <Technologies observingElement={observingElement}></Technologies>
          <AboutMe language={language}></AboutMe>
          <Projects language={language} observingElement={observingElement}></Projects>
          <div className='work-in-progress'>
            <img src="./work-in-progress.png" alt="" />
          </div>
          <Skills></Skills>
        </div>
    </main>
  );
}

export default App;
