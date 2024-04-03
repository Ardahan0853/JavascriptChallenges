
 /// Benim Cozumum ///

function spinWords(string){
    const stringArr = string.split(' ')
    const reversedArr = stringArr.map(item => item.length >= 5 ? item.split('').reverse().join('') : item)
    return reversedArr.join(' ')
  }
  console.log(spinWords("Hey fellow warriors"))
 /// Benim Cozumum /// 

 /// Baskasinin Cozumu /// 
 function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

 /// Baskasinin Cozumu /// 
  