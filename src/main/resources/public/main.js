(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _elementos_cadastro_comportamento_cadastro_comportamento_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementos/cadastro-comportamento/cadastro-comportamento.component */ "./src/app/elementos/cadastro-comportamento/cadastro-comportamento.component.ts");
/* harmony import */ var _elementos_cadastro_alimento_cadastro_alimento_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elementos/cadastro-alimento/cadastro-alimento.component */ "./src/app/elementos/cadastro-alimento/cadastro-alimento.component.ts");
/* harmony import */ var _situacoes_cadastro_sintoma_cadastro_sintoma_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./situacoes/cadastro-sintoma/cadastro-sintoma.component */ "./src/app/situacoes/cadastro-sintoma/cadastro-sintoma.component.ts");
/* harmony import */ var _situacoes_cadastro_doenca_cadastro_doenca_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./situacoes/cadastro-doenca/cadastro-doenca.component */ "./src/app/situacoes/cadastro-doenca/cadastro-doenca.component.ts");
/* harmony import */ var _elementos_cadastro_remedio_cadastro_remedio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elementos/cadastro-remedio/cadastro-remedio.component */ "./src/app/elementos/cadastro-remedio/cadastro-remedio.component.ts");
/* harmony import */ var _elementos_cadastro_componente_cadastro_componente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elementos/cadastro-componente/cadastro-componente.component */ "./src/app/elementos/cadastro-componente/cadastro-componente.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _elementos_consulta_componente_consulta_componente_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elementos/consulta-componente/consulta-componente.component */ "./src/app/elementos/consulta-componente/consulta-componente.component.ts");
/* harmony import */ var _elementos_consulta_elemento_consulta_elemento_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elementos/consulta-elemento/consulta-elemento.component */ "./src/app/elementos/consulta-elemento/consulta-elemento.component.ts");
/* harmony import */ var _situacoes_consulta_situacao_consulta_situacao_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./situacoes/consulta-situacao/consulta-situacao.component */ "./src/app/situacoes/consulta-situacao/consulta-situacao.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'cadastro-alimento', component: _elementos_cadastro_alimento_cadastro_alimento_component__WEBPACK_IMPORTED_MODULE_3__["CadastroAlimentoComponent"] },
    { path: 'cadastro-remedio', component: _elementos_cadastro_remedio_cadastro_remedio_component__WEBPACK_IMPORTED_MODULE_6__["CadastroRemedioComponent"] },
    { path: 'cadastro-comportamento', component: _elementos_cadastro_comportamento_cadastro_comportamento_component__WEBPACK_IMPORTED_MODULE_2__["CadastroComportamentoComponent"] },
    { path: 'cadastro-sintoma', component: _situacoes_cadastro_sintoma_cadastro_sintoma_component__WEBPACK_IMPORTED_MODULE_4__["CadastroSintomaComponent"] },
    { path: 'cadastro-doenca', component: _situacoes_cadastro_doenca_cadastro_doenca_component__WEBPACK_IMPORTED_MODULE_5__["CadastroDoencaComponent"] },
    { path: 'cadastro-componente', component: _elementos_cadastro_componente_cadastro_componente_component__WEBPACK_IMPORTED_MODULE_7__["CadastroComponenteComponent"] },
    { path: 'consulta-elemento', component: _elementos_consulta_elemento_consulta_elemento_component__WEBPACK_IMPORTED_MODULE_10__["ConsultaElementoComponent"] },
    { path: 'consulta-situacao', component: _situacoes_consulta_situacao_consulta_situacao_component__WEBPACK_IMPORTED_MODULE_11__["ConsultaSituacaoComponent"] },
    { path: 'consulta-componente', component: _elementos_consulta_componente_consulta_componente_component__WEBPACK_IMPORTED_MODULE_9__["ConsultaComponenteComponent"] },
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <app-navigation></app-navigation>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SeiSaude-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _elementos_elementos_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elementos/elementos.module */ "./src/app/elementos/elementos.module.ts");
/* harmony import */ var _situacoes_situacoes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./situacoes/situacoes.module */ "./src/app/situacoes/situacoes.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_base_form_base_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-base/form-base.module */ "./src/app/form-base/form-base.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _elementos_elementos_module__WEBPACK_IMPORTED_MODULE_5__["ElementosModule"],
                _situacoes_situacoes_module__WEBPACK_IMPORTED_MODULE_6__["SituacoesModule"],
                _form_base_form_base_module__WEBPACK_IMPORTED_MODULE_8__["FormBaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/elementos/cadastro-alimento/cadastro-alimento.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/elementos/cadastro-alimento/cadastro-alimento.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\">\n  <div style=\"text-align:center\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n  \n  <div class=\"container\">\n\n    <div class=\"container\">\n\n      <div class=\"form-row\" formGroupName=\"nomeCompleto\">\n        <div class=\"form-group col-md-6\" [ngClass]=\"aplicaCssErro('nomeCompleto.nome')\">\n          <label for=\"nome\">Nome</label>\n          <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"complemento\">Complemento</label>\n          <input type=\"text\" class=\"form-control\" id=\"complemento\" formControlName=\"complemento\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"descricao\">Descrição</label>\n        <textarea class=\"form-control\" id=\"descricao\" formControlName=\"descricao\" rows=\"3\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"fabricante\">Fabricante</label>\n        <input type=\"text\" class=\"form-control\" id=\"fabricante\" formControlName=\"fabricante\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"cadastradoPor\">Cadastrado por</label>\n        <input type=\"text\" class=\"form-control\" id=\"cadastradoPor\" formControlName=\"cadastradoPor\">\n      </div>\n  \n  \n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\" formArrayName=\"componentes\">\n          <div *ngFor=\"let componente of formulario.get('componentes').controls; index as i\">\n            <div class=\"card\" [formGroup]=\"componente\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Componente\n                  <button class=\"btn\" (click)=\"removeComponente(i)\">Remover</button>\n                </h5>\n                <div class=\"form-row\">\n                  <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\" placeholder=\"Nome\">\n                  <input type=\"number\" class=\"form-control col\" id=\"valor\" formControlName=\"valor\" placeholder=\"Valor\">\n                  <input type=\"text\" class=\"form-control col\" id=\"unidade\" formControlName=\"unidade\" placeholder=\"Unidade\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn\" (click)=\"addComponente()\" #scrollBottom>Novo componente</button>\n        </div>\n\n        <div class=\"form-group col-md-6\" formArrayName=\"valNutricionais\">\n          <div *ngFor=\"let val of formulario.get('valNutricionais').controls; index as i\">\n            <div class=\"card\" [formGroup]=\"val\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Valor Nutricional\n                  <button class=\"btn\" (click)=\"removeValNutricional(i)\">Remover</button>\n                </h5>\n                <div class=\"form-row\">\n                  <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\" placeholder=\"Nome\">\n                  <input type=\"number\" class=\"form-control col-md-6\" id=\"quantidade\" formControlName=\"quantidade\" placeholder=\"Quantidade\">\n                  <input type=\"text\" class=\"form-control col-md-6\" id=\"unidade\" formControlName=\"unidade\" placeholder=\"Unidade\">\n                  <div class=\"input-group mb-3\">\n                    <input type=\"number\" class=\"form-control\" id=\"valorDiario\" formControlName=\"valorDiario\" placeholder=\"Valor diario\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">%</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn\" (click)=\"addValNutricional()\" #scrollBottom>Novo valor nutricional</button>\n        </div>\n        \n      </div>\n  \n    </div>\n\n    <div style=\"text-align:center\">\n      <button type=\"submit\" class=\"btn btn-primary\">Finalizar</button>\n    </div>\n  \n    <router-outlet></router-outlet>\n  </div>\n\n  <div style=\"margin-top: 20px\" *ngIf=\"formulario\" >\n    <div>Detalhes do form</div>\n    <pre>Form válido: {{ formulario.status }}</pre>\n    <!--pre>Form submetido: {{ form.submitted }}</pre -->\n    <pre>Valores: <br>{{ formulario.value | json }}</pre>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/elementos/cadastro-alimento/cadastro-alimento.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/elementos/cadastro-alimento/cadastro-alimento.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRvcy9jYWRhc3Ryby1hbGltZW50by9jYWRhc3Ryby1hbGltZW50by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/elementos/cadastro-alimento/cadastro-alimento.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/elementos/cadastro-alimento/cadastro-alimento.component.ts ***!
  \****************************************************************************/
/*! exports provided: CadastroAlimentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAlimentoComponent", function() { return CadastroAlimentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_alimento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/alimento */ "./src/models/alimento.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _form_base_form_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../form-base/form-base.component */ "./src/app/form-base/form-base.component.ts");
/* harmony import */ var _models_url_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/url.enum */ "./src/models/url.enum.ts");
/* harmony import */ var _services_verifica_nome_verifica_nome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/verifica-nome/verifica-nome.service */ "./src/app/services/verifica-nome/verifica-nome.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CadastroAlimentoComponent = /** @class */ (function (_super) {
    __extends(CadastroAlimentoComponent, _super);
    function CadastroAlimentoComponent(formBuilder, http, verificaNomeService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.http = http;
        _this.verificaNomeService = verificaNomeService;
        _this.title = 'Cadastro de Alimento';
        _this.alimento = {};
        _this.quantidades = [];
        _this.valores = [];
        _this.nomeComplemento = function (control) {
            var nome = control.get('nome');
            var complemento = control.get('complemento');
            return _this.verificaNomeService.verificarNome(nome.value, complemento.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (nomeExiste) { return nomeExiste ? { nomeInvalido: true } : null; }));
        };
        return _this;
    }
    CadastroAlimentoComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            nomeCompleto: this.formBuilder.group({
                nome: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                complemento: [""]
            }, { asyncValidator: this.nomeComplemento.bind(this) }),
            descricao: [""],
            fabricante: [""],
            cadastradoPor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            componentes: this.buildComponentes(),
            valNutricionais: this.buildValNutricionais()
        });
    };
    CadastroAlimentoComponent.prototype.buildComponentes = function () {
        var values = this.quantidades.map(function (v) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](v.nome),
            unidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](v.unidade),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](v.valor)
        }); });
        return this.formBuilder.array(values);
    };
    CadastroAlimentoComponent.prototype.buildValNutricionais = function () {
        var values = this.valores.map(function (v) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            quantidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            unidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            valorDiario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }); });
        return this.formBuilder.array(values);
    };
    CadastroAlimentoComponent.prototype.submit = function () {
        var url = _models_url_enum__WEBPACK_IMPORTED_MODULE_5__["Url"].URL_BASE + _models_url_enum__WEBPACK_IMPORTED_MODULE_5__["Url"].CADASTRO_ALIMENTO;
        var alimento = new _models_alimento__WEBPACK_IMPORTED_MODULE_1__["Alimento"](this.formulario.value.nomeCompleto.nome, this.formulario.value.nomeCompleto.complemento, this.formulario.value.descricao, this.formulario.value.fabricante, this.formulario.value.cadastradoPor, this.formulario.value.componentes, this.formulario.value.valNutricionais);
        this.http.post(url, alimento).subscribe(function (result) {
            console.log(result);
        }, function (error) { return console.log(error); });
    };
    Object.defineProperty(CadastroAlimentoComponent.prototype, "componentes", {
        get: function () { return this.formulario.get('componentes'); },
        enumerable: true,
        configurable: true
    });
    CadastroAlimentoComponent.prototype.addComponente = function () {
        this.componentes.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            unidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }));
    };
    CadastroAlimentoComponent.prototype.removeComponente = function (i) {
        this.componentes.removeAt(i);
    };
    Object.defineProperty(CadastroAlimentoComponent.prototype, "valNutricionais", {
        get: function () { return this.formulario.get('valNutricionais'); },
        enumerable: true,
        configurable: true
    });
    CadastroAlimentoComponent.prototype.addValNutricional = function () {
        this.valNutricionais.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            quantidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            unidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            valorDiario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }));
    };
    CadastroAlimentoComponent.prototype.removeValNutricional = function (i) {
        this.valNutricionais.removeAt(i);
    };
    CadastroAlimentoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro-alimento',
            template: __webpack_require__(/*! ./cadastro-alimento.component.html */ "./src/app/elementos/cadastro-alimento/cadastro-alimento.component.html"),
            styles: [__webpack_require__(/*! ./cadastro-alimento.component.scss */ "./src/app/elementos/cadastro-alimento/cadastro-alimento.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_verifica_nome_verifica_nome_service__WEBPACK_IMPORTED_MODULE_6__["VerificaNomeService"]])
    ], CadastroAlimentoComponent);
    return CadastroAlimentoComponent;
}(_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_4__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/elementos/cadastro-componente/cadastro-componente.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/elementos/cadastro-componente/cadastro-componente.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\">\n  <div style=\"text-align:center\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n  \n  <div class=\"container\">\n\n    <div class=\"form-row\" formGroupName=\"nomeCompleto\">\n      <div class=\"form-group col-md-6\" [ngClass]=\"aplicaCssErro('nomeCompleto.nome')\">\n        <label for=\"nome\">Nome</label>\n        <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"complemento\">Complemento</label>\n        <input type=\"text\" class=\"form-control\" id=\"complemento\" formControlName=\"complemento\">\n      </div>\n    </div>\n\n    <div style=\"text-align:center\">\n      <button type=\"submit\" class=\"btn btn-primary\">Finalizar</button>\n    </div>\n  \n    <router-outlet></router-outlet>\n  </div>\n\n\n  <div style=\"margin-top: 20px\" *ngIf=\"formulario\" >\n    <div>Detalhes do form</div>\n    <pre>Form válido: {{ formulario.status }}</pre>\n    <!--pre>Form submetido: {{ form.submitted }}</pre -->\n    <pre>Valores: <br>{{ formulario.value | json }}</pre>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/elementos/cadastro-componente/cadastro-componente.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/elementos/cadastro-componente/cadastro-componente.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRvcy9jYWRhc3Ryby1jb21wb25lbnRlL2NhZGFzdHJvLWNvbXBvbmVudGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/elementos/cadastro-componente/cadastro-componente.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/elementos/cadastro-componente/cadastro-componente.component.ts ***!
  \********************************************************************************/
/*! exports provided: CadastroComponenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponenteComponent", function() { return CadastroComponenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_base_form_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form-base/form-base.component */ "./src/app/form-base/form-base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_url_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/url.enum */ "./src/models/url.enum.ts");
/* harmony import */ var _models_componente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/componente */ "./src/models/componente.ts");
/* harmony import */ var _services_verifica_nome_verifica_nome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/verifica-nome/verifica-nome.service */ "./src/app/services/verifica-nome/verifica-nome.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CadastroComponenteComponent = /** @class */ (function (_super) {
    __extends(CadastroComponenteComponent, _super);
    function CadastroComponenteComponent(formBuilder, http, verificaNomeService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.http = http;
        _this.verificaNomeService = verificaNomeService;
        _this.title = 'Cadastro de Componente';
        _this.componente = {};
        _this.nomeComplemento = function (control) {
            var nome = control.get('nome');
            var complemento = control.get('complemento');
            return _this.verificaNomeService.verificarNome(nome.value, complemento.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (nomeExiste) { return nomeExiste ? { nomeInvalido: true } : null; }));
        };
        return _this;
    }
    CadastroComponenteComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            nomeCompleto: this.formBuilder.group({
                nome: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                complemento: [""]
            }),
        });
    };
    CadastroComponenteComponent.prototype.submit = function () {
        var url = _models_url_enum__WEBPACK_IMPORTED_MODULE_4__["Url"].URL_BASE + _models_url_enum__WEBPACK_IMPORTED_MODULE_4__["Url"].CADASTRO_COMPONENTE;
        var componente = new _models_componente__WEBPACK_IMPORTED_MODULE_5__["Componente"](this.formulario.value.nomeCompleto.nome, this.formulario.value.nomeCompleto.complemento);
        this.http.post(url, componente).subscribe(function (result) {
            console.log(result);
        }, function (error) { return console.log(error); });
    };
    CadastroComponenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro-componente',
            template: __webpack_require__(/*! ./cadastro-componente.component.html */ "./src/app/elementos/cadastro-componente/cadastro-componente.component.html"),
            styles: [__webpack_require__(/*! ./cadastro-componente.component.scss */ "./src/app/elementos/cadastro-componente/cadastro-componente.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_verifica_nome_verifica_nome_service__WEBPACK_IMPORTED_MODULE_6__["VerificaNomeService"]])
    ], CadastroComponenteComponent);
    return CadastroComponenteComponent;
}(_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_1__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/elementos/cadastro-comportamento/cadastro-comportamento.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/elementos/cadastro-comportamento/cadastro-comportamento.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\" #formDir=\"ngForm\">\n  <div style=\"text-align:center\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n  \n  <div class=\"container\">\n    <div *ngIf=\"formDir.submitted\">\n      <div class=\"alert alert-success\" role=\"alert\">\n        Comportamento cadastrado com sucesso!\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"form-row\" formGroupName=\"nomeCompleto\">\n      <div class=\"form-group col-md-6\" [ngClass]=\"aplicaCssErro('nomeCompleto.nome')\">\n        <label for=\"nome\">Nome</label>\n        <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"complemento\">Complemento</label>\n        <input type=\"text\" class=\"form-control\" id=\"complemento\" formControlName=\"complemento\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"descricao\">Descrição</label>\n      <textarea class=\"form-control\" id=\"descricao\" formControlName=\"descricao\" rows=\"3\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cadastradoPor\">Cadastrado por</label>\n      <input type=\"text\" class=\"form-control\" id=\"cadastradoPor\" formControlName=\"cadastradoPor\">\n    </div>\n\n    <div style=\"text-align:center\">\n      <button type=\"submit\" class=\"btn btn-primary\">Finalizar</button>\n    </div>\n  \n    <router-outlet></router-outlet>\n  </div>\n\n  <div style=\"margin-top: 20px\" *ngIf=\"formulario\" >\n    <div>Detalhes do form</div>\n    <pre>Form válido: {{ formulario.status }}</pre>\n    <!--pre>Form submetido: {{ form.submitted }}</pre -->\n    <pre>Valores: <br>{{ formulario.value | json }}</pre>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/elementos/cadastro-comportamento/cadastro-comportamento.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/elementos/cadastro-comportamento/cadastro-comportamento.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRvcy9jYWRhc3Ryby1jb21wb3J0YW1lbnRvL2NhZGFzdHJvLWNvbXBvcnRhbWVudG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/elementos/cadastro-comportamento/cadastro-comportamento.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/elementos/cadastro-comportamento/cadastro-comportamento.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CadastroComportamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComportamentoComponent", function() { return CadastroComportamentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_comportamento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/comportamento */ "./src/models/comportamento.ts");
/* harmony import */ var _form_base_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form-base/form-base.component */ "./src/app/form-base/form-base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_url_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/url.enum */ "./src/models/url.enum.ts");
/* harmony import */ var _services_verifica_nome_verifica_nome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/verifica-nome/verifica-nome.service */ "./src/app/services/verifica-nome/verifica-nome.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CadastroComportamentoComponent = /** @class */ (function (_super) {
    __extends(CadastroComportamentoComponent, _super);
    function CadastroComportamentoComponent(formBuilder, http, verificaNomeService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.http = http;
        _this.verificaNomeService = verificaNomeService;
        _this.title = 'Cadastro de Comportamento';
        _this.comportamento = {};
        _this.comportamentos = [];
        _this.nomeComplemento = function (control) {
            var nome = control.get('nome');
            var complemento = control.get('complemento');
            return _this.verificaNomeService.verificarNome(nome.value, complemento.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (nomeExiste) { return nomeExiste ? { nomeInvalido: true } : null; }));
        };
        return _this;
    }
    CadastroComportamentoComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            nomeCompleto: this.formBuilder.group({
                nome: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                complemento: [""]
            }, { asyncValidator: this.nomeComplemento.bind(this) }),
            descricao: [""],
            cadastradoPor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.testaHTTP();
    };
    CadastroComportamentoComponent.prototype.submit = function () {
        var _this = this;
        var url = _models_url_enum__WEBPACK_IMPORTED_MODULE_5__["Url"].URL_BASE + _models_url_enum__WEBPACK_IMPORTED_MODULE_5__["Url"].CADASTRO_COMPORTAMENTO;
        var comportamento = new _models_comportamento__WEBPACK_IMPORTED_MODULE_1__["Comportamento"](this.formulario.value.nomeCompleto.nome, this.formulario.value.nomeCompleto.complemento, this.formulario.value.descricao, this.formulario.value.cadastradoPor);
        this.http.post(url, comportamento).subscribe(function (result) {
            console.log(result);
            _this.success = true;
        }, function (error) {
            console.log(error);
            _this.nomeIndisponivel = true;
        });
    };
    CadastroComportamentoComponent.prototype.testaHTTP = function () {
        var _this = this;
        var url = _models_url_enum__WEBPACK_IMPORTED_MODULE_5__["Url"].URL_BASE + _models_url_enum__WEBPACK_IMPORTED_MODULE_5__["Url"].TODOS_ELEMENTOS;
        this.http.get(url).subscribe(function (result) {
            var resultList = result;
            //console.log(result);
            _this.comportamentos = resultList.map(function (v) { return new _models_comportamento__WEBPACK_IMPORTED_MODULE_1__["Comportamento"](v.name, v.complemento, v.descricao, v.cadastradoPor); });
            console.log(_this.comportamentos);
        }, function (error) { return alert('erro'); });
    };
    CadastroComportamentoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro-comportamento',
            template: __webpack_require__(/*! ./cadastro-comportamento.component.html */ "./src/app/elementos/cadastro-comportamento/cadastro-comportamento.component.html"),
            styles: [__webpack_require__(/*! ./cadastro-comportamento.component.scss */ "./src/app/elementos/cadastro-comportamento/cadastro-comportamento.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_verifica_nome_verifica_nome_service__WEBPACK_IMPORTED_MODULE_6__["VerificaNomeService"]])
    ], CadastroComportamentoComponent);
    return CadastroComportamentoComponent;
}(_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_2__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/elementos/cadastro-remedio/cadastro-remedio.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/elementos/cadastro-remedio/cadastro-remedio.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\">\n  <div style=\"text-align:center\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n  \n  <div class=\"container\">\n    <div class=\"container\">\n\n    <div class=\"form-row\" formGroupName=\"nomeCompleto\">\n      <div class=\"form-group col-md-6\" [ngClass]=\"aplicaCssErro('nomeCompleto.nome')\">\n        <label for=\"nome\">Nome</label>\n        <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"complemento\">Complemento</label>\n        <input type=\"text\" class=\"form-control\" id=\"complemento\" formControlName=\"complemento\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"descricao\">Descrição</label>\n      <textarea class=\"form-control\" id=\"descricao\" formControlName=\"descricao\" rows=\"3\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"fabricante\">Fabricante</label>\n      <input type=\"text\" class=\"form-control\" id=\"fabricante\" formControlName=\"fabricante\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cadastradoPor\">Cadastrado por</label>\n      <input type=\"text\" class=\"form-control\" id=\"cadastradoPor\" formControlName=\"cadastradoPor\">\n    </div>\n\n\n    <div class=\"row\" formArrayName=\"componentes\">\n      <div class=\"col-md-6\">\n        <div *ngFor=\"let componente of formulario.get('componentes').controls; index as i\">\n          <div class=\"card\" [formGroup]=\"componente\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Componente\n                <button class=\"btn\" (click)=\"removeComponente(i)\">Remover</button>\n              </h5>\n              <div class=\"form-row\">\n                <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\" placeholder=\"Nome\">\n                <input type=\"number\" class=\"form-control col\" id=\"valor\" formControlName=\"valor\" placeholder=\"Valor\">\n                <input type=\"text\" class=\"form-control col\" id=\"unidade\" formControlName=\"unidade\" placeholder=\"Unidade\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n      \n    <button class=\"btn\" (click)=\"addComponente()\" #scrollBottom>Novo componente</button>\n\n    </div>\n\n    <div style=\"text-align:center\">\n      <button type=\"submit\" class=\"btn btn-primary\">Finalizar</button>\n    </div>\n  \n    <router-outlet></router-outlet>\n  </div>\n\n  \n  <div style=\"margin-top: 20px\" *ngIf=\"formulario\" >\n    <div>Detalhes do form</div>\n    <pre>Form válido: {{ formulario.status }}</pre>\n    <!--pre>Form submetido: {{ form.submitted }}</pre -->\n    <pre>Valores: <br>{{ formulario.value | json }}</pre>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/elementos/cadastro-remedio/cadastro-remedio.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/elementos/cadastro-remedio/cadastro-remedio.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRvcy9jYWRhc3Ryby1yZW1lZGlvL2NhZGFzdHJvLXJlbWVkaW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/elementos/cadastro-remedio/cadastro-remedio.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/elementos/cadastro-remedio/cadastro-remedio.component.ts ***!
  \**************************************************************************/
/*! exports provided: CadastroRemedioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroRemedioComponent", function() { return CadastroRemedioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_base_form_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form-base/form-base.component */ "./src/app/form-base/form-base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_url_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/url.enum */ "./src/models/url.enum.ts");
/* harmony import */ var _models_remedio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/remedio */ "./src/models/remedio.ts");
/* harmony import */ var _services_verifica_nome_verifica_nome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/verifica-nome/verifica-nome.service */ "./src/app/services/verifica-nome/verifica-nome.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CadastroRemedioComponent = /** @class */ (function (_super) {
    __extends(CadastroRemedioComponent, _super);
    function CadastroRemedioComponent(formBuilder, http, verificaNomeService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.http = http;
        _this.verificaNomeService = verificaNomeService;
        _this.title = 'Cadastro de Remédio';
        _this.remedio = {};
        _this.quantidades = [];
        _this.nomeComplemento = function (control) {
            var nome = control.get('nome');
            var complemento = control.get('complemento');
            return _this.verificaNomeService.verificarNome(nome.value, complemento.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (nomeExiste) { return nomeExiste ? { nomeInvalido: true } : null; }));
        };
        return _this;
    }
    CadastroRemedioComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            nomeCompleto: this.formBuilder.group({
                nome: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                complemento: [""]
            }, { asyncValidator: this.nomeComplemento.bind(this) }),
            descricao: [""],
            fabricante: [""],
            cadastradoPor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            componentes: this.buildComponentes()
        });
    };
    CadastroRemedioComponent.prototype.buildComponentes = function () {
        var values = this.quantidades.map(function (v) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](v.nome),
            unidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](v.unidade),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](v.valor)
        }); });
        return this.formBuilder.array(values);
    };
    CadastroRemedioComponent.prototype.submit = function () {
        var url = _models_url_enum__WEBPACK_IMPORTED_MODULE_4__["Url"].URL_BASE + _models_url_enum__WEBPACK_IMPORTED_MODULE_4__["Url"].CADASTRO_REMEDIO;
        var remedio = new _models_remedio__WEBPACK_IMPORTED_MODULE_5__["Remedio"](this.formulario.value.nomeCompleto.nome, this.formulario.value.nomeCompleto.complemento, this.formulario.value.descricao, this.formulario.value.fabricante, this.formulario.value.cadastradoPor, this.formulario.value.componentes);
        this.http.post(url, remedio).subscribe(function (result) {
            console.log(result);
        }, function (error) { return console.log(error); });
    };
    Object.defineProperty(CadastroRemedioComponent.prototype, "componentes", {
        get: function () { return this.formulario.get('componentes'); },
        enumerable: true,
        configurable: true
    });
    CadastroRemedioComponent.prototype.addComponente = function () {
        this.componentes.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            unidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }));
    };
    CadastroRemedioComponent.prototype.removeComponente = function (i) {
        this.componentes.removeAt(i);
    };
    CadastroRemedioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro-remedio',
            template: __webpack_require__(/*! ./cadastro-remedio.component.html */ "./src/app/elementos/cadastro-remedio/cadastro-remedio.component.html"),
            styles: [__webpack_require__(/*! ./cadastro-remedio.component.scss */ "./src/app/elementos/cadastro-remedio/cadastro-remedio.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_verifica_nome_verifica_nome_service__WEBPACK_IMPORTED_MODULE_6__["VerificaNomeService"]])
    ], CadastroRemedioComponent);
    return CadastroRemedioComponent;
}(_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_1__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/elementos/comportamentos/comportamentos.component.html":
/*!************************************************************************!*\
  !*** ./src/app/elementos/comportamentos/comportamentos.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  comportamentos works!\n</p>\n"

/***/ }),

