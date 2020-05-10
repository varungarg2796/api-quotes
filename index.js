const express = require('express');
const app = express();


let quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"],
    ["No matter what you're going through, there's a light at the end of the tunnel.", "Demi Lovato"],
    ["It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.", "William James"],
    ["Life is like riding a bicycle. To keep your balance, you must keep moving.", "Albert Einstein"],
    ["Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.", "Ella Fitzgerald"]
  ];

app.get('/quotes', (req,res) =>{
    const i = Math.floor(Math.random()*9);
    res.send(quotes[i]);
})

app.get('/', (req,res) =>{
    res.send('Welcome to the random quote machine')
})

app.listen('3000', ()=> {
    console.log('listening on 3000');
})