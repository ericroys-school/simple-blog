//vars for the form inputs
const BLOG = "blogEntries";
const PICKER = "blogPicker";
const NAME = "username";
const TITLE = "title";
const CONTENT = "content";

//convenience funtion to get element by id
function getElement(id) {
  if (!id) throw "Missing an id";
  return document.getElementById(id);
}

//convenience function to get value of an element
function getValue(id) {
  if (!id) throw "Missing an id";
  return getElement(id).value;
}

/**
 * Add event listener to the form submit button which
 * will handle setting the values of the form to local
 * storage upon submit
 */
getElement("button-submit").addEventListener("click", (e) => {
  getElement("form-blog").submit();
  //do form submit and keep values
  e.preventDefault();

  //write to storage
  setStorageEntries({
    username: getValue(NAME),
    title: getValue(TITLE),
    content: getValue(CONTENT),
  });
});

//get the blog entry array from local storage or create an empty one
function getStorageEntries() {
  let store = localStorage.getItem(BLOG);
  return store ? JSON.parse(store) : [];
}

//write the new item to the local storage for blogEntries
function setStorageEntries(posting) {
  if (posting) {
    let store = getStorageEntries();
    store.push(posting);
    localStorage.setItem(BLOG, JSON.stringify(store));
  }
}

/**light/dark switcher
 * using this with window load and also via
 * button
 */
function setSwitcher() {
  let x = getElement("mode-switcher");
  let mode = localStorage.getItem(PICKER) || "dark";
  if (mode === "light") {
    //write setting to local storage
    localStorage.setItem(PICKER, "dark");
    //toggle the icon to set the moon
    x.setAttribute("class", x.getAttribute("data-dark"));
    //change out the css
    getElement("css-switcher").setAttribute("href", "./assets/css/dark.css");
  } else {
    //write setting the local storage
    localStorage.setItem(PICKER, "light");
    //toggle the icon to set the sun
    x.setAttribute("class", x.getAttribute("data-light"));
    //change out the css
    getElement("css-switcher").setAttribute("href", "./assets/css/light.css");
  }
}

window.onload = () => {
  setSwitcher();
};
