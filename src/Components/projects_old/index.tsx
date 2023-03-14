import React from 'react'
import { ProjectsDiv } from './styles'
import {SiFoodpanda} from "react-icons/si"
import {MdOutlineFastfood} from "react-icons/md"
import {BsBank} from "react-icons/bs"
import { engLanguage, ptLanguage } from '../../languages'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/languageContext'

interface iProjectProps {
    observingElement: any;
}

interface iLanguageTexts {
    pandaDesc: string,
    burgerDesc: string,
    nuDesc: string,
    projects: string
}

function Projects({observingElement}:iProjectProps) {
    const {language} = useContext(LanguageContext)

    let languagePack:iLanguageTexts = {
        pandaDesc: "",
        burgerDesc: "",
        nuDesc: "",
        projects: ""
    }
    
    if(language === "English") {
        languagePack = engLanguage
    } else {
        languagePack = ptLanguage
    }

    return (
        <ProjectsDiv>
            <img src="./layers.png" alt="" />
            <h2>{languagePack.projects}</h2>
            <ul>
                <li className='hidden proj pandacooking' ref={(el) => {observingElement.current[9] = el}}>
                    <div>
                        <SiFoodpanda style={{color: "black", fontSize: "80px"}} className="projectLogo"/>
                        <img src="./github.png" alt="" onClick={() => window.open("https://github.com/Panda-Cooking/panda-cooking", '_blank')}/>
                        <img src="./web.png" alt="" onClick={() => window.open("https://panda-cooking-ozcm12l0r-felipebulhoes.vercel.app/", '_blank')}/>
                    </div>
                    <div>
                        <h3>Panda Cooking</h3>
                        <div className='descDiv'>
                            <p>{languagePack.pandaDesc}</p>
                        </div>
                        <div>
                            <img src="./logo192.png" alt="" />
                            <img className='bigger' src="./styled.png" alt="" />
                            <img src="./nodejs.png" alt="" />
                        </div>
                    </div>
                </li>
                <li className='hidden proj kenzieburger' ref={(el) => {observingElement.current[10] = el}}>
                    <div>
                        <MdOutlineFastfood style={{color: "black", fontSize: "80px"}} className="projectLogo"/>
                        <img src="./github.png" alt="" onClick={() => window.open("https://github.com/Kenzie-Academy-Brasil-Developers/s1-hamburgueria-da-kenzie-felipebulhoes", '_blank')}/>
                        <img src="./web.png" alt="" onClick={() => window.open("https://s1-hamburgueria-da-kenzie.vercel.app/", '_blank')}/>
                    </div>
                    <div>
                        <h3>Kenzie Burger</h3>
                        <div className='descDiv'>
                            <p>{languagePack.burgerDesc}</p>
                        </div>
                        <div>
                            <img src="./logo192.png" alt="" />
                            <img className='bigger' src="./styled.png" alt="" />
                        </div>
                    </div>
                </li>
                <li className='hidden proj nukenzie' ref={(el) => {observingElement.current[11] = el}}>
                    <div>
                        <BsBank style={{color: "black", fontSize: "80px"}} className="projectLogo"/>
                        <img src="./github.png" alt="" onClick={() => window.open("https://github.com/FelipeBulhoes/s1-Nu-Kenzie", '_blank')}/>
                        <img src="./web.png" alt="" onClick={() => window.open("https://s1-nu-kenzie.vercel.app/", '_blank')}/>
                    </div>
                    <div>
                        <h3>Nu Kenzie</h3>
                        <div className='descDiv'>
                            <p>{languagePack.nuDesc}</p>
                        </div>
                        <div>
                            <img src="./logo192.png" alt="" />
                        </div>
                    </div>
                </li>
            </ul>
        </ProjectsDiv>
    )
}

export default Projects
