const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Hejdanni', (req, res) => {
    res.send('Danitheboi')
  })
  app.get('/API/oliver', (req, res) => {
    res.json({Oliver :'OliverLarsen'})
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
