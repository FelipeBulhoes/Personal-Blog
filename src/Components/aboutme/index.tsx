import React, {useEffect, useRef, useState} from 'react'
import { AboutMeDiv } from './styles'
import { engLanguage, ptLanguage } from '../../languages';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/languageContext';

interface iLanguageTexts {
    aboutmeText: string,
    aboutmeValue: string
}

function AboutMe() {
    const [canObserve, setCanObserve] = useState<Boolean>(false)
    const {language} = useContext(LanguageContext)

    //Language
    let languagePack:iLanguageTexts = {
        aboutmeText: "",
        aboutmeValue: ""
    }
    
    if(language === "English") {
        languagePack = engLanguage
    } else {
        languagePack = ptLanguage
    }

    setTimeout(() => {
        setCanObserve(true)
    }, 500)

    //intersectionObserver
    const observingElement = useRef<any[]>([])
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate2")
                }
            })
        })

    if (canObserve) {
        observingElement.current.forEach((el) => intersectionObserver.observe(el as Element))
        console.log(observingElement.current)
    }

    return () => {
      intersectionObserver.disconnect()
    }
  }, [canObserve])

    return (
        <AboutMeDiv>
            <img src="./engine.png" alt="" />
            <div className='hidden2' ref={(el) => {observingElement.current[0] = el}}>
                <h2>
                    {languagePack.aboutmeText}
                </h2>
                <p>
                    {languagePack.aboutmeValue}
                </p>
            </div>
        </AboutMeDiv>
    )
}

export default AboutMe
