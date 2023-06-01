

function factorial(n) {
     var fact=1;
    for(i=0;i<n;i++)
    {
        fact=fact*(i+1);
    }
    return fact;
}
  
  function myprime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <=num/2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function printable(n) {
    var result="";
    for(i=1;i<11;i++)
    {
      result = result+ n +"*"+i+"="+i*n+'<br>';
     
    }
    return result;
  }
  
  module.exports = {
    factorial,
    myprime,
    printable,
  };
  