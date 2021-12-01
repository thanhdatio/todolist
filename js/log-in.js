// TODO: Clean up form disappear class name
const loginFormBackground = document.querySelector(".js-form-background");
const loginForm = loginFormBackground.querySelector(
  ".js-form-background__log-in"
);
const loginInput = loginForm.querySelector(".js-log-in__input");

function showGreeting(username) {
  GREETING.classList.add(DISAPPEAR_CLASSNAME);
  setTimeout(() => {
    GREETING.classList.add(HIDDEN_CLASSNAME);
    GREETING.classList.remove(DISAPPEAR_CLASSNAME);
    GREETING.innerText = `Hello, ${username}!`;
    GREETING.classList.add(APPEAR_CLASSNAME);
    GREETING.classList.remove(HIDDEN_CLASSNAME);
  }, TRANSITION_DURATION - 100);

  setTimeout(() => {
    GREETING.classList.remove(APPEAR_CLASSNAME);
  }, TRANSITION_DURATION * 2);
}

function handleLogInSubmit(event) {
  event.preventDefault(); // Stops browser from refreshing
  loginFormBackground.classList.add(SLOW_DISAPPEAR_CLASSNAME);
  loginForm.classList.add(SLOW_DISAPPEAR_CLASSNAME);
  setTimeout(() => {
    loginFormBackground.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
  }, TRANSITION_DURATION * 2 - 50);

  const inputUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, inputUsername);
  showGreeting(inputUsername);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  setTimeout(() => {
    loginFormBackground.classList.add(SLOW_APPEAR_CLASSNAME);
    loginFormBackground.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(SLOW_APPEAR_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
  }, TRANSITION_DURATION * 2 - 100);

  loginForm.addEventListener("submit", handleLogInSubmit);
} else {
  GREETING.innerText = `Hello, ${savedUsername}!`;
}