/***/ "./src/app/elementos/comportamentos/comportamentos.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/elementos/comportamentos/comportamentos.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRvcy9jb21wb3J0YW1lbnRvcy9jb21wb3J0YW1lbnRvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/elementos/comportamentos/comportamentos.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/elementos/comportamentos/comportamentos.component.ts ***!
  \**********************************************************************/
/*! exports provided: ComportamentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComportamentosComponent", function() { return ComportamentosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComportamentosComponent = /** @class */ (function () {
    function ComportamentosComponent() {
        this.comportamento = {};
    }
    ComportamentosComponent.prototype.ngOnInit = function () {
    };
    ComportamentosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comportamentos',
            template: __webpack_require__(/*! ./comportamentos.component.html */ "./src/app/elementos/comportamentos/comportamentos.component.html"),
            styles: [__webpack_require__(/*! ./comportamentos.component.scss */ "./src/app/elementos/comportamentos/comportamentos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComportamentosComponent);
    return ComportamentosComponent;
}());



/***/ }),

/***/ "./src/app/elementos/consulta-componente/consulta-componente.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/elementos/consulta-componente/consulta-componente.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\">\n  <div style=\"text-align:center\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n  \n  <div class=\"container\">\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3\"></div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"nome\"></label>\n        <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\">\n      </div>\n    </div>\n\n    <div style=\"text-align:center\">\n      <button type=\"submit\" class=\"btn btn-primary\">Pesquisar</button>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"list-group col-md-12\">\n        <div *ngFor=\"let componente of componentes; index as i\">\n          <div class=\"list-group-item\">\n            {{ componente.nome }}\n            {{ componente.complemento }}\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <router-outlet></router-outlet>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/elementos/consulta-componente/consulta-componente.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/elementos/consulta-componente/consulta-componente.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRvcy9jb25zdWx0YS1jb21wb25lbnRlL2NvbnN1bHRhLWNvbXBvbmVudGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/elementos/consulta-componente/consulta-componente.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/elementos/consulta-componente/consulta-componente.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConsultaComponenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponenteComponent", function() { return ConsultaComponenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_componente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/componente */ "./src/models/componente.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_url_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/url.enum */ "./src/models/url.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_base_form_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../form-base/form-base.component */ "./src/app/form-base/form-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConsultaComponenteComponent = /** @class */ (function (_super) {
    __extends(ConsultaComponenteComponent, _super);
    function ConsultaComponenteComponent(formBuilder, http) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.http = http;
        _this.title = 'Consulta de Componentes';
        _this.componentes = [];
        return _this;
    }
    ConsultaComponenteComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            nome: [null]
        });
    };
    ConsultaComponenteComponent.prototype.submit = function () {
        var _this = this;
        var url = _models_url_enum__WEBPACK_IMPORTED_MODULE_3__["Url"].URL_BASE + _models_url_enum__WEBPACK_IMPORTED_MODULE_3__["Url"].CADASTRO_COMPONENTE;
        var termo = this.formulario.get("nome").value;
        var options = termo ?
            { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('nome', termo) } : {};
        this.http.get(url, options).subscribe(function (result) {
            var resultList = result;
            console.log(result);
            _this.componentes = resultList.map(function (v) { return new _models_componente__WEBPACK_IMPORTED_MODULE_1__["Componente"](v.nome, v.complemento); });
            console.log(_this.componentes);
        }, function (error) { return alert('erro'); });
    };
    ConsultaComponenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta-componente',
            template: __webpack_require__(/*! ./consulta-componente.component.html */ "./src/app/elementos/consulta-componente/consulta-componente.component.html"),
            styles: [__webpack_require__(/*! ./consulta-componente.component.scss */ "./src/app/elementos/consulta-componente/consulta-componente.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConsultaComponenteComponent);
    return ConsultaComponenteComponent;
}(_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_5__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/elementos/consulta-elemento/consulta-elemento.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/elementos/consulta-elemento/consulta-elemento.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\">\n  <div style=\"text-align:center\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n  \n  <div class=\"container\">\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3\"></div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"nome\"></label>\n        <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\">\n      </div>\n    </div>\n\n    <div style=\"text-align:center\">\n      <button type=\"submit\" class=\"btn btn-primary\">Pesquisar</button>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"list-group col-md-12\">\n        <div *ngFor=\"let elemento of elementos; index as i\">\n          <div class=\"list-group-item\">\n            {{ elemento.nome }}\n            {{ elemento.complemento }} - {{ elemento.descricao }}\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <router-outlet></router-outlet>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/elementos/consulta-elemento/consulta-elemento.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/elementos/consulta-elemento/consulta-elemento.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRvcy9jb25zdWx0YS1lbGVtZW50by9jb25zdWx0YS1lbGVtZW50by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/elementos/consulta-elemento/consulta-elemento.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/elementos/consulta-elemento/consulta-elemento.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConsultaElementoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaElementoComponent", function() { return ConsultaElementoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_base_form_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form-base/form-base.component */ "./src/app/form-base/form-base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_url_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/url.enum */ "./src/models/url.enum.ts");
/* harmony import */ var _models_elemento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/elemento */ "./src/models/elemento.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConsultaElementoComponent = /** @class */ (function (_super) {
    __extends(ConsultaElementoComponent, _super);
    function ConsultaElementoComponent(formBuilder, http) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.http = http;
        _this.title = 'Consulta de Elementos';
        _this.elementos = [];
        return _this;
    }
    ConsultaElementoComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            nome: [null]
        });
    };
    ConsultaElementoComponent.prototype.submit = function () {
        var _this = this;
        var url = _models_url_enum__WEBPACK_IMPORTED_MODULE_4__["Url"].URL_BASE + _models_url_enum__WEBPACK_IMPORTED_MODULE_4__["Url"].ELEMENTO;
        var termo = this.formulario.get("nome").value;
        var options = termo ?
            { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('nome', termo) } : {};
        this.http.get(url, options).subscribe(function (result) {
            var resultList = result;
            //console.log(result);
            _this.elementos = resultList.map(function (v) { return new _models_elemento__WEBPACK_IMPORTED_MODULE_5__["Elemento"](v.name, v.complemento, v.descricao, v.cadastradoPor); });
            console.log(_this.elementos);
        }, function (error) { return alert('erro'); });
    };
    ConsultaElementoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta-elemento',
            template: __webpack_require__(/*! ./consulta-elemento.component.html */ "./src/app/elementos/consulta-elemento/consulta-elemento.component.html"),
            styles: [__webpack_require__(/*! ./consulta-elemento.component.scss */ "./src/app/elementos/consulta-elemento/consulta-elemento.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ConsultaElementoComponent);
    return ConsultaElementoComponent;
}(_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_1__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/elementos/elementos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/elementos/elementos.module.ts ***!
  \***********************************************/
/*! exports provided: ElementosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementosModule", function() { return ElementosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _comportamentos_comportamentos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comportamentos/comportamentos.component */ "./src/app/elementos/comportamentos/comportamentos.component.ts");
/* harmony import */ var _cadastro_comportamento_cadastro_comportamento_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro-comportamento/cadastro-comportamento.component */ "./src/app/elementos/cadastro-comportamento/cadastro-comportamento.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _cadastro_alimento_cadastro_alimento_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro-alimento/cadastro-alimento.component */ "./src/app/elementos/cadastro-alimento/cadastro-alimento.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cadastro_remedio_cadastro_remedio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cadastro-remedio/cadastro-remedio.component */ "./src/app/elementos/cadastro-remedio/cadastro-remedio.component.ts");
/* harmony import */ var _cadastro_componente_cadastro_componente_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cadastro-componente/cadastro-componente.component */ "./src/app/elementos/cadastro-componente/cadastro-componente.component.ts");
/* harmony import */ var _consulta_componente_consulta_componente_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./consulta-componente/consulta-componente.component */ "./src/app/elementos/consulta-componente/consulta-componente.component.ts");
/* harmony import */ var _consulta_elemento_consulta_elemento_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./consulta-elemento/consulta-elemento.component */ "./src/app/elementos/consulta-elemento/consulta-elemento.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ElementosModule = /** @class */ (function () {
    function ElementosModule() {
    }
    ElementosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _comportamentos_comportamentos_component__WEBPACK_IMPORTED_MODULE_2__["ComportamentosComponent"],
                _cadastro_comportamento_cadastro_comportamento_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComportamentoComponent"],
                _cadastro_alimento_cadastro_alimento_component__WEBPACK_IMPORTED_MODULE_5__["CadastroAlimentoComponent"],
                _cadastro_remedio_cadastro_remedio_component__WEBPACK_IMPORTED_MODULE_8__["CadastroRemedioComponent"],
                _cadastro_componente_cadastro_componente_component__WEBPACK_IMPORTED_MODULE_9__["CadastroComponenteComponent"],
                _consulta_componente_consulta_componente_component__WEBPACK_IMPORTED_MODULE_10__["ConsultaComponenteComponent"],
                _consulta_elemento_consulta_elemento_component__WEBPACK_IMPORTED_MODULE_11__["ConsultaElementoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            exports: []
        })
    ], ElementosModule);
    return ElementosModule;
}());



