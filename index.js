var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice = "Dice" + randomNumber1 + ".png";

var randomDiceImg1 = "./images/" + randomDice;

var image1 = document.querySelectorAll("img")[0]; //since their are 2 img tags, [0] means the first image in the list
image1.setAttribute("src", randomDiceImg1);

var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1"). innerHTML = "Player 1 won!!";

}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1"). innerHTML = "Player 2 won!!";
}
else{
    document.querySelector("h1"). innerHTML = "It's a tie!";
}