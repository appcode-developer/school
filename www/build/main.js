webpackJsonp([0],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SesionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resetpwd_resetpwd__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SesionPage = (function () {
    function SesionPage(navCtrl, authService, navParams, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.submitAttempt = false;
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])]
        });
    }
    SesionPage.prototype.elementChanged = function (input) {
        var field = input.inputControl.name;
        this[field + "Changed"] = true;
    };
    SesionPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    SesionPage.prototype.resetPwd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__resetpwd_resetpwd__["a" /* ResetpwdPage */]);
    };
    SesionPage.prototype.loginUser = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authService.doLogin(this.loginForm.value.email, this.loginForm.value.password).then(function (authService) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    return SesionPage;
}());
SesionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sesion',template:/*ion-inline-start:"/Users/gcort/Desktop/school/src/pages/sesion/sesion.html"*/'<ion-header>\n  <ion-navbar color="pizarra">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n    <ion-item>\n      <ion-label stacked>Username</ion-label>\n      <ion-input #email formControlName="email" \n        placeholder="Your email address"\n        [class.invalid]="!loginForm.controls.email.valid && (emailChanged || submitAttempt)" ></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  && (emailChanged || submitAttempt)">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input #password formControlName="password" type="password" \n        placeholder="Your password"\n        [class.invalid]="!loginForm.controls.password.valid && (passwordChanged || submitAttempt)" ></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid  && (passwordChanged || submitAttempt)">\n      <p>Your password needs more than 6 characters.</p>\n    </ion-item>\n    <button ion-button block type="submit">\n      Login\n    </button>\n  </form>\n\n  <button ion-button block clear (click)="register()">\n    No tienes cuenta? Regístrate ahora.\n  </button>\n  <button ion-button block clear (click)="resetPwd()">\n    Olvidaste tú Cuenta?\n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/gcort/Desktop/school/src/pages/sesion/sesion.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], SesionPage);

//# sourceMappingURL=sesion.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradebasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mabrader_mabrader__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GradebasePage = (function () {
    function GradebasePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GradebasePage.prototype.comprarProductos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mabrader_mabrader__["a" /* MabraderPage */]);
    };
    return GradebasePage;
}());
GradebasePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-gradebase',template:/*ion-inline-start:"/Users/gcort/Desktop/school/src/pages/gradebase/gradebase.html"*/'<ion-header>\n  <ion-navbar color="pizarra">\n    <ion-title>Grados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/grade%2Fgrade01.png?alt=media&token=3ab80a6a-2d14-4f3e-8f0c-c5a5d83fefa2">\n      </ion-thumbnail>\n      <h2>Maternal</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="comprarProductos()" clear item-end>Ver</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/grade%2Fgrade02.png?alt=media&token=1394a48c-d894-4e01-a20a-20a0228cf4cb">\n      </ion-thumbnail>\n      <h2>Pre-Kinder</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="comprarCarnes()" clear item-end>Ver</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/grade%2Fgrade03.png?alt=media&token=3b555301-e280-49ef-a263-832a7b44bc20">\n      </ion-thumbnail>\n      <h2>Kinder</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="comprarFarma()" clear item-end>Ver</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/grade%2Fgrade04.png?alt=media&token=40ceb7a5-9e05-4e86-b60c-f0670a3cdde3">\n      </ion-thumbnail>\n      <h2>Primer Grado</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="atencionHospi()" clear item-end>Ver</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/grade%2Fgrade05.png?alt=media&token=b18e5e79-6c54-4193-a4c3-c21eb09ad251">\n      </ion-thumbnail>\n      <h2>Segundo Grado</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="guardaAuto()" clear item-end>Ver</button>\n    </ion-item>\n\n     <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/grade%2Fgrade06.png?alt=media&token=55fa7167-773e-470f-ba20-700e215b3145">\n      </ion-thumbnail>\n      <h2>Tercer Grado</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="retiraCajero()" clear item-end>Ver</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/grade%2Fgrade07.png?alt=media&token=4386d338-5bf6-4d0b-ab03-590b9e24a832">\n      </ion-thumbnail>\n      <h2>Cuarto Grado</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="retiraCajero()" clear item-end>Ver</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/grade%2Fgrade08.png?alt=media&token=bf620828-e519-41bb-a779-5ca06a3d1a6f">\n      </ion-thumbnail>\n      <h2>Quinto Grado</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="retiraCajero()" clear item-end>Ver</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/grade%2Fgrade09.png?alt=media&token=456392d6-6884-46e5-8044-040233eb79fb">\n      </ion-thumbnail>\n      <h2>Sexto Grado</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="retiraCajero()" clear item-end>Ver</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/years%2Fanios01.png?alt=media&token=1fc85cf3-b342-400e-89fe-9f43152966f0">\n      </ion-thumbnail>\n      <h2>Séptimo Grado</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="retiraCajero()" clear item-end>Ver</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/years%2Fanios02.png?alt=media&token=cd1c168c-04f4-48b8-a0c5-e3606d454fdb">\n      </ion-thumbnail>\n      <h2>Octavo Grado</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="retiraCajero()" clear item-end>Ver</button>\n    </ion-item>\n        <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/years%2Fanios03.png?alt=media&token=19cc4c1f-f4bd-4742-a84c-a944d7818ff2">\n      </ion-thumbnail>\n      <h2>Noveno Grado</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="retiraCajero()" clear item-end>Ver</button>\n    </ion-item>\n        <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/years%2Fanios04.png?alt=media&token=12ab8802-0bd4-49a1-8e00-e5dccb4edc54">\n      </ion-thumbnail>\n      <h2>Décimo Grado</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="retiraCajero()" clear item-end>Ver</button>\n    </ion-item>\n        <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/years%2Fanios05.png?alt=media&token=b5cce31e-4e69-423d-8999-29d711283d1a">\n      </ion-thumbnail>\n      <h2>Undécimo Grado</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="retiraCajero()" clear item-end>Ver</button>\n    </ion-item>\n        <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/years%2Fanios06.png?alt=media&token=260dc9df-8de0-487f-a567-802d06008d39">\n      </ion-thumbnail>\n      <h2>Duodécimo Grado</h2>\n      <p>Libros de Texto</p>\n      <button ion-button (click)="retiraCajero()" clear item-end>Ver</button>\n    </ion-item>\n\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/gcort/Desktop/school/src/pages/gradebase/gradebase.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], GradebasePage);

