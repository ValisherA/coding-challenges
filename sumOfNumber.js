const { assert } = require("chai");

function sum(num){
    let sum = 0;
    for(let i = num; i >= 0; i = Math.floor(i / 10)){
        sum = sum + (i % 10);
    }
    return sum;
}

describe('sum',function(){
    it('Sum of given nuber',function(){
        assert.equal(sum(12),3)
    });
});