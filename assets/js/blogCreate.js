import { setStorageEntries, NAME, TITLE, CONTENT } from "./blog.js";
import { getElement, getValue } from "./helper.js";
import { setMode, getMode } from "./modePicker.js";
/**
 * Add event listener to the form submit button which
 * will handle setting the values of the form to local
 * storage upon submit
 */
getElement("button-submit").addEventListener("click", (e) => {
  //do form submit and keep values
  e.preventDefault();

  if (!getValue(NAME) || !getValue(TITLE) || !getValue(CONTENT)) {
    getElement("error-msg").innerHTML =
      "Please enter all information to create an entry";
    return;
  }
  //write to storage
  setStorageEntries({
    username: getValue(NAME),
    title: getValue(TITLE),
    content: getValue(CONTENT),
  });

  //redirect to blogListing
  document.location = "blog.html";
});

/* when window loads set the appropriate
   mode retrieved from storage
*/
window.onload = () => {
  setMode(getMode());
};
