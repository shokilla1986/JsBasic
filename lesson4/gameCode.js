//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

switch (answerQuestion(works.a00, works.a1, works.a2)) {
   case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2

      switch (answerQuestion(works.b00, works.b1, works.b2)) {
         case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
         case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
            answerQuestion(works.d00, works.d1, works.d2);
            break;
         case -1: // Второе действие
            break;
         default:
            alert('Ошибка');
      }
      break;
   case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну      
      switch (answerQuestion(works.c00, works.c1, works.c2)) {
         case 1:
         case 2:
            answerQuestion(works.d00, works.d1, works.d2);
            break;
         case -1: // Второе действие
            break;
         default:
            alert('Ошибка');
      }
      break;
   case -1: // Первое действие
      break;
   default:
      alert('Ошибка');
}
alert('Спасибо за игру');
console.log(answers);
var step = +prompt("Введите номер хода для просмотра истории");
console.log(step);
var stepHistory = ("На ходу № " + step + " " + answers[step - 1][0] + "Ваш выбор " + answers[step - 1][1]);
alert(stepHistory);
//------------------------------------------
function isAnswer(q, event) {
   if (isNaN(event) || !isFinite(event)) {
      alert('Вы ввели недопустимый символ');
      return false;
   }
   else if (event < 1 || event > q) {
      alert('Ваше число выходит из допустимого диапозона');
      return false;
   }
   return true;

}

function answerQuestion(q, answer1, answer2) {
   do {//Выводим первый вопрос
      var ok = false;
      event = +prompt(q + answer1 + answer2 + '-1 - Выход из игры');

      if (event == -1) {
         return -1;
      } else {
         ok = isAnswer(works.a0, event);
      }
   } while (!ok);
   switch (event) {
      case 1: answers.push([q, answer1]);
         break;

      case 2: answers.push([q, answer2]);
         break;

      case -1: answer.push([q, "выход"]);
         break;
   }
   return event;
}