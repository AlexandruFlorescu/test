
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = function getRandomEngineer(engineers){
    maximumPriority = Math.max.apply(Math, engineers.map(function(x){return x.priority}));
    engineers = engineers.filter(eng => eng.priority == maximumPriority)
    let id = getRandomInt(engineers.length);
    return engineers[id];
}