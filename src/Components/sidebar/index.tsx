import React, { useContext } from "react";
import { SidebarNav } from "./styles";
import { CiMail } from "react-icons/ci"
import { LanguageContext } from "../../contexts/languageContext";

const Sidebar = () => {
    const {setLangEnglish, setLangPortuguese} = useContext(LanguageContext);

    return (
        <SidebarNav>
            <header>
                <div className="email-text">
                    <CiMail size={40}/>
                    <h4 id="12">felipebbulhoes@gmail.com</h4>
                </div>
                <div className="medias">
                    <a href="https://www.linkedin.com/in/felipe-bulh%C3%B5es-b48152240/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/FelipeBulhoes" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.instagram.com/felipebulhoess/" target="_blank" rel="noreferrer">Instagram</a>
                    <img className="change-lang" src="./lang_icon.png" alt="change language icon" />
                    <div className="langs">
                        <img src="./usa.png" alt="" onClick={() => {setLangEnglish()}}/>
                        <img src="./brazil.png" alt="" onClick={() => {setLangPortuguese()}}/>
                    </div>
                </div>
            </header>
        </SidebarNav>
    )
}

export default Sidebar

