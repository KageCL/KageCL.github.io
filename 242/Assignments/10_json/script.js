const getIcecream = async() => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showIcecream = async() => {
    const icecreams = await getIcecream();

    icecreams.forEach((icecream) => {
        document.getElementById("icecream-section").append(getIcecreamSection(icecream));
    });
};

const getIcecreamSection = (icecream) => {
    const section = document.createElement("section");
  
    const sweetImage = document.createElement("img");
    sweetImage.src = `https://portiaportia.github.io/json/images/ice-creams/${icecream.image}`;
    section.append(sweetImage);
  
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.textContent = icecream.name;
    section.append(overlay);
  
    return section;
  };
  

showIcecream();
