let itemTitles = [];
let itemImages = [];
let itemDescriptions = [];

itemTitles["item1"] = "Birthday";
itemImages["item1"] = "images/birthday.jpg";
itemDescriptions["item1"] = "A person with a birthday hat on.";

itemTitles["item2"] = "Clown";
itemImages["item2"] = "images/clown.jpg";
itemDescriptions["item2"] = "A clown with a bowtie and squeaky nose.";

itemTitles["item3"] = "Rain";
itemImages["item3"] = "images/rain.jpg";
itemDescriptions["item3"] = "a person holding an umbrella.";

itemTitles["item4"] = "Read";
itemImages["item4"] = "images/read.jpg";
itemDescriptions["item4"] = "A person reading a book.";

itemTitles["item5"] = "Shovel";
itemImages["item5"] = "images/shovel.jpg";
itemDescriptions["item5"] = "A person working with a shovel.";

itemTitles["item6"] = "Work";
itemImages["item6"] = "images/work.jpg";
itemDescriptions["item6"] = "A person working on a laptop.";

const table = document.querySelector("#list-items tbody");
const displayArea = document.querySelector("#display-area");

for(let item in itemTitles){
  let tr = document.createElement("tr");
  table.append(tr);

  const td1 = document.createElement("td");
  const img = document.createElement("img");
  img.src = itemImages[item];
  td1.append(img);
  tr.append(td1);

  tr.onclick = () => {
    displayArea.innerHTML =
    `<h2>${itemTitles[item]}</h2>
    <p>${itemDescriptions[item]}</p>`;
  }
}
