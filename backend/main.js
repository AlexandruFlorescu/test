WheelofFate = require('./models')
var wof = new WheelofFate()
wof.allocateSpan()
var schedule = wof.span


const util = require('util')

console.log(util.inspect(schedule, {showHidden: false, depth: null}))


const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())

const morgan = require('morgan')
app.use(morgan('common'))

const helmet = require("helmet")
app.use(helmet())

const port = 3001

const router = express.Router();

app.get('/', (req, res, next) => {
    res.status(200).send(schedule)
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})

module.export = router;