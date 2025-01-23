
const ulElem = document.querySelectorAll(".item");
const liElem = `Number of categories: ${ulElem.length}`;
console.log(liElem)

ulElem.forEach(value => {
    console.log(`Category: ${value.firstElementChild.textContent}`);
    console.log(`Elements: ${value.lastElementChild.children.length}`)
});






