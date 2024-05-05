import { getElement } from "./helper.js";
const PICKER = "blogPicker";

// set click event for the mode switcher
getElement("mode-switcher").addEventListener("click", () => {
  setSwitcher();
});

//get current saved mode
export function getMode() {
  return localStorage.getItem(PICKER) || "light";
}

/**light/dark switcher for toggling
 */
export function setSwitcher() {
  let mode = getMode();
  if (mode === "light") {
    //write setting to local storage
    localStorage.setItem(PICKER, "dark");
    setMode("dark");
  } else {
    //write setting the local storage
    localStorage.setItem(PICKER, "light");
    setMode("light");
  }
}

/** sets the current mode settings based on the mode
 *  passed in or default to light mode
 */
export function setMode(mode) {
  let x = getElement("mode-switcher");
  if (!mode || mode === "light") {
    //toggle the icon to set the sun
    x.setAttribute("class", x.getAttribute("data-light"));
    //change out the css
    getElement("css-switcher").setAttribute("href", "./assets/css/light.css");
  } else {
    //toggle the icon to set the moon
    x.setAttribute("class", x.getAttribute("data-dark"));
    //change out the css
    getElement("css-switcher").setAttribute("href", "./assets/css/dark.css");
  }
}
