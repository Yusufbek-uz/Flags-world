const btn = document.getElementById("dark-btn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const davlat = JSON.parse(localStorage.getItem("davlat"))[0];
console.log(davlat);

const davImg = document.getElementById("dav-img");
const davText = document.getElementById("dav-text");

davImg.src = davlat.flags.svg;

davText.innerHTML = `
          <title>${document.title = davlat.name.common}</title>
          <head>
            <link rel="icon" href="${davlat.flags.svg}" />
          </head>
          <h1>${davlat.name.common}</h1>
          <h3>Poytaxti: ${davlat.capital}</h3>
          <h3>Aholisi:  ${davlat.population}</h3>
          <h3>Maydoni: ${davlat.area} km<sup>2</sup></h3>
          <h3>Time: ${davlat.timezones}</h3>
          <p><b>Chegaradosh davlatlari: ${davlat.borders ? davlat.borders : "Chegaradosh davlati yo'q"}</b></p>
`