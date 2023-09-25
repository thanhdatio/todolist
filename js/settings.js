const setting = document.querySelector(".js-background__setting");

const renameForm = setting.querySelector(".js-setting__rename");
const renameInput = renameForm.querySelector(".js-rename__input");
const renameModal = setting.querySelector(".js-setting__rename-modal");

const twentyFourToggle = setting.querySelector(".js-twenty-four-hour__toggle");
const twentyFourSwitch = twentyFourToggle.querySelector(".js-toggle__switch");

const darkThemeToggle = setting.querySelector(".js-dark-theme__toggle");
const darkThemeSwitch = darkThemeToggle.querySelector(".js-toggle__switch");
const darkBackground = document.querySelector(".js-background--darkened");

const leftMenuToggle = setting.querySelector(".js-left-menu__toggle");
const leftMenuSwitch = leftMenuToggle.querySelector(".js-toggle__switch");
const menu = document.querySelector(".js-background__navigation");
const weather = document.querySelector(".js-home__weather");

const resetButton = setting.querySelector(".js-reset__button");
const resetModal = setting.querySelector(".js-setting__reset-modal");
const noButton = resetModal.querySelector("form button:first-child");
const yesButton = resetModal.querySelector("form button:last-child");

const DARK_THEME_CLASSNAME = "darker";
const LEFT_MENU_CLASSNAME = "left-menu";
const LEFT_SMILE_MODAL_CLASSNAME = "left-smile-modal";
const RIGHT_WEATHER_CLASSNAME = "right-weather";

function changeState(key) {
  const isOn = localStorage.getItem(key) === "true";

  localStorage.setItem(key, !isOn);
}

function showModal(message) {
  setTimeout(() => {
    renameModal.innerText = message;
    fadeIn(renameModal);

    setTimeout(() => {
      fadeOut(renameModal, { isAfterIn: true });
    }, TRANSITION_DURATION * 2);
  }, TRANSITION_DURATION / 2);
}

function handleRenameSubmit(event) {
  event.preventDefault();

  const newUsername = renameInput.value.trim();
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if (newUsername === savedUsername) {
    showModal(`⚠️ Username is already "${newUsername}."`);
  } else {
    localStorage.setItem(USERNAME_KEY, newUsername);

    GREETING.innerText = `Hello, ${newUsername}!`;
    renameForm.reset();

    showModal("Đổi tên thành công!");
  }
}

function showInitialStates() {
  const is24HourOn = localStorage.getItem("is24HourOn") === "true";
  const isDarkThemeOn = localStorage.getItem("isDarkThemeOn") === "true";
  const isLeftMenuOn = localStorage.getItem("isLeftMenuOn") === "true";

  // Effects
  if (isDarkThemeOn) {
    darkBackground.classList.add(DARK_THEME_CLASSNAME);
  }

  if (isLeftMenuOn) {
    menu.classList.add(LEFT_MENU_CLASSNAME);
    weather.classList.add(RIGHT_WEATHER_CLASSNAME);
    SMILE_MODAL.classList.add(LEFT_SMILE_MODAL_CLASSNAME);
  }

  // Switches
  if (is24HourOn) {
    twentyFourSwitch.checked = true;
  }

  if (isDarkThemeOn) {
    darkThemeSwitch.checked = true;
  }

  if (isLeftMenuOn) {
    leftMenuSwitch.checked = true;
  }
}

showInitialStates();

renameForm.addEventListener("submit", handleRenameSubmit);

twentyFourSwitch.addEventListener(CLICK_EVENT, function () {
  changeState(TWENTY_FOUR_KEY);
});

darkThemeSwitch.addEventListener(CLICK_EVENT, function () {
  changeState("isDarkThemeOn");

  darkBackground.classList.toggle(DARK_THEME_CLASSNAME);
});

leftMenuSwitch.addEventListener(CLICK_EVENT, function () {
  changeState("isLeftMenuOn");

  menu.classList.toggle(LEFT_MENU_CLASSNAME);
  weather.classList.toggle(RIGHT_WEATHER_CLASSNAME);
  SMILE_MODAL.classList.toggle(LEFT_SMILE_MODAL_CLASSNAME);
});

resetButton.addEventListener(CLICK_EVENT, (event) => {
  event.preventDefault();
  fadeIn(resetModal);
});

noButton.addEventListener(CLICK_EVENT, (event) => {
  event.preventDefault();
  fadeOut(resetModal, { isAfterIn: true });
});

yesButton.addEventListener(CLICK_EVENT, (event) => {
  event.preventDefault();

  localStorage.clear();
  window.location.reload();
});
