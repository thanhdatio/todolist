const homeScreen = document.querySelector(".js-background main");
const settingScreen = document.querySelector(".js-background__setting");

const navigationBar = document.querySelector(".js-background__navigation");
const homeButton = navigationBar.querySelector("div li:first-child button");
const settingButton = navigationBar.querySelector("div li:last-child button");

let isOnHomeScreen = true;
let isOnSettingScreen = false;

function handleHomeClick() {
  if (!isOnHomeScreen) {
    settingScreen.classList.add(HIDDEN_CLASSNAME);
    homeScreen.classList.remove(HIDDEN_CLASSNAME);
    [isOnHomeScreen, isOnSettingScreen] = [isOnSettingScreen, isOnHomeScreen];
  }
}

function handleSettingClick() {
  if (!isOnSettingScreen) {
    homeScreen.classList.add(HIDDEN_CLASSNAME);
    settingScreen.classList.remove(HIDDEN_CLASSNAME);
    [isOnHomeScreen, isOnSettingScreen] = [isOnSettingScreen, isOnHomeScreen];
  }
}

// console.dir(homeButton);
homeButton.addEventListener("click", handleHomeClick);
settingButton.addEventListener("click", handleSettingClick);
