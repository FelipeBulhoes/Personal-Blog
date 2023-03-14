import React from 'react'
import { ProfileDiv } from './styles'
import { useContext } from 'react';
import { engLanguage, ptLanguage } from '../../languages';
import { LanguageContext } from '../../contexts/languageContext';

interface iProfileProps {
    observingElement: any;
}

interface iLanguageTexts {
    selfPresentation: string,
    impactfullPhrase: string
}

const Profile = ({observingElement}: iProfileProps) => {
    const {language} = useContext(LanguageContext)
    
    let languagePack:iLanguageTexts = {
        selfPresentation: "",
        impactfullPhrase: ""
    }

    
    if(language === "English") {
        languagePack = engLanguage
    } else {
        languagePack = ptLanguage
    }


    return (
        <ProfileDiv>
            <div className='self-presentation'>
                <img src="./profile.png" alt="profile" />
                <span ref={(el) => {observingElement.current[0] = el}} className="hidden">{languagePack.selfPresentation}</span>
            </div>
            <div className='role hidden' ref={(el) => {observingElement.current[1] = el}}>
                <h1>{languagePack.impactfullPhrase}</h1>
            </div>
        </ProfileDiv>
    )
}

export default Profile
