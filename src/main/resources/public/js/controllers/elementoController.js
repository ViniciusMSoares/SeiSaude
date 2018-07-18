'use strict';

var app;
app = angular.module('Sei-Saude');

app.controller('elementoCtrl', function($http, $window) {

    var elemento = this;
    elemento._novoElemento = {};
    elemento._mensagem = {};

    elemento.cadastrar = function cadastraElemento(tipo) {
        var novoElemento;
        switch (tipo) {
            case 1:
                novoElemento = elemento.dadosComportamento();
                break;
            case 2:
                novoElemento = elemento.dadosRemedio();
                break;
            case 3:
                novoElemento = elemento.dadosAlimento();
                break;
        }

        $http({
            method: 'POST',
            data: novoElemento,
            url: 'https://sei-saude.herokuapp.com/elemento'
        }).then(function (success){
            console.log(success);
            alert(success.data.name + " cadastrado com sucesso!");
        },function (error){
            console.log(error);
            alert("Não foi possível cadastrar o elemento");
        });
    }

    elemento.dadosComportamento = function dadosComportamento() {
        var novoElemento = {
            cadastradoPor: elemento._novoElemento.cadastradoPor,
            descricao: elemento._novoElemento.descricao,
            name: elemento._novoElemento.name,
            tipo: 1,
        };
        return novoElemento;
    }

    elemento.dadosRemedio = function dadosRemedio() {
        var novoElemento = {
            cadastradoPor: elemento._novoElemento.cadastradoPor,
            descricao: elemento._novoElemento.descricao,
            fabricante: elemento._novoElemento.fabricante,
            name: elemento._novoElemento.name,
            tipo: 2,
        };
        return novoElemento;
    }

    elemento.dadosAlimento = function dadosAlimentos() {
        var novoElemento = {
            cadastradoPor: elemento._novoElemento.cadastradoPor,
            descricao: elemento._novoElemento.descricao,
            fabricante: elemento._novoElemento.fabricante,
            name: elemento._novoElemento.name,
            tipo: 3,
        };
        return novoElemento;
    }

    elemento.listaElementos = function() {
        
        $http({
            method: 'GET',
            url: 'https://sei-saude.herokuapp.com/all_elemento'
        }).then(function (success){
            console.log({success});

        },function (error){
            console.log({error});
        });
    }

});