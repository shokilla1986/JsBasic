var i1 = {
   name: "Футбольный мяч",
   imgSrc: "img/0.jpg",
   price: 100
};
var i2 = {
   name: "Набор карандашей",
   imgSrc: "img/1.jpg",
   price: 1000
};
var i3 = {
   name: "Набор для маникюра",
   imgSrc: "img/2.jpg",
   price: 800
};
var i4 = {
   name: "Тюббинг",
   imgSrc: "img/3.jpg",
   price: 1000
};
var i5 = {
   name: "Теннисная ракетка",
   imgSrc: "img/4.jpg",
   price: 500
};

var itemsArray = [i1, i2, i3, i4, i5];

var sum = 0;



function init() {
   var catalog = document.getElementsByClassName("catalog")[0];//находим класс каталог и будем с ним работать
   var i, item;// создали счетчик и товар
   for (i = 0; i < itemsArray.length; i++) {//запустили цикл для создания каталога товаров
      item = document.createElement("div");//создаем товар с тегом див
      item.setAttribute("class", "div_item");//добавляем ему класс 
      item.appendChild(document.createTextNode(itemsArray[i].name));//добавляем имя товара

      itemImg = document.createElement("img");//создаем картинку товара
      itemImg.src = itemsArray[i].imgSrc;//добавляем путь до картинки товара исп-я i эл-т массива
      item.appendChild(itemImg);//добавляем картинку в конец товара с тегом div

      item.appendChild(document.createTextNode(itemsArray[i].price));

      itemBtn = document.createElement("button");
      itemBtn.textContent = "Купить";
      itemBtn.setAttribute("id", "btn_" + i);
      itemBtn.onclick = addItem;
      item.appendChild(itemBtn);

      catalog.appendChild(item);
   }
}

function addItem(event) {
   var selectedItem = itemsArray[event.target.id.split("_")[1]];//выбранный товар из массива
   var selectedItems = document.getElementsByClassName("selected_items")[0];//выбираем класс корзины с которым будем работать
   var tr = selectedItems.insertRow();//создаем строку товара в корзине
   var td = tr.insertCell();//создаем столбец в строке выбранного товара
   td.appendChild(document.createTextNode(selectedItem.name));//вставляем в столбец название товара

   td = tr.insertCell();//создаем еще 1 столбец под цену выбранного товара
   td.appendChild(document.createTextNode("    " + selectedItem.price + "\u20bd"));//добавляем цену

   sum += selectedItem.price;//суммируем стоимость выбранных товаров
   document.getElementsByClassName("sum")[0].textContent = "Sum: " + sum + "\u20bd"; //выводим сумму на экран
}
window.onload = init;//запускает функцию после полной загрузки страницы