document.addEventListener("DOMContentLoaded", function () {
  var form = document.createElement("form");

  var usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.name = "username";
  usernameInput.pattern = "[A-Za-z0-9]{2,14}";
  usernameInput.required = true;

  var age = document.createElement("input");
  age.type = "number";
  age.min = 18;
  age.max = 99;
  age.required = true;

  var email = document.createElement("input");
  email.type = "email";
  email.name = "email";
  email.required = true;

  var submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "Submit";

  form.appendChild(usernameInput);
  form.appendChild(age);
  form.appendChild(email);
  form.appendChild(submit);

  document.getElementById("formContainer").appendChild(form);
});