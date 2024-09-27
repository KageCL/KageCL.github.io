/* When the hamburger is clicked, toggle between showing
and hiding the nav items */
//document.getElementById("toggle-nav")
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
  };
  
  document.getElementById("go").onclick = () => {
    const ul = document.getElementById("numbers");
    let start = parseInt(document.getElementById("start").value);
    let end = parseInt(document.getElementById("end").value);

    console.log(start);
    for(let i = start; i <= end; i++){
      const li = document.createElement("li");
      li.innerHTML = i;
      ul.append(li);
      li.setAttribute("id", "li" + i);
  
      li.onclick = () => {
        console.log(`Lucky number ${i}`);

        
      };
    }}
