console.log("loaded");
function sortList(ul) {
  const ul = document.getElementById(ul);

  Array.from(ul.getElementsByTagName("LI"))
    .sort((a, b) => {
      console.log("a");
      return a.textContent.localeCompare(b.textContent);
    })
    .forEach((li) => ul.appendChild(li));
}

console.log("here");
sortList("books");
