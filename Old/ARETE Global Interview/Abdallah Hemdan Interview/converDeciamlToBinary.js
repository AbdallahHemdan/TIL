function converDeciamlToBinary(num){
  let binaryNumber="";
  while(num){
    binaryNumber += (num % 2);
    num /= 2;
    num = Math.floor(num)
  }
  return binaryNumber;
}

let convertedNumber = converDeciamlToBinary(23);
console.log(convertedNumber);

