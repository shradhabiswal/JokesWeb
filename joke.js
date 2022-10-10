const jokes = document.getElementById('jokes');
const jokesBtn = document.querySelector('#jokesBtn');

// https://api.chucknorris.io/jokes/random  (doesn't require application/json header accept change)

// https://icanhazdadjoke.com/

const generateJokes = () =>{

    const setHeader = {
        headers : {
            Accept : "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com/', setHeader).then((response)=>response.json()).then((data)=>jokes.innerHTML = data.joke).catch((error)=>{
        console.log(error);
    });
};


jokesBtn.addEventListener('click', generateJokes);
generateJokes();