/***/ }),

/***/ "./src/app/form-base/form-base.component.html":
/*!****************************************************!*\
  !*** ./src/app/form-base/form-base.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  form-base works!\n</p>\n"

/***/ }),

/***/ "./src/app/form-base/form-base.component.scss":
/*!****************************************************!*\
  !*** ./src/app/form-base/form-base.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tYmFzZS9mb3JtLWJhc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/form-base/form-base.component.ts":
/*!**************************************************!*\
  !*** ./src/app/form-base/form-base.component.ts ***!
  \**************************************************/
/*! exports provided: FormBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBaseComponent", function() { return FormBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormBaseComponent = /** @class */ (function () {
    function FormBaseComponent() {
    }
    FormBaseComponent.prototype.ngOnInit = function () {
    };
    FormBaseComponent.prototype.onSubmit = function () {
        if (this.formulario.valid) {
            this.submit();
        }
        else {
            console.log('formulario invalido');
            this.verificaValidacoesForm(this.formulario);
        }
    };
    FormBaseComponent.prototype.verificaValidacoesForm = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (campo) {
            var controle = formGroup.get(campo);
            controle.markAsDirty();
            controle.markAsTouched();
            if (controle instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"] || controle instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]) {
                _this.verificaValidacoesForm(controle);
            }
        });
    };
    FormBaseComponent.prototype.resetar = function () {
        this.formulario.reset();
    };
    FormBaseComponent.prototype.verificaValidTouched = function (campo) {
        return (!this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    };
    FormBaseComponent.prototype.verificaRequired = function (campo) {
        return (this.formulario.get(campo).hasError('required') &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    };
    FormBaseComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    FormBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-base',
            template: __webpack_require__(/*! ./form-base.component.html */ "./src/app/form-base/form-base.component.html"),
            styles: [__webpack_require__(/*! ./form-base.component.scss */ "./src/app/form-base/form-base.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormBaseComponent);
    return FormBaseComponent;
}());



/***/ }),

