import { ProjectsMain } from "./styles"
//import Sidebar from "../Components/sidebar"
import {FaReact, FaNodeJs, FaMousePointer, FaGithub} from "react-icons/fa"
import {SiStyledcomponents, SiReactrouter} from "react-icons/si"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { LanguageContext } from "../../contexts/languageContext"
import { engLanguage, ptLanguage } from '../../languages';

interface iLanguageTexts {
    pandaDesc: string,
    accessApp: string,
    goBack: string
}

const PandaCooking = () => {
    const navigate = useNavigate()
    const {language} = useContext(LanguageContext)

    let languagePack:iLanguageTexts = {
        pandaDesc: "",
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
            background: "linear-gradient(0deg, rgba(255,201,201,1) 0%, rgba(255,255,255,1) 100%)"
        }}>
            <div className="general-container">
                <section className="image-section">
                    <img src={require('../proj_imgs/pandacooking-wide.png')} alt="" />
                </section>
                <section className="info-section">
                    <h2>Panda Cooking</h2>
                    <p>{languagePack.pandaDesc}</p>
                    <div className="techs">
                        <FaReact style={{color: "white"}} size={50}/>
                        <SiStyledcomponents style={{color: "white"}} size={50}/>
                        <SiReactrouter style={{color: "white"}} size={50}/>
                        <FaNodeJs style={{color: "white"}} size={50}/>
                    </div>
                    <div className="move">
                        <button onClick={() => window.open("https://panda-cooking-ozcm12l0r-felipebulhoes.vercel.app/", '_blank')}><FaMousePointer style={{color: "white", marginRight: "10px"}} size={20}/>{languagePack.accessApp}</button>
                        <button onClick={() => window.open("https://github.com/Panda-Cooking/panda-cooking", '_blank')}><FaGithub style={{color: "white", marginRight: "10px"}} size={20}/>Github</button>
                        <button onClick={() => navigate("/")}>{languagePack.goBack}</button>
                    </div>
                </section>
            </div>
        </ProjectsMain>
    )
}

export default PandaCooking