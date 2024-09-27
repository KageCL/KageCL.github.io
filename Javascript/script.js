const doStuff = () =>{ //Multiple times
    alert("Hello World");
}

const myButton = document.getElementById("btn-click");
const bye = document.getElementById("b")
// myButton.onclick = doStuff;

myButton.onclick = () => { //Once
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special");
};

//Showing Data from an input field
document.getElementById("txt-first-name").onkeyup = (event) =>{
    document.getElementById("result").innerHTML = event.target.value;
}