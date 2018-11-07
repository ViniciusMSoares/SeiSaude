'use strict';

var app;
app = angular.module('Sei-Saude');

app.controller('situacaoCtrl', function($http, $window) {

    var situacao = this;
    situacao._novoSituacao = {};
    situacao._consulta = {};

    var url;
    //var path = "https://sei-saude.herokuapp.com/";
    var path = "http://localhost:8080/";

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
            situacao.limpaForm();
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
            descSintomas: situacao.descSintomas(),
            tipo: 2,
        };
        return novoSituacao;
    }

    situacao.nomesSintomas = function nomesSintomas() {
        var nomesSintomas = [];
        for (let i = 0; i < limitCount; i++) {
            if (document.getElementById("S"+SintomasIDs[i]) != null) {
                nomesSintomas[i] = document.getElementById("SN"+SintomasIDs[i]).textContent;
            }
        }
        return nomesSintomas;
    }

    situacao.descSintomas = function descSintomas() {
        var descSintomas = [];
        for (let i = 0; i < limitCount; i++) {
            if (document.getElementById("S"+SintomasIDs[i]) != null) {
                descSintomas[i] = document.getElementById("S"+SintomasIDs[i]).textContent;
            }
        }
        return descSintomas;
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

    situacao.limpaForm = function() {
        situacao._novoSituacao = {};
        document.getElementById("last_name").value = "";
        document.getElementById("sintomasList").outerHTML = "";
    }

    var iCount = 0;
    var limitCount = 0;

    situacao.disableAddSintoma = function disableAddSintoma() {
        if(document.getElementById("sintoma").value==="") { 
            document.getElementById('addSintoma').disabled = true; 
        } else { 
            document.getElementById('addSintoma').disabled = false;
        }
    }

    situacao.list = [];
    situacao.result = [];

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

            var sintomas = document.getElementById('sintomasList');

            var box = document.createElement("div");
            box.id = 'divS'+iCount;
            box.classList = "card white darken-1";
            var cardSintoma = document.createElement("div");
            cardSintoma.id = "S" + iCount;
            cardSintoma.classList = "card-content black-text";

            var nome = document.getElementById("sintoma");
            var title = document.createElement("span");
            title.classList = "card-title";
            title.id = "SN" + iCount
            var nomeSintoma = document.createTextNode(nome.value);
            title.appendChild(nomeSintoma);
            box.appendChild(title);

            var descricaoSintoma = document.getElementById("sintomaDesc");
            var descricaoSintomaTextNode = document.createTextNode(descricaoSintoma.value);
            cardSintoma.appendChild(descricaoSintomaTextNode);

            var action = document.createElement("div");
            action.classList = "card-action";

            var removeButton = document.createElement('input');
            removeButton.type = 'button';
            removeButton.value = 'Remover';
            removeButton.onclick = function () {
                situacao.removeSintoma(ID);
            };
            action.appendChild(removeButton);

            box.appendChild(cardSintoma);
            box.appendChild(action);
            sintomas.appendChild(box);
            nome.value = "";//limpa o campo
            descricaoSintoma.value = "";
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


    situacao.hidethis = true;
    situacao.filterSintoma = [];

    situacao.complete = function(string){
        situacao.hidethis = false;
        var output = [];  

        for (let i = 0; i < situacao.list.length; i++) {
            var sintomaString = situacao.list[i].name;
            if (sintomaString.toLowerCase().indexOf(string.toLowerCase()) >= 0) {
                output.push(situacao.list[i].name);
            }
        }
        situacao.filterSintoma = output;
    }

    situacao.fillTextbox = function(string){  
        situacao.sintoma = string;
        situacao.hidethis = true;

        var descricaoSintoma = document.getElementById("sintomaDesc");
        descricaoSintoma.placeholder = "Descrição do sintoma";
        situacao.list.forEach(sintoma => {
            if (sintoma.name === string) {
                descricaoSintoma.value = sintoma.descricao;
            }
        });
    }

    situacao.listaSintomas = function() {
     
        $http({
            method: 'GET',
            url: path + 'all_sintoma'
        }).then(function (success){
            console.log({success});
            situacao.result = success.data;
            situacao.list = success.data;
            return situacao.list;
        },function (error){
            console.log({error});
        });
    }
    situacao.listaSintomas();

});