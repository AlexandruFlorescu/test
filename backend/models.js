var NoEngineers = require('./data').NoEngineers
var NoDaysLookBehind = require('./data').NoDaysLookBehind
var NoShiftsInSpan = require('./data').NoShiftsInSpan
var update = require('./data').update
var engineers = require('./data').engineers
var _ = require('lodash')
const { NoShiftsInDay } = require('./data')
const NoDays = require('./data').NoDays
getRandomEngineer = require('./functions')

class Engineer {
    // engineer class for selection purposes
    name
    NoSupportsThisSpan = 0
    hasSupportedRecently = false
    constructor(name){
        this.name = name
    }

}

class Day {
    id
    supportersToday = []
    constructor(id){
        this.id = id
    }

    clearToday(){
        this.supportersToday = []
    }
}

module.exports = class WheelofFate {
    constructor() {

    }

    span = []

    
    allocateSpan(){
        for(let i=0; i<NoDays; i++) {
            let currentDay = new Day(i)
            while(currentDay.supportersToday.length<NoShiftsInDay) {
                do {
                   var currentEngineer = getRandomEngineer(engineers)
                //    console.log(currentEngineer)
                }
                while( currentEngineer.hasSupportedRecently || currentEngineer.NoSupportsThisSpan >= NoShiftsInSpan )
                // console.log(currentEngineer);
                if (i>=NoDaysLookBehind) {
                    for (let j=0; j<NoShiftsInDay; j++){
                        if(_.filter(engineers, eng => eng.name == this.span[i-NoDaysLookBehind].supportersToday[j].name).length>0){
                            _.filter(engineers, eng => eng.name == this.span[i-NoDaysLookBehind].supportersToday[j].name)[0].hasSupportedRecently = false
                            _.filter(engineers, eng => eng.name == this.span[i-NoDaysLookBehind].supportersToday[j].name)[0].priority ++
                        }
                    }
                    
                }
                var minimum = Math.min.apply(Math, engineers.map(function(x){return x.NoSupportsThisSpan}))
                    
                engineers.map(eng =>  {
                    if(eng.NoSupportsThisSpan == minimum)
                        eng.priority ++
                })
                _.filter(engineers, eng => eng.name == currentEngineer.name)[0].hasSupportedRecently = true
                _.filter(engineers, eng => eng.name == currentEngineer.name)[0].NoSupportsThisSpan += 1 
                _.filter(engineers, eng => eng.name == currentEngineer.name)[0].priority=0
            
                currentDay.supportersToday.push(_.filter(engineers, eng => eng.name == currentEngineer.name)[0])


                engineers = engineers.filter(eng => eng.NoSupportsThisSpan<NoShiftsInSpan)
                update(engineers)
               

            }
            this.span.push(currentDay)
        }
    }
}
