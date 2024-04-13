/// Benim Çözümüm ///

function divisors(integer) {
    const divisors = []
    for(let i = 0; i < integer; i++){
        if(integer % i ===0){
            i === 1 ? '' : divisors.push(i)
            
        }
    }
    if(divisors.length === 0){
        return `${integer} is prime`
    }
    return divisors
};
/// Benim Çözümüm ///

/// Lavuğun çözümü ///


/// Lavuğun Çözümü ///

console.log(divisors(39))