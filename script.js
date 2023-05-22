const formSection = document.querySelector(".form-section");
const submitSection = document.querySelector(".submit-section");
const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");
const holderName = document.querySelector(".card-holder");
const inputName = document.getElementById("name");
const cardNumber = document.querySelector(".card-number");
const cardNumberInput = document.querySelector("#card-num");
const expMonth = document.querySelector(".expiry-month");
const expYear = document.querySelector(".expiry-year");
const monthsInput = document.querySelector("#expiry-date-m");
const yearsInput = document.querySelector("#expiry-date-y");
const cvcInput = document.getElementById("cvc");
const cvc = document.querySelector(".cvc");

let isTrue = true;

// SUBMIT FORM IF EVERYTHING IS OKAY

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (checkInputs()) {
    formSection.style.display = "none";
    submitSection.style.display = "block";
    return;
  } else {
    alert("PLEASE CHECK IF INFORMATION IS CORRECT");
  }
});

// SEPARATE EVERY 4 DIGITS WITH SPACE

cardNumberInput.addEventListener(
  "input",
  () =>
    (cardNumberInput.value = formatNumber(
      cardNumberInput.value.replaceAll(" ", "")
    ))
);

const formatNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
  }, "");

// PUT CARD HOLDER NAME VALUE INTO CARD HOLDER NAME FIELD

inputName.addEventListener("input", () => {
  const inputNameValue = inputName.value;
  holderName.textContent = inputNameValue;

  if (!inputName.value) {
    holderName.textContent = "Jane Appleseed";
  }
});

// PUT CARD NUMBER VALUE INTO CARD NUMBER FIELD

cardNumberInput.addEventListener("input", () => {
  const cardNumberValue = cardNumberInput.value;
  cardNumber.textContent = cardNumberValue;

  if (!cardNumberInput.value) {
    cardNumber.textContent = "0000 0000 0000 0000";
  }
});

// PUT CARD EXPIRY DATE VALUE INTO EXPIRY DATE FIELDS

monthsInput.addEventListener("input", () => {
  const expMonthValue = monthsInput.value;
  expMonth.textContent = expMonthValue;

  if (!monthsInput.value) {
    expMonth.textContent = "00";
  }
});

yearsInput.addEventListener("input", () => {
  const expYearValue = yearsInput.value;
  expYear.textContent = expYearValue;

  if (!yearsInput.value) {
    expYear.textContent = "00";
  }
});

// PUT CVC VALUE INTO CVC FIELD

cvcInput.addEventListener("input", () => {
  const cvcValue = cvcInput.value;
  cvc.textContent = cvcValue;

  if (!cvcInput.value) {
    cvc.textContent = "000";
  }
});

// CHECK INPUTS

function checkInputs() {
  if (
    checkName() &&
    checkCardNum() &&
    checkMonth() &&
    checkYear() &&
    checkCVC()
  ) {
    return isTrue;
  }
}

// CHECK NAME

function checkName() {
  if (!inputName.value) {
    isTrue = false;
    inputName.style.borderColor = "#ff5252";
    inputName.parentElement.querySelector(".error").textContent =
      "Input field can't be empty";
  } else if (/\d/.test(inputName.value)) {
    isTrue = false;
    inputName.style.borderColor = "#ff5252";
    inputName.parentElement.querySelector(".error").textContent =
      "Wrong format, letters only";
  } else if (!/ /.test(inputName.value)) {
    isTrue = false;
    inputName.style.borderColor = "#ff5252";
    inputName.parentElement.querySelector(".error").textContent =
      "Wrong format, please add space between first and last name";
  } else {
    isTrue = true;
    inputName.style.borderColor = "#dedddf";
    inputName.parentElement.querySelector(".error").textContent = "";
    return isTrue;
  }
}

// CHECK CARD NUMBER

function checkCardNum() {
  if (!cardNumberInput.value) {
    isTrue = false;
    cardNumberInput.style.borderColor = "#ff5252";
    cardNumberInput.parentElement.querySelector(".error").textContent =
      "Input field can't be empty";
  } else if (cardNumberInput.value.length !== 19) {
    isTrue = false;
    cardNumberInput.style.borderColor = "#ff5252";
    cardNumberInput.parentElement.querySelector(".error").textContent =
      "Card number consists of 16 digits";
  } else if (!/\d{4}\s\d{4}\s\d{4}\s\d{4}/.test(cardNumberInput.value)) {
    isTrue = false;
    cardNumberInput.style.borderColor = "#ff5252";
    cardNumberInput.parentElement.querySelector(".error").textContent =
      "Wrong format, digits only";
  } else {
    isTrue = true;
    cardNumberInput.style.borderColor = "#dedddf";
    cardNumberInput.parentElement.querySelector(".error").textContent = "";
    return isTrue;
  }
}

// CHECK MONTH

