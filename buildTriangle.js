/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";

}
// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(width) {
    var w = "";
    for (var y = 1; y <= width; y++) {
      w += makeLine(y);
    }
    return w;
}


// test your code by uncommenting the following line
console.log(buildTriangle(10));

