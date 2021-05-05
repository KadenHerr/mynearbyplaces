import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Review(props) {

    return (
        <Container className='Review'>
            <Col>
                <Row>
                    <b>{props.username}</b>
                </Row>
                <Row>
                    {props.text}
                </Row>
            </Col>
            
        </Container>
    );
}