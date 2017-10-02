// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // initialize array to return
 
  var outputArray = [];
  
  if(document.body.className.includes(className)) {
    outputArray.push(document.body);
  }
  var bodyLength = document.body.children.length;
  
    for(var i = 0; i < bodyLength; i++) {
      var currentElement = document.body.children[i];
      output(currentElement);
    }
  
  function output (element) {
    if(element.className.includes(className)) {
      outputArray.push(element);
    }
    
    if(element.hasChildNodes()) {
      for(var j = 0; j < element.children.length; j++) {
        output(element.children[j]);
      }
    }
       
  }
  
 
  return outputArray;
  
};

