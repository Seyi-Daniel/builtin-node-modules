/* 

The crypto module provides a way of handling encrypted data.

*/

var crypto = require("crypto");

var mykey = crypto.createCipher("aes-128-cbc", "mypassword");
var mystr = mykey.update("abc", "utf8", "hex");
mystr += mykey.final("hex");

console.log(mystr);
