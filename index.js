
// taking input from keyboard
// adding eventlistner to the whole page

document.addEventListener("keypress",function(event){
    makesound(event.key);
    addanimation(event.key);
});

function makesound(pressedkey){
    switch(pressedkey){

        case "a" : 
        var tom1 = new Audio("tom-1.mp3");
        tom1.play();
        break;

        case "s" : 
        var tom2 = new Audio("tom-2.mp3");
        tom2.play();
        break;

        case "d" : 
        var tom3 = new Audio("tom-3.mp3");
        tom3.play();
        break;

        case "f" : 
        var tom4 = new Audio("tom-4.mp3");
        tom4.play();
        break;
    
    }
}

// to make sound by click 
// instead of writng code to add eventlistner to each and every buttor
// what we can do is 

var noofbutton = document.getElementsByTagName("button").length;

for(var i = 0 ; i< noofbutton ; i++){
    document.getElementsByTagName("button")[i].addEventListener("click",function(){
        var x = this.innerHTML ;
        makesound(x);
        addanimation (x);
    })
}

function addanimation(pressedbutton){
    var activeButton = document.querySelector("."+pressedbutton);
    activeButton.classList.add("animate");
    setTimeout( function(){
        activeButton.classList.remove("animate");
    } ,100);
}