/***/ "./src/app/form-base/form-base.module.ts":
/*!***********************************************!*\
  !*** ./src/app/form-base/form-base.module.ts ***!
  \***********************************************/
/*! exports provided: FormBaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBaseModule", function() { return FormBaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormBaseModule = /** @class */ (function () {
    function FormBaseModule() {
    }
    FormBaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ]
        })
    ], FormBaseModule);
    return FormBaseModule;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Bem-vindo ao Sei-Saúde!\n  </h1>\n</div>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" href=\"#\">Sei-Saúde</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Consulta\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <li *ngFor=\"let consulta of consultas\">\n              <a class=\"dropdown-item\" routerLink=\"{{ consulta.path }}\"> {{ consulta.tipo }} </a>\n            </li>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Tratamento\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <li *ngFor=\"let tratamento of tratamentos\">\n              <a class=\"dropdown-item\" routerLink=\"{{ tratamento.path }}\"> {{ tratamento.tipo }} </a>\n            </li>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Cadastro\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <li *ngFor=\"let cadastro of cadastros\">\n              <a class=\"dropdown-item\" routerLink=\"{{ cadastro.path }}\"> {{ cadastro.tipo }} </a>\n            </li>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        //path deve ser igual ao definido em AppRoutingModule
        this.cadastros = [{ tipo: "Comportamento", path: "cadastro-comportamento" },
            { tipo: "Alimento", path: "cadastro-alimento" },
            { tipo: "Remédio", path: "cadastro-remedio" },
            { tipo: "Componente", path: "cadastro-componente" },
            { tipo: "Sintoma", path: "cadastro-sintoma" },
            { tipo: "Doença", path: "cadastro-doenca" },
            { tipo: "Indicação", path: "" },
            { tipo: "Paciente", path: "" }];
        this.consultas = [{ tipo: "Elemento", path: "consulta-elemento" },
            { tipo: "Sintoma/Doença", path: "consulta-situacao" },
            { tipo: "Componente", path: "consulta-componente" }];
        this.tratamentos = [{ tipo: "Novo", path: "" },
            { tipo: "Em andamento", path: "" }];
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/services/verifica-nome/verifica-nome.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/verifica-nome/verifica-nome.service.ts ***!
  \*****************************************************************/
