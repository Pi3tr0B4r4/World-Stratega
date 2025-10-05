```js
const countryData = {
  "Italia": { power: 80 },
  "Francia": { power: 90 },
  "Spagna": { power: 70 }
};

let selected = null;

function updateInfo(country) {
  const infoDiv = document.getElementById("info");
  if (!country) {
    infoDiv.innerHTML = "Seleziona un paese per interagire.";
  } else {
    const data = countryData[country];
    infoDiv.innerHTML = Hai selezionato <strong>country</strong>.<br>Potenza:{data.power};
  }
}

function showActions(show) {
  const act = document.getElementById("actions");
  act.style.display = show ? "block" : "none";
}

document.querySelectorAll(".country").forEach(btn => {
  btn.addEventListener("click", () => {
    const country = btn.getAttribute("data-country");
    selected = country;
    updateInfo(country);
    showActions(true);
  });
});

document.getElementById("action-invade").addEventListener("click", () => {
