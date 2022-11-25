const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addJoke = async () => {
    const jokeText = await getJoke()
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getJoke = async () => {
    try {
        const res2 = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=single');
        return res2.data.joke;
    } 
    catch (e) {
        return "No Jokes Available! Sorry :("
    }
} 

button.addEventListener('click', addJoke);