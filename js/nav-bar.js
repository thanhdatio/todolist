const homeScreen = document.querySelector(
  ".js-background .js-background__home"
);
const settingScreen = document.querySelector(".js-background__setting");

const navigationBar = document.querySelector(".js-background__navigation");
const homeButton = navigationBar.querySelector("div li:first-child button");
const toDoButton = navigationBar.querySelector("div li:nth-child(2) button");
const toolsButton = navigationBar.querySelector("div li:nth-child(3) button");
const webButton = navigationBar.querySelector("div li:nth-child(4) button");
const musicButton = navigationBar.querySelector("div li:nth-child(5) button");
const relaxButton = navigationBar.querySelector("div li:nth-child(6) button");
const settingButton = navigationBar.querySelector("div li:last-child button");
const smileButton = navigationBar.querySelector(".js-navigation__smile-button");

const ADDED_CLASSNAME = "added";
const CURRENT_SCREEN_CLASSNAME = "current-screen";

let isOnHomeScreen = true;
let isOnToDoScreen = false;
let isOnToolsScreen = false;
let isOnWebScreen = false;
let isOnMusicScreen = false;
let isOnRelaxScreen = false;
let isOnSettingScreen = false;

function _switchScreens(currentScreen, newScreen) {
  // Is after fadeIn when user switches screens more than once
  fadeOut(currentScreen, { isAfterIn: true });
  setTimeout(() => {
    fadeIn(newScreen, { isAfterOut: true });
  }, TRANSITION_DURATION);

  if (currentScreen === homeScreen) {
    isOnHomeScreen = false;
  } else if (currentScreen === TO_DO_SCREEN) {
    isOnToDoScreen = false;
  } else {
    isOnSettingScreen = false;
  }
}

function switchScreens({
  isHomeClicked,
  isToDoClicked,
  isSettingClicked,
} = {}) {
  let currentScreen;

  if (isOnHomeScreen) {
    currentScreen = homeScreen;
  } else if (isOnToDoScreen) {
    currentScreen = TO_DO_SCREEN;
  } else {
    currentScreen = settingScreen;
  }

  const switchButtons = (newButton, oldButtons) => {
    newButton.classList.add(CURRENT_SCREEN_CLASSNAME);
    oldButtons.forEach((oldButton) => {
      oldButton.classList.remove(CURRENT_SCREEN_CLASSNAME);
    });
  };

  if (isHomeClicked && !isOnHomeScreen) {
    _switchScreens(currentScreen, homeScreen);
    isOnHomeScreen = true;
    switchButtons(homeButton, [toDoButton, settingButton]);
  }

  if (isToDoClicked && !isOnToDoScreen) {
    _switchScreens(currentScreen, TO_DO_SCREEN);
    isOnToDoScreen = true;
    switchButtons(toDoButton, [homeButton, settingButton]);
  }

  if (isSettingClicked && !isOnSettingScreen) {
    _switchScreens(currentScreen, settingScreen);
    isOnSettingScreen = true;
    switchButtons(settingButton, [homeButton, toDoButton]);
  }
}

function handleSettingClick() {
  switchScreens({ isSettingClicked: true });
}

function handleToDoClick() {
  switchScreens({ isToDoClicked: true });
}

function handleHomeClick() {
  switchScreens({ isHomeClicked: true });
}

function enableButtons() {
  navigationBar.classList.add("signed-in");

  homeButton.classList.add(CURRENT_SCREEN_CLASSNAME);

  homeButton.addEventListener(CLICK_EVENT, handleHomeClick);
  toDoButton.addEventListener(CLICK_EVENT, handleToDoClick);
  settingButton.addEventListener(CLICK_EVENT, handleSettingClick);

  smileButton.addEventListener("mouseover", () => {
    SMILE_MODAL.classList.add(ADDED_CLASSNAME);
  });

  smileButton.addEventListener("mouseleave", () => {
    SMILE_MODAL.classList.remove(ADDED_CLASSNAME);
  });
}
