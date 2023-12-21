
const someFunction = function(str){
    if(typeof str !== 'string'){
        return 'не строка'
    } else if(typeof str === 'string'){
       return str.trim().substring(0, 30) + '...'
    }
}

console.log(someFunction())