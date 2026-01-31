const cepInput = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const uf = document.getElementById("uf");

cepInput.addEventListener("blur", async () => {
    let cep = cepInput.value.replace(/\D/g, '');

    if (cep.length !== 8) {
        alert("CEP inválido. Deve conter 8 dígitos.");
        return;
    }
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
        if (data.erro) {
            alert("CEP não encontrado.");
            return;
        }
            logradouro.value = data.logradouro;
            bairro.value = data.bairro;
            cidade.value = data.localidade;
            uf.value = data.uf;
    })
    .catch(() => {
        alert("Erro ao buscar o CEP.");
    });
});
