function fibo (n) {
    if (n<2){
        return n;
    }
    return fibo(n-1) + fibo(n-2);
}
const fs = require('fs');
fs.readFile('./number.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var num = data;
  console.log(fibo(num));
  }
  );