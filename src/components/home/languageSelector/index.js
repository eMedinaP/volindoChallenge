import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [langState, setLangState] = useState(localStorage.getItem('lang'));
    const [isActiveEn, setIsActiveEn] = useState(localStorage.getItem('lang') === 'en' ? true : false);
    const [isActiveEs, setIsActiveEs] = useState(localStorage.getItem('lang') === 'es' ? true : false);

    useEffect(() => {
        i18n.changeLanguage(langState);
        localStorage.setItem('lang',langState)
    }, [i18n, langState]);

    const handleSelection = (lang) => {
        if(lang === 'en'){
            setIsActiveEn(true)
            setIsActiveEs(false)
        }else{
            setIsActiveEn(false)
            setIsActiveEs(true)
        }
        setLangState(lang)
    }
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <div className="languageSel">
                        <img alt="globe" src="icons/globe.svg"/>
                        <p className={isActiveEn ? "c-pointer active" : "c-pointer"} onClick={() => handleSelection('en')}>EN</p>
                        <p className={isActiveEs ? "c-pointer active" : "c-pointer"} onClick={() => handleSelection('es')}>ES</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default LanguageSelector