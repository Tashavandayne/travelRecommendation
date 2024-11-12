// Fetch the JSON file
fetch('travel_recommendation_api..json')
    .then(response => {
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse JSON from the response
    })
    .then(data => {
        // Process the data from the JSON file
        console.log(data);
        // You can now work with 'data' as a JavaScript object
    })
    .catch(error => {
        // Handle any errors
        console.error('Error fetching JSON:', error);
    });
