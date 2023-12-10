const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach((category) => {
  const title = category.firstElementChild.textContent;
  const items = category.lastElementChild.children.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${items.length}`);
});
