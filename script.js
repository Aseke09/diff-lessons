
const transformStr = function(str){

    if(typeof str !== 'string' || str == false){
        return 'не строка'
    } 
     if(typeof str === 'string' && str.length > 30){
        return str.trim().substring(0, 30) + '...'
    }
}

console.log(transformStr('  kjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'))