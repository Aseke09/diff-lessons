let num = 266219;

let arrNum = Array.from(String(num), Number)

console.log(arrNum)

let result = 1

for(let i = 1; i <= arrNum.length; i++){
   
    result = result * i
    
}

console.log(result)

let powNum = result ** 3;

console.log(powNum)

let twoFirstNum = String(powNum).slice(0,2)

console.log( Number(twoFirstNum))