//# sourceMappingURL=gradebase.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MabraderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MabraderPage = (function () {
    function MabraderPage() {
    }
    return MabraderPage;
}());
MabraderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mabrader',template:/*ion-inline-start:"/Users/gcort/Desktop/school/src/pages/mabrader/mabrader.html"*/'<ion-header>\n  <ion-navbar color="dc">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tus Libros</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<ion-item >\n  <ion-thumbnail item-left>\n    <img  src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/books%2Fbook01.png?alt=media&token=4384405e-190e-48c1-9c77-7f64f11ea4d5">\n  </ion-thumbnail>\n  <ion-label>\n  <h3>Trampolín</h3>\n  <p>Susaeta</p>\n  </ion-label>\n  <ion-checkbox item-right color="secondary" checked="false"></ion-checkbox>\n</ion-item>\n\n<ion-item>\n  <ion-thumbnail item-left>\n    <img  src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/books%2Fbook02.png?alt=media&token=9fac540c-9f53-4f10-b80d-9d1744c12d98">\n  </ion-thumbnail>\n  <ion-label>\n  <h3>Learning Journeys SE Pkg Pre-K 2</h3>\n  <p>Pearson</p>\n  </ion-label>\n  <ion-checkbox item-right color="secondary" checked="false"></ion-checkbox>\n</ion-item>\n<ion-card>\n  <ion-card-header class="color-bg">\n    <ion-icon name="school"></ion-icon> Selecciona tu Colegio\n  </ion-card-header>\n  <ion-card-content>\n     <ion-item>\n    <ion-label>Colegio:</ion-label>\n    <ion-select [(ngModel)]="Colegios" multiple="false" cancelText="Cancelar" okText="Listo">\n      <ion-option value="bacon">Brader</ion-option>\n      <ion-option value="olives">Real</ion-option>\n      <ion-option value="xcheese">Atenea</ion-option>\n      <ion-option value="xcheese">La Salle</ion-option>\n      <ion-option value="xcheese">Cultural</ion-option>\n    </ion-select>\n  </ion-item>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-header class="color-bg">\n    <ion-icon name="color-palette"></ion-icon> Color de Forro\n  </ion-card-header>\n  <ion-card-content>\n     <ion-item>\n    <ion-label>Tu color de forro:</ion-label>\n    <ion-select [(ngModel)]="Color" multiple="true" cancelText="Cancelar" okText="Listo">\n      <ion-option value="bacon">Rojo</ion-option>\n      <ion-option value="olives">Azul</ion-option>\n      <ion-option value="xcheese">Blanco</ion-option>\n    </ion-select>\n  </ion-item>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  <ion-card-header class="color-bg">\n    <ion-icon name="cash"></ion-icon> Forma de Pago\n  </ion-card-header>\n  <ion-card-content>\n     <ion-item>\n    <ion-label>Pagaras con:</ion-label>\n    <ion-select [(ngModel)]="Pago" multiple="true" cancelText="Cancelar" okText="Listo">\n      <ion-option value="bacon">Efectivo</ion-option>\n      <ion-option value="olives">Tarjeta Crédito</ion-option>\n      <ion-option value="xcheese">ACH</ion-option>\n    </ion-select>\n  </ion-item>\n  </ion-card-content>\n</ion-card>\n <button color="secondary" ion-button block type="submit">\n      Enviar Datos\n    </button>\n\n</ion-content>'/*ion-inline-end:"/Users/gcort/Desktop/school/src/pages/mabrader/mabrader.html"*/
    })
], MabraderPage);

