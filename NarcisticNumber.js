/// Benim Cozumum /// 


function narcissistic(value) {
    // Code me to return true or false
    const narcistNumber =  value.toString().split('')
    const result = narcistNumber.map(n => Math.pow(parseInt(n), narcistNumber.length)).reduce((a,b) => a + b)
    return value === result
  }
  console.log(narcissistic(153))
/// Benim Cozumum /// 

/// Baskasinin Cozumu /// 

function narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
      return p + Math.pow(c, ('' + value).length)
      }, 0) == value;
  }
/// Baskasinin Cozumu /// 
