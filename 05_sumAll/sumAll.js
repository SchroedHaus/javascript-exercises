const sumAll = function(x, y) {
    //Check for negative numbers
    if (x < 0 || y < 0 || typeof x != 'number' || typeof y != 'number') return 'ERROR';


    // order the 2 numbers
    let order = [x, y];
    order.sort(function(a,b){return a - b});

    x = order[0];
    y = order[1];

    // create an array to store the numbers
    let array = [];

    // loop through x and y until you reach y, adding each number as we go
    for (let i = x; i <= y; i++) {
        array.push(i);
    }

    // sum the numbers in the array
    let sum = 0;

    for (let z = 0; z < array.length; z++) {
        sum = array[z] + sum;
    }

    // return the sum
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
