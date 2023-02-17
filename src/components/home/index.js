import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";
import ClockDate from "./clock-date";
import LanguageSelector from "./languageSelector";

const HomeComp = () => {
    const { t } = useTranslation();
    return(
        <>
        <Container>
            <div className="welcome-section">
                <div className="welcome-left">
                    <Row>
                        <div>
                            <img src="user.png" alt="user" />
                        </div>
                    </Row>
                    <Row className="no-pt">
                        <Col>
                            <div className="settings">
                                <img alt="settings" src="icons/cog.svg"></img>
                                <p href="/">{t("settings")}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="welcome-title">
                        <Col>
                            <p>
                                {t("content")}
                            </p>
                        </Col>
                    </Row>
                    <Row className="language-select">
                        <LanguageSelector/>
                    </Row>
                    <Row className="button-singout">
                        <div className="text-center">
                            <button className="btn-signO">{t("sign")}</button>
                        </div>
                    </Row>
                    <Row className="clock-date">
                        <ClockDate/>
                    </Row>
                </div>
            </div>
        </Container>
        </>
    )
}

export default HomeComp