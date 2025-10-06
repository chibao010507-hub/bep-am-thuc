const recipes = [
  {
    title: "Phở bò Hà Nội",
    img: "https://picsum.photos/400/300?random=1",
    desc: "Phở bò truyền thống với nước dùng trong, thơm ngọt.",
  },
  {
    title: "Bánh mì thịt nướng",
    img: "https://picsum.photos/400/300?random=2",
    desc: "Bánh mì giòn, thịt nướng thơm lừng, ăn kèm rau sống.",
  },
  {
    title: "Gà xào sả ớt",
    img: "https://picsum.photos/400/300?random=3",
    desc: "Gà xào đậm vị, cay nồng sả ớt, ăn cùng cơm nóng.",
  },
];

const grid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");

function renderRecipes(list) {
  grid.innerHTML = "";
  list.forEach(r => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow hover:shadow-lg transition p-4";
    card.innerHTML = `
      <img src="${r.img}" alt="${r.title}" class="rounded-lg mb-3 w-full h-48 object-cover"/>
      <h4 class="font-semibold text-lg mb-2">${r.title}</h4>
      <p class="text-gray-600 text-sm">${r.desc}</p>
    `;
    grid.appendChild(card);
  });
}

renderRecipes(recipes);

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(value)
  );
  renderRecipes(filtered);
});
