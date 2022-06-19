const express = require('express')
const app = express()
const portNo = 3000

// アクセスがあったら
app.get('/', (req, res, next) => {
    res.send('Hello World')
})
app.get('/name/:name', (req, res, next) => {
    console.log(req.query);
    console.log(req.params);
    res.send(`Hello World ${req.params.name}`)
})

// サーバー起動
app.listen(portNo, () => {
    console.log('起動',`http://localhost:${portNo}`);
})