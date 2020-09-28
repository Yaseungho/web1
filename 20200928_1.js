/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */
/* eslint-env browser */

var x, y, z, result, output;
window.onload = function () {
    "use strict";
    x = 10;
    y = 20;
    z = x + y;
    output = "1 : " + z + "\n";
    x = "10";
    y = "20";
    z = x + y;
    output += "2 : " + z + "\n";
    x = 10;
    y = 20;
    z = "30";
    result = x + y + z;
    output += "3 : " + result + "\n";
    x = "100";
    y = "10";
    z = x / y;
    output += "4 : " + z + "\n";
    z = x * y;
    output += "5 : " + z + "\n";
    z = x - y;
    output += "6 : " + z + "\n";
    z = x + y;
    output += "7 : " + z + "\n";
    window.alert(output);
};
