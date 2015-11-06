function myPush(array, newValue) {
  var i = 0;
  while (array[i]) i++;
  array[i] = newValue;
  return array;
};

function myPop(array) {
  var lastValue = array[array.length - 1];
  array.length = array.length - 1;
  return lastValue;
};

function myShift(array) {
  var firstValue = array[0];
  var i;
  for (i=0;i<array.length;i++) {
    array[i] = array[i+1];
  };
  --array.length;
  return firstValue;
};

function myUnshift(array) { 
  var i;
  for (i=array.length-1;i>=0;i--) {
    array[i+(arguments.length - 1)] = array[i];
  };
  for (i=1;i<arguments.length;i++) {
    array[i-1] = arguments[i];
  };
  return array.length;
};

function unique(array) {
  var myArray = [];
  var reference = {};
  var i;
  for (i=0;i<array.length;i++) {
  // check reference object to see if value exists
    if (!reference[array[i]]) {
      // if not, add it to the reference and to myArray
      reference[array[i]] = array[i];
      myArray[myArray.length] = array[i];
    }
  } 
  return myArray;
};

function frequency2(array) {
  var wordString = '';
  var reference = {};
  var highest;
  var i;

  // take words from array and make it a single string
  for (i=0;i<array.length;i++) {
    wordString += array[i];
  };
  for (i=0;i<wordString.length;i++) {
    // check reference to see if property exists, then increase its value or add it
    reference[wordString[i]] ? ++reference[wordString[i]] : reference[wordString[i]]=1;
    // if property is higher than the current highest, then set highest to that value
    if ((reference[highest] || 0) < reference[wordString[i]]) highest=wordString[i];
  };
  return highest;
};

module.exports = {
  myPush: myPush,
  myPop: myPop,
  myShift: myShift,
  myUnshift: myUnshift,
  unique: unique,
  frequency2: frequency2
};

