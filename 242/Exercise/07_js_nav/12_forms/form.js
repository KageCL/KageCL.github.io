document.getElementById("form-contact").onsubmit = (e) =>{
    e.preventDefault(); //Don't refresh the page

    const form = e.target;

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;
    const termsChecked = form.elements["terms"].checked;

    console.log(`${name}'s email is ${email} and they sent the message ${message}.`);


};