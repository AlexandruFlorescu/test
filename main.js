WheelofFate = require('./models')
var wof = new WheelofFate()
wof.allocateTwoWeeks()
var schedule = wof.twoWeeks;
console.log(schedule);

const express = require('express')
const app = express()
const port = 3000

const router = express.Router();

app.get('/', (req, res, next) => {
    console.log(schedule);
    res.status(200).send(schedule)
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})

module.export = router;
// READ ONE