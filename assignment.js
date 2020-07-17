
// feetToMile

function feetToMile(feet){
    var mile = feet / 5280;

    return mile;
}
var result = feetToMile (5280);
console.log (result);

// woodCalculator

function woodCalculator(chair, table,bed){
    var chairCount = chair * 5;
    var tableCount = table * 5;
    var bedCount = bed *5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
    
// brickCalculator
    var brickCalculator = 30;
    if ( n <= 10){
        var total = n*15000;
        result = total;
    }
    else if ( n == 11 && n <= 20 ){
        var total2 = n*12000;
    }
    else {
        var total3 = n*10000;
        result = total3;
    }
    console.log(result);




// tinyFriend

function tinyFriend (names){
    var smallName = names[0];
    for (var i = 0; i <names.length; i++) {
        var currentName = names [i];
        if (currentName.length < smallName.length){
            smallName = currentName;
          }
    }
    return smallName;
}
var smallestName = tinyFriend (['asit','raj','mithun','anika']);
    console.log(smallestName);