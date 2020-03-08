import express from 'express';
const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati
const staticMiddleware = express.static('public')

app.use('/', staticMiddleware)
app.get('/datum', (req, res) => {
    let moment = require('moment');
    let vr = moment().format('DD/MM/YYYY HH:mm')
    res.json(vr)
})
app.get('/prognoza', (req, res) => {
    let p = ['sunčano', 'kišovito', 'oblačno']
    let mjesto = p[Math.floor(Math.random() * p.length)];
    let prog=mjesto
    res.json(prog)
})


app.listen(port, () => console.log(`Slušam na portu ${port}!`))









