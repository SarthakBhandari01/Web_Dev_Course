const tierInput = document.getElementById("tier");
// tierInput.addEventListener("click");
const btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  if (tierInput.value === "") {
    alert("????");
    return;
  }
  createTierList(tierInput.value);
  tierInput.value = "";
});

function createTierList(tierListName) {
  const tierListSection = document.getElementById("tier_list_section");

  const newTierList = document.createElement("div");
  newTierList.classList.add("tier_list");

  const heading = document.createElement("h1");
  heading.textContent = tierListName;

  const newTierListItem = document.createElement("div");
  newTierListItem.classList.add("tier_list_item");

  newTierList.appendChild(heading);
  newTierList.appendChild(newTierListItem);
  tierListSection.appendChild(newTierList);
}
