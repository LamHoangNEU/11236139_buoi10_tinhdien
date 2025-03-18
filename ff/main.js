const f = document.querySelector("#position");
const cd = document.querySelector(".cd");
const cr = document.querySelector(".cr");
const form = document.querySelector("form");

function updateCrVisibility() {
  if (f.value === "Hinh Chu Nhat") {
    cr.style.display = "inline";
  } else {
    cr.style.display = "none";
  }
}

f.addEventListener("change", updateCrVisibility);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const existingResult = form.querySelector("p");
  if (existingResult) {
    existingResult.remove();
  }

  let result;
  if (f.value === "Hinh Chu Nhat") {
    const cd1 = Number(cd.value);
    const cr1 = Number(cr.value);
    result = String(cd1 * cr1);
    cr.style.display = "inline";
    cr.value = "";
  } else if (f.value === "Hinh Tron") {
    const r = Number(cd.value);
    result = String(3.14 * Math.pow(r, 2));
  } else if (f.value === "Hinh Vuong") {
    const a = Number(cd.value);
    result = String(a * a);
  }

  const creat = document.createElement("p");
  creat.textContent = result;
  form.append(creat);
  cd.value = "";
});

updateCrVisibility();
