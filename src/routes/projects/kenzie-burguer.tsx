import { ProjectsMain } from "./styles"
//import Sidebar from "../Components/sidebar"
import {FaReact, FaMousePointer, FaGithub} from "react-icons/fa"
import {SiStyledcomponents} from "react-icons/si"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { LanguageContext } from "../../contexts/languageContext"
import { engLanguage, ptLanguage } from '../../languages';

interface iLanguageTexts {
    burgerDesc: string,
    accessApp: string,
    goBack: string
}

const KenzieBurguer = () => {
    const navigate = useNavigate()

    const {language} = useContext(LanguageContext)

    let languagePack:iLanguageTexts = {
        burgerDesc: "",
        accessApp: "",
        goBack: ""
    }
    
    if(language === "English") {
        languagePack = engLanguage
    } else {
        languagePack = ptLanguage
    }

    return (
        <ProjectsMain style={{
            background: "linear-gradient(0deg, rgba(39,174,96,1) 0%, rgba(255,255,255,1) 100%)"
        }}>
            <div className="general-container">
                <section className="image-section">
                    <img src={require('../proj_imgs/kenzieburguer-wide.png')} alt="" />
                </section>
                <section className="info-section">
                    <h2>Kenzie Burguer</h2>
                    <p>{languagePack.burgerDesc}</p>
                    <div className="techs">
                        <FaReact style={{color: "white"}} size={50}/>
                        <SiStyledcomponents style={{color: "white"}} size={50}/>
                    </div>
                    <div className="move">
                        <button onClick={() => window.open("https://s1-hamburgueria-da-kenzie.vercel.app/", '_blank')}><FaMousePointer style={{color: "white", marginRight: "10px"}} size={20}/>{languagePack.accessApp}</button>
                        <button onClick={() => window.open("https://github.com/Kenzie-Academy-Brasil-Developers/s1-hamburgueria-da-kenzie-felipebulhoes", '_blank')}><FaGithub style={{color: "white", marginRight: "10px"}} size={20}/>Github</button>
                        <button onClick={() => navigate("/")}>{languagePack.goBack}</button>
                    </div>
                </section>
            </div>
        </ProjectsMain>
    )
}

export default KenzieBurguer