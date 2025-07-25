const getDog = document.getElementById('getDog');

// function to fetch photo from api
    getDog.addEventListener('click', function() {
    const DOG_BASE_URL = 'https://dog.ceo/api/breeds/image/random';

    fetch(DOG_BASE_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error (`HTTP ERROR! STATUS: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
            const dogImage = document.getElementById('dogImage');
            dogImage.src = data.message;
        })
        .catch(error => {
            console.error('FETCH ERROR:', error);
        });
});