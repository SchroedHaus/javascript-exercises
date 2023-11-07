const reverseString = function(string) {
    let length = string.length;
    let text = '';

    while (length >= 0) {
        text += string.charAt(length);
        length--;
    }

    return text;
};

// Do not edit below this line
module.exports = reverseString;
