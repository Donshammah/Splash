const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", function () {

    const code = document.querySelector("input").value;

    if (code === "") {

        alert("Please enter the OTP.");

        return;

    }

    window.location.href = "success.html";
});
