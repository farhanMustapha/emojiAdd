/*
https://raw.githack.com/adilmarghadi1/Javascript-Emojis-Challenge/main/index.html

*/
const arrEmo=["👨‍💻","⛷","🍲"]

function displayEmoji(){
    var emoCont=document.getElementById('emoji')
    emoCont.innerHTML=""
    for(let i=0;i<arrEmo.length;i++){
       var emoji=document.createElement('span')
       emoji.textContent=arrEmo[i]
       emoCont.appendChild(emoji)
    }
}
displayEmoji()

function addToEnd(){

    var inp=document.getElementById("inp")
    if(inp.value){
        arrEmo.push(inp.value)
        inp.value=""
        displayEmoji()
    }
    
    arrEmo.push(a)
    
}



function addToBegining(){

    var inp=document.getElementById("inp")
    if(inp.value){
        arrEmo.unshift(inp.value)
        inp.value=""
        displayEmoji()
    }
    
    arrEmo.push(a)
}

function RemoveFrontEnd(){

    arrEmo.pop()
    displayEmoji()

}

function RemoveFromBegining(){
arrEmo.shift()
displayEmoji()
}


/**
 * solution
 * https://github.com/adilmarghadi1/Javascript-Emojis-Challenge
 */


