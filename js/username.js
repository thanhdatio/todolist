const loginFormBackground = document.querySelector(".js-form-background");
const loginForm = loginFormBackground.querySelector(
  ".js-form-background__login"
);
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".js-background__greeting");

const HIDDEN_CLASSNAME = "hidden";
const APPEAR_CLASSNAME = "appear";
const DISAPPEAR_CLASSNAME = "disappear";
const USERNAME_KEY = "username";

function showGreeting(username) {
  greeting.innerText = `Hello, ${username}!`;
}

function handleLogInSubmit(event) {
  event.preventDefault(); // Stops browser from refreshing
  loginFormBackground.classList.add(DISAPPEAR_CLASSNAME);
  loginForm.classList.add(DISAPPEAR_CLASSNAME);
  setTimeout(() => {
    loginFormBackground.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
  }, 900);

  const inputUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, inputUsername);
  showGreeting(inputUsername);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginFormBackground.classList.remove(HIDDEN_CLASSNAME);
  loginFormBackground.classList.add(APPEAR_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(APPEAR_CLASSNAME);
  loginForm.addEventListener("submit", handleLogInSubmit);
} else {
  showGreeting(savedUsername);
}