var randomNumber1= Math.floor(Math.random() * 6)+1;
var randomDiceImage = "dice"+randomNumber1 +".png"
var randomImageSource = "images/" +randomDiceImage
var Image1= document.querySelectorAll("img")[0]
Image1.setAttribute("src",randomImageSource)


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png"
var randomImageSource2 = "images/" +randomDiceImage2
var Image2 = document.querySelectorAll('img')[1]
Image2.setAttribute("src",randomImageSource2)

if (randomNumber1>randomNumber2){
    document.querySelector('h1').innerText='Player 1 winns'
}else if(randomNumber2>randomNumber1){
    document.querySelector('h1').innerText='Player 2 winns'
}else{
    document.querySelector('h1').innerText='Tie up'
}