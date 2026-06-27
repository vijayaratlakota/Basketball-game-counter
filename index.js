let homeDisplay = document.getElementById("homedisplay")
let guestDisplay = document.getElementById("guestdisplay")

let homeScore = 0
function plus1(){
    homeScore = homeScore + 1
    homeDisplay.textContent = homeScore 
    
}
function plus2(){
    homeScore = homeScore + 2
    homeDisplay.textContent = homeScore 
    
}
function plus3(){
    homeScore = homeScore + 3
    homeDisplay.textContent = homeScore 
    
}


let guestScore = 0
function gplus1(){
    guestScore = guestScore + 1
    guestDisplay.textContent = guestScore 
    
}
function gplus2(){
    guestScore = guestScore + 2
    guestDisplay.textContent = guestScore 
    
}
function gplus3(){
    guestScore = guestScore + 3
    guestDisplay.textContent = guestScore 
    
}

function hreset(){
    homeScore = 0
    homeDisplay.textContent = homeScore
}

function greset(){
    guestScore = 0
    guestDisplay.textContent = guestScore
}