function checkMonth() {
  if (!monthsInput.value) {
    isTrue = false;
    monthsInput.style.borderColor = "#ff5252";
    monthsInput.parentElement.querySelector(".error").textContent =
      "Input field can't be empty";
  } else if (/\D/.test(monthsInput.value)) {
    isTrue = false;
    monthsInput.style.borderColor = "#ff5252";
    monthsInput.parentElement.querySelector(".error").textContent =
      "Wrong format, digits only";
  } else if (monthsInput.value.length !== 2) {
    isTrue = false;
    monthsInput.style.borderColor = "#ff5252";
    monthsInput.parentElement.querySelector(".error").textContent =
      "Please specify 2 digits";
  } else if (+monthsInput.value < 1 || +monthsInput.value > 12) {
    isTrue = false;
    monthsInput.style.borderColor = "#ff5252";
    monthsInput.parentElement.querySelector(".error").textContent =
      "Wrong format, please choose digits between 01 and 12";
  } else {
    isTrue = true;
    monthsInput.style.borderColor = "#dedddf";
    monthsInput.parentElement.querySelector(".error").textContent = "";
    return isTrue;
  }
}

// CHECK MONTH

function checkYear() {
  if (!yearsInput.value) {
    isTrue = false;
    yearsInput.style.borderColor = "#ff5252";
    yearsInput.parentElement.querySelector(".error").textContent =
      "Input field can't be empty";
  } else if (/\D/.test(yearsInput.value)) {
    isTrue = false;
    yearsInput.style.borderColor = "#ff5252";
    yearsInput.parentElement.querySelector(".error").textContent =
      "Wrong format, digits only";
  } else if (yearsInput.value.length !== 2) {
    isTrue = false;
    yearsInput.style.borderColor = "#ff5252";
    yearsInput.parentElement.querySelector(".error").textContent =
      "Please specify 2 digits";
  } else if (+yearsInput.value < 23) {
    isTrue = false;
    yearsInput.style.borderColor = "#ff5252";
    yearsInput.parentElement.querySelector(".error").textContent =
      "Wrong format, year can't be in the past";
  } else {
    isTrue = true;
    yearsInput.style.borderColor = "#dedddf";
    yearsInput.parentElement.querySelector(".error").textContent = "";
    return isTrue;
  }
}

// CHECK CVC

function checkCVC() {
  if (!cvcInput.value) {
    isTrue = false;
    cvcInput.style.borderColor = "#ff5252";
    cvcInput.parentElement.querySelector(".error").textContent =
      "Input field can't be empty";
  } else if (/\D/.test(cvcInput.value)) {
    isTrue = false;
    cvcInput.style.borderColor = "#ff5252";
    cvcInput.parentElement.querySelector(".error").textContent =
      "Wrong format, digits only";
  } else if (cvcInput.value.length !== 3) {
    isTrue = false;
    cvcInput.style.borderColor = "#ff5252";
    cvcInput.parentElement.querySelector(".error").textContent =
      "Please specify 3 digits";
  } else {
    isTrue = true;
    cvcInput.style.borderColor = "#dedddf";
    cvcInput.parentElement.querySelector(".error").textContent = "";
    return isTrue;
  }
}

// function checkEmpty() {
//   inputs.forEach((i) => {
//     if (!i.value) {
//       i.style.borderColor = "#ff5252";
//       i.parentElement.querySelector(".error").textContent =
//         "Input field can't be empty";
//     } else {
//       i.style.borderColor = "#dedddf";
//       i.parentElement.querySelector(".error").textContent = "";
//     }
//   });
// }

// function validateNumbers() {}

// function validateCardNumber() {
//   if (/\D/.test(cardNumberInput.value)) {
//     cardNumberInput.style.borderColor = "#ff5252";
//     cardNumberInput.parentElement.querySelector(".error").textContent =
//       "Wrong format, numbers only";
//   } else if (cardNumberInput.value.length !== 16) {
//     cardNumberInput.style.borderColor = "#ff5252";
//     cardNumberInput.parentElement.querySelector(".error").textContent =
//       "Wrong number, must be 16 digits";
//   } else {
//     cardNumberInput.style.borderColor = "#dedddf";
//     cardNumberInput.parentElement.querySelector(".error").textContent = "";
//   }
// }

// function validateDate() {
//   if (/\D/.test(monthsInput.value)) {
//     monthsInput.style.borderColor = "#ff5252";
//     monthsInput.parentElement.querySelector(".error").textContent =
//       "Wrong format, numbers only";
//   } else if (monthsInput.value.length !== 16) {
//     cardNumberInput.style.borderColor = "#ff5252";
//     cardNumberInput.parentElement.querySelector(".error").textContent =
//       "Wrong number, must be 16 digits";
//   } else {
//     cardNumberInput.style.borderColor = "#dedddf";
//     cardNumberInput.parentElement.querySelector(".error").textContent = "";
//   }
// }
