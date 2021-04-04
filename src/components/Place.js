import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { useState } from 'react';
import '../App.css'


export default function Place(props) {

    const [nextReview, setNextReview] = useState('');
    const [displayAddReview, setDisplayAddReview] = useState(true);

    // Toggle the add review textbox
    let addAReview = (event) => {
        setDisplayAddReview(!displayAddReview);
    }
    
    // Add a review to the review list from the review input;
    let onReviewSubmitted = (event) => {
        setDisplayAddReview(true);
    }

    let onReviewInput = (event) => {
        setNextReview(event.target.value);
    }


    return (
        <Container className='Place'>
            <Col>
                <Row>
                    Info here. fsadkjf;olasdk fdsjfhsda ;fghds; fhsd break!!! safhndsapofjhasdpof sdpofd shf BREAK2!!! AFOPDSHFOWEIAFHJSDPOFHSD; FAPFSOEHUISPEHD Break3!!! akfopsdfhdosi
                </Row>
                <Row>
                    <h3>Reviews:</h3>
                </Row>
                <Row>
                    <InputGroup className="mb-3" hidden={displayAddReview}>
                        <FormControl type="text" placeholder="Enter Review" onChange={onReviewInput} />
                        <InputGroup.Append>
                            <Button onClick={onReviewSubmitted} variant="outline-info" >Submit Review</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Row>
                <Row>
                    <Button >Update</Button> &nbsp;&nbsp;&nbsp;
                    <Button >Delete</Button> &nbsp;&nbsp;&nbsp;
                    <Button onClick={addAReview}>Add Review</Button>
                </Row>
            </Col>
        </Container>
    );
}