import Container from 'react-bootstrap/Container';


export default function Review(props) {

    return (
        <Container className='Review'>
            {props.text}
        </Container>
    );
}