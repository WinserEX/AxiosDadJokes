
const cors = require('cors');
const axios = require('axios');

async function getDadJoke() {
    const config = {
        header: { Accept: 'application/json' }
    };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log(res);
}

/* const jokes = document.querySelector('#jokes')
const joke = async () => {
    const res2 = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=single');
    console.log(res2.data.joke); 
} */