/*! exports provided: VerificaNomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificaNomeService", function() { return VerificaNomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_url_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/url.enum */ "./src/models/url.enum.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerificaNomeService = /** @class */ (function () {
    function VerificaNomeService(http) {
        this.http = http;
    }
    VerificaNomeService.prototype.verificarNome = function (nome, complemento) {
        return this.http.get(_models_url_enum__WEBPACK_IMPORTED_MODULE_2__["Url"].URL_BASE + _models_url_enum__WEBPACK_IMPORTED_MODULE_2__["Url"].TODOS_ELEMENTOS)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (dados) { return dados.filter(function (v) { return v.name + v.complemento === nome + complemento; }); }), 
        //tap(console.log),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (dados) { return dados.length > 0; }));
    };
    VerificaNomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VerificaNomeService);
    return VerificaNomeService;
}());



/***/ }),

/***/ "./src/app/situacoes/cadastro-doenca/cadastro-doenca.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/situacoes/cadastro-doenca/cadastro-doenca.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\">\n  <div style=\"text-align:center\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n  \n  <div class=\"container\">\n\n    <div class=\"form-row\" formGroupName=\"nomeCompleto\">\n      <div class=\"form-group col-md-6\" [ngClass]=\"aplicaCssErro('nomeCompleto.nome')\">\n        <label for=\"nome\">Nome</label>\n        <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"complemento\">Complemento</label>\n        <input type=\"text\" class=\"form-control\" id=\"complemento\" formControlName=\"complemento\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"descricao\">Descrição</label>\n      <textarea class=\"form-control\" id=\"descricao\" formControlName=\"descricao\" rows=\"3\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cadastradoPor\">Cadastrado por</label>\n      <input type=\"text\" class=\"form-control\" id=\"cadastradoPor\" formControlName=\"cadastradoPor\">\n    </div>\n\n    <div style=\"text-align:center\">\n      <button type=\"submit\" class=\"btn btn-primary\">Finalizar</button>\n    </div>\n  \n    <router-outlet></router-outlet>\n  </div>\n\n  <div style=\"margin-top: 20px\" *ngIf=\"formulario\" >\n    <div>Detalhes do form</div>\n    <pre>Form válido: {{ formulario.status }}</pre>\n    <!--pre>Form submetido: {{ form.submitted }}</pre -->\n    <pre>Valores: <br>{{ formulario.value | json }}</pre>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/situacoes/cadastro-doenca/cadastro-doenca.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/situacoes/cadastro-doenca/cadastro-doenca.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdHVhY29lcy9jYWRhc3Ryby1kb2VuY2EvY2FkYXN0cm8tZG9lbmNhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/situacoes/cadastro-doenca/cadastro-doenca.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/situacoes/cadastro-doenca/cadastro-doenca.component.ts ***!
  \************************************************************************/
