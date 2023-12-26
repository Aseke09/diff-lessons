
// Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице

// Создать массив week и записать в него дни недели в виде строк

// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)

const day = document.getElementById('days');
  
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

  const dayOfWeek = new Date().getDay() - 1 // чтобы неделя началась с понедельника

  for (let i = 0; i < week.length; i++){
    if(i < 5 && i != dayOfWeek){
      day.innerHTML += `${week[i]} <br>`
    }
    if (i > 4) {
      day.innerHTML += `<i>${week[i]}</i><br>`;
    }  
    if (i === dayOfWeek) {
      day.innerHTML += `<b>${week[i]}</b><br>`;
    }
  }

  console.log(dayOfWeek)




  

