import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../App.css'


export default function Place(props) {
    return (
        <Container className='Place'>
        <Col>
            <Row>
                Info here. fsadkjf;olasdk fdsjfhsda ;fghds; fhsd break!!! safhndsapofjhasdpof sdpofd shf BREAK2!!! AFOPDSHFOWEIAFHJSDPOFHSD; FAPFSOEHUISPEHD Break3!!! akfopsdfhdosi
            </Row>
            <Row>
                <Button >Update</Button> &nbsp;&nbsp;&nbsp; <Button >Delete</Button>
            </Row>
        </Col>
        </Container>
    );
}