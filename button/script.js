console.log("Hola mundo!");

const b = document.getElementById("myButton");
const c = document.querySelector("#clickCount");

//c.textContent = 0;

b.addEventListener("click", () => {
  const valor = c.textContent;
  c.textContent = parseInt(c.textContent) + 1;
});
