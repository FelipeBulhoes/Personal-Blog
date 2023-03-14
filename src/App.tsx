import React, { useEffect, useRef } from 'react';
import "./Global/index.css"
import Sidebar from './Components/sidebar';
import Profile from './Components/profile';
import Technologies from './Components/technologies';
import AboutMe from './Components/aboutme';
import Projects from './Components/projects';

function App() {

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
        <Sidebar></Sidebar>
        <div style={{margin: "100px 0 0 0"}}>
          <Profile observingElement={observingElement}></Profile>
          <Technologies observingElement={observingElement}></Technologies>
          <AboutMe ></AboutMe>
          <Projects></Projects>
        </div>
    </main>
  );
}

export default App;
