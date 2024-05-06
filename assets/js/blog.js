/* General Blog data model/storage functions */

import { getElement } from "./helper.js";

// key for the local storage
const BLOG = "blogEntries";

//export these to use in other blog js
export const NAME = "username";
export const TITLE = "title";
export const CONTENT = "content";

/**
 * get the blog entry array from local storage or create an empty one
 * @returns [{username:"", title:"", content:""}] or empty array
 */
export function getStorageEntries() {
  let store = localStorage.getItem(BLOG);
  return store ? JSON.parse(store) : [];
}

/**
 * write the new item to the local storage for blogEntries
 * @param {username:"", title:"", content:""} posting
 */
export function setStorageEntries(posting) {
  if (posting) {
    let store = getStorageEntries();
    store.push(posting);
    localStorage.setItem(BLOG, JSON.stringify(store));
  }
}
