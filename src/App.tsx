import React from 'react';
import "./Global/index.css"
import { useState } from 'react';
import Sidebar from './Components/sidebar';
import Profile from './Components/profile';


function App() {
  const [language, setLanguage] = useState("English");

  function setLangPortuguese(){
    setLanguage("Portuguese")
  }

  function setLangEnglish() {
    setLanguage("English")
  }

  return (
    <main className="App">
        <Sidebar setLangPortuguese={setLangPortuguese} setLangEnglish={setLangEnglish} ></Sidebar>
        <Profile language={language}></Profile>
    </main>
  );
}

export default App;
