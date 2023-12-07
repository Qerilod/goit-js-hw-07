const form = document.querySelector(`.login-form`);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    email: email,
    password: password,
  };

  console.log(data);
  form.reset();
});
