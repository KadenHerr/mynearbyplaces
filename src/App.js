import './App.css';
import Container from 'react-bootstrap/Container';
import NavigationBar from "./components/NavigationBar";
import { useState } from 'react';
import Place from './components/Place';

function App() {
  return (
    <Container fluid>
        <NavigationBar />
        <Place />
    </Container>
  );
}

export default App;
