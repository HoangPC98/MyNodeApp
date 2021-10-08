const express = require('express');
const https = require('https');

app = express();

app.get('/', function (req, res) {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    https.get(url, function (response){
        console.log('ré Status',response.statusCode)
        response.on('data', function (data) {
            let result = JSON.parse(data)
            console.log(result.title)
        })
    })
    // res.end()
})

app.listen(4000, ()=>{
    console.log('server is started at http://localhost:4000')
})