import { createContext } from "react";
import { useState } from "react";
import { ReactNode } from "react";

interface iProvider {
    children: ReactNode
}

interface iLanguageContext {
    language: string;
    setLangPortuguese: () => void;
    setLangEnglish: () => void;
}

export const LanguageContext = createContext({} as iLanguageContext);

export const LanguageProvider = ({children}: iProvider) => {
    const [language, setLanguage] = useState("English");

    function setLangPortuguese(){
        setLanguage("Portuguese")
    }

    function setLangEnglish() {
        setLanguage("English")
    }

    return(
        <LanguageContext.Provider value={{language, setLangEnglish, setLangPortuguese}}>
            {children}
        </LanguageContext.Provider>
    )
}

export {}