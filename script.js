const express = require('express');
const cors = require('cors')
const app = express();
const port = 8080;

app.use(cors());

const jokes = [
    { joke: "Why don't skeletons fight each other? They don't have the guts.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNY42rAJJ2uVGnWr0_rXrKNgrptsoIA5YpEg&s" },
    { joke: "Why did the scarecrow win an award? Because he was outstanding in his field.", 
        image: "https://cdn.britannica.com/04/125604-004-42F4AE03/Scarecrows-paddy-Japan.jpg" },
    { joke: "I'm reading a book on anti-gravity. It's impossible to put down!", 
        image: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop" },
    { joke: "Why don't eggs tell jokes? Because they'd crack each other up.", 
        image: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg" },
    { joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpuuJEwre1XxRvumhrXvtqMTMtzv0NtXeEg&s" }


 
        
];


app.get('/joke', (req,res) =>{
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({joke: randomJoke})
});

app.listen(port, () => {
    console.log(`Serveri eshte duke u bere run: http://localhost:${port}`);
})