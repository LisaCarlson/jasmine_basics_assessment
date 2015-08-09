var code = require('../grader.js');

describe('Letter Grader', function() {
  it('takes an argument and returns undefined if it is not a number, a number less than 0 or more than 100', function(){
    expect(code.letterGrader(110)).toEqual(undefined);
    expect(code.letterGrader('A')).toEqual(undefined);
    expect(code.letterGrader()).toEqual(undefined);
  });
  it('takes an argument and returns "A" if the argument is between 90 and 100, inclusive', function(){
    expect(code.letterGrader(95)).toEqual('A');
  });
  it('takes an argument and returns "B" if the argument is between 80 and 89, inclusive', function(){
    expect(code.letterGrader(89)).toEqual('B');
  });
  it('takes an argument and returns "C" if the argument is between 70 and 79, inclusive', function(){
    expect(code.letterGrader(70)).toEqual('C');
  });
  it('takes an argument and returns "D" if the argument is between 60 and 69, inclusive', function(){
    expect(code.letterGrader(68)).toEqual('D');
  });
  it('takes an argument and returns "F" if the argument is between 0 and 59, inclusive', function(){
    expect(code.letterGrader(22)).toEqual('F');
  });
});

describe('Average Score', function() {
  it('takes an array of test scores and returns the average score', function(){
    expect(code.averageScore([90, 95, 87, 60])).toEqual(83);
  });
  it('returns "[]" if there is no argument defined', function(){
    expect(code.averageScore()).toEqual('[]');
  });
  it('returns "[]" if there the elements in the argument are not numbers', function(){
    expect(code.averageScore([true, 'string', 67, undefined])).toEqual('[]');
  });
});

describe('Median Score', function() {
  it('takes an array of test scores and returns the median score', function(){
  expect(code.medianScore([52,80,80,86,94])).toEqual(80);
  });
  it('returns the average of the middle two scores if there are an even number of scores', function(){
    expect(code.medianScore([60,72,85,99])).toEqual(78.5);
  });
  it('returns "[]" if there is no argument defined', function(){
    expect(code.medianScore()).toEqual('[]');
  });
  it('returns "[]" if there are elements in the argument that are not numbers', function(){
    expect(code.medianScore([true, 'string', 67, undefined])).toEqual('[]');
  }); 
  it('returns the correct median score even if the array elements are unordered', function(){
    expect(code.medianScore([99, 82, 92, 95, 100, 54, 76])).toEqual(92);
  }); 

});

describe('Mode Score', function() {
  it('takes an array of test scores and calculates the mode score', function(){
  expect(code.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
  });
  it('returns the last score if all scores appear once', function(){
  expect(code.modeScore([82, 92, 75, 91, 89, 95, 100, 86])).toEqual(100);
  });
  it('returns the score if all scores are the same', function(){
  expect(code.modeScore([82, 82, 82, 82, 82])).toEqual(82);
  });
  it('returns "[]" if there is no argument defined', function(){
  expect(code.modeScore()).toEqual('[]');
  });
  it('returns "[]" if there are elements in the argument that are not numbers', function(){
  expect(code.modeScore([true, 'string', 67, undefined])).toEqual('[]');
  });

});



















