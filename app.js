const express = require('express')

const app = express()

const absolutePath = __dirname + "/index.html"

const path = __dirname + '/public'

app.use(express.static(path))

app.get('/json', function (req, res) {
    // res.sendFile(absolutePath)

    let obj = { 'message': 'Hello json' }
    let key = "hello json"


    if (process.env.MESSAGE_STYLE == 'uppercase') {
        obj.message = key.toUpperCase()
        res.json(obj)
    } else {
        res.json(obj)
    }



    console.log(absolutePath);

})

app.listen(3000, function () {
    console.log('listening!')
})