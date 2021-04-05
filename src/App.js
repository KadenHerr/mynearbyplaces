import './App.css';
import Container from 'react-bootstrap/Container';
import NavigationBar from "./components/NavigationBar";
import { useState } from 'react';
import Place from './components/Place';
import Home from './components/Home';

function App() {


    return (
        <Container fluid>
            <NavigationBar />
            <Home />
            <Place />
        </Container>
    );
}

export default App;