/*! exports provided: CadastroDoencaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroDoencaComponent", function() { return CadastroDoencaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_doenca__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/doenca */ "./src/models/doenca.ts");
/* harmony import */ var _form_base_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form-base/form-base.component */ "./src/app/form-base/form-base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_url_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/url.enum */ "./src/models/url.enum.ts");
/* harmony import */ var _services_verifica_nome_verifica_nome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/verifica-nome/verifica-nome.service */ "./src/app/services/verifica-nome/verifica-nome.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CadastroDoencaComponent = /** @class */ (function (_super) {
    __extends(CadastroDoencaComponent, _super);
    function CadastroDoencaComponent(formBuilder, http, verificaNomeService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.http = http;
        _this.verificaNomeService = verificaNomeService;
        _this.title = 'Cadastro de Doença';
        _this.doenca = {};
        _this.nomeComplemento = function (control) {
            var nome = control.get('nome');
            var complemento = control.get('complemento');
            return _this.verificaNomeService.verificarNome(nome.value, complemento.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (nomeExiste) { return nomeExiste ? { nomeInvalido: true } : null; }));
        };
        return _this;
    }
    CadastroDoencaComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            nomeCompleto: this.formBuilder.group({
                nome: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                complemento: [""]
            }),
            descricao: [null],
            cadastradoPor: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    CadastroDoencaComponent.prototype.submit = function () {
        var url = _models_url_enum__WEBPACK_IMPORTED_MODULE_5__["Url"].URL_BASE + _models_url_enum__WEBPACK_IMPORTED_MODULE_5__["Url"].CADASTRO_DOENCA;
        var doenca = new _models_doenca__WEBPACK_IMPORTED_MODULE_1__["Doenca"](this.formulario.value.nomeCompleto.nome, this.formulario.value.nomeCompleto.complemento, this.formulario.value.descricao, this.formulario.value.cadastradoPor);
        this.http.post(url, doenca).subscribe(function (result) {
            console.log(result);
        }, function (error) { return console.log(error); });
    };
    CadastroDoencaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro-doenca',
            template: __webpack_require__(/*! ./cadastro-doenca.component.html */ "./src/app/situacoes/cadastro-doenca/cadastro-doenca.component.html"),
            styles: [__webpack_require__(/*! ./cadastro-doenca.component.scss */ "./src/app/situacoes/cadastro-doenca/cadastro-doenca.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_verifica_nome_verifica_nome_service__WEBPACK_IMPORTED_MODULE_6__["VerificaNomeService"]])
    ], CadastroDoencaComponent);
    return CadastroDoencaComponent;
}(_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_2__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/situacoes/cadastro-sintoma/cadastro-sintoma.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/situacoes/cadastro-sintoma/cadastro-sintoma.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\">\n  <div style=\"text-align:center\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n  \n  <div class=\"container\">\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\" [ngClass]=\"aplicaCssErro('nome')\">\n        <label for=\"nome\">Nome</label>\n        <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"complemento\">Complemento</label>\n        <input type=\"text\" class=\"form-control\" id=\"complemento\" formControlName=\"complemento\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"descricao\">Descrição</label>\n      <textarea class=\"form-control\" id=\"descricao\" formControlName=\"descricao\" rows=\"3\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cadastradoPor\">Cadastrado por</label>\n      <input type=\"text\" class=\"form-control\" id=\"cadastradoPor\" formControlName=\"cadastradoPor\">\n    </div>\n\n    <div style=\"text-align:center\">\n      <button type=\"submit\" class=\"btn btn-primary\">Finalizar</button>\n    </div>\n  \n    <router-outlet></router-outlet>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/situacoes/cadastro-sintoma/cadastro-sintoma.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/situacoes/cadastro-sintoma/cadastro-sintoma.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdHVhY29lcy9jYWRhc3Ryby1zaW50b21hL2NhZGFzdHJvLXNpbnRvbWEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/situacoes/cadastro-sintoma/cadastro-sintoma.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/situacoes/cadastro-sintoma/cadastro-sintoma.component.ts ***!
  \**************************************************************************/
/*! exports provided: CadastroSintomaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroSintomaComponent", function() { return CadastroSintomaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_sintoma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/sintoma */ "./src/models/sintoma.ts");
/* harmony import */ var _form_base_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form-base/form-base.component */ "./src/app/form-base/form-base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_url_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/url.enum */ "./src/models/url.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CadastroSintomaComponent = /** @class */ (function (_super) {
    __extends(CadastroSintomaComponent, _super);
    function CadastroSintomaComponent(formBuilder, http) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.http = http;
        _this.title = 'Cadastro de Sintoma';
        _this.sintoma = {};
        return _this;
    }
    CadastroSintomaComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            complemento: [null],
            descricao: [null],
            cadastradoPor: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    CadastroSintomaComponent.prototype.submit = function () {
        var url = _models_url_enum__WEBPACK_IMPORTED_MODULE_5__["Url"].URL_BASE + _models_url_enum__WEBPACK_IMPORTED_MODULE_5__["Url"].CADASTRO_SINTOMA;
        var sintoma = new _models_sintoma__WEBPACK_IMPORTED_MODULE_1__["Sintoma"](this.formulario.value.nome, this.formulario.value.complemento, this.formulario.value.descricao, this.formulario.value.cadastradoPor);
        this.http.post(url, sintoma).subscribe(function (result) {
            console.log(result);
        }, function (error) { return console.log(error); });
    };
    CadastroSintomaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro-sintoma',
            template: __webpack_require__(/*! ./cadastro-sintoma.component.html */ "./src/app/situacoes/cadastro-sintoma/cadastro-sintoma.component.html"),
            styles: [__webpack_require__(/*! ./cadastro-sintoma.component.scss */ "./src/app/situacoes/cadastro-sintoma/cadastro-sintoma.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], CadastroSintomaComponent);
    return CadastroSintomaComponent;
}(_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_2__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/situacoes/consulta-situacao/consulta-situacao.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/situacoes/consulta-situacao/consulta-situacao.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\">\n  <div style=\"text-align:center\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n  \n  <div class=\"container\">\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3\"></div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"nome\"></label>\n        <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\">\n      </div>\n    </div>\n\n    <div style=\"text-align:center\">\n      <button type=\"submit\" class=\"btn btn-primary\">Pesquisar</button>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"list-group col-md-12\">\n        <div *ngFor=\"let situacao of situacoes; index as i\">\n          <div class=\"list-group-item\">\n            {{ situacao.nome }}\n            {{ situacao.complemento }} - {{ situacao.descricao }}\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <router-outlet></router-outlet>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/situacoes/consulta-situacao/consulta-situacao.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/situacoes/consulta-situacao/consulta-situacao.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdHVhY29lcy9jb25zdWx0YS1zaXR1YWNhby9jb25zdWx0YS1zaXR1YWNhby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/situacoes/consulta-situacao/consulta-situacao.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/situacoes/consulta-situacao/consulta-situacao.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConsultaSituacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaSituacaoComponent", function() { return ConsultaSituacaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_base_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form-base/form-base.component */ "./src/app/form-base/form-base.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_situacao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/situacao */ "./src/models/situacao.ts");
/* harmony import */ var _models_url_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/url.enum */ "./src/models/url.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConsultaSituacaoComponent = /** @class */ (function (_super) {
    __extends(ConsultaSituacaoComponent, _super);
    function ConsultaSituacaoComponent(formBuilder, http) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.http = http;
        _this.title = 'Consulta de Sintomas e Doenças';
        _this.situacoes = [];
        return _this;
    }
    ConsultaSituacaoComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            nome: [null]
        });
    };
    ConsultaSituacaoComponent.prototype.submit = function () {
        var _this = this;
        var url = _models_url_enum__WEBPACK_IMPORTED_MODULE_5__["Url"].URL_BASE + _models_url_enum__WEBPACK_IMPORTED_MODULE_5__["Url"].SITUACAO;
        var termo = this.formulario.get("nome").value;
        var options = termo ?
            { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('nome', termo) } : {};
        this.http.get(url, options).subscribe(function (result) {
            var resultList = result;
            console.log(result);
            _this.situacoes = resultList.map(function (v) { return new _models_situacao__WEBPACK_IMPORTED_MODULE_4__["Situacao"](v.name, v.complemento, v.descricao, v.cadastradoPor); });
            console.log(_this.situacoes);
        }, function (error) {
            alert('erro');
            console.log(error);
        });
    };
    ConsultaSituacaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta-situacao',
            template: __webpack_require__(/*! ./consulta-situacao.component.html */ "./src/app/situacoes/consulta-situacao/consulta-situacao.component.html"),
            styles: [__webpack_require__(/*! ./consulta-situacao.component.scss */ "./src/app/situacoes/consulta-situacao/consulta-situacao.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ConsultaSituacaoComponent);
    return ConsultaSituacaoComponent;
}(_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_2__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/situacoes/doencas/doencas.component.html":
/*!**********************************************************!*\
  !*** ./src/app/situacoes/doencas/doencas.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  doencas works!\n</p>\n"

/***/ }),

