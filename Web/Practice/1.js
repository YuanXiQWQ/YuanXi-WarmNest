document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("div");
    const form = document.createElement("form");

    addElementIntoForm(form, "User Name", "name", "text", true, "Please input your name")
        .then(r => document.getElementById("name").pattern = "[a-zA-Z0-9]{2,14}");

    addElementIntoForm(form, "Age", "age", "number", true, "Please input your age")
        .then(r => document.getElementById("age").min = "18")
        .then(r => document.getElementById("age").max = "88");
});

async function addElementIntoForm(formId, labelText, inputId, inputType, inputRequired,
                                  inputPlaceholder) {
    const inputContainer = document.createElement("div");
    inputContainer.id = inputId + "Container";

    const label = document.createElement("label");
    label.for = inputId;
    label.innerText = labelText;
    const input = document.createElement("input");
    input.id = inputId;
    input.type = inputType;
    input.name = inputId;
    input.required = inputRequired;
    input.placeholder = inputPlaceholder;

    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    formId.appendChild(inputContainer);
}