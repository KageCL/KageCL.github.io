const nav = document.getElementById('nav-bar');

document.querySelector("#toggle-nav").onclick = () => {
    nav.classList.toggle("hidden");
};

const getOutfits = async() => {
    const url = "https://KageCL.github.io/242/Projects/part6/json/Outfits.json"

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showOutfits = async() => {
    const response = await getOutfits();
    const outfits = response.outfits;

    outfits.forEach((outfit) =>{
        document.getElementById("content-control").append(getOutfitsSection(outfit));
    });
};

const getOutfitsSection = (outfit) => {
    const section = document.createElement("section");
    section.classList.add("section-control");

    const divHead = document.createElement("div");
    divHead.classList.add("item-head");

    section.append(divHead)

    const h3 = document.createElement("h3");
    const a = document.createElement("a");

    a.href = "#";
    a.innerHTML = outfit.name;

    h3.append(a);
    divHead.append(h3);

    const divImg = document.createElement("div");
    divImg.classList.add("item-img");
    section.append(divImg);

    const img = document.createElement("img");
    img.src = `images/${outfit.image}`
    divImg.append(img);

    const divDesc = document.createElement("div");
    divDesc.classList.add("item-desc");
    section.append(divDesc);
    const p = document.createElement("p");
    p.innerHTML = outfit.description;
    divDesc.append(p);
    return section;
}

showOutfits();