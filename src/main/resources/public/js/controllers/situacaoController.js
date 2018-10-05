'use strict';

var app;
app = angular.module('Sei-Saude');

app.controller('situacaoCtrl', function($http, $window) {

    var situacao = this;
    situacao._novoSituacao = {};
    situacao._consulta = {};

    var url;
    var path = "https://sei-saude.herokuapp.com/";
    //var path = "http://localhost:8080/";

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
            if (document.getElementById("S"+SintomasIDs[i]) != null) {
                nomesSintomas[i] = document.getElementById("S"+SintomasIDs[i]).textContent;
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

            /*
            var box = document.createElement("div");
            box.id = 'divS'+iCount;
            var z1 = document.createTextNode("Nome Sintoma");
            var z = document.createElement('input');
            z.type = 'text';
            z.id = 'NS'+iCount;
            z.name = 'NS'
            z.value = '';


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
*/

            var sintomas = document.getElementById('sintomas');

            var box = document.createElement("div");
            box.id = 'divS'+iCount;
            var cardSintoma = document.createElement("fieldset");
            cardSintoma.id = "S" + iCount;

            var nome = document.getElementById("sintoma");
            var nomeSintoma = document.createTextNode(nome.value);
            cardSintoma.appendChild(nomeSintoma);

            var removeButton = document.createElement('input');
            removeButton.type = 'button';
            removeButton.value = 'Remover';
            removeButton.onclick = function () {
                situacao.removeSintoma(ID);
            };
            cardSintoma.appendChild(removeButton);

            box.appendChild(cardSintoma);
            sintomas.appendChild(box);
            nome.value = "";//limpa o campo
        }
    }

    situacao.removeSintoma = function removeSintoma(id) {
        //Pegar o valor do campo que será excluído:
        var campoValor = "";//document.getElementById("NS"+id).value;
        //Se o campo não tiver nenhum valor, atribuir a string: vazio:
        if (campoValor == "") {
            campoValor = "vazio";
        }

        if(confirm("O campo selecionado será excluído!\n\nDeseja prosseguir?")){
            limitCount--;
            document.getElementById("divS"+id).outerHTML = "";
        }
    }

    //autocompletar
    situacao.list = [];
    situacao.result = [];

    situacao.hidethis = true;
    situacao.filterSintoma = [];

    situacao.complete = function(string){  
        situacao.hidethis = false;
        var output = [];  

        for (let i = 0; i < 10; i++) {
            var sintomaString = situacao.list[i];
            if (sintomaString.toLowerCase().indexOf(string.toLowerCase()) >= 0) {
                output.push(situacao.list[i]);
            }
        }
        situacao.filterSintoma = output;
    }

    situacao.fillTextbox = function(string){  
        situacao.sintoma = string;
        situacao.hidethis = true;  
    }

    situacao.listaSintomas = function() {
     
        $http({
            method: 'GET',
            url: path + 'all_elemento'
        }).then(function (success){
            console.log({success});
            situacao.result = success.data;
            for (let i = 0; i < 10; i++) {
                situacao.list[i] = situacao.result[i].name;
            }
            return situacao.list;
        },function (error){
            console.log({error});
        });
    }
    situacao.listaSintomas();

});