const slider = document.getElementById("colorSlider");
const backgroundColor = document.getElementById("color-slider");

slider.oninput = () => {
    const value = slider.value;
    backgroundColor.style.background = `rgb(${value}, 0, 0)`;

    const messageP = document.getElementById("color-message");

    if(value < 63){
        messageP.innerHTML = "Darkness";
    }
    else if(value < 126){
                messageP.innerHTML = "Warm";
    }
    else if(value < 189){
        messageP.innerHTML = "Hot!";
    }
    else{
        messageP.innerHTML = "SUPER HOT!";
    }
};

const parent = document.getElementById('picture-buttons');
let picture = document.getElementById("pictureContainer")
        parent.onclick = (event) => {
            const target = event.target;

            if(target.innerHTML == "Small"){
                picture.src = "https://picsum.photos/100";
            }
            else if(target.innerHTML == "Medium"){
                picture.src = "https://picsum.photos/200";
            }
            else if(target.innerHTML == "Large"){
                picture.src = "https://picsum.photos/400";
            }
        };


    const ex1 = document.getElementById('ex-1');
    const ex2 = document.getElementById('ex-2');
    let ex1style = document.querySelector("#ex")
    const colorSlider = document.getElementById('color-slider');
    const pictureChooser = document.getElementById('picture-chooser');

    ex1.onclick = () => {
        colorSlider.style.display = 'block';
        pictureChooser.style.display = 'none';
    };

    ex2.onclick = () => {
        colorSlider.style.display = "none";
        pictureChooser.style.display = "block";
    };
        
    document.getElementById("arrow").onclick = () => {
        
        if(document.getElementById("arrow").innerHTML == "⯆"){
            document.getElementById("arrow").innerHTML = "⯅";

            ex1.classList.toggle("hidden");
            ex2.classList.toggle("hidden");
        }
        else if(document.getElementById("arrow").innerHTML == "⯅"){
            document.getElementById("arrow").innerHTML = "⯆";

            ex1.classList.toggle("hidden");
            ex2.classList.toggle("hidden");

        }
    };