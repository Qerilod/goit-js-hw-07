const inputName = document.querySelector(`#name-input`);
const spanElement = document.querySelector(`#name-output`);

inputName.addEventListener("input", () => {
  const userName = inputName.value.trim();
  spanElement.textContent = userName === "" ? "Anonymous" : userName;
});