/***/ "./src/app/situacoes/doencas/doencas.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/situacoes/doencas/doencas.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdHVhY29lcy9kb2VuY2FzL2RvZW5jYXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/situacoes/doencas/doencas.component.ts":
/*!********************************************************!*\
  !*** ./src/app/situacoes/doencas/doencas.component.ts ***!
  \********************************************************/
/*! exports provided: DoencasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoencasComponent", function() { return DoencasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoencasComponent = /** @class */ (function () {
    function DoencasComponent() {
    }
    DoencasComponent.prototype.ngOnInit = function () {
    };
    DoencasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doencas',
            template: __webpack_require__(/*! ./doencas.component.html */ "./src/app/situacoes/doencas/doencas.component.html"),
            styles: [__webpack_require__(/*! ./doencas.component.scss */ "./src/app/situacoes/doencas/doencas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DoencasComponent);
    return DoencasComponent;
}());



/***/ }),

/***/ "./src/app/situacoes/sintomas/sintomas.component.html":
/*!************************************************************!*\
  !*** ./src/app/situacoes/sintomas/sintomas.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sintomas works!\n</p>\n"

/***/ }),

/***/ "./src/app/situacoes/sintomas/sintomas.component.scss":
/*!************************************************************!*\
  !*** ./src/app/situacoes/sintomas/sintomas.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdHVhY29lcy9zaW50b21hcy9zaW50b21hcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/situacoes/sintomas/sintomas.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/situacoes/sintomas/sintomas.component.ts ***!
  \**********************************************************/
