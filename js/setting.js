const setting = document.querySelector(".js-background__setting");

const renameForm = setting.querySelector(".js-setting__rename");
const renameInput = renameForm.querySelector(".js-rename__input");
const renameModal = setting.querySelector(".js-setting__modal");

const twentyFourToggle = setting.querySelector(".js-twenty-four-hour__toggle");
const twentyFourSwitch = twentyFourToggle.querySelector(".js-toggle__switch");

const darkThemeToggle = setting.querySelector(".js-dark-theme__toggle");
const darkThemeSwitch = darkThemeToggle.querySelector(".js-toggle__switch");
const darkBackground = document.querySelector(".js-background__darkened");

const leftMenuToggle = setting.querySelector(".js-left-menu__toggle");
const leftMenuSwitch = leftMenuToggle.querySelector(".js-toggle__switch");
const menu = document.querySelector(".js-background__navigation");

const resetButton = setting.querySelector(".js-reset__button");

const CHECKED_CLASSNAME = "checked";
const DARK_THEME_CLASSNAME = "darker";
const LEFT_MENU_CLASSNAME = "left-menu";

function handleResetClick(event) {
  event.preventDefault();
}

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

  const newUsername = renameInput.value;
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if (newUsername === savedUsername) {
    showModal(`⚠️ Username is already "${newUsername}".`);
  } else {
    localStorage.setItem(USERNAME_KEY, newUsername);

    GREETING.innerText = `Hello, ${newUsername}!`;
    renameForm.reset();

    showModal("Username successfully changed");
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

  if (localStorage.getItem(TWENTY_FOUR_KEY) === "true") {
    const clockHMS = CLOCK_NUMBERS.innerText.split(":");
    clockHMS[0] = parseInt(clockHMS[0]) + 12; // Changes hours back to 24-hour clock

    CLOCK_NUMBERS.innerText = clockHMS.join(":");
  }
});

darkThemeSwitch.addEventListener(CLICK_EVENT, function () {
  changeState("isDarkThemeOn");

  darkBackground.classList.toggle(DARK_THEME_CLASSNAME);
});

leftMenuSwitch.addEventListener(CLICK_EVENT, function () {
  changeState("isLeftMenuOn");

  menu.classList.toggle(LEFT_MENU_CLASSNAME);
});

resetButton.addEventListener(CLICK_EVENT, handleResetClick);