//# sourceMappingURL=mabrader.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    function RegisterPage(navCtrl, authService, navParams, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.submitAttempt = false;
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.registerForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    RegisterPage.prototype.elementChanged = function (input) {
        var field = input.inputControl.name;
        this[field + "Changed"] = true;
    };
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.registerForm.valid) {
            console.log(this.registerForm.value);
        }
        else {
            this.authService.register(this.registerForm.value.email, this.registerForm.value.password).then(function (authService) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/gcort/Desktop/school/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar color="pizarra">\n    <ion-title>Regístrate</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="registerForm" (submit)="doRegister()" novalidate>\n    <ion-item>\n      <ion-label stacked>Username</ion-label>\n      <ion-input  #email formControlName="email" type="email" \n        placeholder="Your email address"\n         ></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!registerForm.controls.email.valid  && (emailChanged || submitAttempt)">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input  #password formControlName="password" type="password" \n        placeholder="Your password"\n        ></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!registerForm.controls.password.valid  && (passwordChanged || submitAttempt)">\n      <p>Your password needs more than 6 characters.</p>\n    </ion-item>\n    <button color="secondary" ion-button block type="submit">\n      Regístrarse\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/gcort/Desktop/school/src/pages/register/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetpwdPage = (function () {
    function ResetpwdPage(navCtrl, authService, navParams, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.emailChanged = false;
        this.submitAttempt = false;
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.resetpwdForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])]
        });
    }
    ResetpwdPage.prototype.elementChanged = function (input) {
        var field = input.inputControl.name;
        this[field + "Changed"] = true;
    };
    ResetpwdPage.prototype.resetPwd = function () {
        var _this = this;
        if (!this.resetpwdForm.valid) {
            console.log(this.resetpwdForm.value);
        }
        else {
            this.authService.resetPassword(this.resetpwdForm.value.email).then(function (authService) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    return ResetpwdPage;
}());
ResetpwdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-resetpwd',template:/*ion-inline-start:"/Users/gcort/Desktop/school/src/pages/resetpwd/resetpwd.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Recuperar Cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="resetpwdForm" (submit)="resetPwd()" novalidate>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input #email formControlName="email" type="email" \n        placeholder="Your email address"\n        ></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!resetpwdForm.controls.email.valid  && (emailChanged || submitAttempt)">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n    <button ion-button block type="submit">\n      Recuperar Cuenta\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/gcort/Desktop/school/src/pages/resetpwd/resetpwd.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], ResetpwdPage);

//# sourceMappingURL=resetpwd.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WalkPage = (function () {
    function WalkPage() {
        this.slides = [
            {
                titulo: "Buscar Colegio",
                texto: "Busca el establecimiento en el cual estas cursando tus estudios",
                imagen: "assets/image/phone.png",
                color: "#4BC14B",
            },
            {
                titulo: "Selecciona el Grado",
                texto: "Selecciona el grado o año en el cuál estas cursando",
                imagen: "assets/image/list.png",
                color: "#198de0",
            },
            {
                titulo: "Selecciona tus Libros",
                texto: "Selecciona los libros que te han pedido en tu escuela",
                imagen: "assets/image/books.png",
                color: "#40ba91",
            },
            {
                titulo: "Selecciona la forma de Pago",
                texto: "Una vez que ya has seleccionados los libros de la lista, procede a seleccionar la forma de pago que más te acomode",
                imagen: "assets/image/pago.png",
                color: "#f1c433",
            }
        ];
    }
    return WalkPage;
}());
WalkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-walk',template:/*ion-inline-start:"/Users/gcort/Desktop/school/src/pages/walk/walk.html"*/'<ion-header>\n  <ion-navbar color="pizarra">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Como comprar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<ion-slides>\n\n  <ion-slide  *ngFor="let slide of slides" [ngStyle]="{\'background-color\': slide.color}">\n    <img class="image_walk" [src]="slide.imagen"/>\n    <h3 class="color_walk">{{slide.titulo}}</h3>\n    <p class="text_walk">{{slide.texto}}</p>\n  </ion-slide>\n\n</ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/Users/gcort/Desktop/school/src/pages/walk/walk.html"*/
    })
], WalkPage);

