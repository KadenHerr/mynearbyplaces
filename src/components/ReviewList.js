import Container from 'react-bootstrap/Container';


export default function ReviewList(props) {

    return (
        <Container >
            {props.reviewCount}
            {props.reviewList}
        </Container>
    );
}