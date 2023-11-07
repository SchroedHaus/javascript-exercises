const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";

    }

    let text = "";
    let i = 0;

    while (i < num) {
        text += string;
        i++;
    }

    return text;
};

// Do not edit below this line
module.exports = repeatString;
