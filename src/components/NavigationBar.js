import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { useState } from 'react';
import '../App.css'

function NavigationBar(props) {

    const [searchText, setSearchText] = useState('');

    let onSearchSubmitted = (event) => {
        alert("Already displaying all "+searchText);
    }

    let onSearchInput = (event) => {
        setSearchText(event.target.value);
    }

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Nav.Link>
                <InputGroup className="mb-3" >
                    <FormControl type="text" placeholder="Search..." onChange={onSearchInput}/>
                    <InputGroup.Append>
                        <Button onClick={onSearchSubmitted} variant="outline-primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Nav.Link>

        </Navbar>
    );
}

export default NavigationBar;