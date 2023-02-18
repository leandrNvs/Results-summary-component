const container = document.querySelector(".container");

window.onload = function () {
  fetch("../../data.json")
    .then((res) => res.json())
    .then((res) => {
      for (let obj of res) {
        createItem(obj.category, obj.score, obj.icon);
      }
    });
};

function createItem(category, score, icon) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const type = document.createElement("p");
  const text = document.createElement("p");

  div.setAttribute("class", `item ${category.toLowerCase()}`);

  img.setAttribute("src", icon);
  img.setAttribute("alt", "");

  type.textContent = category;
  text.innerHTML = `<span>${score}</span> / 100`;

  div.appendChild(img);
  div.appendChild(type);
  div.appendChild(text);

  render(div);
}

function render(item) {
  container.appendChild(item);
}
