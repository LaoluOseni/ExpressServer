//express is really good at routing.
const express = require('express');

const app = express();

const PORT = 3000;

const scientists = [
    {
        id: 0,
        name: 'Einstein'
    },
    {
        id: 1,
        name: 'Newton'
    },
    {
        id: 2,
        name: 'Tesla'
    },
    {
        id: 3,
        name: 'Hopper'
    },
    {
        id: 4,
        name: 'Faraday'
    },
    {
        id: 5,
        name: 'Babbage'
    },
    {
        id: 6,
        name: 'Edison'
    },
    {
        id: 7,
        name: 'Neumann'
    },
    {
        id: 8,
        name: 'Maxwell'
    },
    {
        id: 9,
        name: 'Dawson'
    },
    {
        id: 10,
        name: 'Lautner'
    },
]

app.use((req, res, next) => {
    console.log(`${req.method}`)
    next();
});
app,use(express.json());

app.get('/friends', (req, res) => {
    res.statusCode
    res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.json(friend);
    } else {
        res.sendStatus(404);
    }
})




//post to create new scientist.
app.post('/scientist', (req, res) => {
    const newScientist = {
        id: scientists.length,
        name: req.body.name
    };
    scientists.push(newScientist);

    res.json(newScientist);
});


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})