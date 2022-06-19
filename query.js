const express = require('express')
const app = express()
const portNo = 3000

// ルートへのアクセス
app.get('/',(req,res) => {
    if (!req.query.q) {
        res.send('Not Found')
    }else{
        res.send(`Found ${req.query.q}`)
    }
})

// サーバー起動
app.listen(portNo, () => {
    console.log('起動',`http://localhost:${portNo}`);
})