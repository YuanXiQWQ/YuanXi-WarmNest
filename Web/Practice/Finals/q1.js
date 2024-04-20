document.addEventListener("DOMContentLoaded", function () {
    var form = document.createElement("form");

    var usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.name = "username";
    usernameInput.pattern = "[A-Za-z0-9]{2,14}";
    usernameInput.required = true;

    var ageInput = document.createElement("input");
    ageInput.type = "number";
    ageInput.name = "age";
    ageInput.min = 18;
    ageInput.max = 99;
    ageInput.required = true;

    var emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.required = true;

    var submitInput = document.createElement("input");
    submitInput.type = "submit";
    submitInput.value = "Submit";

    form.appendChild(usernameInput);
    form.appendChild(ageInput);
    form.appendChild(emailInput);
    form.appendChild(submitInput);

    document.getElementById("formContainer").appendChild(form);
  });