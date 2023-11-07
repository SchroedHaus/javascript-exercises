const removeFromArray = function(arr, ...removals) {
    for (let removal in removals) {
        let deletionIndex = arr.indexOf(removals[removal]);
        if (deletionIndex == -1) {
            continue;
        }
        arr.splice(deletionIndex, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
