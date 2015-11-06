var expect = require('chai').expect;
var functions = require('./functions');

describe('My array functions', function() {
  it('should add a value to the array', function() {
    expect(functions.myPush(['one', 'two'], 'three')).to.be.eql(['one', 'two', 'three']);
  });

  it('should delete and return the last array value', function() {
    var myArray = ['one', 'two', 'three'];
    expect(functions.myPop(myArray)).to.be.eql('three');
    expect(myArray).to.be.eql(['one', 'two']);
  });

  it('should return and remove first array value', function() {
    var myArray = ['one', 'two', 'three'];
    expect(functions.myShift(myArray)).to.eql('one');
    expect(myArray).to.eql(['two', 'three']);
  });

  it('should add multiple values to the beginning of my array', function() {
    var myArray = ['one', 'two'];
    expect(functions.myUnshift(myArray, 'sub1', 'sub2')).to.be.eql(4);
    expect(myArray).to.be.eql(['sub1', 'sub2', 'one', 'two']);
  });

  it('should eliminate duplicat values', function() {
    var myArray = ['hello', 'hello', 'world'];
    expect(functions.unique(myArray)).to.eql(['hello', 'world']);
  });

  it('should return most frequent letter', function() {
    var myArray = ['hello', 'world'];
    expect(functions.frequency2(myArray)).to.eql('l');
  });
});

