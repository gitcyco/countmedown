const express = require('express');
const app = express();
const port = process.env.PORT||3000
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`listening on ${port}`)
})

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/task', (req,res) => {
  console.log('get task!')
})

app.get('/task/:id', (req,res) => {
  console.log('get task id')
})

app.post('/task', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})

app.patch('/task/:id', (req, res) => {
  console.log('patch task')
})

app.delete('/task/:id', (req, res) => {
  console.log('delete task id')
})
