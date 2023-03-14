import React from 'react'
import { ProjectsDiv } from './styles'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/languageContext'
import { engLanguage, ptLanguage } from '../../languages';

interface iLanguageTexts {
    detailText: string,
}

function Projects() {
    const {language} = useContext(LanguageContext)
    const navigate = useNavigate()

    //Language
    let languagePack:iLanguageTexts = {
        detailText: "",
    }
    
    if(language === "English") {
        languagePack = engLanguage
    } else {
        languagePack = ptLanguage
    }

    return (
        <ProjectsDiv>
            <div className='card-group'>
                <div className='card'>
                    <img src="./placeholder.jpg" alt="" />
                </div>
                <div className='card'>
                    <img src="./placeholder.jpg" alt="" />
                </div>
                <div className='card' onClick={() => navigate("/projects/kenzie-burguer")}>
                    <span>{languagePack.detailText}</span>
                    <img src="./kenzieburguer.png" alt="" />
                </div>
                <div className='card' onClick={() => navigate("/projects/nu-kenzie")}>
                    <span>{languagePack.detailText}</span>
                    <img src="./nukenzie.png" alt="" />
                </div>
                <div className='card' onClick={() => navigate("/projects/panda-cooking")}>
                    <span>{languagePack.detailText}</span>
                    <img src="./pandacooking.png" alt=""/>
                </div>
            </div>
        </ProjectsDiv>
    )
}

export default Projects
