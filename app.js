const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log('Server is listening for requests...');
})

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.sendFile('C:/Users/mayek/Desktop/Programming/Projects/CascadingDdlSelector/index.html')
})