// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'function') {
    return undefined;
  }

  if (obj === undefined) {
    return undefined;
  }

  if (obj === null) {
    return 'null';
  }

  
  

  if (typeof obj !== "object" && arguments[1] !== 'inArray') {
    if (typeof obj === 'string') {
      return '"' + obj.toString() + '"';
    } else {
      return obj.toString();
    }
  }
  
  if (typeof obj !== "object" && arguments[1] === 'inArray') {
    if (typeof obj === 'string') {
      return '"' + obj + '"';
    }
      return obj;
  }
  
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        return '[]';
      }
      var outputArray = [];
      for (var i = 0; i < obj.length; i++) {
        outputArray.push(stringifyJSON(obj[i], 'inArray'));
      }
      return '[' + outputArray.toString() + ']';

    } else {
      var objectString = '{';
      var once = false;
      for (var key in obj) {  
        
        if(typeof obj[key] !== "function" && obj[key] !== undefined) {
          if (once) {
            objectString += ',';
          }
          once = true;     
          objectString += '"' + key + '"' + ':';  
          objectString += stringifyJSON(obj[key]);
        }
      
      }
      return objectString + '}';
      
    }
  }

};
