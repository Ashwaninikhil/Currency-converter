const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";


document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown select");
  const btn = document.querySelector("button[type='submit']");
  const fromCurr = document.getElementById("from-select");
  const toCurr = document.getElementById("to-select");
  const msg = document.querySelector(".msg");

  for (let select of dropdowns) {
    for (let currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
      } else if (select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
      }
      select.append(newOption);
    }
  
    select.addEventListener("change", (evt) => {
      updateFlag(evt.target);
    });
  }
  
  // Fetch and update exchange rate
  const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    // Fetch exchange rate
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    try {
      let response = await fetch(URL);
      if (!response.ok) throw new Error("Failed to fetch data");
      let data = await response.json();
      let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  
      let finalAmount = amtVal * rate;
      msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
    } catch (error) {
      msg.innerText = "Error fetching exchange rate!";
      console.error(error);
    }
  };
  
  // Update the flag of the selected currency
  const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    if (countryCode) {
      let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
      let img = element.parentElement.querySelector("img");
      if (img) {
        img.src = newSrc;
      }
    }
  };
  
  // Add event listener for button click to fetch exchange rate
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });
  
  // Fetch exchange rate on page load
  window.addEventListener("load", () => {
    updateExchangeRate();
  });
  
  // Remaining code...
});



