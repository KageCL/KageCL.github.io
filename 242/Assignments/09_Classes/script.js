class Bird {
    constructor(breed, lifeSpan, food, habitat, interestingFact, pic, age, color) {
        this.breed = breed;
        this.lifeSpan = lifeSpan;
        this.food = food;
        this.habitat = habitat;
        this.interestingFact = interestingFact;
        this.pic = pic;
        this.age = age;
        this.color = color;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("bird");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.breed;
        section.append(h3);

        section.append(this.picture(this.pic));

        section.addEventListener("click", () => this.showModal());

        return section;
    }

    picture(info) {
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }

    showModal() {
        const modal = document.getElementById("birdModal");
        const modalContent = document.getElementById("birdModalContent");

        modalContent.innerHTML = `
            <h3>${this.breed}</h3>
            <p><strong>Life Span:</strong> ${this.lifeSpan}</p>
            <p><strong>Age:</strong> ${this.age}</p>
            <p><strong>Color:</strong> ${this.color}</p>
            <p><strong>Food:</strong> ${this.food}</p>
            <p><strong>Habitat:</strong> ${this.habitat}</p>
            <p><strong>Interesting Fact:</strong> ${this.interestingFact}</p>
            <img src="images/${this.pic}" alt="${this.breed}">
        `;

        modal.style.display = "block";
    }
}

const birds = [];
birds.push(new Bird("Hummingbird", "3-5 Years", "Seeds", "Trees", "Hummingbirds can fly in any direction", "hummingbird.jpg", "2 Years Old", "Varies"));
birds.push(new Bird("Blue Jay", "2-3 Years", "Nectar", "Bushes", "Blue Jays can learn to mimic human speech", "bluejay.jpg", "1 Year Old", "Blue"));
birds.push(new Bird("Cardinal", "5-8 Years", "Seeds", "Bushes", "Cardinals get much of their color from the food they eat", "cardinal.jpg", "6 Years Old", "Red"));
birds.push(new Bird("Robin", "4-7 Years", "Leafs", "Rainforest", "Robins are very territorial and often fight to death defending territory", "robin.jpg", "3 Years Old", "Brown"));

birds.forEach((bird) => {
    document.getElementById("bird-list").append(bird.item);
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("birdModal").style.display = "none";
});
