'use strict';

var app;
app = angular.module('Sei-Saude');

app.controller('situacaoCtrl', function($http, $window) {

    var situacao = this;
    situacao._novoSituacao = {};
    situacao._consulta = {};

    situacao.cadastrar = function cadastrasituacao() {

        var novoSituacao = {
            descricao: situacao._novoSituacao.descricao,
            name: situacao._novoSituacao.name,
            tipo: 0,
        };

        $http({
            method: 'POST',
            data: novoSituacao,
            url: 'http://localhost:8080/situacao'
        }).then(function (success){
            console.log(success);
            alert(success.data.name + " cadastrado com sucesso!");
        },function (error){
            console.log(error);
            alert("Não foi possível cadastrar " + novoSituacao.name);
        });
    }

    situacao.listasituacaos = function() {
        
        var nome = situacao._consulta.nome;

        $http({
            method: 'GET',
            data: nome,
            url: 'https://sei-saude.herokuapp.com/situacao'
        }).then(function (success){
            console.log({success});

        },function (error){
            console.log({error});
        });
    }

});