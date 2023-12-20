let lang = 'en'

if(lang === 'ru'){
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье')
} else if (lang === 'en'){
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
}


switch(lang) {
    case 'ru': 
       console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье')
       break;
    case 'en':
       console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
       break;
    default:
        console.log('Что-то произошло не так')       
}

let arr = []

arr.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
arr.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

console.log(arr[lang])
// У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, 
// если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = 'Артем'

namePerson === "Артем" ? console.log("директор") : namePerson === "Александр" ? console.log("преподаватель") : console.log("студент")


