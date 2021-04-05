import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { useState } from 'react';
import Place from './Place';
import '../App.css'


export default function Home(props) {

    const [placeTitle, setPlaceTitle] = useState("");
    const [placeInfo, setPlaceInfo] = useState("");
    const [placeList, setPlaceList] = useState([]);

    const [placeCount, setPlaceCount] = useState(0);

    // Get the place to be added's Title
    let onTitleInput = (event) => {
        setPlaceTitle(event.target.value);
    }

    // Get the place to be added's info
    let onInfoInput = (event) => {
        setPlaceInfo(event.target.value);
    }

    // Add a place to the place list from the place input
    let onPlaceSubmitted = (event) => {
        placeList.push(<Place placeInfo={placeInfo} name={placeTitle} />);
       // Works as a forced refresh so placeList will update
        setPlaceCount(placeCount+1);
    }

    return (
        <Container >
            <Container className='Place'>
                <Col>
                    <Row>
                        <InputGroup className="mb-3" hidden={props.hideAddPlace}>
                            <FormControl type="text" placeholder="Enter Title" onChange={onTitleInput} />
                            <FormControl type="text" placeholder="Enter Info" onChange={onInfoInput} />
                            <InputGroup.Append>
                                <Button onClick={onPlaceSubmitted} variant="primary" >Submit Place</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Row>

                </Col>
            </Container>
            <Col>
                <Row>
                    {placeList}
                </Row>
            </Col>
        </Container>
    );
}