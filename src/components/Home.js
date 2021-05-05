import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { useState, useEffect } from 'react';
import Place from './Place';
import '../App.css'
import api from '../communication/api';


export default function Home(props) {

    const [placeTitle, setPlaceTitle] = useState("");
    const [placeAddress, setPlaceAddress] = useState('');
    const [placeInfo, setPlaceInfo] = useState("");
    const [placeList, setPlaceList] = useState(["Loading"]);

    const [placeCount, setPlaceCount] = useState(0);

    // Get the place to be added's Title
    let onTitleInput = (event) => {
        setPlaceTitle(event.target.value);
    }

    // Get the place to be added's info
    let onInfoInput = (event) => {
        setPlaceInfo(event.target.value);
    }

    // Get the place's address
    let onAddressInput = (event) => {
        setPlaceAddress(event.target.value);
    }

    // Add a place to the place list from the place input
    let onPlaceSubmitted = (event) => {
        /*
        let place = {name: placeTitle, address: placeAddress, info: placeInfo};
        api.addPlace(place)
        .then(() => {
            setPlaceTitle('');
            setPlaceTitle('');
            setPlaceInfo('');
            // TODO: Reload the places list maybe?
        })
        .catch(e => console.log(e));
        */
        placeList.push(<Place placeInfo={placeInfo} name={placeTitle} address={placeAddress}/>);
        setPlaceTitle('');
        setPlaceAddress('');
        setPlaceInfo('');
       // Works as a forced refresh so placeList will update
        setPlaceCount(placeCount+1);
    }

    // Check if the places need to be loaded
    useEffect(() => {
        if(placeList[0] === "Loading") {
            api.getPlaces()
            .then(places => setupPlaceList(places))
            .catch(e => console.log(e));
        }
    });

    // Set up the place list with Place objects.
    let setupPlaceList = (places) => {
        let list = [];
        for(let p in places) {
            list.push(<Place placeInfo={places[p].info} name={places[p].name} address={places[p].address} reviews={places[p].reviews}/>);
        }
        setPlaceList(list);
    }



    return (
        <Container >
            <Container className='Place'>
                <Col>
                    <Row>
                        <InputGroup className="mb-3" hidden={props.hideAddPlace}>
                            <FormControl type="text" placeholder="Enter Title" value={placeTitle} onChange={onTitleInput} />
                            <FormControl type="text" placeholder="Enter Address" value={placeAddress} onChange={onAddressInput} />
                            <FormControl type="text" placeholder="Enter Info" value={placeInfo} onChange={onInfoInput} />
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