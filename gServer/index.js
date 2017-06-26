const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY!')
})
app.get('/shrey', (req, res) => {
  res.send('HEY shrey!')
})
app.get('/gowry', (req, res) => {
  res.send('HEY gowry!')
})
app.listen(3000, () => console.log('Server running on port 3000'))