//# sourceMappingURL=walk.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_gradebase_gradebase__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mabrader_mabrader__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_walk_walk__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sesion_sesion__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bookbrader_bookbrader__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_resetpwd_resetpwd__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_auth_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// Import the AF2 Module



// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyBod7KNBBGk22VOM_h4MliQT1iYNkG9gf4",
    authDomain: "proionic-111e8.firebaseapp.com",
    databaseURL: "https://proionic-111e8.firebaseio.com",
    projectId: "proionic-111e8",
    storageBucket: "proionic-111e8.appspot.com",
    messagingSenderId: "832130569102"
};
__WEBPACK_IMPORTED_MODULE_13_firebase___default.a.initializeApp(firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_gradebase_gradebase__["a" /* GradebasePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_walk_walk__["a" /* WalkPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_sesion_sesion__["a" /* SesionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_resetpwd_resetpwd__["a" /* ResetpwdPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_bookbrader_bookbrader__["a" /* BookbraderPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_mabrader_mabrader__["a" /* MabraderPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_gradebase_gradebase__["a" /* GradebasePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_walk_walk__["a" /* WalkPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_sesion_sesion__["a" /* SesionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_resetpwd_resetpwd__["a" /* ResetpwdPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_bookbrader_bookbrader__["a" /* BookbraderPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_mabrader_mabrader__["a" /* MabraderPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_walk_walk__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sesion_sesion__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import firebase from 'firebase';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Colegios', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "school" },
            { title: 'Cómo comprar', component: __WEBPACK_IMPORTED_MODULE_5__pages_walk_walk__["a" /* WalkPage */], icon: "cart" },
            { title: 'Salir', component: __WEBPACK_IMPORTED_MODULE_6__pages_sesion_sesion__["a" /* SesionPage */], icon: "exit" },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/gcort/Desktop/school/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header no-border>\n    <ion-toolbar color="pizarra">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="custom" >\n<ion-card text-center class="hide-card">\n    <img src="/assets/image/school_avatar.png" class="custom-avatar"/>\n    <h2>Encuentra tu Libro</h2>\n    <p>Selecciona tu colegio, encuentra y compra tu lista completa de libros de texto</p>\n    \n</ion-card>\n    <ion-list >\n      <button menuClose ion-item  *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n{{ p.name }}\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/gcort/Desktop/school/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookbraderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BookbraderPage = (function () {
    function BookbraderPage() {
    }
    return BookbraderPage;
}());
BookbraderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bookbrader',template:/*ion-inline-start:"/Users/gcort/Desktop/school/src/pages/bookbrader/bookbrader.html"*/'<ion-header>\n  <ion-navbar color="dc">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tus Libros</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<ion-item >\n  <ion-thumbnail item-left>\n    <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/books%2Fbook01.png?alt=media&token=a22bfba5-2331-41a8-bd3f-c85d15aa10f9">\n  </ion-thumbnail>\n  <ion-label>\n  <h2>El Principito</h2>\n  <p>Edmundo de amicis</p>\n  </ion-label>\n  <ion-checkbox item-right color="secondary" checked="false"></ion-checkbox>\n</ion-item>\n\n<ion-item>\n  <ion-thumbnail item-left>\n    <img src="https://firebasestorage.googleapis.com/v0/b/schoolbooks-db396.appspot.com/o/books%2Fbook02.png?alt=media&token=9e009b13-ba3b-4bb2-9580-38d563df6a26">\n  </ion-thumbnail>\n  <ion-label>\n  <h2>El Principito</h2>\n  <p>Edmundo de amicis</p>\n  </ion-label>\n  <ion-checkbox item-right color="secondary" checked="false"></ion-checkbox>\n</ion-item>\n<ion-card>\n  <ion-card-header class="color-bg">\n    <ion-icon name="school"></ion-icon> Selecciona tu Colegio\n  </ion-card-header>\n  <ion-card-content>\n     <ion-item>\n    <ion-label>Colegio:</ion-label>\n    <ion-select [(ngModel)]="Colegios" multiple="false" cancelText="Cancelar" okText="Listo">\n      <ion-option value="bacon">Brader</ion-option>\n      <ion-option value="olives">Real</ion-option>\n      <ion-option value="xcheese">Atenea</ion-option>\n      <ion-option value="xcheese">La Salle</ion-option>\n      <ion-option value="xcheese">Cultural</ion-option>\n    </ion-select>\n  </ion-item>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-header class="color-bg">\n    <ion-icon name="color-palette"></ion-icon> Color de Forro\n  </ion-card-header>\n  <ion-card-content>\n     <ion-item>\n    <ion-label>Tu color de forro:</ion-label>\n    <ion-select [(ngModel)]="Color" multiple="true" cancelText="Cancelar" okText="Listo">\n      <ion-option value="bacon">Rojo</ion-option>\n      <ion-option value="olives">Azul</ion-option>\n      <ion-option value="xcheese">Blanco</ion-option>\n    </ion-select>\n  </ion-item>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  <ion-card-header class="color-bg">\n    <ion-icon name="cash"></ion-icon> Forma de Pago\n  </ion-card-header>\n  <ion-card-content>\n     <ion-item>\n    <ion-label>Pagaras con:</ion-label>\n    <ion-select [(ngModel)]="Pago" multiple="true" cancelText="Cancelar" okText="Listo">\n      <ion-option value="bacon">Efectivo</ion-option>\n      <ion-option value="olives">Tarjeta Crédito</ion-option>\n      <ion-option value="xcheese">ACH</ion-option>\n    </ion-select>\n  </ion-item>\n  </ion-card-content>\n</ion-card>\n <button color="secondary" ion-button block type="submit">\n      Enviar Datos\n    </button>\n\n</ion-content>'/*ion-inline-end:"/Users/gcort/Desktop/school/src/pages/bookbrader/bookbrader.html"*/
    })
], BookbraderPage);

