'use strict';

var app;
app = angular.module('Sei-Saude');

app.controller('consultaCtrl', function($http, $window) {

    var consulta = this;
    consulta.elemento = {};

    var url = 'https://sei-saude.herokuapp.com/';
    //var url = 'http://localhost:8080/';

    consulta.elemento = function() {
        
        var nome = consulta.elemento.nome

        $http({
            method: 'GET',
            url: url + 'elemento?name=' + nome
        }).then(function (success){
            console.log({success});

        },function (error){
            console.log({error});
        });
    
    

    consulta.allElemento = function(){
        $http({
            method: 'GET',
            data: nome,
            url: url + 'all_elemento'
        }).then(function (success){
            console.log({success});
        });
    }
}})