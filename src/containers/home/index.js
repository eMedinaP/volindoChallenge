import React from "react";
import HomeComp from "../../components/home";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from "../../components/home/card";
import { useTranslation } from "react-i18next";

const HomeCont = () => {
    const { t } = useTranslation();
    return(
        <>
            <Container>
                <Row className="bg-right">
                    <Col xs={4} className="bg-left">
                        <div className="al-center">
                            <HomeComp/>
                        </div>
                    </Col>
                    <Col xs={8}>
                        <Row className="container-logo">
                            <Col>
                                <img alt="" src="https://www.volindo.com/static/blacklogo-7dcd2094fec546f398e6a8b05f372e64.svg"/>
                            </Col>
                        </Row>
                        <Row className="container-cards">
                            <Col xs={3}>
                                <CardComponent idIcon="1" textItem={t("point1")}/>
                            </Col>
                            <Col xs={3}>
                                <CardComponent idIcon="2" textItem={t("point2")}/>
                            </Col>
                            <Col xs={3}>
                                <CardComponent idIcon="3" textItem={t("point3")}/>
                            </Col>
                        </Row>
                        <Row className="container-cards-b">
                            <Col xs={3}>
                                <CardComponent idIcon="4" textItem={t("point4")}/>
                            </Col>
                            <Col xs={3}>
                                <CardComponent idIcon="5" textItem={t("point5")}/>
                            </Col>
                            <Col xs={3}>
                                <CardComponent idIcon="6" textItem={t("point6")}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeCont