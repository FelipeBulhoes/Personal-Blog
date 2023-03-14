import { ProjectsMain } from "./styles"
//import Sidebar from "../Components/sidebar"
import {FaReact, FaMousePointer, FaGithub} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { LanguageContext } from "../../contexts/languageContext"
import { engLanguage, ptLanguage } from '../../languages';

interface iLanguageTexts {
    nuDesc: string,
    accessApp: string,
    goBack: string
}

const NuKenzie = () => {
    const navigate = useNavigate()

    const {language} = useContext(LanguageContext)

    let languagePack:iLanguageTexts = {
        nuDesc: "",
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
            background: "linear-gradient(0deg, rgba(253,55,126,1) 0%, rgba(255,255,255,1) 100%)"
        }}>
            <div className="general-container">
                <section className="image-section">
                    <img src={require('../proj_imgs/nukenzie-wide.png')} alt="" />
                </section>
                <section className="info-section">
                    <h2>Nu Kenzie</h2>
                    <p>{languagePack.nuDesc}</p>
                    <div className="techs">
                        <FaReact style={{color: "white"}} size={50}/>
                    </div>
                    <div className="move">
                        <button onClick={() => window.open("https://s1-nu-kenzie.vercel.app/", '_blank')}><FaMousePointer style={{color: "white", marginRight: "10px"}} size={20}/>{languagePack.accessApp}</button>
                        <button onClick={() => window.open("https://github.com/FelipeBulhoes/s1-Nu-Kenzie", '_blank')}><FaGithub style={{color: "white", marginRight: "10px"}} size={20}/>Github</button>
                        <button onClick={() => navigate("/")}>{languagePack.goBack}</button>
                    </div>
                </section>
            </div>
        </ProjectsMain>
    )
}

export default NuKenzie