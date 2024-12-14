const btn = document.getElementById("dark-btn");
const countries__box = document.getElementById("countries__box");
const input = document.getElementById("input");
const select = document.getElementById("continents");
let davlatlarArray;

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

async function davlatlarChizish() {
  const javob = await fetch("https://restcountries.com/v3.1/all");
  const davlatlar = await javob.json();
  davlatlarArray = davlatlar;
  console.log(davlatlar[0]);

  countries__box.innerHTML = "";
  davlatlar.forEach((davlat) => {
    const div = document.createElement("div");
    const a = document.createElement("a");
    a.href="./country.html";
    div.classList.add("country");
    div.innerHTML = `
          <img src="${davlat.flags.svg}" alt="Country-img" onClick="navigateCountry(this)" >
          <h3 class="country__name"  onClick="navigateCountry(this)" >${davlat.name.common}</h3>
         `;
     a.appendChild(div)    
    countries__box.appendChild(a);
  });
}

davlatlarChizish();

input.addEventListener("input", () => {
  const searchCountries = davlatlarArray.filter((davlat) =>
    davlat.name.common.toLowerCase().includes(input.value.toLowerCase()) 
    
  );
  if (searchCountries.length > 0) {
    countries__box.innerHTML = "";
    searchCountries.forEach((davlat) => {
      const div = document.createElement("div");
      const a = document.createElement("a");
      a.href="./country.html";
      div.classList.add("country");
      div.innerHTML = `
            <img src="${davlat.flags.svg}" alt="Country-img" onClick="navigateCountry(this)" >
            <h3 class="country__name"  onClick="navigateCountry(this)" >${davlat.name.common}</h3>
           `;
       a.appendChild(div)    
      countries__box.appendChild(a);
    });
  }
});

select.addEventListener("change", () => {
  if (select.value == "All") {
    davlatlarChizish();
  } else {
    const searchCountries = davlatlarArray.filter(
      (davlat) => davlat.continents[0] == select.value
    );
    if (searchCountries.length > 0) {
      countries__box.innerHTML = "";
      searchCountries.forEach((davlat) => {
        const div = document.createElement("div");
        const a = document.createElement("a");
        a.href="./country.html";
        div.classList.add("country");
        div.innerHTML = `
              <img src="${davlat.flags.svg}" alt="Country-img" onClick="navigateCountry(this)" >
              <h3 class="country__name"  onClick="navigateCountry(this)" >${davlat.name.common}</h3>
             `;
         a.appendChild(div)    
        countries__box.appendChild(a);
      });
    }
  }
});



function navigateCountry(e){
  const tDav = davlatlarArray.filter(
    (davlat) => davlat.name.common == e.parentNode.children[1].textContent
  );
  localStorage.setItem("davlat", JSON.stringify(tDav));
}