const billInp = document.querySelector("#bill");
const tipBtns = document.querySelectorAll(".tipBtn");
const selectTipInput = document.querySelector(".selectTipInput");
const peopleInp = document.querySelector("#people");
const tipAmount = document.querySelector(".tipAmount");
const totalValue = document.querySelector(".totalValue");
const billErrSpan = document.querySelector(".billErrSpan");
const peopleErrSpan = document.querySelector(".peopleErrSpan");
const resetBtn = document.querySelector(".resetBtn");

let billValue = 0;
let tipValue = 0;
let peopleValue = 0;

// bill value
billInp.addEventListener("keyup", () => {
  billValue = Number(billInp.value);
  if (billValue < 1) {
    billInp.style.border = "2px solid #E17052";
    billErrSpan.innerText = "Can’t be zero";
  } else {
    billInp.style.border = "2px solid #26C2AE";
    billErrSpan.innerText = "";
  }
  calculation();
});

// tip value
tipBtns.forEach((tipBtn) => {
  tipBtn.addEventListener("click", () => {
    for (let btn of tipBtns) {
      btn.classList.remove("active");
    }

    tipBtn.classList.add("active");

    tipValue = parseInt(tipBtn.innerText);
    selectTipInput.value = "";

    calculation();
  });
});

selectTipInput.addEventListener("input", () => {
  tipValue = Number(selectTipInput.value);

  if (tipValue < 1) {
    selectTipInput.style.border = "2px solid #E17052";
  } else {
    selectTipInput.style.border = "2px solid #26C2AE";
  }
  calculation();
});

selectTipInput.addEventListener("click", (e) => {
  for (let btn of tipBtns) {
    btn.classList.remove("active");
  }
});

// people value
peopleInp.addEventListener("keyup", () => {
  peopleValue = Number(peopleInp.value);
  if (peopleValue < 1) {
    peopleInp.style.border = "2px solid #E17052";
    peopleErrSpan.innerText = "Can’t be zero";
  } else {
    peopleInp.style.border = "2px solid #26C2AE";
    peopleErrSpan.innerText = "";
  }
  calculation();
});

// calculate tip / total person
function calculation() {
  if (peopleValue > 0 && billValue > 0 && tipValue > 0) {
    let tipResult = (billValue * (tipValue / 100)) / peopleValue;
    let totalResult = billValue / peopleValue + tipResult;

    tipAmount.innerText = `$${tipResult.toFixed(2)}`;
    totalValue.innerText = `$${totalResult.toFixed(2)}`;
  }
}

// reset
resetBtn.addEventListener("click", () => {
  billValue = 0;
  tipValue = 0;
  peopleValue = 0;
  billInp.value = "";
  peopleInp.value = "";
  selectTipInput.value = "";
  tipAmount.innerText = "$0.00";
  totalValue.innerText = "$0.00";
  billInp.style.border = "none";
  selectTipInput.style.border = "none";
  peopleInp.style.border = "none";

  for (let btn of tipBtns) {
    btn.classList.remove("active");
  }
});
