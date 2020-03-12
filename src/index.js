module.exports = function reverse (n) {
    var str = n.toString();
    var arr = str.split("");
    var reverseString = arr.reverse().join("");
    return parseInt(reverseString, 10);
};
