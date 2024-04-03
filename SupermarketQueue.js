 /// Benim Cozumum /// 


function queueTime(customers, n) {
    if (customers.length === 0) {
        return 0;
    } else if (n === 1) {
        return customers.reduce((prev, current) => prev + current);
    } else if (customers.length <= n) {
        return Math.max(...customers);
    } else {
        let tills = new Array(n).fill(0);
        for (let i = 0; i < customers.length; i++) {
            const nextCustomer = customers[i];
            const nextTillIndex = tills.indexOf(Math.min(...tills));
            tills[nextTillIndex] += nextCustomer;
        }
        return Math.max(...tills);
    }
}
console.log(queueTime([1,2,3,4], 1));
 /// Benim Cozumum ///

 /// Baskasinin Cozumu ///
 function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
    }
    return Math.max(...w);
  }
 /// Baskasinin Cozumu ///

