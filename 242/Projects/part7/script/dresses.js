const nav = document.getElementById('nav-bar');

document.querySelector("#toggle-nav").onclick = () => {
    nav.classList.toggle("hidden");
};

const getDresses = async() => {
    const url = "https://KageCL.github.io/242/Projects/part6/json/Dresses.json"

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showDresses = async() => {
    const response = await getDresses();
    const dresses = response.dresses;

    dresses.forEach((dress) =>{
        document.getElementById("content-control").append(getDressesSection(dress));
    });
};

const getDressesSection = (dress) => {
    const section = document.createElement("section");
    section.classList.add("section-control");

    const divHead = document.createElement("div");
    divHead.classList.add("item-head");

    section.append(divHead)

    const h3 = document.createElement("h3");
    const a = document.createElement("a");

    a.href = "#";
    a.innerHTML = dress.name;

    h3.append(a);
    divHead.append(h3);

    const divImg = document.createElement("div");
    divImg.classList.add("item-img");
    section.append(divImg);

    const img = document.createElement("img");
    img.src = `images/${dress.image}`
    divImg.append(img);

    const divDesc = document.createElement("div");
    divDesc.classList.add("item-desc");
    section.append(divDesc);
    const p = document.createElement("p");
    p.innerHTML = dress.description;
    divDesc.append(p);
    return section;
}

showDresses();