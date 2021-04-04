import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import '../App.css'

function NavigationBar(props) {


    let onAddPlace = (event) => {
        window.location.reload();
    }

    return (
        <Navbar bg="dark" expand="lg" variant="dark">

            <Nav.Link>
                <Button onClick={onAddPlace}>Add A Place</Button>
            </Nav.Link>
            <Nav.Link>
                <InputGroup className="mb-3">
                    <FormControl placeholder="Search..." />
                    <InputGroup.Append>
                        <Button >Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Nav.Link>

        </Navbar>
    );
}

export default NavigationBar;