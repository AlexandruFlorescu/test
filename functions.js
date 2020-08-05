
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = function getRandomEngineer(engineers){
    let id = getRandomInt(engineers.length);
    console.log('AIIIIIIIIIIIIIIICIIIIIIIIIIIIIII=> ' , engineers.length, id);
    return engineers[id];
}