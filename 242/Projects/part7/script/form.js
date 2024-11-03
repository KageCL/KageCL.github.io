document.getElementById("form-raccoon").onsubmit = (e) =>{
    e.preventDefault(); //Don't refresh the page

    const form = e.target;

    const raccoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termsChecked = form.elements["terms"].checked;

    console.log(raccoonName);


};