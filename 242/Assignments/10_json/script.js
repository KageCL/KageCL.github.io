const getIcecream = async() => {
    const url = "https://portiaportia.github.io/json/ice-creams.json"

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showIcecream = async() => {
    const icecreams = await getIcecream();

    icecreams.forEach((icecream)=>{
        document.getElementById("icecream-section").append(getIcecream(icecream));
    })
}

const getIcecreamSection = (icecream) => {
    const section = document.createElement("section");
}