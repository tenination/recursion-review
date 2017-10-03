// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var firstChar = json[0];
  console.log('input:', json)
  if (json[0] === '[') {
    var arrayData = json.substr(1,json.length-2);
    var splitArrayData = arrayData.split(', ');
    for (var i = 0; i < splitArrayData.length; i++) {
      splitArrayData[i] = parseJSON(splitArrayData[i]);
    }
  }

  if (firstChar === '"') {
    elementType = 'string';
    return json.toString();
  }
  console.log(typeof json);
  return json;

};

// From JSBIN

/*

var obj = {
  a:100,
  b:200,
  c:300
};

var array = [1,2,3,4,5];
var num = 9;
var str = "Micah";
var rand = null;
var bool = false;

var stringVersion = JSON.stringify(bool);
//console.log(stringVersion);
//console.log(JSON.parse(stringVersion));

function parseJSON (element) {
  //use first character of string to detect typeof
  var firstChar = element.substr(0,1);
  var elementType;
  
  if (firstChar === '[') {
    elementType = 'array';
    //element = '1,2,3';
    //we can detect different elements in array by looking for the comma
    for (var i = 1; i < element.length; i++) {
      var eachIndexString = '';
      if (element[i] !== ',') {
        eachIndexString += element[i];
      }
      
    }
    
  }
  if (firstChar === '{') {
    elementType = 'object';
  }
  if (firstChar === '"') {
    elementType = 'string';
  }
  if (element === "true"  || element === "false") {
    elementType = 'boolean';
  }
  if (element === "null") {
    elementType = null;
  }
  if (firstChar === '0'|| firstChar === '1'||firstChar === '2'||firstChar === '3'||firstChar === '4'||firstChar === '5'||firstChar === '6'||firstChar === '7'||firstChar === '8'||firstChar === '9') {
    elementType = 'number';
  }
  return elementType;
}

//parseJSON(stringVersion);
//console.log(parseJSON(stringVersion));

for (var i = 0; i < 100; i+=10) {
  console.log(parseJSON(JSON.stringify(i)));
}

//anything that is passed into the parseJSON will be a string.
//whatever we output will be of some type - string, number, null,
//array, object, undefined, etc. So first to be able to output the 
//right thing, we need to first detect what type the object is. 


//console.log(parseJSON(JSON.stringify(null)));

var array = '[1,2,3, true]'; 
array = array.substr(1, array.length - 2);
var outputArray = array.split(',');
outputArray.forEach(function(element, index) {
  outputArray[index] = (Number(element));
});
console.log(outputArray);
console.log([1,2,3,'h[ee]']);


*/

