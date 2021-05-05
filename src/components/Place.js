import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { useState, useEffect } from 'react';
import Review from './Review';
import api from '../communication/api';


import '../App.css'


export default function Place(props) {

    const [hideUpateInfo, setHideUpateInfo] = useState(true);
    const [placeInfo, setPlaceInfo] = useState(props.placeInfo);

    const [reviewComment, setReviewComment] = useState('');
    const [reviewUsername, setReviewUsername] = useState('');
    const [hideAddReview, setHideAddReview] = useState(true);
    const [reviewList, setReviewList] = useState(null);

    const [hidePlace, setHidePlace] = useState(false);


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

    // Get the review username input
    let onReviewUsernameInput = (event) => {
        setReviewUsername(event.target.value);
    }

    // Get the review text input
    let onReviewCommentInput = (event) => {
        setReviewComment(event.target.value);
    }

    // Add a review to the review list from the review input
    let onReviewSubmitted = (event) => {
        // Add the review to the review list.
        setHideAddReview(true);
        reviewList.push(<Review username={reviewUsername} text={reviewComment} />);
        setReviewUsername("");
        setReviewComment("");

        // Add the review to the api.
        let review = {"username": reviewUsername, "comment": reviewComment, "placename": props.name};
        api.addReview(review)
        .then(() => { console.log(`Review by ${reviewUsername} was added successfully.`)})
        .catch(e => console.log(e));
    }

    let deletePlace = (event) => {
        setHidePlace(true);
    }

    // Set up the review list
    useEffect(() => {
        if (reviewList === null) {
            let list = [];
            for (let r in props.reviews) {
                // Remove blank reviews from the list
                if ((props.reviews[r].comment === null) && (props.reviews[r].comment === null)) {
                    continue;
                }
                list.push(<Review text={props.reviews[r].comment} username={props.reviews[r].username} />);
            }
            setReviewList(list);
        }

    });

    return (
        <Container className='Place' hidden={hidePlace}>
            <Col>
                <Row>
                    <h2>{props.name}</h2>
                </Row>
                <Row>
                    <h5>{props.address}</h5>
                </Row>
                <Row>
                    {placeInfo}
                </Row>
                <Row>
                    <InputGroup className="mb-3" hidden={hideUpateInfo}>
                        <FormControl type="text" placeholder="Update Info" onChange={onInfoInput} />
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
                        <FormControl type="text" placeholder="Enter Username" value={reviewUsername} onChange={onReviewUsernameInput} />
                        <FormControl type="text" placeholder="Enter Review" value={reviewComment} onChange={onReviewCommentInput} />
                        <InputGroup.Append>
                            <Button onClick={onReviewSubmitted} variant="primary" >Submit Review</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Row>
                <Row>
                    <Button onClick={updateInfo}>Update</Button> &nbsp;&nbsp;&nbsp;
                    <Button onClick={deletePlace}>Delete</Button> &nbsp;&nbsp;&nbsp;
                    <Button onClick={addAReview}>Add Review</Button>
                </Row>
            </Col>
        </Container>
    );
}