import { ProjectsMain } from "./styles"
import {FaReact, FaMousePointer, FaGithub, FaPython} from "react-icons/fa"
import {DiDjango} from "react-icons/di"
import {SiStyledcomponents, SiReactrouter} from "react-icons/si"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { LanguageContext } from "../../contexts/languageContext"
import { engLanguage, ptLanguage } from '../../languages';

interface iLanguageTexts {
    metaIcDesc: string,
    accessApp: string,
    goBack: string
}

const MetaIc = () => {
    const navigate = useNavigate()
    const {language} = useContext(LanguageContext)

    let languagePack:iLanguageTexts = {
        metaIcDesc: "",
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
            background: "linear-gradient(to right top, #070d57, #4c4280, #857daa, #c1bcd4, #ffffff)"
        }}>
            <div className="general-container">
                <section className="image-section">
                    <img src={require('../proj_imgs/metaic-wide.png')} alt="" />
                </section>
                <section className="info-section">
                    <h2>Meta Inventory Control</h2>
                    <p>{languagePack.metaIcDesc} <b>- - Username: Felipe | Password: 1234 - -</b></p>
                    <div className="techs">
                        <FaReact style={{color: "white"}} size={50}/>
                        <SiStyledcomponents style={{color: "white"}} size={50}/>
                        <SiReactrouter style={{color: "white"}} size={50}/>
                        <FaPython style={{color: "white"}} size={50}/>
                        <DiDjango style={{color: "white"}} size={50}/>
                    </div>
                    <div className="move">
                        <button onClick={() => window.open("https://meta-ic-front.vercel.app/", '_blank')}><FaMousePointer style={{color: "white", marginRight: "10px"}} size={20}/>{languagePack.accessApp}</button>
                        <button onClick={() => window.open("https://github.com/META-Inventory-control", '_blank')}><FaGithub style={{color: "white", marginRight: "10px"}} size={20}/>Github</button>
                        <button onClick={() => navigate("/")}>{languagePack.goBack}</button>
                    </div>
                </section>
            </div>
        </ProjectsMain>
    )
}

export default MetaIc
export {}
