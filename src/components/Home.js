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

    const [searchName, setSearchName] = useState("");
    const [searchAddress, setSearchAddress] = useState('');

    const [placeTitle, setPlaceTitle] = useState("");
    const [placeAddress, setPlaceAddress] = useState('');
    const [placeInfo, setPlaceInfo] = useState("");
    const [placeList, setPlaceList] = useState(["Loading..."]);


    /*---------------------------------------------------------
    *------------ Code for searching a place ------------------
    *----------------------------------------------------------
    */
    // Get the search name
    let onSearchNameInput = (event) => {
        setSearchName(event.target.value);
    }
    // Get the search address
    let onSearchAddressInput = (event) => {
        setSearchAddress(event.target.value);
    }

    // Search for the places and change the placeList to match the search
    let onSearchSubmitted = (event) => {

        // Add the place to the api.
        let place = { "name": searchName, "address": searchAddress };
        api.searchPlaces(place)
        .then(places => setupPlaceList(places))
        .catch(e => console.log(e));

        setSearchName('');
        setSearchAddress('');
    }


    /*---------------------------------------------------------
    *-------------- Code for adding a place -------------------
    *----------------------------------------------------------
    */
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

        // Add the place to the api.
        let place = { "name": placeTitle, "address": placeAddress, "info": placeInfo };
        api.addPlace(place)
            .then(() => { console.log(`The place ${placeTitle} was added successfully.`) })
            .catch(e => console.log(e));

        // Add the place to the place list.
        placeList.push(<Place placeInfo={placeInfo} name={placeTitle} address={placeAddress} />);
        setPlaceTitle('');
        setPlaceAddress('');
        setPlaceInfo('');
    }


    /*---------------------------------------------------------
    *--------- Code for displaying the place list -------------
    *----------------------------------------------------------
    */
    // Check if the places need to be loaded
    useEffect(() => {
        if (placeList[0] === "Loading...") {
            api.getPlaces()
                .then(places => setupPlaceList(places))
                .catch(e => console.log(e));
        }
    });

    // Set up the place list with Place objects.
    let setupPlaceList = (places) => {
        let list = [];
        for (let p in places) {
            list.push(<Place placeInfo={places[p].info} name={places[p].name} address={places[p].address} reviews={places[p].reviews} />);
        }
        setPlaceList(list);
    }



    return (
        <Container >
            <Container className='Place'>
                <Col>
                    <Row>
                        <InputGroup className="mb-3" hidden={props.hideSearchPlace}>
                            <FormControl type="text" placeholder="Name" value={searchName} onChange={onSearchNameInput} />
                            <FormControl type="text" placeholder="Address" value={searchAddress} onChange={onSearchAddressInput} />
                            <InputGroup.Append>
                                <Button onClick={onSearchSubmitted} variant="primary" >Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Row>
                </Col>
            </Container>
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