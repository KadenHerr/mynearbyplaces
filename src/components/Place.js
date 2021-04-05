import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { useState } from 'react';
import Review from './Review';


import '../App.css'


export default function Place(props) {

    const [hideUpateInfo, setHideUpateInfo] = useState(true);
    const [placeInfo, setPlaceInfo] = useState(props.placeInfo);

    const [nextReview, setNextReview] = useState('');
    const [hideAddReview, setHideAddReview] = useState(true);
    const [reviewList, setReviewList] = useState([]);


    // Toggle the update info textbox
    let updateInfo = (event) => {
        setHideUpateInfo(!hideUpateInfo);
    }

    // Get the updated text info
    let onInfoInput = (event) => {
        setPlaceInfo(event.target.value);
    }

    // Add a review to the review list from the review input (NO ACTUAL USE)
    let onInfoUpdated = (event) => {
        setHideUpateInfo(true);
        setPlaceInfo(placeInfo);
    }


    // Toggle the add review textbox
    let addAReview = (event) => {
        setHideAddReview(!hideAddReview);
    }

    // Get the review text input
    let onReviewInput = (event) => {
        setNextReview(event.target.value);
    }

    // Add a review to the review list from the review input
    let onReviewSubmitted = (event) => {
        setHideAddReview(true);
        reviewList.push(<Review text={nextReview} />);
        //setReviewList(reviewList);
    }




    return (
        <Container className='Place'>
            <Col>
                <Row>
                    <h2>{props.name}Title</h2>
                </Row>
                <Row>
                    Info here. {placeInfo}
                </Row>
                <Row>
                    <InputGroup className="mb-3" hidden={hideUpateInfo}>
                        <FormControl type="text" placeholder={props.placeInfo} onChange={onInfoInput} />
                        <InputGroup.Append>
                            <Button onClick={onInfoUpdated} variant="primary" >Update Info</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Row>
                <Row>
                    <h4>Reviews:</h4>
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
                    <Button onClick={updateInfo}>Update</Button> &nbsp;&nbsp;&nbsp;
                    <Button >Delete</Button> &nbsp;&nbsp;&nbsp;
                    <Button onClick={addAReview}>Add Review</Button>
                </Row>
            </Col>
        </Container>
    );
}