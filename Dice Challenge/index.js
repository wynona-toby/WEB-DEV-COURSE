function reload(){
  let no1 = Math.floor(Math.random() * 6) + 1;
  let img1 = "./images/dice"+no1+".png";
  let no2 = Math.floor(Math.random() * 6) + 1;
  let img2 = "./images/dice"+no2+".png";
  
  let image1 = document.querySelectorAll("img")[0].setAttribute("src", img1);
  let image2 = document.querySelectorAll("img")[1].setAttribute("src", img2);
  
  //changing the h1 tag
  if (no1 > no2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (no1 < no2) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
      } else {
        document.querySelector("h1").innerHTML = "Draw!";
        }
}
var button = document.getElementById("button");
button.addEventListener("click", reload);