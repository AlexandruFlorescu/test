WheelofFate = require('./models')
var wof = new WheelofFate()
wof.allocateTwoWeeks()
var schedule = wof.twoWeeks;
console.log(schedule);

const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = 3001

const router = express.Router();

app.get('/', (req, res, next) => {
    res.status(200).send(schedule)
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})

module.export = router;
// READ ONE