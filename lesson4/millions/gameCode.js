var userAnswer, money = 0;
var index = 0;

for (index of questions) {
   userAnswer = +prompt("Вопрос № " + (index + 1) + " " + index.q + "\n Варианты ответов: \n" + index.a1 + "\n" + index.a2 + "\n" + index.a3 + "\n" + index.a4 + "\n Введите номер ответа. \n Для выхода из игры нажмите -1");
   if (userAnswer == -1) {
      alert("Вы вышли из игры");
      break;
   }
   else if (userAnswer == index.correct) {
      money += index.cost;
      alert("Поздравляем, Вы ответили правильно и получаете за ответ " + index.cost);
   }
   else {
      alert("Вы неугадали! Игра окончена");
      break;
   }

} alert("Вы заработали " + money + "!")
