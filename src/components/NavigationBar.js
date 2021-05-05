import Navbar from 'react-bootstrap/Navbar';
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
            <h1 className="Title">
                <i>My Nearby Places</i>
            </h1>

        </Navbar>
    );
}

export default NavigationBar;