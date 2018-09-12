'use strict';

var app;
app = angular.module('Sei-Saude');

app.controller('elementoCtrl', function($http, $window) {

    var elemento = this;
    elemento._novoElemento = {};
    elemento._mensagem = {};
    
    var url;

    elemento.cadastrar = async function cadastraElemento(tipo) {
        elemento.ComponenteIDs();
        elemento.VNutricionalIDs();
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
        elemento.limpaIDs();

        $http({
            method: 'POST',
            data: novoElemento,
            url: 'https://sei-saude.herokuapp.com/elemento' + url
        }).then(function (success){
            console.log(success);
            alert(success.data.name + " cadastrado com sucesso!");
        },function (error){
            console.log(error);
            if (error.status == 300) {
                alert("Não foi possível cadastrar o elemento.\nEsse nome já está em uso.");
            }
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
            nomeComponente: elemento.nomesComponente(),
            tipo: 2,
            unidadesComponente: elemento.unidadesComponente(),
            valoresComponente: elemento.valoresComponente(),
        };
        return novoElemento;
    }

    elemento.dadosAlimento = function dadosAlimentos() {

        var novoElemento = {
            cadastradoPor: elemento._novoElemento.cadastradoPor,
            descricao: elemento._novoElemento.descricao,
            fabricante: elemento._novoElemento.fabricante,
            name: elemento._novoElemento.name,
            nomeComponente: elemento.nomesComponente(),
            nomeVNutricional: elemento.nomeVNutricional(),
            quantidadesVNutricional: elemento.quantidadesVNutricional(),
            tipo: 3,
            unidadesComponente: elemento.unidadesComponente(),
            unidadesVNutricional: elemento.unidadesVNutricional(),
            valoresComponente: elemento.valoresComponente(),
            valoresVNutricional: elemento.valoresVNutricional(),
        };
        return novoElemento;
    }

    elemento.nomesComponente = function nomesComponente() {
        var nomesComponente = [];

        for (let i = 0; i < limitCount; i++) {
            nomesComponente[i] = document.getElementById("NC"+ComponenteIDs[i]).value;
        }
        return nomesComponente;
    }

    elemento.unidadesComponente = function unidadesComponente() {
        var unidadesComponente = [];

        for (let i = 0; i < limitCount; i++) {
            unidadesComponente[i] = document.getElementById("UC"+ComponenteIDs[i]).value;
        }
        return unidadesComponente;
    }

    elemento.valoresComponente = function valoresComponente() {
        var valoresComponente = [];

        for (let i = 0; i < limitCount; i++) {
            valoresComponente[i] = document.getElementById("VC"+ComponenteIDs[i]).value;
        }
        return valoresComponente;
    }

    elemento.nomeVNutricional = function nomeVNutricional() {
        var nomeVNutricional = [];

        for (let i = 0; i < VNLimitCount; i++) {
            nomeVNutricional[i] = document.getElementById("NV"+VNutricionalIDs[i]).value;
        }
        return nomeVNutricional;
    }

    elemento.quantidadesVNutricional = function quantidadesVNutricional() {
        var quantidadesVNutricional = [];

        for (let i = 0; i < VNLimitCount; i++) {
            quantidadesVNutricional[i] = document.getElementById("QV"+VNutricionalIDs[i]).value;
        }
        return quantidadesVNutricional;
    }

    elemento.unidadesVNutricional = function unidadesVNutricional() {
        var unidadesVNutricional = [];

        for (let i = 0; i < VNLimitCount; i++) {
            unidadesVNutricional[i] = document.getElementById("UV"+VNutricionalIDs[i]).value;
        }
        return unidadesVNutricional;
    }

    elemento.valoresVNutricional = function valoresVNutricional() {
        var valoresVNutricional = [];

        for (let i = 0; i < VNLimitCount; i++) {
            valoresVNutricional[i] = document.getElementById("VV"+VNutricionalIDs[i]).value;
        }
        return valoresVNutricional;
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

    //Total máximo de campos que você permitirá criar em seu site:
    var totalCampos = 10;
    var ComponenteIDs = [];
    var VNutricionalIDs = [];

    elemento.ComponenteIDs = function() {
        for (let i = 0; i <= iCount; i++) {
            if (document.getElementById('divC'+i) != null) {
                ComponenteIDs.push(i);
            }
        }
    }

    elemento.VNutricionalIDs = function() {
        for (let i = 0; i <= VNCount; i++) {
            if (document.getElementById('divVN'+i) != null) {
                VNutricionalIDs.push(i);
            }
        }
    }

    elemento.limpaIDs = function() {
        ComponenteIDs = [];
        VNutricionalIDs = [];
    }

    elemento.totalCampos = function() {
        return totalCampos;
    }

    //Não altere os valores abaixo, pois são variáveis controle;
    var iCount = 0;
    var limitCount = 0;

    elemento.addComponente = function addComponente() {
        //Executar apenas se houver possibilidade de inserção de novos campos:
        if (limitCount < totalCampos) {
            limitCount++;
            iCount++;
            var ID = iCount;

            var box = document.createElement("div");
            box.id = 'divC'+iCount;
            var z1 = document.createTextNode("Nome Componente");
            var z = document.createElement('input');
            z.type = 'text';
            z.id = 'NC'+iCount;
            z.name = 'NC'
            z.value = '';

            var x1 = document.createTextNode("Unidade Componente");
            var x = document.createElement('input');
            x.type = 'text';
            x.id = 'UC'+iCount;
            x.name = 'UC'
            x.value = '';

            var y1 = document.createTextNode("Valor Componente");
            var y = document.createElement('input');
            y.type = 'text';
            y.id = 'VC'+iCount;
            y.name = 'VC'
            y.value = '';

            var removeButton = document.createElement('input');
            removeButton.type = 'button';
            removeButton.value = 'Remover';
            removeButton.onclick = function () {
                elemento.removeComponente(ID);
            };

            var fieldComponente = document.createElement('fieldset');
            var legend = document.createElement('legend');
            var legendText = document.createTextNode("Componente " + iCount);
            legend.appendChild(legendText);
            fieldComponente.appendChild(legend);
            fieldComponente.id = "C"+iCount;
            fieldComponente.appendChild(z1);
            fieldComponente.appendChild(z);
            fieldComponente.appendChild(y1);
            fieldComponente.appendChild(y);
            fieldComponente.appendChild(x1);
            fieldComponente.appendChild(x);
            fieldComponente.appendChild(removeButton);
            box.appendChild(fieldComponente);

            var Componente = document.getElementById('componentes');
            Componente.appendChild(box);
        }
    }

    elemento.removeComponente = function removecomponente(id) {
        //Pegar o valor do campo que será excluído:
        var campoValor = document.getElementById("NC"+id).value;
        //Se o campo não tiver nenhum valor, atribuir a string: vazio:
        if (campoValor == "") {
            campoValor = "vazio";
        }

        if(confirm("O campo que contém o valor:\n» "+campoValor+"\nserá excluído!\n\nDeseja prosseguir?")){
            limitCount--;
            document.getElementById("divC"+id).outerHTML = "";
        }
    }

    var VNCount = 0;
    var VNLimitCount = 0;

    elemento.addVNutricional = function addVNutricional() {
        if (VNLimitCount < totalCampos) {
            VNLimitCount++;
            VNCount++;
            var ID = VNCount;

            var box = document.createElement("div");
            box.id = 'divVN'+VNCount;
            var z1 = document.createTextNode("Nome");
            var z = document.createElement('input');
            z.type = 'text';
            z.id = 'NV'+VNCount;
            z.name = 'NV'
            z.value = '';

            var x1 = document.createTextNode("Unidade");
            var x = document.createElement('input');
            x.type = 'text';
            x.id = 'UV'+VNCount;
            x.name = 'UV'
            x.value = '';
    
            var y1 = document.createTextNode("Valor Diário (em porcentagem)");
            var y = document.createElement('input');
            y.type = 'text';
            y.id = 'VV'+VNCount;
            y.name = 'VV'
            y.value = '';

            var k1 = document.createTextNode("Quantidade");
            var k = document.createElement('input');
            k.type = 'text';
            k.id = 'QV'+VNCount;
            k.name = 'QV'
            k.value = '';

            var removeButton = document.createElement('input');
            removeButton.type = 'button';
            removeButton.value = 'Remover';
            removeButton.onclick = function () {
                elemento.removeVNutricional(ID);
            };
    
            var fieldComponente = document.createElement('fieldset');
            var legend = document.createElement('legend');
            var legendText = document.createTextNode("Valor Nutricional");
            legend.appendChild(legendText);
            fieldComponente.appendChild(legend);
            fieldComponente.id = "C"+VNCount;
            fieldComponente.appendChild(z1);
            fieldComponente.appendChild(z);
            fieldComponente.appendChild(k1);
            fieldComponente.appendChild(k);
            fieldComponente.appendChild(x1);
            fieldComponente.appendChild(x);
            fieldComponente.appendChild(y1);
            fieldComponente.appendChild(y);
            fieldComponente.appendChild(removeButton);
            box.appendChild(fieldComponente);

            var VNutricional = document.getElementById("VNutricional");
            VNutricional.appendChild(box);
        }
    }

    elemento.removeVNutricional = function removeVNutricional(id) {
        var campoValor = document.getElementById("NV"+id).value;

        if (campoValor == "") {
            campoValor = "vazio";
        }

        if(confirm("O campo que contém o valor:\n» "+campoValor+"\nserá excluído!\n\nDeseja prosseguir?")){
            VNLimitCount--;
            document.getElementById("divVN"+id).outerHTML = "";
        }
    }


});
