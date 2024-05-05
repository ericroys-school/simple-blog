import { getStorageEntries, NAME, TITLE, CONTENT } from "./blog.js";
import { getMode, setMode } from "./modePicker.js";
import { getElement } from "./helper.js";

/**
 * Display no entires message to screen
 * @param {Element} e
 */
function displayNoEntries(e) {
  let h = document.createElement("h3");
  h.innerHTML = "No blog entries to display at this time";
  h.setAttribute("id", "no-items");
  e.appendChild(h);
}

//helper function to append things
function append(p, c) {
  p.appendChild(c);
  return p;
}

/**
 * Iterates the entries from storage and generates
 * appropriate elements to display information in html
 * @param {Element} e
 * @param {[]} blogs
 */
function displayList(e, blogs) {
  blogs.forEach((b) => {
    let art = document.createElement("article");
    art.setAttribute("class", "blog-entry");

    let t = document.createElement("h3");
    t.innerHTML = b[TITLE];

    let p = document.createElement("p");
    p.setAttribute("class", "blog-content");
    p.innerHTML = b[CONTENT];

    let auth = document.createElement("p");
    auth.setAttribute("class", "blog-author");
    auth.innerHTML = `Posted by: ${b[NAME]}`;

    append(e, append(append(append(art, t), p), auth));
  });
}

function renderList() {
  //get stored entries from local store
  let entries = getStorageEntries();
  //get the element where things will be appended
  let container = getElement("entries");
  //display no entries if no results otherwise display list
  if (!entries || entries.length < 1) displayNoEntries(container);
  else displayList(container, entries);
}

/* when window loads set the appropriate
   mode retrieved from storage and render
   the rest of the content based on entries 
   stored
*/
window.onload = () => {
  setMode(getMode());
  renderList();
};
