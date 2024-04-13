// function duplicateEncode(word){
//     const splitArr = word.split('')
//     let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
//     return findDuplicates(splitArr)
// }

/// Çözemedim ///

/// En iyi çözüm ///

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }
  

console.log(duplicateEncode('ardahannn'))