const jokes = document.querySelector('#jokes')
const joke = async () => {
    const res2 = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=single');
    console.log(res2.data.joke); 
} 

joke();