/*! exports provided: SintomasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SintomasComponent", function() { return SintomasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SintomasComponent = /** @class */ (function () {
    function SintomasComponent() {
    }
    SintomasComponent.prototype.ngOnInit = function () {
    };
    SintomasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sintomas',
            template: __webpack_require__(/*! ./sintomas.component.html */ "./src/app/situacoes/sintomas/sintomas.component.html"),
            styles: [__webpack_require__(/*! ./sintomas.component.scss */ "./src/app/situacoes/sintomas/sintomas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SintomasComponent);
    return SintomasComponent;
}());



/***/ }),

/***/ "./src/app/situacoes/situacoes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/situacoes/situacoes.module.ts ***!
  \***********************************************/
/*! exports provided: SituacoesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituacoesModule", function() { return SituacoesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _sintomas_sintomas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sintomas/sintomas.component */ "./src/app/situacoes/sintomas/sintomas.component.ts");
/* harmony import */ var _doencas_doencas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doencas/doencas.component */ "./src/app/situacoes/doencas/doencas.component.ts");
/* harmony import */ var _cadastro_sintoma_cadastro_sintoma_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro-sintoma/cadastro-sintoma.component */ "./src/app/situacoes/cadastro-sintoma/cadastro-sintoma.component.ts");
/* harmony import */ var _cadastro_doenca_cadastro_doenca_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro-doenca/cadastro-doenca.component */ "./src/app/situacoes/cadastro-doenca/cadastro-doenca.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _consulta_situacao_consulta_situacao_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./consulta-situacao/consulta-situacao.component */ "./src/app/situacoes/consulta-situacao/consulta-situacao.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SituacoesModule = /** @class */ (function () {
    function SituacoesModule() {
    }
    SituacoesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_sintomas_sintomas_component__WEBPACK_IMPORTED_MODULE_3__["SintomasComponent"],
                _doencas_doencas_component__WEBPACK_IMPORTED_MODULE_4__["DoencasComponent"],
                _cadastro_sintoma_cadastro_sintoma_component__WEBPACK_IMPORTED_MODULE_5__["CadastroSintomaComponent"],
                _cadastro_doenca_cadastro_doenca_component__WEBPACK_IMPORTED_MODULE_6__["CadastroDoencaComponent"],
                _consulta_situacao_consulta_situacao_component__WEBPACK_IMPORTED_MODULE_9__["ConsultaSituacaoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ]
        })
    ], SituacoesModule);
    return SituacoesModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/models/alimento.ts":
/*!********************************!*\
  !*** ./src/models/alimento.ts ***!
  \********************************/
/*! exports provided: Alimento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alimento", function() { return Alimento; });
var Alimento = /** @class */ (function () {
    function Alimento(nome, complemento, descricao, fabricante, cadastradoPor, componentes, valNutricionais) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.fabricante = fabricante;
        this.cadastradoPor = cadastradoPor;
        this.componentes = componentes;
        this.valNutricionais = valNutricionais;
    }
    return Alimento;
}());



/***/ }),

/***/ "./src/models/componente.ts":
/*!**********************************!*\
  !*** ./src/models/componente.ts ***!
  \**********************************/
/*! exports provided: Componente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Componente", function() { return Componente; });
var Componente = /** @class */ (function () {
    function Componente(nome, complemento) {
        this.nome = nome;
        this.complemento = complemento;
    }
    return Componente;
}());



/***/ }),

/***/ "./src/models/comportamento.ts":
/*!*************************************!*\
  !*** ./src/models/comportamento.ts ***!
  \*************************************/
/*! exports provided: Comportamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comportamento", function() { return Comportamento; });
var Comportamento = /** @class */ (function () {
    function Comportamento(nome, complemento, descricao, cadastradoPor) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.cadastradoPor = cadastradoPor;
    }
    return Comportamento;
}());



/***/ }),

/***/ "./src/models/doenca.ts":
/*!******************************!*\
  !*** ./src/models/doenca.ts ***!
  \******************************/
/*! exports provided: Doenca */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doenca", function() { return Doenca; });
var Doenca = /** @class */ (function () {
    function Doenca(nome, complemento, descricao, cadastradoPor) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.cadastradoPor = cadastradoPor;
    }
    return Doenca;
}());



/***/ }),

/***/ "./src/models/elemento.ts":
/*!********************************!*\
  !*** ./src/models/elemento.ts ***!
  \********************************/
/*! exports provided: Elemento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elemento", function() { return Elemento; });
var Elemento = /** @class */ (function () {
    function Elemento(nome, complemento, descricao, cadastradoPor) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.cadastradoPor = cadastradoPor;
    }
    return Elemento;
}());



/***/ }),

/***/ "./src/models/remedio.ts":
/*!*******************************!*\
  !*** ./src/models/remedio.ts ***!
  \*******************************/
/*! exports provided: Remedio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Remedio", function() { return Remedio; });
var Remedio = /** @class */ (function () {
    function Remedio(nome, complemento, descricao, fabricante, cadastradoPor, componentes) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.fabricante = fabricante;
        this.cadastradoPor = cadastradoPor;
        this.componentes = componentes;
    }
    return Remedio;
}());



/***/ }),

/***/ "./src/models/sintoma.ts":
/*!*******************************!*\
  !*** ./src/models/sintoma.ts ***!
  \*******************************/
/*! exports provided: Sintoma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sintoma", function() { return Sintoma; });
var Sintoma = /** @class */ (function () {
    function Sintoma(nome, complemento, descricao, cadastradoPor) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.cadastradoPor = cadastradoPor;
    }
    return Sintoma;
}());



/***/ }),

/***/ "./src/models/situacao.ts":
/*!********************************!*\
  !*** ./src/models/situacao.ts ***!
  \********************************/
/*! exports provided: Situacao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Situacao", function() { return Situacao; });
var Situacao = /** @class */ (function () {
    function Situacao(nome, complemento, descricao, cadastradoPor) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.cadastradoPor = cadastradoPor;
    }
    return Situacao;
}());



/***/ }),

/***/ "./src/models/url.enum.ts":
/*!********************************!*\
  !*** ./src/models/url.enum.ts ***!
  \********************************/
/*! exports provided: Url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
var Url;
(function (Url) {
    Url["URL_BASE"] = "http://localhost:8080";
    //URL_BASE = "https://sei-saude.herokuapp.com",
    Url["ELEMENTO"] = "/elemento";
    Url["TODOS_ELEMENTOS"] = "/all_elemento";
    Url["CADASTRO_COMPORTAMENTO"] = "/elemento/comportamento";
    Url["CADASTRO_COMPONENTE"] = "/elemento/componente";
    Url["CADASTRO_ALIMENTO"] = "/elemento/alimento";
    Url["CADASTRO_REMEDIO"] = "/elemento/remedio";
    Url["SITUACAO"] = "/situacao";
    Url["TODOS_SINTOMAS"] = "/all_sintoma";
    Url["CADASTRO_SINTOMA"] = "/situacao/sintoma";
    Url["CADASTRO_DOENCA"] = "/situacao/doenca";
    Url["PACIENTE"] = "/paciente";
    Url["INDICACAO"] = "/indicacao";
    Url["TRATAMENTO"] = "/tratamento";
    Url["TRATAMENTO_PACIENTE"] = "/tratamento-paciente";
})(Url || (Url = {}));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vinicius/git/SeiSaude/SeiSaude/SeiSaude-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map