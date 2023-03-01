import React from 'react'
import { ProfileDiv } from './styles'
import { engLanguage, ptLanguage } from '../../languages';

interface iProfileProps {
    language: string;
}

interface iLanguageTexts {
    selfPresentation: string,
    impactfullPhrase: string
}

const Profile = ({language}: iProfileProps) => {

    
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
                <span>{languagePack.selfPresentation}</span>
            </div>
            <div className='role'>
                <h1>{languagePack.impactfullPhrase}</h1>
            </div>
        </ProfileDiv>
    )
}

export default Profile
