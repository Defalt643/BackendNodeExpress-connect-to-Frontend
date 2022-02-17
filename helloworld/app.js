const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
//   res.send('Hello World!')
  console.log(req)
  res.json({
    id: 2000,
    name: 'Iphone'
  })
})

app.get('/hellome', function (req, res) {
  res.send('Hello me')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})
