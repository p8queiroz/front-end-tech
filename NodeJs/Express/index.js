const express  = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello!')
});

app.get('/api/courses', (req, res) => {
    res.send('{id: 1, name: teste}')
});

app.get('/api/users', (req, res) => {
    res.send('{id: 1, name: user1}')
});


app.listen(3000, ()=> console.log('listenning...'))