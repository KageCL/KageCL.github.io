const getCocktails = async() => {
  

  try {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").json();
      return response.json();
  } catch(error){
      console.log(error);
  }
};

const showCocktails = async() => {
  const response = await getCocktails();
  const cocktails = response.drinks;
  
  cocktails.forEach((cocktail)=>{
      document.getElementById("cocktail-grid").append(getCocktailSection(cocktail));
  });
};

const getCocktailSection = (cocktail) => {
  const section = document.createElement("section");

  const cocktailImage = document.createElement("img");
  cocktailImage.src = cocktail.strImageSource;
  section.append(cocktailImage);

  return section;
}


//show all of the shoes when the page loads
showCocktails();