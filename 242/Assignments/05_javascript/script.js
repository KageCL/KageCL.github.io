let counter = 0;
let column = document.getElementById("count");
let slider = document.getElementById("range");
let img = document.getElementById("slide-img");

column.onclick = () =>{
    counter += 1;
    document.getElementById("number").innerHTML = counter;
}

function reloadPage(){
    location.reload();
}

slider.oninput = () =>{
    let maxMove = 211;
    let value = slider.value;
    let moveAmount = (value/100) * maxMove;
    img.style.left = moveAmount + 'px';
}