//# sourceMappingURL=bookbrader.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gradebase_gradebase__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sesion_sesion__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sesion_sesion__["a" /* SesionPage */]);
            }
        });
    }
    HomePage.prototype.myDepartamento = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gradebase_gradebase__["a" /* GradebasePage */]);
    };
    HomePage.prototype.myRules = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gradebase_gradebase__["a" /* GradebasePage */]);
    };
    HomePage.prototype.listaProductos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gradebase_gradebase__["a" /* GradebasePage */]);
    };
    HomePage.prototype.verCiudad = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gradebase_gradebase__["a" /* GradebasePage */]);
    };
    HomePage.prototype.verGradecult = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gradebase_gradebase__["a" /* GradebasePage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/gcort/Desktop/school/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="pizarra">\n   <button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n    <ion-title>Colegios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n    <img src="assets/image/brader.png"/>\n    <div class="card-title"><button ion-button clear color="secondary" (click)="myDepartamento()"></button></div>\n    <p></p>\n    <div class="card-subtitle">Encuentra tu lista de Libros</div>\n  </ion-card>\n\n   <ion-card>\n    <img src="assets/image/real.png"/>\n    <div class="card-title"><button ion-button clear color="secondary" (click)="myRules()"></button></div>\n    <div class="card-subtitle">Encuentra tu lista de Libros</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/image/atenea.png"/>\n    <div class="card-title"><button ion-button clear color="secondary" (click)="listaProductos()"></button></div>\n    <div class="card-subtitle">Encuentra tu lista de Libros</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/image/lasalle.png"/>\n    <div class="card-title"><button ion-button clear color="secondary" (click)="verCiudad()"></button></div>\n    <div class="card-subtitle">Encuentra tu lista de Libros</div>\n  </ion-card>\n\n   <ion-card>\n    <img src="assets/image/cultural.png"/>\n    <div class="card-title"><button ion-button clear color="secondary" (click)="verGradecult()"></button></div>\n    <div class="card-subtitle">Encuentra tu lista de Libros</div>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/gcort/Desktop/school/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth();
        this.userData = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/userData');
    }
    AuthServiceProvider.prototype.doLogin = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    AuthServiceProvider.prototype.doLogout = function () {
        return this.fireAuth.signOut();
    };
    AuthServiceProvider.prototype.register = function (email, password) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            _this.userData.child(newUser.uid).set({ email: email });
        });
    };
    AuthServiceProvider.prototype.resetPassword = function (email) {
        return this.fireAuth.sendPasswordResetEmail(email);
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map