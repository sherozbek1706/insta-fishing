const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const button = document.querySelector("#button");

function handleChange(Inputs) {
  Inputs.addEventListener("input", () => {
    if (username.value.length > 0  && password.value.length > 6) {
      button.classList.add("button");
      button.disabled = false;
    } else {
      button.classList.remove("button");
      button.disabled = true;
    }
  });
}

handleChange(username);
handleChange(password);
