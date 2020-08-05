var NoEngineers = require('./data').NoEngineers;
var update = require('./data').update;
var engineers = require('./data').engineers;
var _ = require('lodash');
const NoDays = require('./data').NoDays;
getRandomEngineer = require('./functions')

class Engineer {
    // engineer class for selection purposes
    name;
    NoSupportsThisTwoWeeksSpan = 0;
    hasSupportedRecently = false;
    constructor(name){
        this.name = name;
    }

}

class Day {
    id;
    supportersToday = [];
    constructor(id){
        this.id = id;
    }

    clearToday(){
        this.supportersToday = [];
    }
}

module.exports = class WheelofFate {
    constructor() {

    }

    twoWeeks = [];

    
    allocateTwoWeeks(){
        for(let i=0; i<NoDays; i++) {
            let currentDay = new Day(i);
            while(currentDay.supportersToday.length<2) {
                do {
                   var currentEngineer = getRandomEngineer(engineers)
                   console.log(currentEngineer);
                }
                while( currentEngineer.hasSupportedRecently || currentEngineer.NoSupportsThisTwoWeeksSpan >=2 )
                
                if (i>1) {
                    if(_.filter(engineers, eng => eng.name == this.twoWeeks[i-2].supportersToday[0].name).length>0){
                        _.filter(engineers, eng => eng.name == this.twoWeeks[i-2].supportersToday[0].name)[0].hasSupportedRecently = false;
                        _.filter(engineers, eng => eng.name == this.twoWeeks[i-2].supportersToday[0].name)[0].priority ++;
                    }
                    if(_.filter(engineers, eng => eng.name == this.twoWeeks[i-2].supportersToday[1].name).length>0){
                        _.filter(engineers, eng => eng.name == this.twoWeeks[i-2].supportersToday[1].name)[0].hasSupportedRecently = false;
                        _.filter(engineers, eng => eng.name == this.twoWeeks[i-2].supportersToday[1].name)[0].priority ++;
                        
                    }
                }
                _.filter(engineers, eng => eng.name == currentEngineer.name)[0].hasSupportedRecently = true;
                _.filter(engineers, eng => eng.name == currentEngineer.name)[0].NoSupportsThisTwoWeeksSpan += 1 ;
                _.filter(engineers, eng => eng.name == currentEngineer.name)[0].priority=0;
            
                currentDay.supportersToday.push(_.filter(engineers, eng => eng.name == currentEngineer.name)[0]);


                engineers = engineers.filter(eng => eng.NoSupportsThisTwoWeeksSpan<2);
                update(engineers);
               

            }
            this.twoWeeks.push(currentDay);

            const util = require('util')

            console.log(util.inspect(this.twoWeeks, {showHidden: false, depth: null}))  
        }
        const util = require('util')

        console.log(util.inspect(this.twoWeeks, {showHidden: false, depth: null}))
    }
}


// Solution 2: pair engineers 2 by 2
/* Solution 3: day 1: 2x random
               day 2: 2x random
               day 3: 1x random 1x random from day1
               day 4: second one from day1, 1x random day 2
               etc.
*/