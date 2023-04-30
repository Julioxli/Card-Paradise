const inputCep = document.querySelector("#inputCep");
const inputEndereco = document.querySelector("#inputEndereco");
const inputNumero = document.querySelector("#inputNumero");
const inputBairro= document.querySelector("#inputBairro");
const inputCidade = document.querySelector("#inputCidade");
const inputEstado = document.querySelector("#inputEstado");
const fade = document.querySelector("#fade");



inputCep.addEventListener("blur", (e) => {
    let cep = inputCep.value.replace("-", "");
    console.log(cep);
    fetch( `https://viacep.com.br/ws/${cep}/json/`)
    .then(Response => {
        Response.json()
        .then(data => {
            console.log(data);
            inputBairro.value = data.bairro;
            inputCidade.value = data.localidade;
            inputEstado.value = data.uf;
            inputEndereco.value = data.logradouro;
        });
    });
});


// // Fazendo input aceitar apenas número

// inputCep.addEventListener("keypress", (e) => {
//     const onlyNumbers = /[0-9]|\./;
//     const key = String.fromCharCode(e.keyCode);
  
//     console.log(key);
  
//     console.log(onlyNumbers.test(key));
//     // Apenas números
//     if (!onlyNumbers.test(key)) {
//         e.preventDefault();
//         return;
//     };
// });

// // Pegando o endereço com envento

// inputCep.addEventListener("keyup", (e) => {
//     const inputValue = e.target.value;

//     // checando se tem a quantidade de digitos corretos
//     if(inputValue.length === 8) {
//         getAddress(inputValue);
//     }
// });

// // Pegando o endereço da API
// const getAddress = async (cep) => {

//     inputCep.blur();
    
//     // API
//     const baseUrl = `https://viacep.com.br/ws/${cep}/json/`

//     const response = await fetch(baseUrl);

//     const data = await response.json();

//     console.log(data);
    
//     inputBairro.innerHTML = `${data.bairro}`;

// };