const container = document.getElementById("flags");

fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro HTTP: " + response.status);
    }
    return response.json();
  })
  .then(countries => {
    if (!Array.isArray(countries)) {
      throw new Error("Resposta inválida da API");
    }

    countries
      .sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      )
      .forEach(country => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="${country.flags.png}" alt="${country.name.common}">
          <span>${country.name.common}</span>
        `;

        container.appendChild(card);
      });
  })
  .catch(error => {
    console.error(error);
    container.innerHTML = "<p>Erro ao carregar dados.</p>";
  });