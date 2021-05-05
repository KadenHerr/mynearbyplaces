import './App.css';
import Container from 'react-bootstrap/Container';
import NavigationBar from "./components/NavigationBar";
import Home from './components/Home';

function App() {


    return (
        <Container fluid className="Site">
            <NavigationBar />
            <Home />
        </Container>
    );
}

export default App;
