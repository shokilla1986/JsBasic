var myImage = ["1.jpg", "2.jpg", "3.jpg"];
var imgNumber = 0;

function f() {
   var img = document.getElementById("slider");
   // (imgNumber == myImage.length - 1) ? imgNumber = 0 : imgNumber++;

   if (imgNumber > (myImage.length - 1)) {
      imgNumber = 0;
   }
   imgNumber++;
   img.src = "smallImage/" + myImage[imgNumber];
}

function b() {
   img = document.getElementById("slider");
   // (imgNumber == 0) ? imgNumber = myImage.length - 1 : imgNumber--;
   if (imgNumber == 0) {
      // img.src = "smallImage/" + myImage[imgNumber];
      imgNumber = myImage.length;
   }
   imgNumber--;
   img.src = "smallImage/" + myImage[imgNumber];
}
