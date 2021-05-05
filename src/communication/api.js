
let apiHost = "https://mynearbyplaces-serverside.herokuapp.com";


// Add a place
let addPlace = (place) => {
    return fetch(apiHost + '/place', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

// Get all of the palces
let getPlaces = () => {
    return fetch(apiHost + '/places')
        .then(response => response.json());
}

// Add a review to a specified place.
let addReview = (review) => {
    return fetch(apiHost + '/review/' + review.placename, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
}

// Search for a place by name and/or location
let searchPlaces = (place) => {
    let query = "/search?";
    if (!(place.name === "")) {
        query += `placeName=${place.name}`;
    }
    if (!(place.address === "")) {
        query += `&location=${place.address}`;
    }
    return fetch(apiHost + query)
        .then(response => response.json());
}

let api = {
    addPlace: addPlace,
    getPlaces: getPlaces,
    addReview: addReview,
    searchPlaces: searchPlaces
};

export default api;