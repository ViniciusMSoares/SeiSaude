'use strict';

var app;
app = angular.module('Sei-Saude');

app.controller('elementoCtrl', function($http, $window) {

    var elemento = this;
    elemento._novoElemento = {};
    elemento._mensagem = {};
    
    var url;

    elemento.cadastrar = async function cadastraElemento(tipo) {
        var novoElemento;
        switch (tipo) {
            case 1:
                novoElemento = elemento.dadosComportamento();
                url = '/comportamento';
                break;
            case 2:
                novoElemento = elemento.dadosRemedio();
                url = '/remedio';
                break;
            case 3:
                novoElemento = elemento.dadosAlimento();
                url = '/alimento';
                break;
        }

        var resp = elemento.jaCadastrado(novoElemento.name);
        console.log(resp);

        if (elemento.jaCadastrado(novoElemento.name) == 0) {
            alert("tente de novo");
        } else { 
            await $http({
                method: 'POST',
                data: novoElemento,
                url: 'http://localhost:8080/elemento' + url
            }).then(function (success){
                console.log(success);
                alert(success.data.name + " cadastrado com sucesso!");
            },function (error){
                console.log(error);
                alert("Não foi possível cadastrar o elemento");
            }); 
        }

    }

    elemento.jaCadastrado = async function jaCadastrado(nome) {
        var resp = 0;

        await $http({
            method: 'POST',
            data: elemento.searchName(),
            url: 'http://localhost:8080/elemento'
        }).then(function (success){
            console.log(success);
            if (success.data.length > 0) {
                alert(success.data[0].name + " já cadastrado no sistema.");
                console.log("opa" + success.data[0].name.localeCompare(nome));
                resp = success.data[0].name.localeCompare(nome);
            } else {
                console.log("ola");
                resp = 2;
            }
        },function (error){
            console.log(error);
        });
        
        console.log(resp);
        return resp;
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

    elemento.searchName = function searchName(){
        var nomeElemento = {
            name: elemento._novoElemento.name
        }

        return nomeElemento;
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