const express = require('express')
const session = require('express-session')
const app = express()
const port = 80

app.use(express.static('public'))
app.use(express.json())
app.use(session({
  secret: 'geheimnis',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.post('/session', (req, res) => {
    const {text} = req.body
    req.session.text = text
    res.send('finish')
})

app.get('/getsession', (req, res) => {
    res.send(JSON.stringify({
        text: req.session.text
    }))
})

app.use('/try', function(req, res) {
  res.send('<h1>Servus, wie machma?</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
