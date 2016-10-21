// var fs = require('fs');
//
// fs.readFile('countries.json', 'utf8', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   var dataCountries = JSON.parse(data);
//
//   for(var i = 0, i < dataCountries.length, i++) {
//     if (dataCountries[i].name === process.argv[2]) {
//       console.log(dataCountries[i]);
//     }
//   }
// );

var fs = require('fs');
fs.readFile('./countries.json', 'utf8', function (err, data) {
  if (err) {
    throw err;
  }
  var dataCountries = JSON.parse(data);
    // console.log(dataCountries);
  // console.log(process.argv[2]);
  for (var i = 0; i < dataCountries.length; i++) {
    if (dataCountries[i].name === process.argv[2]) {
      console.log(dataCountries[i]);
      console.log( "The country is " + dataCountries[i].name);
      console.log( "The capital is " + dataCountries[i].capital);
      console.log( "The population is " + dataCountries[i].population);
      console.log( "The country is " + dataCountries[i].name);
      console.log( "The country is " + dataCountries[i].name);
      console.log( "The country is " + dataCountries[i].name);
    }
  }
});
