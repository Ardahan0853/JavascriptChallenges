/// Benim Cozumum ///
 

function generateHashtag (str) {
    if(str.trim() === ''){
        return false
    }
    const string =  str.split(' ').filter(item => item !== '')
    
    const result = '#' + string.map(item => item[0].toUpperCase() + item.slice(1)).join("")
    if(result.length > 140){
        return false
    }
    return result
}

 console.log(generateHashtag("   hello     sadsa   World    "))

/// Benim Cozumum ///


/// Baskasinin Cozumu ///

function generateHashtag (str) {

    var hashtag = str.split(' ').reduce(function(tag, word) {
      return tag + word.charAt(0).toUpperCase() + word.substring(1);
    }, '#');
    
    return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
  }

/// Baskasinin Cozumu ///



