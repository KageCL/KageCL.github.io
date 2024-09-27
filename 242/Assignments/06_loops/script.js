const canvas = document.getElementById("star-area");

document.getElementById("btn-star").onclick = () =>{
    const amount = document.getElementById("star-number").value;
    
    if (amount <= 0 || isNaN(amount)) {
        document.getElementById("num-error").innerText = "Please enter a valid number.";
        return;
    }
    else{
        document.getElementById("num-error").innerText = "";
    }
    canvas.innerHTML = "";

    for(let i = 0; i < amount; i++){
        const star = createP(i);
        canvas.appendChild(star);
    }

    
}


const createP = (num) => {
    const p = document.createElement("p");
    p.innerHTML = "✦";
    p.setAttribute("id", num);
    p.style.position = "absolute";
    p.style.left = `${Math.random() * 90}%`;
    p.style.top = `${Math.random() * 90}%`;
    p.style.color = "yellow";
  
    p.onclick = () => {
        document.getElementById("num-error").innerText = 'The Star you Clicked is Number: ' + (num + 1);
    };
  
    return p;
  }