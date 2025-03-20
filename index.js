const billInput = document.getElementById("bill-input");

const sanitizeBillInput = (input) => {
  input = input.replace(/[^\d.]/g, "");
  if ((input.match(/\./g) || []).length > 1) {
    input = input.slice(0, -1);
  }

  return input;
};

billInput.addEventListener("input", (event) => {
  billInput.value = sanitizeBillInput(event.target.value);
});
