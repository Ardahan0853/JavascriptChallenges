
/// Benim cozumum ///
function digitalRoot(n) {
    // ...
    const sumOfAll = sum => sum.toString().split('').map(Number).reduce((a,b) => a + b)
    let newSum 
    if(sumOfAll(n) >= 10){
        newSum = sumOfAll(n)
        if(sumOfAll(newSum) >= 10){
            return sumOfAll(sumOfAll(newSum))
        } 
        return sumOfAll(newSum)
        
    }
    return sumOfAll(n)
  }

 /// Lavuğugun çözümü ///
//  function digital_root(n) {
//     return n < 10 ? n : digital_root(String(n).split('').reduce((s,v)=>Number(s)+Number(v)));
//   } 

console.log(digitalRoot(97282))