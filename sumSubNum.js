function displaySum(num){
    let sum = 0;
    for(let i = num; i > 0; i = Math.floor(i / 10)){
      sum = sum + (i % 10);
    }
    return sum
  }
  
  function checkValue(value){
    let sum = displaySum(value);
    while(sum >= 10){
      sum = displaySum(sum);
    }
    return sum;
  }
  
  console.log(checkValue(89));