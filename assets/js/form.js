//vars for the form inputs
const BLOGKEY = "blogEntries";
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
  //do form submit and keep values
  e.preventDefault();

  //write to storage
  setStorage({
    username: getValue(NAME),
    title: getValue(TITLE),
    content: getValue(CONTENT),
  });
});

//get the blog entry array from local storage or create an empty one
function getStorageEntries() {
  let store = localStorage.getItem(BLOGKEY);
  return store ? JSON.parse(store) : [];
}

//write the new item to the local storage for blogEntries
function setStorage(posting) {
  if (posting) {
    let store = getStorageEntries();
    store.push(posting);
    localStorage.setItem(BLOGKEY, JSON.stringify(store));
  }
}

/**light/dark switcher */

function setSwitcher(){
    let x = getElement("mode-switcher");
    if(x.getAttribute("data-mode"))
}

window.onload = setSwitcher();
