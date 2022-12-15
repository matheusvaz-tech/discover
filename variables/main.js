const firstName = prompt("Qual é o nome do recruta?");
const lastName = prompt("Qual o sobrenome do recruta?");
const profession = prompt("Qual é o campo de estudo do recruta?");
const birthDate = Number(prompt("Qual o ano de nascimento do recruta?"));
const currentYear = 2022;

const age = currentYear - birthDate;

console.log(`Recruta cadastrado com sucesso!

Seu nome completo é: ${firstName} ${lastName};
Seu campo de estudo é: ${profession};
E você tem ${age} anos de idade.`);
