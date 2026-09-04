const r = document.getElementById("root");

(async (params) => {
  const response = await fetch("http://192.168.0.231:3456/users");

  const data = await response.json();
  //console.log(data);

  const div = document.createElement("div");
  div.innerHTML = `<p class="user-name">${data[0].nombre}</p><p>${data[0].email}</p> <p>${data[0].contraseña}</p>`;

  div.classList.add("user");

  data.forEach((user) => {
    const div = document.createElement("div");
    div.innerHTML = `<p class="user-name">${user.nombre}</p><p>${user.email}</p> <p>${user.contraseña}</p>`;
    div.classList.add("user");
    r.appendChild(div);
  });

  r.appendChild(div);
})();
