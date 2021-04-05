import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { useState } from 'react';
import Review from './Review';
import ReviewList from './ReviewList';


import '../App.css'


export default function Place(props) {

    const [nextReview, setNextReview] = useState('');
    const [hideAddReview, setHideAddReview] = useState(true);
    const [reviewList, setReviewList] = useState([<Review text="This location does not have any reviews yet."/>]);
    const [reviewCount, setReviewCount] = useState(0);

    // Toggle the add review textbox
    let addAReview = (event) => {
        setHideAddReview(!hideAddReview);
    }

    // Add a review to the review list from the review input
    let onReviewSubmitted = (event) => {
        setHideAddReview(true);
        reviewList.push(<Review text={nextReview}/>);
        setReviewList(reviewList);
    }

    // Get the review text input
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
                    {reviewList}
                </Row>
                <Row>
                    <InputGroup className="mb-3" hidden={hideAddReview}>
                        <FormControl type="text" placeholder="Enter Review" onChange={onReviewInput} />
                        <InputGroup.Append>
                            <Button onClick={onReviewSubmitted} variant="primary" >Submit Review</Button>
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