'use strict';

var app;
app = angular.module('Sei-Saude');

app.controller('elementoCtrl', function($http, $window) {

    var elemento = this;
    elemento._novoElemento = {};

    elemento.cadastrar = function cadastraElemento() {

        var novoElemento = {
            cadastradoPor: elemento._novoElemento.cadastradoPor,
            descricao: elemento._novoElemento.descricao,
            fabricante: elemento._novoElemento.fabricante,
            name: elemento._novoElemento.name,
            tipo: 0,
        };

        $http({
            method: 'POST',
            data: novoElemento,
            url: 'http://localhost:8080/elemento'
        }).then(function (success){
            console.log(success);

        },function (error){
            console.log(error);
        });
    }

    elemento.listaElementos = function() {
        
        $http({
            method: 'GET',
            url: 'http://localhost:8080/all_elemento'
        }).then(function (success){
            console.log({success});

        },function (error){
            console.log({error});
        });
    }

});