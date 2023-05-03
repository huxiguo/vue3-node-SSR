let express = require('express')

let server = express()

server.get('/', (req, res) => {
  res.send(`Hello World 123`)
})
server.listen(3000, () => {
  console.log('your server start on http://localhost:3000')
})
