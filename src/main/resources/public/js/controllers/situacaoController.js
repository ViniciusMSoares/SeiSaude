'use strict';

var app;
app = angular.module('Sei-Saude');

app.controller('situacaoCtrl', function($http, $window) {

    var situacao = this;
    situacao._novoSituacao = {};
    situacao._consulta = {};

    var url;
    var path = "https://sei-saude.herokuapp.com/";
    //var path = "http://localhost:8080/"

    situacao.cadastrar = function cadastrasituacao(tipo) {
        situacao.SintomasIDs();
        var novoSituacao;
        switch (tipo) {
            case 1:
                novoSituacao = situacao.dadosSintoma();
                url = 'sintoma';
                break;
            case 2:
                novoSituacao = situacao.dadosDoenca();
                url = 'doenca';
                break;
        }
        situacao.limpaIDs();


        $http({
            method: 'POST',
            data: novoSituacao,
            url: path + 'situacao/' + url
        }).then(function (success){
            console.log(success);
            alert(success.data.name + " cadastrado com sucesso!");
        },function (error){
            console.log(error);
            if (error.status == 300) {
                alert("Não foi possível cadastrar " + novoSituacao.name + ".\nEsse nome já está em uso.");
            }
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

    situacao.dadosSintoma = function dadosSintoma() {
        var novoSituacao = {
            descricao: situacao._novoSituacao.descricao,
            name: situacao._novoSituacao.name,
            tipo: 1,
        };
        return novoSituacao;
    }

    situacao.dadosDoenca = function dadosDoenca() {
        var novoSituacao = {
            descricao: situacao._novoSituacao.descricao,
            name: situacao._novoSituacao.name,
            nomesSintomas: situacao.nomesSintomas(),
            tipo: 2,
        };
        return novoSituacao;
    }

    situacao.nomesSintomas = function nomesSintomas() {
        var nomesSintomas = [];
        for (let i = 0; i < limitCount; i++) {
            if (document.getElementById("NS"+SintomasIDs[i]) != null) {
                nomesSintomas[i] = document.getElementById("NS"+SintomasIDs[i]).value;
            }
        }
        return nomesSintomas;
    }

    var totalCampos = 10;
    var SintomasIDs = [];

    situacao.SintomasIDs = function() {
        for (let i = 0; i <= iCount; i++) {
            if (document.getElementById('divS'+i) != null) {
                SintomasIDs.push(i);
            }
        }
    }

    situacao.limpaIDs = function() {
        SintomasIDs = [];
    }

    situacao.totalCampos = function() {
        return totalCampos;
    }

    var iCount = 0;
    var limitCount = 0;

    situacao.addSintoma = function addSintoma() {
        //Executar apenas se houver possibilidade de inserção de novos campos:
        if (limitCount < totalCampos) {
            limitCount++;
            iCount++;
            var ID = iCount;

            var box = document.createElement("div");
            box.id = 'divS'+iCount;
            var z1 = document.createTextNode("Nome Sintoma");
            var z = document.createElement('input');
            z.type = 'text';
            z.id = 'NS'+iCount;
            z.name = 'NS'
            z.value = '';

            var removeButton = document.createElement('input');
            removeButton.type = 'button';
            removeButton.value = 'Remover';
            removeButton.onclick = function () {
                situacao.removeSintoma(ID);
            };

            var fieldComponente = document.createElement('fieldset');
            var legend = document.createElement('legend');
            var legendText = document.createTextNode("Sintoma");
            legend.appendChild(legendText);
            fieldComponente.appendChild(legend);
            fieldComponente.id = "S"+iCount;
            fieldComponente.appendChild(z1);
            fieldComponente.appendChild(z);
            fieldComponente.appendChild(removeButton);
            box.appendChild(fieldComponente);

            var sintomas = document.getElementById('sintomas');
            sintomas.appendChild(box);
        }
    }

    situacao.removeSintoma = function removeSintoma(id) {
        //Pegar o valor do campo que será excluído:
        var campoValor = document.getElementById("NS"+id).value;
        //Se o campo não tiver nenhum valor, atribuir a string: vazio:
        if (campoValor == "") {
            campoValor = "vazio";
        }

        if(confirm("O campo que contém o valor:\n» "+campoValor+"\nserá excluído!\n\nDeseja prosseguir?")){
            limitCount--;
            document.getElementById("divS"+id).outerHTML = "";
        }
    }
});