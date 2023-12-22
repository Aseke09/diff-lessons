
// Задание 01
let inputNum;

const isNumber = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num) && num !== 0
}

  do{
    inputNum = +prompt("Сколько будет стоить данная работа?");
  }while(!isNumber(inputNum))

console.log(inputNum)


// Задание 02

const arr = ['123', '258456', '753147', '456963', '789321', '463985', '256973']

for(let i = 0; i < arr.length; i++){
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}


function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }

  function printPrimes(max) {
    for (let i = 2; i <= max; i++) {
      if (isPrime(i)) console.log(`${i}: Делители этого числа: ${1} и ${i}`);
    }
  }

  printPrimes(100)




  

