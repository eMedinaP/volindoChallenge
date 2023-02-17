import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const CardComponent = (props) => {
    return (
        <>
            <Container>
                <Row className="container-card">
                    <Col>
                        <div className="card">
                            <img alt="" src={"icons/point"+props.idIcon+"Icon.svg"}/>
                            <p>{props.textItem}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CardComponent