const form = document.querySelector(".sign-up-form");
const textInputs = form.querySelectorAll(`input[type="text"]`);
const telInput = form.querySelector(`input[type="tel"]`);
const telError = form.querySelector(`input[type="tel"] + div.error`);
const numberInput = form.querySelector(`input[type="number"]`);
const numberError = form.querySelector(`input[type="number"] + div.error`);

const showError = (input, error, messages) => {
  const validity = input.validity;
  error.textContent = "";
  if (!validity.valid) {
    if (validity.valueMissing) {
      error.textContent = messages.valueMissing;
    } else if (validity.typeMismatch) {
      error.textContent = messages.typeMismatch;
    } else if (validity.rangeOverflow) {
      error.textContent = messages.rangeOverflow;
    } else if (validity.rangeUnderflow) {
      error.textContent = messages.rangeUnderflow;
    }
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
  }
};

telInput.addEventListener("blur", () => {
  showError(telInput, telError, {
    valueMissing: "You need to enter a number.",
    typeMismatch: "Entered value needs to be a number.",
  });
});

textInputs.forEach((textInput) => {
  const textError = textInput.nextElementSibling;
  textInput.addEventListener("blur", () => {
    showError(textInput, textError, {
      valueMissing: "You need to enter a text.",
      typeMismatch: "Entered value needs to be a text.",
    });
  });
});

numberInput.addEventListener("blur", () => {
  showError(numberInput, numberError, {
    valueMissing: "You need to enter a number.",
    typeMismatch: "Entered value needs to be a number.",
    rangeOverflow: "The value must be equal or less than 10",
    rangeUnderflow: "The value must be equal or more than 1",
  });
});

const handleFormOnSubmit = (event) => {
  event.preventDefault();
  const selectElement = document.getElementById("boothSize");
  const selectedValue = selectElement.value;
  const selectElementError = selectElement.nextElementSibling;
  if (selectedValue === "") {
    selectElementError.textContent = "Please choose a booth size.";
    selectElement.classList.add("invalid");
  } else {
    selectElementError.textContent = "";
    selectElement.classList.remove("invalid");
  }

  showError(telInput, telError, {
    valueMissing: "You need to enter a number.",
    typeMismatch: "Entered value needs to be a number.",
  });

  showError(numberInput, numberError, {
    rangeOverflow: "The value must be equal or greater than 10",
    rangeUnderflow: "The value must be equal or less than 1",
  });

  textInputs.forEach((textInput) => {
    const textError = textInput.nextElementSibling;
    showError(textInput, textError, {
      valueMissing: "You need to enter a text.",
      typeMismatch: "Entered value needs to be a text.",
    });
  });
};
