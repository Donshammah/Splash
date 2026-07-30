const payButton = document.querySelector(".submit");

payButton.addEventListener("click", () => {

    const card =
    document.querySelector('input[placeholder="Card Number"]').value;

    const expiry =
    document.querySelector('input[placeholder="MM/YY"]').value;

    const cvv =
    document.querySelector('input[placeholder="CVV"]').value;

    const phone =
    document.querySelector('input[placeholder="Phone Number"]').value;

    if(card === "" || expiry === "" || cvv === "" || phone === ""){

        alert("Please complete all payment details.");

        return;

    }

    

    window.location.href = "./success.html";

});

const editLink = document.getElementById("editLink");
const inputBox = document.getElementById("inputBox");
const saveBtn = document.getElementById("saveBtn");
const output = document.getElementById("output");

editLink.addEventListener("click", function(e) {
    e.preventDefault(); 
    editLink.style.display = "none"; 
    inputBox.style.display = "block"; 
});

saveBtn.addEventListener("click", function() {
    const text = document.getElementById("nameInput").value;

    output.textContent = text; 

    inputBox.style.display = "none"; 
});