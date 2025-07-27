// Responsável por orquestrar o programa

const { readFileSync } = require('fs');

const Repositorio = require("./repositorio.js");
const ServicoCalculoFatura = require("./servico.js");
const gerarFaturaStr = require("./apresentacao.js");

// Lê os dados das faturas
const faturas = JSON.parse(readFileSync('./faturas.json'));

// Cria os objetos necessários
const calc = new ServicoCalculoFatura(new Repositorio());

// Gera e imprime a fatura
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);
