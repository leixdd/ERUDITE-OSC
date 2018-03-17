webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_public_public_component__ = __webpack_require__("../../../../../src/app/layouts/public/public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_public_public_routes__ = __webpack_require__("../../../../../src/app/layouts/public/public.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_secure_secure_component__ = __webpack_require__("../../../../../src/app/layouts/secure/secure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_secure_secure_routes__ = __webpack_require__("../../../../../src/app/layouts/secure/secure.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__layouts_public_public_component__["a" /* PublicComponent */], children: __WEBPACK_IMPORTED_MODULE_3__layouts_public_public_routes__["a" /* PUBLIC_ROUTES */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__layouts_secure_secure_component__["a" /* SecureComponent */], children: __WEBPACK_IMPORTED_MODULE_5__layouts_secure_secure_routes__["a" /* SECURE_ROUTES */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__layouts_public_public_component__["a" /* PublicComponent */], __WEBPACK_IMPORTED_MODULE_4__layouts_secure_secure_component__["a" /* SecureComponent */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_modules_module__ = __webpack_require__("../../../../../src/app/modules/modules.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_functions__ = __webpack_require__("../../../../../src/app/config/functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__modules_modules_module__["a" /* ModulesModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__config_functions__["a" /* functions */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
var APP_CONFIG = {
    //erudite-osc.herokuapp.com
    Protocol: "http",
    Address: "127.0.0.1:3000"
};


/***/ }),

/***/ "../../../../../src/app/config/functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var functions = /** @class */ (function () {
    function functions(http) {
        this.http = http;
        this.dop = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* APP_CONFIG */].Protocol + "://" + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* APP_CONFIG */].Address;
    }
    functions.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    functions.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token'); //get Token from localStorage
        this.authToken = token;
    };
    //Creating post function with JWT Authenticaton
    functions.prototype.post = function (url, params, withAuth, formData) {
        if (formData === void 0) { formData = false; }
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        this.loadToken();
        if (withAuth) {
            headers.append('Authorization', this.authToken);
        }
        if (!formData) {
            headers.append('Content-Type', 'application/json');
        }
        return this.http.post(this.dop + url, params, { headers: headers });
    };
    functions.prototype.blobpost = function (url, params, withAuth) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        this.loadToken();
        if (withAuth) {
            headers.append('Authorization', this.authToken);
        }
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ headers: headers, responseType: __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseContentType"].Blob });
        return this.http.post(this.dop + url, params, options);
    };
    //get request with jwt Authentication
    functions.prototype.get = function (url, withAuth) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        this.loadToken();
        if (withAuth) {
            headers.append('Authorization', this.authToken);
        }
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.dop + url, { headers: headers });
    };
    functions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]])
    ], functions);
    return functions;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthGuard.prototype.canActivate = function () {
        if (this.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "\n <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/']\">Erudite</a>\n    </div>\n    \n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/register']\">Register</a></li>\n      <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/login']\">Login</a></li>\n    </ul>\n  </div>\n</nav> \n\n"

/***/ }),

/***/ "../../../../../src/app/layouts/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.ngAfterViewInit = function () {
        this.formload();
    };
    NavigationComponent.prototype.formload = function () {
        //On focus event
        $('.form-control').focus(function () {
            $(this).parent().addClass('focused');
        });
        //On focusout event
        $('.form-control').focusout(function () {
            var $this = $(this);
            if ($this.parents('.form-group').hasClass('form-float')) {
                if ($this.val() == '') {
                    $this.parents('.form-line').removeClass('focused');
                }
            }
            else {
                $this.parents('.form-line').removeClass('focused');
            }
        });
        //On label click
        $('body').on('click', '.form-float .form-line .form-label', function () {
            $(this).parent().find('input').focus();
        });
        //Not blank form
        $('.form-control').each(function () {
            if ($(this).val() !== '') {
                $(this).parents('.form-line').addClass('focused');
            }
        });
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/layouts/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/public/public.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/public/public.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/public/public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicComponent = /** @class */ (function () {
    function PublicComponent(AuthGuard, router) {
        this.AuthGuard = AuthGuard;
        this.router = router;
    }
    PublicComponent.prototype.ngOnInit = function () {
        if (this.AuthGuard.loggedIn()) {
            this.router.navigate(['/dashboard'], { skipLocationChange: true });
        }
    };
    PublicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-public',
            template: __webpack_require__("../../../../../src/app/layouts/public/public.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/public/public.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/public/public.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PUBLIC_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_usm_components_home_home_component__ = __webpack_require__("../../../../../src/app/modules/usm/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_usm_components_login_login_component__ = __webpack_require__("../../../../../src/app/modules/usm/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_usm_components_registration_registration_component__ = __webpack_require__("../../../../../src/app/modules/usm/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_usm_testfrm_testfrm_component__ = __webpack_require__("../../../../../src/app/modules/usm/testfrm/testfrm.component.ts");
//Components




var PUBLIC_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__modules_usm_components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__modules_usm_components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__modules_usm_components_registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_3__modules_usm_testfrm_testfrm_component__["a" /* TestfrmComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/layouts/secure/secure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/secure/secure.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/layouts/secure/secure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecureComponent = /** @class */ (function () {
    function SecureComponent() {
    }
    SecureComponent.prototype.ngOnInit = function () {
    };
    SecureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-secure',
            template: __webpack_require__("../../../../../src/app/layouts/secure/secure.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/secure/secure.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecureComponent);
    return SecureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/secure/secure.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECURE_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_admin_component_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/modules/admin/component/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_usm_components_profile_profile_component__ = __webpack_require__("../../../../../src/app/modules/usm/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_usm_components_account_settings_account_settings_component__ = __webpack_require__("../../../../../src/app/modules/usm/components/account-settings/account-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_rc_components_chat_chat_component__ = __webpack_require__("../../../../../src/app/modules/rc/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_prjm_components_projectinit_projectinit_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/projectinit/projectinit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_prjm_components_projectdash_projectdash_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/projectdash/projectdash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_prjm_components_project_mile_project_mile_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/project-mile/project-mile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_prjm_components_project_analytics_project_analytics_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/project-analytics/project-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_prjm_components_milestone_milestone_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/milestone/milestone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_prjm_components_project_team_project_team_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/project-team/project-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_usm_logout_logout_component__ = __webpack_require__("../../../../../src/app/modules/usm/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_prjm_components_project_schedule_project_schedule_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/project-schedule/project-schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_usm_components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/modules/usm/components/dashboard/dashboard.component.ts");

//Components













var SECURE_ROUTES = [
    //User routes
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__modules_usm_components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__modules_usm_components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_3__modules_usm_components_account_settings_account_settings_component__["a" /* AccountSettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_11__modules_usm_logout_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    //Real Time Message Routes
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_4__modules_rc_components_chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    //Projects
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_6__modules_prjm_components_projectdash_projectdash_component__["a" /* ProjectdashComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/init', component: __WEBPACK_IMPORTED_MODULE_5__modules_prjm_components_projectinit_projectinit_component__["a" /* ProjectinitComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/:prjm_id', component: __WEBPACK_IMPORTED_MODULE_8__modules_prjm_components_project_analytics_project_analytics_component__["a" /* ProjectAnalyticsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/milestones/:prjm_id', component: __WEBPACK_IMPORTED_MODULE_9__modules_prjm_components_milestone_milestone_component__["a" /* MilestoneComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/milestone/:prjm_id/:mile_id', component: __WEBPACK_IMPORTED_MODULE_7__modules_prjm_components_project_mile_project_mile_component__["a" /* ProjectMileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/team/:prjm_id', component: __WEBPACK_IMPORTED_MODULE_10__modules_prjm_components_project_team_project_team_component__["a" /* ProjectTeamComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/schedules/:prjm_id', component: __WEBPACK_IMPORTED_MODULE_12__modules_prjm_components_project_schedule_project_schedule_component__["a" /* ProjectScheduleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    //Administrative
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_1__modules_admin_component_dashboard_dashboard_component__["a" /* AdminDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] }
];


/***/ }),

/***/ "../../../../../src/app/modules/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/modules/admin/component/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_service__ = __webpack_require__("../../../../../src/app/modules/admin/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navs_navs_module__ = __webpack_require__("../../../../../src/app/modules/navs/navs.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_7__navs_navs_module__["a" /* NavsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__admin_service__["a" /* AdminService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__component_dashboard_dashboard_component__["a" /* AdminDashboardComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/admin/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_functions__ = __webpack_require__("../../../../../src/app/config/functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(f) {
        this.f = f;
    }
    AdminService.prototype.getAnalytics = function () {
        return this.f.post('/admin/analytics', {}, true).map(function (res) { return res.json(); });
    };
    AdminService.prototype.getCoreDataUsers = function () {
        return this.f.get('/admin/coredatausers', true).map(function (res) { return res.json(); });
    };
    AdminService.prototype.getCoreDataProjects = function () {
        return this.f.get('/admin/coredataprojects', true).map(function (res) { return res.json(); });
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_functions__["a" /* functions */]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/admin/component/dashboard/Admindashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dash-nav></app-dash-nav>\n<app-dash-side-nav></app-dash-side-nav>\n\n<section class=\"content\">\n  <div class=\"container-fluid\">\n\n      <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"info-box bg-pink hover-expand-effect\">\n                  <div class=\"icon\">\n                      <i class=\"material-icons\">playlist_add_check</i>\n                  </div>\n                  <div class=\"content\">\n                      <div class=\"text\">TASKS </div>\n                      <div class=\"number count-to\" data-from=\"0\" *ngIf=\"analytics\" [attr.data-to]=\"analytics.task_count\" data-speed=\"1500\" data-fresh-interval=\"20\"></div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"info-box bg-cyan hover-expand-effect\">\n                  <div class=\"icon\">\n                      <i class=\"material-icons\">help</i>\n                  </div>\n                  <div class=\"content\">\n                      <div class=\"text\">PROJECTS</div>\n                      <div class=\"number count-to\" data-from=\"0\" *ngIf=\"analytics.project_count\" [attr.data-to]=\"analytics.project_count\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"info-box bg-green hover-expand-effect\">\n                  <div class=\"icon\">\n                      <i class=\"material-icons\">flag</i>\n                  </div>\n                  <div class=\"content\">\n                      <div class=\"text\">MILESTONES</div>\n                      <div class=\"number count-to\" data-from=\"0\" *ngIf=\"analytics.milestone_count\" [attr.data-to]=\"analytics.milestone_count\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"info-box bg-orange hover-expand-effect\">\n                  <div class=\"icon\">\n                      <i class=\"material-icons\">person</i>\n                  </div>\n                  <div class=\"content\">\n                      <div class=\"text\">USERS</div>\n                      <div class=\"number count-to\" data-from=\"0\" *ngIf=\"analytics.user_count\" [attr.data-to]=\"analytics.user_count\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n\n      <div class=\"row clearfix\">\n          <div class=\"col-lg-6 col-sm-12 col-md-6 col-xs-12\">\n              <div class=\"card\">\n                    <div class=\"header\">\n                        <h2>\n                            Core Data Users\n                        </h2>\n                    </div>\n                    <div class=\"body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-bordered table-striped table-hover dataTable js-exportable\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th>Username</th>\n                                        <th>Full name</th>\n                                        <th>Email</th>\n                                        <th>Join Date</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                        <th></th>\n                                        <th>Username</th>\n                                        <th>Full name</th>\n                                        <th>Email</th>\n                                        <th>Join Date</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let u of Keys(CDU)\">\n                                        <td><img src=\"../assets/uploads/avatars/{{ CDU[u]['userDetails']['picture'] }}\" class=\"img-rounded\" height=\"48\" width=\"48\" /></td>\n                                        <td>{{ CDU[u]['loginDetails']['username'] }}</td>\n                                        <td>{{ CDU[u]['userDetails']['lastname'] }}, {{ CDU[u]['userDetails']['firstname'] }} {{ CDU[u]['userDetails']['middlename'] }} </td>\n                                        <td>{{ CDU[u]['loginDetails']['email'] }}</td>\n                                        <td>{{ CDU[u]['joinDate'] | date : 'long' }}</td>\n                                        \n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n              </div>\n          </div>\n\n          <div class=\"col-lg-6 col-sm-12 col-md-6 col-xs-12\">\n            <div class=\"card\">\n                  <div class=\"header\">\n                      <h2>\n                          Core Data Projects\n                      </h2>\n                  </div>\n                  <div class=\"body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table table-bordered table-striped table-hover dataTable js-exportable\">\n                              <thead>\n                                  <tr>\n                                      <th>Project ID</th>\n                                      <th>Project Name</th>\n                                      <th>Project Start</th>\n                                      <th>Project End Date</th>\n                                      <th>Project Owner</th>\n                                  </tr>\n                              </thead>\n                              <tfoot>\n                                  <tr>\n                                    <th>Project ID</th>\n                                    <th>Project Name</th>\n                                    <th>Project Start</th>\n                                    <th>Project End Date</th>\n                                    <th>Project Owner</th>\n                                  </tr>\n                              </tfoot>\n                              <tbody>\n                                  <tr *ngFor=\"let u of convertKey(CDP)\">\n                                      <td>{{ CDP[u]['_id'] }}</td>\n                                      <td>{{ CDP[u]['name'] }}</td>\n                                      <td>{{ CDP[u]['startDate'] | date : 'short'}} </td>\n                                      <td>{{ CDP[u]['endDate'] | date : 'short' }}</td>\n                                      <td>{{ CDP[u]['owner'] }}</td>\n                                      \n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n            </div>\n        </div>\n        \n      </div>\n\n\n\n      \n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/modules/admin/component/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/admin/component/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_service__ = __webpack_require__("../../../../../src/app/modules/admin/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usm_usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(router, adminSC, usm) {
        this.router = router;
        this.adminSC = adminSC;
        this.usm = usm;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Keys = Object.keys;
        this.usmSub = this.usm.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            if (profile.user.SA == undefined) {
                _this.router.navigate(['/']);
            }
        }, function (err) {
            return false;
        });
        this.alySub = this.adminSC.getAnalytics().subscribe(function (aly) {
            _this.analytics = aly;
        });
        this.cduSub = this.adminSC.getCoreDataUsers().subscribe(function (cdu) {
            _this.CDU = cdu;
        });
        this.cdpSub = this.adminSC.getCoreDataProjects().subscribe(function (cdp) {
            _this.CDP = cdp;
        });
    };
    AdminDashboardComponent.prototype.convertKey = function (key) {
        return key == null ? [] : this.Keys(key);
    };
    AdminDashboardComponent.prototype.checkObj = function (val) {
        return val instanceof Array ? val.length == 0 : val == null;
    };
    AdminDashboardComponent.prototype.ngAfterViewInit = function () {
        $('.count-to').countTo();
        $('.js-exportable').DataTable({
            dom: 'Bfrtip',
            responsive: true,
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });
    };
    AdminDashboardComponent.prototype.ngOnDestroy = function () {
        this.alySub.unsubscribe();
        this.usmSub.unsubscribe();
        this.cduSub.unsubscribe();
    };
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__("../../../../../src/app/modules/admin/component/dashboard/Admindashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/admin/component/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3__usm_usm_service__["a" /* UsmService */]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/modules.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usm_usm_module__ = __webpack_require__("../../../../../src/app/modules/usm/usm.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rc_rc_module__ = __webpack_require__("../../../../../src/app/modules/rc/rc.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prjm_prjm_module__ = __webpack_require__("../../../../../src/app/modules/prjm/prjm.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_module__ = __webpack_require__("../../../../../src/app/modules/admin/admin.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ModulesModule = /** @class */ (function () {
    function ModulesModule() {
    }
    ModulesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__usm_usm_module__["a" /* UsmModule */],
                __WEBPACK_IMPORTED_MODULE_3__rc_rc_module__["a" /* RcModule */],
                __WEBPACK_IMPORTED_MODULE_4__prjm_prjm_module__["a" /* PrjmModule */],
                __WEBPACK_IMPORTED_MODULE_5__admin_admin_module__["a" /* AdminModule */]
            ],
            declarations: []
        })
    ], ModulesModule);
    return ModulesModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/navs/components/project-nav/project-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/navs/components/project-nav/project-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a href=\"javascript:void(0);\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=\"false\"></a>\n            <a href=\"javascript:void(0);\" class=\"bars\"></a>\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">Erudite</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a [routerLink]=\"['/project', Query]\"><span class=\"fa fa-dashboard\">&nbsp;</span>Analytics</a></li>\n                <li><a [routerLink]=\"['/project/milestones', Query]\"><span class=\"fa fa-tasks\">&nbsp;</span>Milestones</a></li>\n                <li><a [routerLink]=\"['/project/schedules', Query]\"><span class=\"fa fa-calendar\">&nbsp;</span>Schedules</a></li>\n                <li><a [routerLink]=\"['/project/team', Query]\"><span class=\"fa fa-users\">&nbsp;</span>Team</a></li>\n              </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n            \n                <!-- #END# Tasks -->\n                <li class=\"pull-right\"><a href=\"javascript:void(0);\" class=\"js-right-sidebar\" data-close=\"true\"><i class=\"fa fa-bars\"></i></a></li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/modules/navs/components/project-nav/project-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usm_usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectNavComponent = /** @class */ (function () {
    function ProjectNavComponent(usmService, router, AR) {
        this.usmService = usmService;
        this.router = router;
        this.AR = AR;
        this.Query = null;
        this.Mile = null;
    }
    ProjectNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usmService.getProfile().subscribe(function (profile) {
            _this.user = profile.user.userDetails;
        });
        this.Subs1 = this.AR.params.subscribe(function (param) {
            //console.log(param.prjm_id);
            if (param.mile_id != null) {
                _this.Query = param.mile_id;
                _this.Mile = param.prjm_id;
            }
            else {
                _this.Query = param.prjm_id;
            }
        });
    };
    ProjectNavComponent.prototype.ngAfterViewInit = function () {
        this.startNavs();
    };
    ProjectNavComponent.prototype.startNavs = function () {
        var $body = $('body');
        var $overlay = $('.overlay');
        //Open left sidebar panel
        $('.bars').on('click', function () {
            $body.toggleClass('overlay-open');
            if ($body.hasClass('overlay-open')) {
                $overlay.fadeIn();
            }
            else {
                $overlay.fadeOut();
            }
        });
        //Close collapse bar on click event
        $('.nav [data-close="true"]').on('click', function () {
            var isVisible = $('.navbar-toggle').is(':visible');
            var $navbarCollapse = $('.navbar-collapse');
            if (isVisible) {
                $navbarCollapse.slideUp(function () {
                    $navbarCollapse.removeClass('in').removeAttr('style');
                });
            }
        });
    };
    ProjectNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-nav',
            template: __webpack_require__("../../../../../src/app/modules/navs/components/project-nav/project-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/navs/components/project-nav/project-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__usm_usm_service__["a" /* UsmService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProjectNavComponent);
    return ProjectNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/navs/components/project-side-nav/project-side-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/navs/components/project-side-nav/project-side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    <!-- Left Sidebar -->\n    <aside id=\"leftsidebar\" class=\"sidebar\">\n        <!-- User Info -->\n        <div class=\"user-info\" *ngIf=\"user\">\n            <div class=\"image\">\n                <img src=\"../assets/uploads/avatars/{{ picture }}\" width=\"48\" height=\"48\" alt=\"User\"  />\n            </div>\n            <div class=\"info-container\">\n                <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ user['firstname'] }}, {{ user['lastname'] }}</div>\n                <div class=\"email\">{{ email }}</div>\n            </div>\n        </div>\n        <!-- #User Info -->\n        <!-- Menu -->\n        <div class=\"menu\">\n            <ul class=\"list\">\n                <li class=\"header active\">PROJECT DETAILS</li>\n\n                <li>\n                  <ul class=\"list-group\" *ngIf=\"Projects\">\n                    <li class=\"list-group-item\">\n                      <small class=\"list-group-item-heading\">Project Name</small>\n                      <p class=\"list-group-item-text\">{{Projects.name}}</p>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <small class=\"list-group-item-heading\">Start Date</small>\n                        <p class=\"list-group-item-text\">{{Projects.startDate | date:'shortDate'}}</p>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <small class=\"list-group-item-heading\">End Date</small>\n                        <p class=\"list-group-item-text\">{{Projects.endDate | date:'shortDate'}}</p>\n                    </li>\n                    <li class=\"list-group-item\">\n                        <small class=\"list-group-item-heading\">Remaining Days</small>\n                        <p class=\"list-group-item-text\" *ngIf=\"datediff(Projects.endDate) > 0; else Today\"> {{ datediff(Projects.endDate) }} Day/s Remaining</p>\n                        <ng-template #Today>\n                            <p class=\"list-group-item-text\">The Project is on its due</p>\n                        </ng-template>\n                    </li>\n                    <li class=\"list-group-item\">\n                      <small class=\"list-group-item-heading\">Progress</small>\n                      <div class=\"list-group-item-text\">\n                          <div class=\"progress progress_sm\">\n                              <span class=\"progress-bar bg-green\" role=\"progressbar\" [attr.data-transitiongoal]=\"getProgress(Milestones)\" [attr.aria-valuenow]=\"getProgress(Milestones)\" [style.width.%]=\"getProgress(Milestones)\"></span>\n                          </div>\n                        </div>\n                    </li>\n                  </ul>\n                </li>\n\n            </ul>\n        </div>\n        <!-- #Menu -->\n        <!-- Footer -->\n        <div class=\"legal\">\n            <div class=\"copyright\">\n              \n            </div>\n            <div class=\"version\">\n                <b>Version: </b> 1.0.5\n            </div>\n        </div>\n        <!-- #Footer -->\n    </aside>\n    <!-- #END# Left Sidebar -->\n\n    <!-- Right Sidebar -->\n    <aside id=\"rightsidebar\" class=\"right-sidebar\">\n        <ul class=\"nav nav-tabs tab-nav-right\" role=\"tablist\">\n            <li role=\"presentation\" class=\"active\"><a href=\"#skins\" data-toggle=\"tab\">SKINS</a></li>\n            <li role=\"presentation\"><a href=\"#settings\" data-toggle=\"tab\">SETTINGS</a></li>\n        </ul>\n        <div class=\"tab-content\">\n            <div role=\"tabpanel\" class=\"tab-pane fade in active in active\" id=\"skins\">\n                <ul class=\"demo-choose-skin\">\n                    <li data-theme=\"red\" class=\"active\">\n                        <div class=\"red\"></div>\n                        <span>Red</span>\n                    </li>\n                    <li data-theme=\"pink\">\n                        <div class=\"pink\"></div>\n                        <span>Pink</span>\n                    </li>\n                    <li data-theme=\"purple\">\n                        <div class=\"purple\"></div>\n                        <span>Purple</span>\n                    </li>\n                    <li data-theme=\"deep-purple\">\n                        <div class=\"deep-purple\"></div>\n                        <span>Deep Purple</span>\n                    </li>\n                    <li data-theme=\"indigo\">\n                        <div class=\"indigo\"></div>\n                        <span>Indigo</span>\n                    </li>\n                    <li data-theme=\"blue\">\n                        <div class=\"blue\"></div>\n                        <span>Blue</span>\n                    </li>\n                    <li data-theme=\"light-blue\">\n                        <div class=\"light-blue\"></div>\n                        <span>Light Blue</span>\n                    </li>\n                    <li data-theme=\"cyan\">\n                        <div class=\"cyan\"></div>\n                        <span>Cyan</span>\n                    </li>\n                    <li data-theme=\"teal\">\n                        <div class=\"teal\"></div>\n                        <span>Teal</span>\n                    </li>\n                    <li data-theme=\"green\">\n                        <div class=\"green\"></div>\n                        <span>Green</span>\n                    </li>\n                    <li data-theme=\"light-green\">\n                        <div class=\"light-green\"></div>\n                        <span>Light Green</span>\n                    </li>\n                    <li data-theme=\"lime\">\n                        <div class=\"lime\"></div>\n                        <span>Lime</span>\n                    </li>\n                    <li data-theme=\"yellow\">\n                        <div class=\"yellow\"></div>\n                        <span>Yellow</span>\n                    </li>\n                    <li data-theme=\"amber\">\n                        <div class=\"amber\"></div>\n                        <span>Amber</span>\n                    </li>\n                    <li data-theme=\"orange\">\n                        <div class=\"orange\"></div>\n                        <span>Orange</span>\n                    </li>\n                    <li data-theme=\"deep-orange\">\n                        <div class=\"deep-orange\"></div>\n                        <span>Deep Orange</span>\n                    </li>\n                    <li data-theme=\"brown\">\n                        <div class=\"brown\"></div>\n                        <span>Brown</span>\n                    </li>\n                    <li data-theme=\"grey\">\n                        <div class=\"grey\"></div>\n                        <span>Grey</span>\n                    </li>\n                    <li data-theme=\"blue-grey\">\n                        <div class=\"blue-grey\"></div>\n                        <span>Blue Grey</span>\n                    </li>\n                    <li data-theme=\"black\">\n                        <div class=\"black\"></div>\n                        <span>Black</span>\n                    </li>\n                </ul>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"settings\">\n                <div class=\"demo-settings\">\n                    <p>GENERAL SETTINGS</p>\n                    <ul class=\"setting-list\">\n                        <li>\n                            <span>Report Panel Usage</span>\n                            <div class=\"switch\">\n                                <label><input type=\"checkbox\" checked><span class=\"lever\"></span></label>\n                            </div>\n                        </li>\n                        <li>\n                            <span>Email Redirect</span>\n                            <div class=\"switch\">\n                                <label><input type=\"checkbox\"><span class=\"lever\"></span></label>\n                            </div>\n                        </li>\n                    </ul>\n                    <p>SYSTEM SETTINGS</p>\n                    <ul class=\"setting-list\">\n                        <li>\n                            <span>Notifications</span>\n                            <div class=\"switch\">\n                                <label><input type=\"checkbox\" checked><span class=\"lever\"></span></label>\n                            </div>\n                        </li>\n                        <li>\n                            <span>Auto Updates</span>\n                            <div class=\"switch\">\n                                <label><input type=\"checkbox\" checked><span class=\"lever\"></span></label>\n                            </div>\n                        </li>\n                    </ul>\n                    <p>ACCOUNT SETTINGS</p>\n                    <ul class=\"setting-list\">\n                        <li>\n                            <span>Offline</span>\n                            <div class=\"switch\">\n                                <label><input type=\"checkbox\"><span class=\"lever\"></span></label>\n                            </div>\n                        </li>\n                        <li>\n                            <span>Location Permission</span>\n                            <div class=\"switch\">\n                                <label><input type=\"checkbox\" checked><span class=\"lever\"></span></label>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </aside>\n    \n    <!-- #END# Right Sidebar -->\n</section>"

/***/ }),

/***/ "../../../../../src/app/modules/navs/components/project-side-nav/project-side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usm_usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prjm_prjm_service__ = __webpack_require__("../../../../../src/app/modules/prjm/prjm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectSideNavComponent = /** @class */ (function () {
    function ProjectSideNavComponent(usm, prjmService, router, AR) {
        this.usm = usm;
        this.prjmService = prjmService;
        this.router = router;
        this.AR = AR;
        this.MemberList = {};
    }
    ProjectSideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usm.getProfile().subscribe(function (profile) {
            _this.user = profile.user.userDetails;
            _this.email = profile.user.loginDetails.email;
            _this.picture = profile.user.userDetails.picture;
        }),
            function (err) {
                return false;
            };
        this.Keys = Object.keys;
        this.Subs1 = this.AR.params.subscribe(function (param) {
            if (param.mile_id != null) {
                _this.Query = param.mile_id;
            }
            else {
                _this.Query = param.prjm_id;
            }
        });
        this.Project_Sub = this.prjmService.getProjectByID({ 'prjm_id': this.Query }).subscribe(function (project) {
            _this.Projects = project.projects;
            var memList = {};
            for (var mem in project.projects.members) {
                _this.MemberList[project.projects.members[mem].user] = project.projects.members[mem].role;
                if (JSON.parse(localStorage.getItem('user')).id == project.projects.members[mem].user) {
                    _this.UserRole = project.projects.members[mem].role;
                }
            }
            //throw out unwanted users
            if (_this.MemberList[JSON.parse(localStorage.getItem('user')).id] == null) {
                _this.router.navigate(['/']);
            }
        });
        this.Subs2 = this.prjmService.getMilestones({ 'id': this.Query }).subscribe(function (milestones) {
            _this.Milestones = milestones.milestones;
        });
    };
    ProjectSideNavComponent.prototype.ngAfterViewInit = function () {
        this.leftSideBar();
    };
    ProjectSideNavComponent.prototype.leftSideBar = function () {
        var $body = $('body');
        var $overlay = $('.overlay');
        $("#cls-btn").click(function () {
            $('#leftsidebar').css('width', '0px');
            $('.content').css('margin-left', '0px');
        });
        //Close sidebar
        $(window).click(function (e) {
            var $target = $(e.target);
            if (e.target.nodeName.toLowerCase() === 'i') {
                $target = $(e.target).parent();
            }
            if (!$target.hasClass('bars') && $('body').hasClass('overlay-open') && $target.parents('#leftsidebar').length === 0) {
                if (!$target.hasClass('js-right-sidebar'))
                    $overlay.fadeOut();
                $body.removeClass('overlay-open');
            }
        });
        $.each($('.menu-toggle.toggled'), function (i, val) {
            $(val).next().slideToggle(0);
        });
        //When page load
        $.each($('.menu .list li.active'), function (i, val) {
            var $activeAnchors = $(val).find('a:eq(0)');
            $activeAnchors.addClass('toggled');
            $activeAnchors.next().show();
        });
        //dropdowns
        $('.menu-toggle').click(function (e) {
            var $this = $(this);
            var $content = $this.next();
            if ($($this.parents('ul')[0]).hasClass('list')) {
                var $not = $(this).hasClass('menu-toggle') ? this : $(e.target).parents('.menu-toggle');
                $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
                    if ($(val).is(':visible')) {
                        $(val).prev().toggleClass('toggled');
                        $(val).slideUp();
                    }
                });
            }
            $this.toggleClass('toggled');
            $content.slideToggle(320);
        });
        this.menuHeight();
        this.resizeNav(true);
        $(window).resize(function () {
            if (typeof $.fn.slimScroll != 'undefined') {
                var configs = {
                    scrollColor: 'rgba(0,0,0,0.5)',
                    scrollWidth: '4px',
                    scrollAlwaysVisible: false,
                    scrollBorderRadius: '0',
                    scrollRailBorderRadius: '0',
                    scrollActiveItemWhenPageLoad: true,
                    breakpointWidth: 1500
                };
                var height = ($(window).height() - ($('.legal').outerHeight() + $('.user-info').outerHeight() + $('.navbar').innerHeight()));
                var $el = $('.list');
                $el.slimscroll({
                    height: height + "px",
                    color: configs.scrollColor,
                    size: configs.scrollWidth,
                    alwaysVisible: configs.scrollAlwaysVisible,
                    borderRadius: configs.scrollBorderRadius,
                    railBorderRadius: configs.scrollRailBorderRadius
                });
                //Scroll active menu item when page load, if option set = true
                if (configs.scrollActiveItemWhenPageLoad) {
                    var activeItemOffsetTop = $('.menu .list li.active')[0].offsetTop;
                    if (activeItemOffsetTop > 150)
                        $el.slimscroll({ scrollTo: activeItemOffsetTop + 'px' });
                }
            }
            var $body = $('body');
            var $openCloseBar = $('.navbar .navbar-header .bars');
            var width = $body.width();
            var firstTime = false;
            if (firstTime) {
                $body.find('.content, .sidebar').addClass('no-animate').delay(1000).queue(function () {
                    $(this).removeClass('no-animate').dequeue();
                });
            }
            if (width < 1500) {
                $body.addClass('ls-closed');
                $openCloseBar.fadeIn();
            }
            else {
                $body.removeClass('ls-closed');
                $openCloseBar.fadeOut();
            }
        });
    };
    ProjectSideNavComponent.prototype.menuHeight = function () {
        if (typeof $.fn.slimScroll != 'undefined') {
            var configs = {
                scrollColor: 'rgba(0,0,0,0.5)',
                scrollWidth: '4px',
                scrollAlwaysVisible: false,
                scrollBorderRadius: '0',
                scrollRailBorderRadius: '0',
                scrollActiveItemWhenPageLoad: true,
                breakpointWidth: 1500
            };
            var height = ($(window).height() - ($('.legal').outerHeight() + $('.user-info').outerHeight() + $('.navbar').innerHeight()));
            var $el = $('.list');
            $el.slimscroll({
                height: height + "px",
                color: configs.scrollColor,
                size: configs.scrollWidth,
                alwaysVisible: configs.scrollAlwaysVisible,
                borderRadius: configs.scrollBorderRadius,
                railBorderRadius: configs.scrollRailBorderRadius
            });
            //Scroll active menu item when page load, if option set = true
            if (configs.scrollActiveItemWhenPageLoad) {
                var activeItemOffsetTop = $('.menu .list li.active')[0].offsetTop;
                if (activeItemOffsetTop > 150)
                    $el.slimscroll({ scrollTo: activeItemOffsetTop + 'px' });
            }
        }
    };
    ProjectSideNavComponent.prototype.resizeNav = function (firstTime) {
        var $body = $('body');
        var $openCloseBar = $('.navbar .navbar-header .bars');
        var width = $body.width();
        console.log(width);
        if (firstTime) {
            $body.find('.content, .sidebar').addClass('no-animate').delay(1000).queue(function () {
                $(this).removeClass('no-animate').dequeue();
            });
        }
        if (width < 1500) {
            $body.addClass('ls-closed');
            $openCloseBar.fadeIn();
        }
        else {
            $body.removeClass('ls-closed');
            $openCloseBar.fadeOut();
        }
    };
    ProjectSideNavComponent.prototype.datediff = function (date2) {
        return new Date(date2) > new Date() ? Math.round(Math.abs(new Date(date2).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) : 0;
    };
    ProjectSideNavComponent.prototype.convertKey = function (key) {
        return key == null ? [] : this.Keys(key);
    };
    ProjectSideNavComponent.prototype.checkObj = function (val) {
        return val instanceof Array ? val.length == 0 : val == null;
    };
    ProjectSideNavComponent.prototype.getProgress = function (milestone) {
        if (this.checkObj(milestone)) {
            return 0;
        }
        else {
            var counter = 0;
            for (var m in milestone) {
                counter += milestone[m].isCompleted == true ? 1 : 0;
            }
            return ((counter / milestone.length) * 100).toFixed(0);
        }
    };
    ProjectSideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-side-nav',
            template: __webpack_require__("../../../../../src/app/modules/navs/components/project-side-nav/project-side-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/navs/components/project-side-nav/project-side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__usm_usm_service__["a" /* UsmService */], __WEBPACK_IMPORTED_MODULE_3__prjm_prjm_service__["a" /* PrjmService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProjectSideNavComponent);
    return ProjectSideNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/navs/navs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usm_layouts_dash_nav_dash_nav_component__ = __webpack_require__("../../../../../src/app/modules/usm/layouts/dash-nav/dash-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usm_layouts_dash_side_nav_dash_side_nav_component__ = __webpack_require__("../../../../../src/app/modules/usm/layouts/dash-side-nav/dash-side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_project_nav_project_nav_component__ = __webpack_require__("../../../../../src/app/modules/navs/components/project-nav/project-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_project_side_nav_project_side_nav_component__ = __webpack_require__("../../../../../src/app/modules/navs/components/project-side-nav/project-side-nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var NavsModule = /** @class */ (function () {
    function NavsModule() {
    }
    NavsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__usm_layouts_dash_nav_dash_nav_component__["a" /* DashNavComponent */], __WEBPACK_IMPORTED_MODULE_3__usm_layouts_dash_side_nav_dash_side_nav_component__["a" /* DashSideNavComponent */], __WEBPACK_IMPORTED_MODULE_7__components_project_nav_project_nav_component__["a" /* ProjectNavComponent */], __WEBPACK_IMPORTED_MODULE_8__components_project_side_nav_project_side_nav_component__["a" /* ProjectSideNavComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__usm_layouts_dash_nav_dash_nav_component__["a" /* DashNavComponent */], __WEBPACK_IMPORTED_MODULE_3__usm_layouts_dash_side_nav_dash_side_nav_component__["a" /* DashSideNavComponent */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_8__components_project_side_nav_project_side_nav_component__["a" /* ProjectSideNavComponent */], __WEBPACK_IMPORTED_MODULE_7__components_project_nav_project_nav_component__["a" /* ProjectNavComponent */]]
        })
    ], NavsModule);
    return NavsModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/milestone/milestone.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/milestone/milestone.component.html":
/***/ (function(module, exports) {

module.exports = "<app-project-side-nav></app-project-side-nav>\n<app-project-nav></app-project-nav>\n\n\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-8 col-sm-8 col-md-8 col-xs-12\">\n            <div class=\"card\">\n              <div class=\"header bg-green\">Milestones <span class=\"float: right\"><a *ngIf=\"RestrictMemberView()\" class=\"btn btn-xs btn-primary\" data-toggle=\"modal\" data-target=\"#NewMileStoneModal\" >New Milestone</a></span></div>\n              <div class=\"body table-responsive\">\n                  <table class=\"table table-condensed  table-bordered table-hover table-striped\" *ngIf=\"!checkObj(Milestones); else emptyMiles\">\n                    <thead>\n                      <tr>\n                        <td>Milestone Name</td>\n                        <td>Start Date</td>\n                        <td>End Date</td>\n                        <td>Progress</td>\n                        <td>Actions</td>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let milestone of convertKey(Milestones)\" (click) = \"viewTasks(Milestones[milestone]['_id'])\">                        <td>{{ Milestones[milestone]['milestone_name'] }}</td>\n                        <td>{{ convertDate(Milestones[milestone]['milestone_startDate']) }}</td>\n                        <td>{{ convertDate(Milestones[milestone]['milestone_endDate']) }}</td>\n                        <td>{{ getProgress(Milestones[milestone]['tasks']) }} %</td>\n                        <td>\n                          <a class=\"btn btn-xs btn-primary\" [routerLink] = \"['/project/milestone/', Milestones[milestone]['_id'], Query]\"><span class=\"fa fa-eye\">&nbsp;</span> View</a> |\n                          &nbsp;<a (click) = \"updateMile(Milestones[milestone]['_id'], true)\" class=\"btn btn-xs btn-success\" *ngIf=\"getProgress(Milestones[milestone]['tasks']) == 100\"><span class=\"fa fa-eye\">&nbsp;</span> Mark as Complete</a>\n                          <a *ngIf=\"getProgress(Milestones[milestone]['tasks']) != 100\" hidden>{{ updateMile(Milestones[milestone]['_id'], false) }}</a>\n                          &nbsp;<a class=\"btn btn-xs btn-danger\" *ngIf=\"RestrictMemberView()\" (click)=\"deleteMile(Milestones[milestone]['_id'])\"><span class=\"fa fa-trash\">&nbsp;</span> Delete</a>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <ng-template #emptyMiles>\n                    <div class=\"row text-center\">\n                      <h1>No Milestones</h1>\n                      <h3><i><b>Create a New Milestone</b>, It's a Big Deal!</i></h3>\n                      <small>Each Milestone is a big step to your project</small>\n                    </div>\n                  </ng-template>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\" *ngIf=\"MileID\">\n              <div class=\"card\">\n                <div class=\"header bg-green\">Milestone : [{{MileID}}] Tasks <span class=\"float: right\"><a class=\"btn btn-xs btn-success\" data-toggle=\"modal\" data-target=\"#NewTasksModal\" >New Task</a></span></div>\n                <div class=\"body\">\n                  <div class=\"row\" *ngIf=\"!checkObj(Tasks); else emptyTasks\">\n                    <article class=\"media event col-lg-12 col-md-12 col-xs-12 col-sm-12\" style=\"padding-bottom: 3%;\" *ngFor=\"let task of convertKey(Tasks)\" >\n                        <a class=\"pull-left date\" *ngIf=\"!Tasks[task]['isCompleted']; else checkmark\">\n                          <p class=\"month\">{{ getMonth(Tasks[task]['task_endDate']) }}</p>\n                          <p class=\"day\">{{ getDay(Tasks[task]['task_endDate']) }}</p>\n                        </a>\n                        <ng-template #checkmark>\n                            <a class=\"pull-left date text-center completed\">\n                              <span class=\"fa fa-check-circle\" style=\"font-size: 30pt\"></span>\n                            </a>\n                        </ng-template>\n                        <div class=\"media-body\">\n                          <a class=\"title\">{{Tasks[task]['task_name']}}</a>\n                          <p>{{Tasks[task]['task_desc'].slice(0, 20)}}</p>\n                        </div>\n                      </article>\n                  </div>\n                    <ng-template #emptyTasks>\n                      <div class=\"row text-center\">\n                        <h3>No Tasks</h3>\n                      </div>\n                    </ng-template>\n                </div>\n              </div>\n          </div>\n          \n    </div>\n  </div>\n</section>\n\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"NewMileStoneModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" id=\"closeModal\">&times;</button>\n          <h4 class=\"modal-title\">New Milestone</h4>\n        </div>\n        <div class=\"modal-body\">\n            <form (submit) = \"onSubmit()\">\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"message\">\n                    <button (click)=\"clearmsg()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                    {{message}}\n                </div>\n                <div class=\"form-group\">\n\n                  <label class=\"control-label\">Milestone Name</label>\n                  <div class=\"form-line\">\n                      <input class=\"form-control\" type=\"text\" [(ngModel)] = \"milestoneName\" name=\"milestoneName\" required/>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"control-label\">Start Date</div>\n                    <div class=\"form-line\">\n                        <input type='text' class=\"form-control\" id=\"projectSDate\" readonly required/>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"control-label\">End Date</div>\n                    <div class=\"form-line\">\n                      <input type='text' id=\"endDate\" class=\"form-control\" readonly required/>\n                    </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                    <div class=\"control-label\">Description</div>\n                    <div class=\"form-line\">\n                      <textarea class=\"form-control\" [(ngModel)] = \"milestoneDesc\" name=\"milestoneDesc\" required></textarea>\n                    </div>\n                </div>\n\n                <div class=\"form-group text-center\">\n                    <input type=\"submit\" class=\"form-control btn btn-primary waves-effect\"/>\n                </div>\n\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"NewTasksModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">New Task</h4>\n        </div>\n        <div class=\"modal-body\">\n          <form (submit) = \"onSubmitTask()\">\n              <div class=\"form-group\">\n                  <label class=\"control-label\">Task Name</label>\n                  \n                  <div class=\"form-line\">\n                    <input class=\"form-control\" type=\"text\" [(ngModel)] = \"taskName\" name=\"taskName\" />\n                  </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <div class=\"control-label\">Start Date</div>\n                  <div class='form-line'>\n                      <input type='text' class=\"form-control\" readonly id=\"tasks-projectSDate\"/>\n                  </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <div class=\"control-label\">End Date</div>\n                  <div class='form-line'>\n                      <input type='text' id=\"tasks-endDate\" class=\"form-control\" readonly/>\n                  </div>\n              </div>\n\n\n              <div class=\"form-group\">\n                  <div class=\"control-label\">Description</div>\n                  <div class=\"form-line\">\n                    <textarea class=\"form-control\" [(ngModel)] = \"taskDesc\" name=\"taskDesc\" ></textarea>\n                  </div>\n              </div>\n\n\n              <div class=\"form-group text-center\">\n                  <input type=\"submit\" class=\"form-control btn btn-primary\"/>\n              </div>\n\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/milestone/milestone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MilestoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prjm_service__ = __webpack_require__("../../../../../src/app/modules/prjm/prjm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MilestoneComponent = /** @class */ (function () {
    function MilestoneComponent(AR, router, prjmSevice) {
        this.AR = AR;
        this.router = router;
        this.prjmSevice = prjmSevice;
        this.MemberList = {};
    }
    MilestoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Keys = Object.keys;
        this.Subs1 = this.AR.params.subscribe(function (param) {
            _this.Query = param.prjm_id;
        });
        this.Project_Sub = this.prjmSevice.getProjectByID({ 'prjm_id': this.Query }).subscribe(function (project) {
            _this.Projects = project.projects;
            var memList = {};
            for (var mem in project.projects.members) {
                _this.MemberList[project.projects.members[mem].user] = project.projects.members[mem].role;
                if (JSON.parse(localStorage.getItem('user')).id == project.projects.members[mem].user) {
                    _this.UserRole = project.projects.members[mem].role;
                }
            }
            //throw out unwanted users
            if (_this.MemberList[JSON.parse(localStorage.getItem('user')).id] == null) {
                _this.router.navigate(['/']);
            }
        });
        setInterval(function () { return _this.MilestoneLoad(); }, 500);
    };
    MilestoneComponent.prototype.RestrictMemberView = function () {
        return this.UserRole < 2;
    };
    MilestoneComponent.prototype.MilestoneLoad = function () {
        var _this = this;
        this.Subs2 = this.prjmSevice.getMilestones({ 'id': this.Query }).subscribe(function (milestones) {
            if (_this.Milestones != milestones.milestones) {
                _this.Milestones = milestones.milestones;
            }
        });
    };
    MilestoneComponent.prototype.ngAfterViewInit = function () {
        this.loadDateTime();
        this.formload();
        Waves.init();
    };
    MilestoneComponent.prototype.formload = function () {
        //On focus event
        $('.form-control').focus(function () {
            $(this).parent().addClass('focused');
        });
        //On focusout event
        $('.form-control').focusout(function () {
            var $this = $(this);
            if ($this.parents('.form-group').hasClass('form-float')) {
                if ($this.val() == '') {
                    $this.parents('.form-line').removeClass('focused');
                }
            }
            else {
                $this.parents('.form-line').removeClass('focused');
            }
        });
        //On label click
        $('body').on('click', '.form-float .form-line .form-label', function () {
            $(this).parent().find('input').focus();
        });
        //Not blank form
        $('.form-control').each(function () {
            if ($(this).val() !== '') {
                $(this).parents('.form-line').addClass('focused');
            }
        });
    };
    MilestoneComponent.prototype.datediff = function (date2) {
        return new Date(date2) > new Date() ? Math.round(Math.abs(new Date(date2).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) : 0;
    };
    MilestoneComponent.prototype.loadDateTime = function () {
        $('#projectSDate').datetimepicker({
            format: 'YYYY-MM-DD',
            ignoreReadonly: true,
            defaultDate: new Date().toLocaleDateString(),
        });
        $('#projectSDate').focusout(function () {
            sessionStorage.setItem('SED', $(this).val());
            $('#endDate').datetimepicker({
                format: 'YYYY-MM-DD',
                ignoreReadonly: true,
                minDate: new Date($('#projectSDate').val()),
                defaultDate: new Date($('#projectSDate').val()),
            });
        });
        $('#endDate').focusout(function () {
            sessionStorage.setItem('PED', $(this).val());
        });
        $('#tasks-projectSDate').datetimepicker({
            format: 'YYYY-MM-DD',
            ignoreReadonly: true,
            defaultDate: new Date().toLocaleDateString(),
        });
        $('#tasks-projectSDate').focusout(function () {
            sessionStorage.setItem('TSED', $(this).val());
            $('#tasks-endDate').datetimepicker({
                format: 'YYYY-MM-DD',
                ignoreReadonly: true,
                minDate: new Date($('#tasks-projectSDate').val()),
                defaultDate: new Date($('#tasks-projectSDate').val())
            });
        });
        $('#tasks-endDate').focusout(function () {
            sessionStorage.setItem('TPED', $(this).val());
        });
    };
    //Procedures
    MilestoneComponent.prototype.validations = function () {
        var counter = false;
        counter = this.milestoneName != null && this.milestoneName != "" ? true : false;
        counter = this.milestoneDesc != null && this.milestoneName != "" ? true : false;
        return counter;
    };
    MilestoneComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.validations()) {
            var milestoneDetails = {
                prjm_id: this.Query,
                milestones: {
                    project_id: this.Query,
                    milestone_name: this.milestoneName,
                    milestone_startDate: sessionStorage.getItem('SED'),
                    milestone_endDate: sessionStorage.getItem('PED'),
                    milestone_desc: this.milestoneDesc,
                }
            };
            this.prjmSevice.addMilestones(milestoneDetails).subscribe(function (data) {
                if (data.success) {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                        title: "Success",
                        text: "New Milestone is added",
                        type: "success"
                    }).then(function (res) {
                        _this.Mile_Sub = _this.prjmSevice.getMilestones({ "id": _this.Query }).subscribe(function (milestones) {
                            _this.Milestones = milestones.milestones;
                        });
                        $('#closeModal').click();
                        _this.clearmsg();
                    });
                }
            });
        }
        else {
            this.message = "You have empty fields";
        }
    };
    MilestoneComponent.prototype.clearmsg = function () {
        this.message = "";
    };
    MilestoneComponent.prototype.onSubmitTask = function () {
        var _this = this;
        var milestoneDetails = {
            mile_id: this.MileID,
            tasks: {
                milestone_id: this.MileID,
                task_name: this.taskName,
                task_startDate: sessionStorage.getItem('TSED'),
                task_endDate: sessionStorage.getItem('TPED'),
                task_desc: this.taskDesc,
            }
        };
        this.prjmSevice.addTask(milestoneDetails).subscribe(function (data) {
            if (data.success) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                    title: "Success",
                    text: "New Milestone is added",
                    type: "success"
                }).then(function (result) {
                    _this.Tasks_Sub = _this.prjmSevice.getTasks({ "mile_id": _this.MileID }).subscribe(function (tasks) {
                        _this.Tasks = tasks.tasks;
                    });
                });
            }
        });
    };
    MilestoneComponent.prototype.viewTasks = function (mile) {
        var _this = this;
        this.MileID = mile;
        this.Tasks_Sub = this.prjmSevice.getTasks({ "mile_id": this.MileID }).subscribe(function (tasks) {
            _this.Tasks = tasks.tasks;
        });
    };
    //routes
    MilestoneComponent.prototype.navigateToMilestones = function () {
        this.router.navigate(['/project/milestones', this.Query]);
    };
    MilestoneComponent.prototype.getMonth = function (date) {
        var Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        return Months[new Date(date).getMonth()];
    };
    MilestoneComponent.prototype.getDay = function (day) {
        return new Date(day).getDate();
    };
    MilestoneComponent.prototype.convertDate = function (date) {
        return new Date(date).toLocaleDateString();
    };
    MilestoneComponent.prototype.convertKey = function (key) {
        return key == null ? [] : this.Keys(key);
    };
    MilestoneComponent.prototype.checkObj = function (val) {
        return val instanceof Array ? val.length == 0 : val == null;
    };
    MilestoneComponent.prototype.getProgress = function (milestone) {
        if (this.checkObj(milestone)) {
            return 0;
        }
        else {
            var counter = 0;
            for (var m in milestone) {
                counter += milestone[m].isCompleted == true ? 1 : 0;
            }
            return ((counter / milestone.length) * 100).toFixed(0);
        }
    };
    MilestoneComponent.prototype.updateMile = function (id, stat) {
        this.prjmSevice.updateMile({ 'id': id, 'stat': stat });
    };
    MilestoneComponent.prototype.deleteMile = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: "Are you sure want to delete?",
            text: "you can't undo this move after you've delete it",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            _this.prjmSevice.deleteMile({ 'id': id }).subscribe(function (res) {
                if (res.success) {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                        title: "Deleted",
                        text: id + " was Deleted",
                        type: "success"
                    });
                }
            });
        });
    };
    MilestoneComponent.prototype.ngOnDestroy = function () {
        this.Subs1.unsubscribe();
        this.Subs2.unsubscribe();
        //this.Tasks_Sub.unsubscribe();
    };
    MilestoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-milestone',
            template: __webpack_require__("../../../../../src/app/modules/prjm/components/milestone/milestone.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/prjm/components/milestone/milestone.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__prjm_service__["a" /* PrjmService */]])
    ], MilestoneComponent);
    return MilestoneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/project-analytics/project-analytics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-container-navyBlue{\r\n    background-color: #034f84;\r\n    color: white;\r\n}\r\n\r\n.card-body-navyBlue{\r\n    background-color: white;\r\n    color: #034f84;\r\n}\r\n\r\n.card-container-green{\r\n    background-color:  #34A853;\r\n    color: white;\r\n}\r\n\r\n.card-body-green{\r\n    background-color: white;\r\n    color: #34A853;\r\n}\r\n\r\n.completed{\r\n    background-color:  #34A853;\r\n    color: white;\r\n}\r\n\r\n.card-container-red{\r\n    background-color:  #EA4335;\r\n    color: white;\r\n}\r\n\r\n.card-body-red{\r\n    background-color: white;\r\n    color: #EA4335;\r\n}\r\n\r\n.card-container-violet{\r\n    background-color:  #7B0099;\r\n    color: white;\r\n}\r\n\r\n.card-body-violet{\r\n    background-color: white;\r\n    color: #7B0099;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/project-analytics/project-analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<app-project-side-nav></app-project-side-nav>\n<app-project-nav></app-project-nav>\n\n\n<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n    \n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n    \n            <div class=\"panel card-container-navyBlue\">\n              <div class=\"panel-heading\">\n                  <div class=\"row text-center\">\n                      <div class=\"col-md-4 col-sm-4 col-lg-4 col-xs-12\">\n                        <h1 style=\"font-size: 40pt\" *ngIf=\"Milestones\">{{ getProgress(Milestones) }}%</h1>\n                      </div>\n                      <div class=\"col-lg-8 col-sm-8 col-md-8 col-xs-12 text-uppercase\">\n                        <h4>Milestones</h4>\n                        <h3>Completed</h3>            \n                      </div>\n                  </div>\n              </div>\n            </div>\n          </div>\n          \n    \n \n              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                  <div class=\"panel card-container-violet\">\n                    <div class=\"panel-heading\">\n                        <div class=\"row text-center\">\n                            <div class=\"col-md-4 col-sm-4 col-lg-4 col-xs-12\">\n                              <h1 style=\"font-size: 40pt\" *ngIf=\"membersCount()\">{{ membersCount() }}</h1>\n                            </div>\n                            <div class=\"col-lg-8 col-sm-8 col-md-8 col-xs-12 text-uppercase\">\n                              <h4>Team</h4>\n                              <h3>Members</h3>            \n                            </div>\n                          </div>\n                    </div>\n                  </div>\n                </div> \n    \n                <!-- body content -->\n                <div class=\"col-lg-12 col-md-12 co-sm-12 col-xs-12\">\n                  <!-- line graph -->\n                </div>\n                \n    \n\n                <!-- End body -->\n        </div>\n\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">Public Chat</div>\n              <div class=\"panel-body\"  style=\"height: 60vh; overflow-y: auto;\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\" *ngFor=\"let m of messages\"><span [innerHTML] = \"m\"></span></li>\n                </ul>\n              </div>\n              <div class=\"panel-footer text-right\">\n                Send Message:\n                <div class=\"row\">\n                  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n                    <textarea type=\"text\" [(ngModel)]=\"inMessage\" name=\"inMessage\" id=\"inMessage\" required style=\"width: 100%\" (keyup.enter)=\"sendGroupMessage()\"></textarea>\n                    <hr>\n                    <button (click)=\"sendGroupMessage()\" class=\"btn btn-md btn-primary waves-effect\">Send Message</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/project-analytics/project-analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectAnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prjm_service__ = __webpack_require__("../../../../../src/app/modules/prjm/prjm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rc_rc_service__ = __webpack_require__("../../../../../src/app/modules/rc/rc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usm_usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectAnalyticsComponent = /** @class */ (function () {
    function ProjectAnalyticsComponent(AR, router, usm, prjmSevice, rc) {
        this.AR = AR;
        this.router = router;
        this.usm = usm;
        this.prjmSevice = prjmSevice;
        this.rc = rc;
        this.MemberList = {};
        this.messages = [];
    }
    ProjectAnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Keys = Object.keys;
        this.Subs1 = this.AR.params.subscribe(function (param) {
            _this.Query = param.prjm_id;
        });
        this.ProjectLoad();
        this.MilestoneLoad();
        this.membersCount();
        this.joinRoom();
        this.getResponseRoom();
        this.getGroupMessage();
    };
    ProjectAnalyticsComponent.prototype.sendGroupMessage = function () {
        if (this.inMessage.search("help add-member") != -1) {
            this.messages.push("Click 'Team' at the navbar and add the username in the control on the right side pane");
        }
        if (this.inMessage.search("help add-milestones") != -1) {
            this.messages.push("Click 'milestones' then new milestone");
        }
        else {
            this.rc.sendGroupMessage(this.Query, '<div class="media">' +
                '<div class="media-left">' +
                '<img class="img-rounded" src="../assets/uploads/avatars/' + JSON.parse(localStorage.getItem('user')).picture + '" width="48" height="48"/>' +
                '</div>' +
                '<div class="media-body">' +
                '<h4 class="media-heading">' + JSON.parse(localStorage.getItem('user')).username + '</h4>' +
                '<p>' + this.inMessage + '</p>' +
                '</div>' +
                '</div>');
        }
        this.inMessage = "";
    };
    ProjectAnalyticsComponent.prototype.getGroupMessage = function () {
        var _this = this;
        this.rc.getGroupMessage().subscribe(function (data) {
            _this.messages.push(data);
        });
    };
    ProjectAnalyticsComponent.prototype.joinRoom = function () {
        this.rc.enterRoom(this.Query, JSON.parse(localStorage.getItem('user')).username);
    };
    ProjectAnalyticsComponent.prototype.getResponseRoom = function () {
        var _this = this;
        this.rc.getRoomEnterRes().subscribe(function (data) {
            _this.messages.push(data);
        });
    };
    ProjectAnalyticsComponent.prototype.membersCount = function () {
        try {
            var team = this.Projects;
            return team.members.length;
        }
        catch (error) {
        }
    };
    ProjectAnalyticsComponent.prototype.ProjectLoad = function () {
        var _this = this;
        this.Project_Sub = this.prjmSevice.getProjectByID({ 'prjm_id': this.Query }).subscribe(function (project) {
            _this.Projects = project.projects;
            var memList = {};
            for (var mem in project.projects.members) {
                _this.MemberList[project.projects.members[mem].user] = project.projects.members[mem].role;
                if (JSON.parse(localStorage.getItem('user')).id == project.projects.members[mem].user) {
                    _this.UserRole = project.projects.members[mem].role;
                }
            }
            //throw out unwanted users
            if (_this.MemberList[JSON.parse(localStorage.getItem('user')).id] == null) {
                _this.router.navigate(['/']);
            }
        });
    };
    ProjectAnalyticsComponent.prototype.MilestoneLoad = function () {
        var _this = this;
        this.Subs2 = this.prjmSevice.getMilestones({ 'id': this.Query }).subscribe(function (milestones) {
            _this.Milestones = milestones.milestones;
        });
    };
    ProjectAnalyticsComponent.prototype.ngAfterViewInit = function () {
        this.loadDateTime();
    };
    ProjectAnalyticsComponent.prototype.datediff = function (date2) {
        return new Date(date2) > new Date() ? Math.round(Math.abs(new Date(date2).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) : 0;
    };
    ProjectAnalyticsComponent.prototype.loadDateTime = function () {
        $('#projectSDate').datetimepicker({
            format: 'YYYY-MM-DD',
            ignoreReadonly: true,
            defaultDate: new Date().toLocaleDateString(),
        });
        $('#projectSDate').focusout(function () {
            sessionStorage.setItem('SED', $(this).val());
            $('#endDate').datetimepicker({
                format: 'YYYY-MM-DD',
                ignoreReadonly: true,
                minDate: new Date($('#projectSDate').val()),
                defaultDate: new Date($('#projectSDate').val()),
            });
        });
        $('#endDate').focusout(function () {
            sessionStorage.setItem('PED', $(this).val());
        });
        $('#tasks-projectSDate').datetimepicker({
            format: 'YYYY-MM-DD',
            ignoreReadonly: true,
            defaultDate: new Date().toLocaleDateString(),
        });
        $('#tasks-projectSDate').focusout(function () {
            sessionStorage.setItem('TSED', $(this).val());
            $('#tasks-endDate').datetimepicker({
                format: 'YYYY-MM-DD',
                ignoreReadonly: true,
                minDate: new Date($('#tasks-projectSDate').val()),
                defaultDate: new Date($('#tasks-projectSDate').val())
            });
        });
        $('#tasks-endDate').focusout(function () {
            sessionStorage.setItem('TPED', $(this).val());
        });
    };
    //Procedures
    ProjectAnalyticsComponent.prototype.onSubmit = function () {
        var _this = this;
        var milestoneDetails = {
            prjm_id: this.Query,
            milestones: {
                project_id: this.Query,
                milestone_name: this.milestoneName,
                milestone_startDate: sessionStorage.getItem('SED'),
                milestone_endDate: sessionStorage.getItem('PED'),
                milestone_desc: this.milestoneDesc,
            }
        };
        this.prjmSevice.addMilestones(milestoneDetails).subscribe(function (data) {
            if (data.success) {
                _this.Mile_Sub = _this.prjmSevice.getMilestones({ "id": _this.Query }).subscribe(function (milestones) {
                    _this.Milestones = milestones.milestones;
                });
            }
        });
    };
    ProjectAnalyticsComponent.prototype.onSubmitTask = function () {
        var _this = this;
        var milestoneDetails = {
            mile_id: this.MileID,
            tasks: {
                milestone_id: this.MileID,
                task_name: this.taskName,
                task_startDate: sessionStorage.getItem('TSED'),
                task_endDate: sessionStorage.getItem('TPED'),
                task_desc: this.taskDesc,
            }
        };
        this.prjmSevice.addTask(milestoneDetails).subscribe(function (data) {
            if (data.success) {
                _this.Tasks_Sub = _this.prjmSevice.getTasks({ "mile_id": _this.MileID }).subscribe(function (tasks) {
                    _this.Tasks = tasks.tasks;
                });
            }
        });
    };
    ProjectAnalyticsComponent.prototype.viewTasks = function (mile) {
        var _this = this;
        this.MileID = mile;
        this.Tasks_Sub = this.prjmSevice.getTasks({ "mile_id": this.MileID }).subscribe(function (tasks) {
            _this.Tasks = tasks.tasks;
        });
    };
    //routes
    ProjectAnalyticsComponent.prototype.navigateToMilestones = function () {
        this.router.navigate(['/project/milestones', this.Query]);
    };
    ProjectAnalyticsComponent.prototype.getMonth = function (date) {
        var Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        return Months[new Date(date).getMonth()];
    };
    ProjectAnalyticsComponent.prototype.getDay = function (day) {
        return new Date(day).getDate();
    };
    ProjectAnalyticsComponent.prototype.convertDate = function (date) {
        return new Date(date).toLocaleDateString();
    };
    ProjectAnalyticsComponent.prototype.convertKey = function (key) {
        return key == null ? [] : this.Keys(key);
    };
    ProjectAnalyticsComponent.prototype.checkObj = function (val) {
        return val instanceof Array ? val.length == 0 : val == null;
    };
    ProjectAnalyticsComponent.prototype.getProgress = function (milestone) {
        if (this.checkObj(milestone)) {
            return 0;
        }
        else {
            var counter = 0;
            for (var m in milestone) {
                counter += milestone[m].isCompleted == true ? 1 : 0;
            }
            return ((counter / milestone.length) * 100).toFixed(0);
        }
    };
    ProjectAnalyticsComponent.prototype.updateMile = function (id, stat) {
        this.prjmSevice.updateMile({ 'id': id, 'stat': stat });
    };
    ProjectAnalyticsComponent.prototype.ngOnDestroy = function () {
        this.Subs1.unsubscribe();
        this.Subs2.unsubscribe();
        //this.Tasks_Sub.unsubscribe();
    };
    ProjectAnalyticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-analytics',
            template: __webpack_require__("../../../../../src/app/modules/prjm/components/project-analytics/project-analytics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/prjm/components/project-analytics/project-analytics.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__usm_usm_service__["a" /* UsmService */], __WEBPACK_IMPORTED_MODULE_2__prjm_service__["a" /* PrjmService */], __WEBPACK_IMPORTED_MODULE_3__rc_rc_service__["a" /* RcService */]])
    ], ProjectAnalyticsComponent);
    return ProjectAnalyticsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/project-mile/project-mile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-container-navyBlue{\r\n    background-color: #034f84;\r\n    color: white;\r\n    border-radius: 0px;\r\n}\r\n\r\n.card-body-navyBlue{\r\n    background-color: white;\r\n    color: #034f84;\r\n}\r\n\r\n.card-container-green{\r\n    background-color:  #34A853;\r\n    color: white;\r\n    border-radius: 0px;\r\n}\r\n\r\n.card-body-green{\r\n    background-color: white;\r\n    color: #34A853;\r\n}\r\n\r\n.completed{\r\n    background-color:  #34A853;\r\n    color: white;\r\n}\r\n\r\n.card-container-red{\r\n    background-color:  #EA4335;\r\n    color: white;\r\n}\r\n\r\n.card-body-red{\r\n    background-color: white;\r\n    color: #EA4335;\r\n}\r\n\r\n.card-container-violet{\r\n    background-color:  #7B0099;\r\n    color: white;\r\n}\r\n\r\n.card-body-violet{\r\n    background-color: white;\r\n    color: #7B0099;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/project-mile/project-mile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-project-side-nav></app-project-side-nav>\n<app-project-nav></app-project-nav>\n\n\n\n<section class=\"content\" *ngIf=\"Milestone\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-sm-12 col-md-12 col-xs-12\" *ngIf=\"Milestone\">\n                <div class=\"panel card-container-navyBlue\">\n                    <div class=\"panel-heading\">\n                      Milestone Details <span class=\"float: right\"><a  *ngIf=\"isOwner()\" class=\"btn btn-md btn-success\" data-toggle=\"modal\" data-target=\"#NewTasksModal\" >New Task</a></span><br><br>\n                      <table class=\"table table-condensed table-responsive\" style=\"font-size: 15pt\">\n                          <tr>\n                            <td>Milestone Name : <b>{{Milestone.milestone_name}}</b></td>\n                            <td>Start Date : <b>{{ convertDate(Milestone.milestone_startDate) }}</b></td>\n                            <td>End Date : <b>{{ convertDate(Milestone.milestone_endDate) }}</b></td>\n                            <td *ngIf=\"datediff(Milestone.milestone_endDate) > 0; else Today\"> {{ datediff(Milestone.milestone_endDate) }} Day/s Remaining</td>\n                            <ng-template #Today>\n                              <td>The Milestone is on its due</td>\n                            </ng-template>\n                            <td>Progress : <b>{{ getProgress(Tasks) }}%</b></td>\n                          </tr>\n                      </table>\n                    </div>\n                  </div>\n            </div>\n    \n    \n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n                <div class=\"card\">\n                  <div class=\"header  bg-indigo\">Tasks</div>\n                  <div class=\"body\">\n                    <div class=\"row\">\n\n                      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" >\n                        <!-- Start -->\n  \n\n                        <div class=\"row\" *ngIf=\"!checkObj(Tasks); else emptyTasks\">\n                            <div class=\"list-group col-lg-12 col-md-12 col-xs-12 col-sm-12\">\n                                <div class=\"info-box bg-{{completed(Tasks[task]['isCompleted'])}} hover-zoom-effect list-group-item\" *ngFor=\"let task of convertKey(Tasks)\" (click) = \"getTaskInfo(task)\">\n                                    <div class=\"icon\">\n                                      <h5>{{ getMonth(Tasks[task]['task_endDate']) }}</h5>\n                                      <h4 class=\"day\">\n                                        {{ getDay(Tasks[task]['task_endDate']) }}\n                                      </h4>\n                                    </div>\n                                    <div class=\"content\">\n                                        <div>{{ Tasks[task]['task_name'] }}</div>\n                                        <div>{{ Tasks[task]['task_desc'].slice(0,10) }}</div>\n                                        <div><b>Assigned To: </b>{{ Tasks[task]['task_assigned']['loginDetails']['username'] }}</div>\n                                    </div>\n                                </div>\n                            </div>             \n                          </div>\n                          <ng-template #emptyTasks>\n                            <div class=\"row text-center\">\n                              <h3>No Tasks</h3>\n                            </div>\n                          </ng-template>\n                          \n                          <!-- End -->\n                      </div>\n                    \n                    </div>\n                  </div>\n                </div>\n            </div>\n      \n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\n              <div class=\"row\">\n\n                <div class=\"col-lg-12- col-md-12 col-sm-12 col-xs-12\"  *ngIf=\"isOwner()\" style=\"overflow-y:scroll; max-height: 100vh\">\n                  <div class=\"card\">\n                    <div class=\"header bg-green\">Task Submission</div>\n                    <div class=\"body\">\n                        <div class=\"row\" *ngIf=\"!checkObj(requests); else emptyTasksReq\">\n                            <div class=\"col-lg-12 col-md-12 col-xs-12 col-sm-12\"  role=\"tablist\" >\n                                <div class=\"card\" *ngFor=\"let task of convertKey(requests)\">\n                                  <div class=\"header bg-green\">\n                                      <h4> {{ requests[task]['task_name'] }} |  Submitted on : {{ requests[task]['task_submit_date'] | date: 'long' }}</h4>\n                                  </div>\n                                  <div class=\"body\">\n                                      <p *ngIf=\"requests[task]['task_submit_comment']\">{{ requests[task]['task_submit_comment'] }}</p>\n                                      <br>\n                                      <br>\n                                      <div class=\"btn-group btn-group-justified\">\n\n                                          <a class=\"btn btn-primary waves-effect\" (click) = \"downloadAttachment(requests[task]['task_file_attachment'])\">Download Attachment</a>\n                                          <a class=\"btn btn-success waves-effect\" (click) = \"updateTaskSubmission(requests[task]['_id'], true)\" >Approve</a>\n                                          <a class=\"btn btn-danger waves-effect\" (click) = \"updateTaskSubmission(requests[task]['_id'], false)\">Reject</a>\n                                      </div>\n                                  </div>\n                                </div>\n                            </div>             \n                          </div>\n                          <ng-template #emptyTasksReq>\n                            <div class=\"row text-center\">\n                              <h3>No Submission</h3>\n                            </div>\n                          </ng-template>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-12- col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"card\">\n                      <div class=\"header bg-red\">My Tasks</div>\n                      <div class=\"body\">\n                          <div class=\"row\" *ngIf=\"!checkObj(myTasks); else emptymyTasks\">\n                              <div class=\"panel-group col-lg-12 col-md-12 col-xs-12 col-sm-12\" role=\"tablist\" aria-multiselectable=\"true\">\n\n                                <div class=\"panel panel-{{ taskcolor(myTasks[task]) }}\" id=\"acc_myTask\" *ngFor=\"let task of convertKey(myTasks)\">\n                                    <div class=\"panel-heading\" role=\"tab\" id=\"h_{{myTasks[task]['_id']}}\">\n                                        <h4 class=\"panel-title\">\n                                            <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#acc_myTask\" href=\"#c_{{myTasks[task]['_id']}}\" aria-expanded=\"false\">\n                                                {{myTasks[task]['task_name']}}  &nbsp;|&nbsp; <b>Submission: </b>{{myTasks[task]['task_endDate'] | date : 'long'}}\n                                            </a>\n                                        </h4>\n                                    </div>\n                                    <div id=\"c_{{myTasks[task]['_id']}}\" class=\"panel-collapse collapse collapse\" role=\"tabpanel\">\n                                        <div class=\"panel-body\">\n                                          <ul class=\"list-group\">\n\n                                            <li class=\"list-group-item\">\n                                              <h4 class=\"list-group-item-heading\">Task Name</h4>\n                                              <h5 class=\"list-group-item-text\">{{myTasks[task]['task_name']}}</h5>\n                                            </li>\n\n                                            <li class=\"list-group-item\">\n                                              <h4 class=\"list-group-item-heading\">Task Descripton</h4>\n                                              <h5 class=\"list-group-item-text\">{{myTasks[task]['task_desc']}}</h5>\n                                            </li>\n\n\n                                            <li class=\"list-group-item\">\n                                                <h4 class=\"list-group-item-heading\">Task Start Date</h4>\n                                                <h5 class=\"list-group-item-text\">{{myTasks[task]['task_startDate'] | date : 'short' }}</h5>\n                                            </li>\n\n                                            <li class=\"list-group-item\">\n                                                <h4 class=\"list-group-item-heading\">Task End Date</h4>\n                                                <h5 class=\"list-group-item-text\">{{myTasks[task]['task_endDate'] | date: 'short' }}</h5>\n                                            </li>\n                                          \n                                            <li class=\"list-group-item\"  *ngIf=\"!isOwner(); else Owner\">\n                                                <button *ngIf=\"!myTasks[task]['task_send']; else taskWait\" class=\"btn btn-success waves-effect\" (click) = \"setCur(myTasks[task]['_id'])\" data-toggle=\"modal\" data-target=\"#ComplyModal\">Comply to this task</button>\n                                                <ng-template #taskWait>\n                                                  <h4 style=\"color: green\">\n                                                    <span *ngIf=\"!myTasks[task]['isCompleted']; else isCompleted\">Waiting for Approval</span>\n                                                    <ng-template #isCompleted>\n                                                      <span>Congratulations! Your work was approved</span>\n                                                    </ng-template>\n                                                  </h4>\n                                                </ng-template>\n                                            </li>\n\n                                            <ng-template #Owner>\n                                              <li class=\"list-group-item\">\n                                                  <a class=\"btn btn-success waves-effect\" *ngIf=\"!myTasks[task]['isCompleted']; else Rvoke\" (click) = \"updateTaskSubmission(myTasks[task]['_id'], true)\" >Approve This Task</a>\n                                              </li>\n\n                                              <ng-template #Rvoke>\n                                                  <a class=\"btn btn-danger waves-effect\" (click) = \"updateTaskSubmission(myTasks[task]['_id'], false)\" >Revoke this task</a>\n                                             \n                                              </ng-template>\n                                            </ng-template>\n\n                                          </ul>\n\n                                        </div>\n                                    </div>\n                                </div>\n\n\n                              </div>             \n                            </div>\n                            <ng-template #emptymyTasks>\n                              <div class=\"row text-center\">\n                                <h3>Sweet! You don't have any tasks.</h3>\n                              </div>\n                            </ng-template>\n                      </div>\n                    </div>\n                </div>\n\n              </div>\n            </div>\n              \n        </div>\n      </div>\n</section>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"NewTasksModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n    \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">New Task</h4>\n        </div>\n        <div class=\"modal-body\">\n          <form (submit) = \"onSubmitTask()\">\n\n              <div class=\"form-group\">\n                  <label class=\"control-label\">Task Name</label>\n                  \n                  <div class=\"form-line\">\n                    <input class=\"form-control\" type=\"text\" [(ngModel)] = \"taskName\" name=\"taskName\" />\n                  </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <div class=\"control-label\">Start Date</div>\n                  <div class='form-line'>\n                      <input type='text' class=\"form-control\" readonly id=\"tasks-projectSDate\"/>\n                  </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <div class=\"control-label\">End Date</div>\n                  <div class='form-line'>\n                      <input type='text' id=\"tasks-endDate\" class=\"form-control\" readonly/>\n                  </div>\n              </div>\n\n\n              <div class=\"form-group\">\n                  <div class=\"control-label\">Description</div>\n                  <div class=\"form-line\">\n                    <textarea class=\"form-control\" [(ngModel)] = \"taskDesc\" name=\"taskDesc\" ></textarea>\n                  </div>\n              </div>\n  \n              <div class=\"form-group\" *ngIf=\"Members\">\n                <label class=\"control-label\">Assigned To?</label>\n                <div class=\"form-line\">\n                  <select class=\"form-control\" [(ngModel)] = \"taskAssigned\" name = \"taskAssigned\">\n                    <option value=\"{{Members['members'][mem]['user']['_id']}}\" *ngFor=\"let mem of convertKey(Members['members'])\">\n                      {{ Members['members'][mem]['user']['loginDetails']['username'] }}\n                    </option>\n                  </select>\n                </div>\n              </div>\n\n              \n              <div class=\"form-group text-center\">\n                  <input type=\"submit\" class=\"form-control btn btn-primary\"/>\n              </div>\n  \n\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"taskClose\">Close</button>\n        </div>\n      </div>\n      \n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"ComplyModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n    \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Comply</h4>\n        </div>\n        <div class=\"modal-body\">\n          <form (submit) = \"onComplyTask()\">\n\n              <div class=\"form-group\">\n                  <div class=\"control-label\">Comment</div>\n                  <div class=\"form-line\">\n                    <textarea class=\"form-control\" [(ngModel)] = \"task_submit_comment\" name=\"task_submit_comment\" ></textarea>\n                  </div>\n              </div>\n\n              <hr/>\n              \n              <div class=\"form-group\">\n                <label class=\"control-label\">Your File</label>\n                <input type=\"file\" (change) = \"fileChange($event)\" required/>\n              </div>\n\n              <div class=\"form-group text-center\">\n                  <input type=\"submit\" class=\"form-control btn btn-primary\"/>\n              </div>\n\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"ComplyClose\">Close</button>\n        </div>\n      </div>\n      \n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/project-mile/project-mile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectMileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prjm_service__ = __webpack_require__("../../../../../src/app/modules/prjm/prjm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectMileComponent = /** @class */ (function () {
    function ProjectMileComponent(router, prjmSevice, AR) {
        this.router = router;
        this.prjmSevice = prjmSevice;
        this.AR = AR;
        this.myTasks = [];
        this.requests = [];
    }
    ProjectMileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Keys = Object.keys;
        this.AR_Sub = this.AR.params.subscribe(function (param) {
            _this.Query = param.prjm_id;
            _this.MileID = param.mile_id;
        });
        this.Mem_Sub = this.prjmSevice.getAllMembers({ "id": this.MileID }).subscribe(function (pr) {
            _this.Members = pr.result;
        });
        this.Mile_Sub = this.prjmSevice.getMilestone({ "id": this.Query }).subscribe(function (milestone) {
            _this.Milestone = milestone.milestone;
        });
        setInterval(function () { return _this.loadTasks(); }, 500);
    };
    ProjectMileComponent.prototype.ngAfterViewInit = function () {
        this.loadDateTime();
        this.formload();
    };
    ProjectMileComponent.prototype.formload = function () {
        //On focus event
        $('.form-control').focus(function () {
            $(this).parent().addClass('focused');
        });
        //On focusout event
        $('.form-control').focusout(function () {
            var $this = $(this);
            if ($this.parents('.form-group').hasClass('form-float')) {
                if ($this.val() == '') {
                    $this.parents('.form-line').removeClass('focused');
                }
            }
            else {
                $this.parents('.form-line').removeClass('focused');
            }
        });
        //On label click
        $('body').on('click', '.form-float .form-line .form-label', function () {
            $(this).parent().find('input').focus();
        });
        //Not blank form
        $('.form-control').each(function () {
            if ($(this).val() !== '') {
                $(this).parents('.form-line').addClass('focused');
            }
        });
    };
    ProjectMileComponent.prototype.loadTasks = function () {
        var _this = this;
        this.Tasks_Sub = this.prjmSevice.getTasks({ "mile_id": this.Query }).subscribe(function (tasks) {
            if (_this.Tasks != tasks.tasks) {
                _this.Tasks = tasks.tasks;
                _this.myTasks = [];
                _this.requests = [];
                _this.curInfoCom = null;
                _this.curInfoProg = null;
                for (var _i = 0, _a = _this.convertKey(_this.Tasks); _i < _a.length; _i++) {
                    var task = _a[_i];
                    if (JSON.parse(localStorage.getItem("user")).id == _this.Tasks[task]['task_assigned']['_id']) {
                        _this.myTasks.push(_this.Tasks[task]);
                    }
                    else if (_this.Tasks[task]['task_send'] && !_this.Tasks[task]['task_confirmed']) {
                        _this.requests.push(_this.Tasks[task]);
                    }
                }
            }
        });
    };
    ProjectMileComponent.prototype.fileChange = function ($event) {
        this.task_file_attachment = $event.target['files'][0];
    };
    ProjectMileComponent.prototype.completed = function (Task) {
        return Task ? 'green' : 'pink';
    };
    ProjectMileComponent.prototype.taskcolor = function (task) {
        var color = "";
        if (task['task_confirmed']) {
            color = 'success';
        }
        else {
            if (task['task_send']) {
                color = 'warning';
            }
            else {
                color = 'primary';
            }
        }
        return color;
    };
    ProjectMileComponent.prototype.isOwner = function () {
        return JSON.parse(localStorage.getItem("user")).id == this.Milestone['project_id']['owner'];
    };
    ProjectMileComponent.prototype.datediff = function (date2) {
        return new Date(date2) > new Date() ? Math.round(Math.abs(new Date(date2).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) : 0;
    };
    ProjectMileComponent.prototype.loadDateTime = function () {
        $('#projectSDate').datetimepicker({
            format: 'YYYY-MM-DD',
            ignoreReadonly: true,
            defaultDate: new Date().toLocaleDateString(),
        });
        $('#projectSDate').focusout(function () {
            sessionStorage.setItem('SED', $(this).val());
            $('#endDate').datetimepicker({
                format: 'YYYY-MM-DD',
                ignoreReadonly: true,
                minDate: new Date($('#projectSDate').val()),
                defaultDate: new Date($('#projectSDate').val()),
            });
        });
        $('#endDate').focusout(function () {
            sessionStorage.setItem('PED', $(this).val());
        });
        $('#tasks-projectSDate').datetimepicker({
            format: 'YYYY-MM-DD',
            ignoreReadonly: true,
            defaultDate: new Date().toLocaleDateString(),
        });
        $('#tasks-projectSDate').focusout(function () {
            sessionStorage.setItem('TSED', $(this).val());
            $('#tasks-endDate').datetimepicker({
                format: 'YYYY-MM-DD',
                ignoreReadonly: true,
                minDate: new Date($('#tasks-projectSDate').val()),
                defaultDate: new Date($('#tasks-projectSDate').val())
            });
        });
        $('#tasks-endDate').focusout(function () {
            sessionStorage.setItem('TPED', $(this).val());
        });
    };
    ProjectMileComponent.prototype.onSubmitTask = function () {
        var _this = this;
        var milestoneDetails = {
            mile_id: this.Query,
            tasks: {
                milestone_id: this.Query,
                task_name: this.taskName,
                task_startDate: sessionStorage.getItem('TSED'),
                task_endDate: sessionStorage.getItem('TPED'),
                task_desc: this.taskDesc,
                task_assigned: this.taskAssigned
            }
        };
        $('#taskClose').click();
        this.prjmSevice.addTask(milestoneDetails).subscribe(function (data) {
            if (data.success) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()("Wonderful!", "New task was added", "success");
                _this.loadTasks();
            }
        });
    };
    ProjectMileComponent.prototype.setCur = function (id) {
        this.curTask = id;
    };
    ProjectMileComponent.prototype.onComplyTask = function () {
        var _this = this;
        var frmData = new FormData();
        frmData.append('task_file_attachment', this.task_file_attachment, this.task_file_attachment.name);
        frmData.append('task_submit_comment', this.task_submit_comment);
        frmData.append('id', this.curTask);
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: "You about to submit your work",
            text: "Are you sure of this?",
            type: "warning",
            showConfirmButton: true,
            showCancelButton: true
        }).then(function (res) {
            if (res.value) {
                _this.prjmSevice.complyTask(frmData).subscribe(function (res) {
                    if (res.success) {
                        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                            title: "Horray!",
                            text: res.msg,
                            type: "success"
                        });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                            title: "Oops!",
                            text: "Something goes wrong T^T",
                            type: "error"
                        });
                    }
                });
            }
            $('#ComplyClose').click();
            _this.loadTasks();
        });
    };
    ProjectMileComponent.prototype.getMonth = function (date) {
        var Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        return Months[new Date(date).getMonth()];
    };
    ProjectMileComponent.prototype.getDay = function (day) {
        return new Date(day).getDate();
    };
    ProjectMileComponent.prototype.convertDate = function (date) {
        return new Date(date).toLocaleDateString();
    };
    ProjectMileComponent.prototype.convertKey = function (key) {
        return key == null ? [] : this.Keys(key);
    };
    ProjectMileComponent.prototype.checkObj = function (val) {
        return val instanceof Array ? val.length == 0 : val == null;
    };
    ProjectMileComponent.prototype.getProgress = function (milestone) {
        if (this.checkObj(milestone)) {
            return 0;
        }
        else {
            var counter = 0;
            for (var m in milestone) {
                counter += milestone[m].isCompleted == true ? 1 : 0;
            }
            return ((counter / milestone.length) * 100).toFixed(0);
        }
    };
    ProjectMileComponent.prototype.getTaskInfo = function (index) {
        //this.curInfoProg = this.inProgress[index];
    };
    ProjectMileComponent.prototype.getTaskcomplete = function (index) {
        //this.curInfoCom = this.completed[index];
    };
    ProjectMileComponent.prototype.updateComplete = function (index, stats) {
        var _this = this;
        this.prjmSevice.updateTask({ 'id': index, 'status': stats }).subscribe(function (task) {
            if (task.success) {
                _this.loadTasks();
            }
        });
    };
    ProjectMileComponent.prototype.updateTaskSubmission = function (index, stats) {
        var _this = this;
        this.prjmSevice.updateSubmission({ 'id': index, 'status': stats }).subscribe(function (task) {
            if (task.success) {
                _this.loadTasks();
            }
        });
    };
    ProjectMileComponent.prototype.downloadAttachment = function (file) {
        this.prjmSevice.downloadAttachment({ 'downloadfile': file }).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_4_file_saver__["saveAs"](res, file);
        });
    };
    ProjectMileComponent.prototype.ngOnDestroy = function () {
        this.AR_Sub.unsubscribe();
        this.Mile_Sub.unsubscribe();
        this.Tasks_Sub.unsubscribe();
    };
    ProjectMileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-mile',
            template: __webpack_require__("../../../../../src/app/modules/prjm/components/project-mile/project-mile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/prjm/components/project-mile/project-mile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__prjm_service__["a" /* PrjmService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProjectMileComponent);
    return ProjectMileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/project-schedule/project-schedule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/project-schedule/project-schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<app-project-side-nav></app-project-side-nav>\n<app-project-nav></app-project-nav>\n\n\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-6 col-sm-6 col-md-6 col-xs-12 col-md-offset-3\">\n        <div class=\"card\">\n          <div class=\"header\"></div>\n          <div class=\"body\">\n              <div *ngIf=\"calendarOptions\">\n                  <ng-fullcalendar #ucCalendar [options]=\"calendarOptions\" [(eventsModel)]=\"events\"></ng-fullcalendar>\n                </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/project-schedule/project-schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prjm_service__ = __webpack_require__("../../../../../src/app/modules/prjm/prjm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectScheduleComponent = /** @class */ (function () {
    function ProjectScheduleComponent(AR, router, prjmSevice) {
        this.AR = AR;
        this.router = router;
        this.prjmSevice = prjmSevice;
        this.events = [];
    }
    ProjectScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Keys = Object.keys;
        this.Subs1 = this.AR.params.subscribe(function (param) {
            _this.Query = param.prjm_id;
        });
    };
    ProjectScheduleComponent.prototype.ngAfterViewInit = function () {
        this.loadEvents();
        this.calendarOptions = {
            editable: false,
            eventLimit: false,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            selectable: true,
            events: this.events,
        };
    };
    ProjectScheduleComponent.prototype.clearEvents = function () {
        this.events = [];
    };
    ProjectScheduleComponent.prototype.loadEvents = function () {
        var _this = this;
        this.clearEvents();
        this.prjmSevice.getProjectByID({ 'prjm_id': this.Query }).subscribe(function (project) {
            _this.Projects = project.projects;
            _this.events.push({ title: project.projects.name, start: project.projects.startDate, end: project.projects.endDate, backgroundColor: '#4CAF50' });
            for (var mile in project.projects.milestones) {
                _this.events.push({ title: project.projects.milestones[mile].milestone_name, start: project.projects.milestones[mile].milestone_startDate, end: project.projects.milestones[mile].milestone_endDate });
                for (var task in project.projects.milestones[mile].tasks) {
                    _this.events.push({ title: project.projects.milestones[mile].tasks[task].task_name, start: project.projects.milestones[mile].tasks[task].task_startDate, end: project.projects.milestones[mile].tasks[task].task_endDate, backgroundColor: 'red' });
                }
            }
        });
    };
    ProjectScheduleComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng_fullcalendar__["a" /* CalendarComponent */])
    ], ProjectScheduleComponent.prototype, "ucCalendar", void 0);
    ProjectScheduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-schedule',
            template: __webpack_require__("../../../../../src/app/modules/prjm/components/project-schedule/project-schedule.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/prjm/components/project-schedule/project-schedule.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__prjm_service__["a" /* PrjmService */]])
    ], ProjectScheduleComponent);
    return ProjectScheduleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/project-team/project-team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/project-team/project-team.component.html":
/***/ (function(module, exports) {

module.exports = "<app-project-side-nav></app-project-side-nav>\n<app-project-nav></app-project-nav>\n\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-9 col-md-9 col-sm-9\">\n          <div class=\"card\">\n            <div class=\"header bg-green\">Members</div>\n            <div class=\"body\">\n              <div class=\"row\" *ngIf=\"Members\">\n\n                  <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let mem of convertKey(Members['members'])\">\n                      <div class=\"card\">\n                          <div class=\"header bg-green\">\n                              <h2>\n                                  <h1>{{ Members['members'][mem]['user']['loginDetails']['username'] }} </h1><small>{{Members['members'][mem]['user']['loginDetails']['email']}}</small>\n                              </h2>\n                              <ul class=\"header-dropdown m-r--5\">\n                                  <li class=\"dropdown\">\n                                      <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                          <i class=\"mdi mdi-arrow-down\" style=\"color: white\"></i>\n                                      </a>\n                                      <ul class=\"dropdown-menu pull-right\">\n                                          <li><a  (click)=\"viewProfile(Members['members'][mem]['user'])\" data-toggle=\"modal\" data-target=\"#ProfileView\">View Profile</a></li>\n                                          <li><a href=\"javascript:void(0);\">Message</a></li> \n                                          <li><a *ngIf= \"checkRole(Members['members'])\" (click)=\"kickMember(Members['members'][mem]['user']['_id'])\">Kick from the Project Team</a></li>\n                                      </ul>\n                                  </li>\n                              </ul>\n                          </div>\n                          <div class=\"body\">\n                              Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.\n                          </div>\n                      </div>\n                  </div>\n\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"col-lg-3 col-md-3 col-sm-3\">\n        <div class=\"card\">\n          <div class=\"header bg-green\">Controls</div>\n          <div class=\"body\">\n            <form (submit) = \"addMember()\">\n\n                <div class=\"form-group\">\n\n                    <label class=\"control-label\">Username</label>\n                    <div class=\"form-line\">\n                        <input class=\"form-control\" type=\"text\" [(ngModel)] = \"Member_ID\" name=\"Member_ID\" required/>\n                    </div>\n                \n                </div>\n  \n    \n              <button class=\"btn btn-primary waves-effect\" type=\"submit\">Add new Team member</button>\n            </form>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3 col-md-3 col-sm-3\">\n        <div class=\"card\">\n          <div class=\"header bg-green\">Possible Users to Join</div>\n          <div class=\"body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\" *ngFor=\"let u of convertKey(POS)\">\n                <h4 class=\"list-group-item-heading\">Username: {{POS[u]['loginDetails']['username']}}</h4>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"ProfileView\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n    \n      <!-- Modal content-->\n      <div class=\"modal-content modal-col-green\">\n        <div class=\"modal-header text-center\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h2 class=\"modal-title\" *ngIf=\"vProfile\">\n            <img src=\"../assets/uploads/avatars/{{vProfile['userDetails']['picture']}}\" class=\"img-rounded img-responsive\" style=\"width: 50%\" />\n            <h1>{{vProfile['userDetails']['lastname']}}, {{vProfile['userDetails']['firstname']}}</h1>\n          </h2>\n        </div>\n        <div class=\"modal-body\">\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/project-team/project-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectTeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prjm_service__ = __webpack_require__("../../../../../src/app/modules/prjm/prjm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_service__ = __webpack_require__("../../../../../src/app/modules/admin/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectTeamComponent = /** @class */ (function () {
    function ProjectTeamComponent(prjm, router, AR, adminSc) {
        this.prjm = prjm;
        this.router = router;
        this.AR = AR;
        this.adminSc = adminSc;
    }
    ProjectTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Keys = Object.keys;
        this.AR.params.subscribe(function (q) {
            _this.PID = q.prjm_id;
        });
        this.Mem_Sub = this.prjm.getAllMembers({ "id": this.PID }).subscribe(function (pr) {
            if (pr.success) {
                _this.Members = pr.result;
            }
        });
        this.adminSc.getCoreDataUsers().subscribe(function (data) {
            _this.POS = data;
        });
    };
    ProjectTeamComponent.prototype.checkRole = function (f) {
        for (var fx in f) {
            if (JSON.parse(localStorage.getItem('user')).id == f[fx]['user']['_id']) {
                return f[fx].role < 2;
            }
        }
    };
    ProjectTeamComponent.prototype.convertKey = function (key) {
        return key == null ? [] : this.Keys(key);
    };
    ProjectTeamComponent.prototype.checkObj = function (val) {
        return val instanceof Array ? val.length == 0 : val == null;
    };
    ProjectTeamComponent.prototype.ngAfterViewInit = function () {
    };
    ProjectTeamComponent.prototype.addMember = function () {
        var _this = this;
        var details = {
            uid: this.Member_ID,
            id: this.PID
        };
        this.prjm.addMember(details).subscribe(function (res) {
            if (res.success) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()("Yipee!", res.msg, "success");
                _this.Member_ID = "";
                _this.Mem_Sub = _this.prjm.getAllMembers({ "id": _this.PID }).subscribe(function (pr) {
                    if (pr.success) {
                        _this.Members = pr.result;
                    }
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()("Oh no!", res.msg, "warning");
                _this.Member_ID = "";
            }
        });
    };
    ProjectTeamComponent.prototype.kickMember = function (userID) {
        var _this = this;
        console.log(userID);
        var details = {
            uid: userID,
            id: this.PID
        };
        this.prjm.kickMember(details).subscribe(function (res) {
            if (res.success) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()("Kicked!", res.msg, "info");
                _this.Mem_Sub = _this.prjm.getAllMembers({ "id": _this.PID }).subscribe(function (pr) {
                    if (pr.success) {
                        _this.Members = pr.result;
                    }
                });
            }
        });
    };
    ProjectTeamComponent.prototype.viewProfile = function (data) {
        this.vProfile = data;
    };
    //#endregion
    ProjectTeamComponent.prototype.ngOnDestroy = function () {
        this.Mem_Sub.unsubscribe();
    };
    ProjectTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-team',
            template: __webpack_require__("../../../../../src/app/modules/prjm/components/project-team/project-team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/prjm/components/project-team/project-team.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__prjm_service__["a" /* PrjmService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__admin_admin_service__["a" /* AdminService */]])
    ], ProjectTeamComponent);
    return ProjectTeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/projectdash/projectdash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tblProjects tbody tr:hover{\r\n    background-color: #34A853 !important;\r\n    color: white;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/projectdash/projectdash.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dash-side-nav></app-dash-side-nav>\n<app-dash-nav></app-dash-nav>\n\n\n<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-md-offset-2\">\n          <div class=\"card\">\n            <div class=\"header bg-green\">My Projects</div>\n            <div class=\"body table-responsive\">\n                <table class=\"table table-condensed table-responsive table-bordered table-hover table-striped tblProjects\" data-toggle=\"project-tooltip\" title=\"Click the row of the project to open\" *ngIf=\"!checkObj(Projects); else NoPro\">\n                    <thead>\n                      <tr>\n                        <td>Project Name</td>\n                        <td>Owner</td>\n                        <td>Project Progress</td>\n                        <td>Start Date</td>\n                        <td>End Date</td>\n                        <td>Audience</td>\n                        <td>Created At</td>\n                      </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of convertKey(Projects)\" (click)=\"projectDash(Projects[item]['_id'])\" >\n                          <td>{{Projects[item]['name']}}</td>\n                          <td>{{Projects[item]['owner']['userDetails']['firstname'] }}</td>\n                          <td *ngIf=\"!checkObj(Projects[item]['milestones']); else projectprog\">\n                              Current Progress : {{ getProgress(Projects[item]['milestones']) }} % &nbsp;\n                              <div class=\"progress progress_sm\">\n                                  <span class=\"progress-bar bg-green\" role=\"progressbar\" [attr.data-transitiongoal]=\"getProgress(Projects[item]['milestones']['tasks'])\" [attr.aria-valuenow]=\"getProgress(Projects[item]['milestones'])\" [style.width.%]=\"getProgress(Projects[item]['milestones'])\"></span>\n                              </div>\n                          </td>\n                          <ng-template #projectprog>\n                            <td>\n                              Current Progress : 0%\n                              <div class=\"progress progress_sm\">\n                                  <span class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"0\" aria-valuenow=\"0\" style=\"width: 0%\"></span>\n                              </div>\n                            </td>\n                          </ng-template>\n                          <td>{{ convertDate(Projects[item]['startDate']) }}</td>\n                          <td>{{ convertDate(Projects[item]['endDate']) }}</td>\n                          <td><span *ngIf=\"Projects[item]['privacy'] == 0\" >Public</span></td>\n                          <td>{{ convertDate(Projects[item]['created_at']) }}</td>\n                        </tr>\n                    </tbody>\n                  </table>\n    \n                  <ng-template #NoPro>\n                    <div class=\"row text-center\">\n                      <h1><b>You have no projects</b></h1>\n                      <h1>Create New Project : <a class=\"btn btn-primary\" [routerLink]=\"['/project/init']\">Here</a></h1>\n                    </div>\n                  </ng-template>\n            </div>\n          </div>\n          \n    \n            \n        </div>\n    \n      </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/projectdash/projectdash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectdashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prjm_service__ = __webpack_require__("../../../../../src/app/modules/prjm/prjm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectdashComponent = /** @class */ (function () {
    function ProjectdashComponent(pjrmService, router) {
        this.pjrmService = pjrmService;
        this.router = router;
    }
    //todo
    ProjectdashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Keys = Object.keys;
        this.Subs = this.pjrmService.getProject({ "owner_id": JSON.parse(localStorage.getItem('user')).id }).subscribe(function (data) {
            _this.Projects = data.projects;
        });
    };
    ProjectdashComponent.prototype.ngOnDestroy = function () {
        this.Subs.unsubscribe();
    };
    ProjectdashComponent.prototype.convertDate = function (date) {
        return new Date(date).toLocaleDateString();
    };
    ProjectdashComponent.prototype.convertKey = function (key) {
        return key == null ? [] : this.Keys(key);
    };
    ProjectdashComponent.prototype.checkObj = function (val) {
        return val instanceof Array ? val.length == 0 : val == null;
    };
    ProjectdashComponent.prototype.getProgress = function (milestone) {
        if (this.checkObj(milestone)) {
            return 0;
        }
        else {
            var counter = 0;
            for (var m in milestone) {
                counter += milestone[m].isCompleted == true ? 1 : 0;
            }
            return ((counter / milestone.length) * 100).toFixed(2);
        }
    };
    ProjectdashComponent.prototype.projectDash = function (item) {
        this.router.navigate(['/project', item]);
    };
    ProjectdashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projectdash',
            template: __webpack_require__("../../../../../src/app/modules/prjm/components/projectdash/projectdash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/prjm/components/projectdash/projectdash.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__prjm_service__["a" /* PrjmService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProjectdashComponent);
    return ProjectdashComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/projectinit/projectinit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/projectinit/projectinit.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dash-side-nav></app-dash-side-nav>\n<app-dash-nav></app-dash-nav>\n\n<section class=\"content\">\n\n  <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-lg-8 col-sm-8\">\n    \n            </div>\n            <div class=\"col-md-4 col-lg-4 col-sm-4\">\n\n                <div class=\"card\">\n                    <div class=\"header bg-green\">Start Collaboration</div>\n                    <div class=\"body\">\n                            <form>\n    \n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Project Name</label>\n        \n                                        <div class=\"form-line\">\n                                            <input class=\"form-control\" type=\"text\" [(ngModel)] = \"projectname\" name=\"projectname\" />\n                                        </div>\n                                    </div>\n        \n                                    <div class=\"form-group\">\n                                        <div class=\"control-label\">Start Date</div>\n                                        <div class=\"form-line\">\n                                            <input type='text' class=\"form-control\" readonly id=\"projectSDate\"/>\n                                        </div>\n                                    </div>\n        \n                                    <div class=\"form-group\">\n                                        <div class=\"control-label\">End Date</div>\n                                        <div class=\"form-line\">\n                                            <input type='text' id=\"endDate\" class=\"form-control\" readonly/>\n                                        </div>\n                                    </div>\n        \n        \n                                    <div class=\"form-group\">\n                                        <div class=\"control-label\">Description</div>\n                                        <div class=\"form-line\">\n                                            <textarea class=\"form-control\" [(ngModel)] = \"projectdesc\" name=\"projectdesc\" ></textarea> \n                                        </div>\n                                    </div>\n        \n                                    <div class=\"form-group\">\n                                        <div class=\"control-label\">Status</div>\n                                        <div class=\"form-line\">\n                                                <select class=\"form-control\" [(ngModel)] = \"projectPrivacy\" name=\"projectPrivacy\" >\n                                                    <option value=\"0\">Public</option>\n                                                    <option value=\"1\">Private</option>\n                                                </select>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                        <div class=\"panel panel-default\">\n                                            <div class=\"panel-heading\">\n                                                <div class=\"row\">\n                                                        <div class=\"col-lg-8 col-md-8 col-sm-8 \">\n                                                            <select class=\"form-control\" placeholder=\"Add new Type\" [(ngModel)]=\"dummySkill\" name=\"skill\">\n                                                                    \n                                                                    <option>Big Data Analysis-Algorithms</option>\n                                                                    <option>Big Data Analysis-Analytical Skills</option>\n                                                                    <option>Big Data Analysis-Big Data</option>\n                                                                    <option>Big Data Analysis-Calculating</option>\n                                                                    <option>Big Data Analysis-Compiling Statistics</option>\n                                                                    <option>Big Data Analysis-Data Analytics</option>\n                                                                    <option>Big Data Analysis-Data Mining</option>\n                                                                    <option>Big Data Analysis-Database Design</option>\n                                                                    <option>Big Data Analysis-Database Management</option>\n                                                                    <option>Big Data Analysis-Documentation</option>\n                                                                    <option>Big Data Analysis-Modeling</option>\n                                                                    <option>Big Data Analysis-Modification</option>\n                                                                    <option>Big Data Analysis-Needs Analysis</option>\n                                                                    <option>Big Data Analysis-Quantitative Research</option>\n                                                                    <option>Big Data Analysis-Quantitative Reports</option>\n                                                                    <option>Big Data Analysis-Statistical Analysis</option>\n                                                                    <option>Coding and Programming-Applications</option>\n                                                                    <option>Coding and Programming-Certifications</option>\n                                                                    <option>Coding and Programming-Coding</option>\n                                                                    <option>Coding and Programming-Computing</option>\n                                                                    <option>Coding and Programming-Configuration</option>\n                                                                    <option>Coding and Programming-Customer Support</option>\n                                                                    <option>Coding and Programming-Debugging</option>\n                                                                    <option>Coding and Programming-Design</option>\n                                                                    <option>Coding and Programming-Development</option>\n                                                                    <option>Coding and Programming-Hardware</option>\n                                                                    <option>Coding and Programming-Implementation</option>\n                                                                    <option>Coding and Programming-Information Technology</option>\n                                                                    <option>Coding and Programming-Infrastructure</option>\n                                                                    <option>Coding and Programming-Languages</option>\n                                                                    <option>Coding and Programming-Maintenance</option>\n                                                                    <option>Coding and Programming-Network Architecture</option>\n                                                                    <option>Coding and Programming-Network Security</option>\n                                                                    <option>Coding and Programming-Networking</option>\n                                                                    <option>Coding and Programming-New Technologies</option>\n                                                                    <option>Coding and Programming-Operating Systems</option>\n                                                            </select>\n                                                        </div>\n                                                        <div class=\"col-lg-2 col-md-2 col-sm-2 \"><button class=\"btn bg-success text-white\" (click)=\"addnewskill()\">Add new</button></div>\n                                                </div>\n                                            </div>\n                                            <div class=\"panel-body\">\n                                                <ul class=\"list-group\">\n                                                    <li class=\"list-group-item\" *ngFor=\"let item of skills\">\n                                                        <div class=\"row\">\n                                                                <div class=\"col-lg-8 col-md-8 col-sm-8\">\n                                                                                {{item}}\n                                                                </div>\n                                                                <div class=\"col-lg-4 col-md-4 col-sm-4 text-right\">\n                                                                                <a (click)=\"removeSkill(item)\" class=\"btn btn-sm btn-success\">x</a>\n                                                                </div>\n                                                        </div>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n        \n                                    <div class=\"form-group text-center\">\n                                        <input type=\"button\" value=\"submit\" (click)=\"onSubmit()\" class=\"form-control btn btn-primary waves-effect\"/>\n                                    </div>\n                                </form>\n                    </div>\n                </div>\n    \n            </div>\n        </div>\n      </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/modules/prjm/components/projectinit/projectinit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectinitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prjm_service__ = __webpack_require__("../../../../../src/app/modules/prjm/prjm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectinitComponent = /** @class */ (function () {
    function ProjectinitComponent(prjmServices, router) {
        this.prjmServices = prjmServices;
        this.router = router;
        this.projectPrivacy = 0;
        this.dummySkill = "";
        this.skills = [];
    }
    ProjectinitComponent.prototype.ngOnInit = function () {
    };
    ProjectinitComponent.prototype.validateInputs = function () {
        if (this.projectname == null || this.projectname == "") {
            return false;
        }
        if (this.projectdesc == null || this.projectdesc == "") {
            return false;
        }
        return true;
    };
    ProjectinitComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.validateInputs()) {
            var projectDetails = {
                name: this.projectname,
                desc: this.projectdesc,
                owner: JSON.parse(localStorage.getItem('user')).id,
                startDate: sessionStorage.getItem('SED'),
                endDate: sessionStorage.getItem('PED'),
                privacy: this.projectPrivacy,
                types: this.skills
            };
            this.prjmServices.initiateProject(projectDetails).subscribe(function (data) {
                if (data.success) {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                        title: "Wonderful",
                        text: _this.projectname + " is created, Let's start Collaborating! You would automatically sent to your Project Dashboard.. Please wait",
                        type: "success",
                        showConfirmButton: true
                    }).then(function () {
                        _this.router.navigate(['/projects']);
                    });
                }
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Oh no!', 'There was something wrong to your inputs', 'warning');
        }
    };
    ProjectinitComponent.prototype.ngAfterViewInit = function () {
        this.loadDateTime();
    };
    ProjectinitComponent.prototype.addnewskill = function () {
        var validity = true;
        if (this.dummySkill == "" || this.dummySkill == ' ') {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()("Oh! No", "Skill input is empty", "error");
            validity = false;
        }
        if (this.skills.indexOf(this.dummySkill) >= 0) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()("Oh! No", this.dummySkill + " is already in your skill list", "error");
            validity = false;
        }
        if (validity) {
            this.skills.push(this.dummySkill);
        }
    };
    ProjectinitComponent.prototype.removeSkill = function (item) {
        this.skills.splice(this.skills.indexOf(item), 1);
    };
    ProjectinitComponent.prototype.loadDateTime = function () {
        $('#projectSDate').datetimepicker({
            format: 'YYYY-MM-DD',
            ignoreReadonly: true,
            defaultDate: new Date().toLocaleDateString(),
        });
        $('#projectSDate').focusout(function () {
            sessionStorage.setItem('SED', $(this).val());
            $('#endDate').datetimepicker({
                format: 'YYYY-MM-DD',
                ignoreReadonly: true,
                minDate: new Date($('#projectSDate').val()),
                defaultDate: new Date($('#projectSDate').val()),
            });
        });
        $('#endDate').focusout(function () {
            sessionStorage.setItem('PED', $(this).val());
        });
        $('#tasks-projectSDate').datetimepicker({
            format: 'YYYY-MM-DD',
            ignoreReadonly: true,
            defaultDate: new Date().toLocaleDateString(),
        });
        $('#tasks-projectSDate').focusout(function () {
            sessionStorage.setItem('TSED', $(this).val());
            $('#tasks-endDate').datetimepicker({
                format: 'YYYY-MM-DD',
                ignoreReadonly: true,
                minDate: new Date($('#tasks-projectSDate').val()),
                defaultDate: new Date($('#projectSDate').val())
            });
        });
        $('#tasks-endDate').focusout(function () {
            sessionStorage.setItem('TPED', $(this).val());
        });
    };
    ProjectinitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projectinit',
            template: __webpack_require__("../../../../../src/app/modules/prjm/components/projectinit/projectinit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/prjm/components/projectinit/projectinit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__prjm_service__["a" /* PrjmService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProjectinitComponent);
    return ProjectinitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/prjm/prjm.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrjmModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_projectinit_projectinit_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/projectinit/projectinit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navs_navs_module__ = __webpack_require__("../../../../../src/app/modules/navs/navs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__prjm_service__ = __webpack_require__("../../../../../src/app/modules/prjm/prjm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_projectdash_projectdash_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/projectdash/projectdash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_project_mile_project_mile_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/project-mile/project-mile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_project_analytics_project_analytics_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/project-analytics/project-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_milestone_milestone_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/milestone/milestone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_project_team_project_team_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/project-team/project-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_project_schedule_project_schedule_component__ = __webpack_require__("../../../../../src/app/modules/prjm/components/project-schedule/project-schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_fullcalendar__ = __webpack_require__("../../../../ng-fullcalendar/ng-fullcalendar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var PrjmModule = /** @class */ (function () {
    function PrjmModule() {
    }
    PrjmModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__navs_navs_module__["a" /* NavsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http___["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_13_ng_fullcalendar__["b" /* FullCalendarModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__components_projectinit_projectinit_component__["a" /* ProjectinitComponent */], __WEBPACK_IMPORTED_MODULE_7__components_projectdash_projectdash_component__["a" /* ProjectdashComponent */], __WEBPACK_IMPORTED_MODULE_8__components_project_mile_project_mile_component__["a" /* ProjectMileComponent */], __WEBPACK_IMPORTED_MODULE_9__components_project_analytics_project_analytics_component__["a" /* ProjectAnalyticsComponent */], __WEBPACK_IMPORTED_MODULE_10__components_milestone_milestone_component__["a" /* MilestoneComponent */], __WEBPACK_IMPORTED_MODULE_11__components_project_team_project_team_component__["a" /* ProjectTeamComponent */], __WEBPACK_IMPORTED_MODULE_12__components_project_schedule_project_schedule_component__["a" /* ProjectScheduleComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__prjm_service__["a" /* PrjmService */]]
        })
    ], PrjmModule);
    return PrjmModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/prjm/prjm.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrjmService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_functions__ = __webpack_require__("../../../../../src/app/config/functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrjmService = /** @class */ (function () {
    function PrjmService(f) {
        this.f = f;
    }
    PrjmService.prototype.initiateProject = function (prod) {
        return this.f.post('/projects/newproject', prod, true).map(function (res) { return res.json(); });
    };
    PrjmService.prototype.getProjects = function () {
        return this.f.get('/projects/getprojects', true).map(function (res) { return res.json(); });
    };
    //by owner
    PrjmService.prototype.getProject = function (id) {
        return this.f.post('/projects/getproject', id, true).map(function (res) { return res.json(); });
    };
    //by project
    PrjmService.prototype.getProjectByID = function (id) {
        return this.f.post('/projects/getprojectByID', id, true).map(function (res) { return res.json(); });
    };
    //milestones
    PrjmService.prototype.getMilestones = function (id) {
        return this.f.post('/projects/getMilestones', id, true).map(function (res) { return res.json(); });
    };
    PrjmService.prototype.getMilestone = function (id) {
        return this.f.post('/projects/getMilestone', id, true).map(function (res) { return res.json(); });
    };
    PrjmService.prototype.addMilestones = function (data) {
        return this.f.post('/projects/addMilestone', data, true).map(function (res) { return res.json(); });
    };
    PrjmService.prototype.updateMile = function (data) {
        this.f.post('/projects/updateMile', data, true);
    };
    //Tasks
    PrjmService.prototype.getTasks = function (id) {
        return this.f.post('/projects/getTasks', id, true).map(function (res) { return res.json(); });
    };
    PrjmService.prototype.addTask = function (id) {
        return this.f.post('/projects/addTask', id, true).map(function (res) { return res.json(); });
    };
    PrjmService.prototype.updateTask = function (update) {
        return this.f.post('/projects/updateProgress', update, true).map(function (res) { return res.json(); });
    };
    PrjmService.prototype.complyTask = function (task) {
        return this.f.post('/projects/complyTask', task, true, true).map(function (res) { return res.json(); });
    };
    PrjmService.prototype.updateSubmission = function (task) {
        return this.f.post('/projects/updateSubmission', task, true).map(function (res) { return res.json(); });
    };
    PrjmService.prototype.downloadAttachment = function (file) {
        return this.f.blobpost('/projects/downloadAttachment', file, true).map(function (res) { return res.blob(); });
    };
    PrjmService.prototype.deleteMile = function (mile) {
        return this.f.post('/projects/deleteMile', mile, true).map(function (res) { return res.json(); });
    };
    PrjmService.prototype.addMember = function (m) {
        return this.f.post('/projects/addMember', m, true).map(function (res) { return res.json(); });
    };
    PrjmService.prototype.kickMember = function (m) {
        return this.f.post('/projects/kickMember', m, true).map(function (res) { return res.json(); });
    };
    //#region Project Team
    PrjmService.prototype.getAllMembers = function (pr) {
        return this.f.post('/projects/getAllMembers', pr, true).map(function (res) { return res.json(); });
    };
    PrjmService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__config_functions__["a" /* functions */]])
    ], PrjmService);
    return PrjmService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/rc/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/rc/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <input type=\"text\" [(ngModel)]=\"inMessage\" name=\"inMessage\" id=\"inMessage\" required />\n  <button (click)=\"sendMessage()\">Send Message</button>\n\n\n  <ul>\n    <li *ngFor=\"let m of messages\">{{m}}</li>\n  </ul>\n"

/***/ }),

/***/ "../../../../../src/app/modules/rc/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rc_service__ = __webpack_require__("../../../../../src/app/modules/rc/rc.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(rc) {
        this.rc = rc;
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rc.getMessage().subscribe(function (data) {
            _this.messages.push(data);
            console.log(data);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        this.rc.sendMessage(this.inMessage);
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/modules/rc/components/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/rc/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rc_service__["a" /* RcService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/rc/rc.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RcModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rc_service__ = __webpack_require__("../../../../../src/app/modules/rc/rc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/modules/rc/components/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var config = { url: __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* APP_CONFIG */].Protocol + "://" + __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* APP_CONFIG */].Address + '/', options: {} };


var RcModule = /** @class */ (function () {
    function RcModule() {
    }
    RcModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__["SocketIoModule"].forRoot(config)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__components_chat_chat_component__["a" /* ChatComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__rc_service__["a" /* RcService */]]
        })
    ], RcModule);
    return RcModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/rc/rc.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RcService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RcService = /** @class */ (function () {
    function RcService(socket) {
        this.socket = socket;
    }
    RcService.prototype.sendMessage = function (msg) {
        this.socket.emit("message", msg);
    };
    RcService.prototype.getMessage = function () {
        return this.socket
            .fromEvent("message")
            .map(function (data) { return data.msg; });
    };
    RcService.prototype.sendGroupMessage = function (room, msg) {
        this.socket.emit("sendGroupMessage", room, msg);
    };
    RcService.prototype.getGroupMessage = function () {
        return this.socket
            .fromEvent("groupMessage")
            .map(function (data) { return data; });
    };
    RcService.prototype.enterRoom = function (room, user) {
        this.socket.emit("enterProject", room, user);
    };
    RcService.prototype.getRoomEnterRes = function () {
        return this.socket.fromEvent("enteredCB").map(function (data) { return data; });
    };
    RcService.prototype.close = function () {
        this.socket.disconnect();
    };
    RcService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"]])
    ], RcService);
    return RcService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/components/account-settings/account-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-combobox {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  .custom-combobox-toggle {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin-left: -1px;\r\n    padding: 0;\r\n  }\r\n  .custom-combobox-input {\r\n    margin: 0;\r\n    padding-top: 2px;\r\n    padding-bottom: 5px;\r\n    padding-right: 5px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/components/account-settings/account-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dash-side-nav></app-dash-side-nav>\n<app-dash-nav></app-dash-nav>\n\n\n<section class=\"content\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-4\"></div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"alert alert-{{type}} text-white\" *ngIf=\"message\">{{message}}</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\"></div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<div class=\"panel panel-success\">\n\t\t\t\t\t<div class=\"panel-heading\">Account Settings</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6\" *ngFor=\"let inpp of uKeys(user)\">\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">{{inpp}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"checkObject(user[inpp])\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let inp of uKeys(user[inpp])\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"!checkArray(user[inpp][inp]); else arraylist\"  class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"{{inp}}\">{{inp.toUpperCase()}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"models{{inpp[inp]}}\" name=\"{{inp}}\" required [(ngModel)]=\"models[inpp][inp]\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #arraylist>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"combobox\" placeholder=\"Add new Skill\" [(ngModel)]=\"dummySkill\" name=\"skill\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Algorithms</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Analytical Skills</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Big Data</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Calculating</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Compiling Statistics</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Data Analytics</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Data Mining</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Database Design</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Database Management</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Documentation</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Modeling</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Modification</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Needs Analysis</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Quantitative Research</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Quantitative Reports</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Big Data Analysis-Statistical Analysis</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Applications</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Certifications</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Coding</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Computing</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Configuration</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Customer Support</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Debugging</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Design</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Development</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Hardware</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Implementation</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Information Technology</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Infrastructure</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Languages</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Maintenance</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Network Architecture</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Network Security</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Networking</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-New Technologies</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Coding and Programming-Operating Systems</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-2 \"><button class=\"btn bg-success text-white\" (click)=\"addnewskill()\">Add new</button></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let item of user[inpp][inp]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"removeSkill(item)\" class=\"btn btn-sm btn-success\">x</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-footer text-right\">\n\t\t\t\t\t\t\t<button class=\"btn bg-primary text-white\" (click)=\"onUpdate()\">Update</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/modules/usm/components/account-settings/account-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountSettingsComponent = /** @class */ (function () {
    function AccountSettingsComponent(usm, router) {
        this.usm = usm;
        this.router = router;
        this.models = {};
        this.dummySkill = "";
    }
    AccountSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uKeys = Object.keys;
        this.usm.AccountSettings().subscribe(function (profile) {
            _this.user = profile.user;
            _this.models = profile.user;
        }, function (err) {
            return false;
        });
    };
    AccountSettingsComponent.prototype.ngAfterViewInit = function () {
    };
    AccountSettingsComponent.prototype.checkArray = function (obj) {
        return obj instanceof Array;
    };
    AccountSettingsComponent.prototype.checkObject = function (obj) {
        return obj instanceof Object;
    };
    AccountSettingsComponent.prototype.addnewskill = function () {
        var validity = true;
        if (this.dummySkill == "" || this.dummySkill == ' ') {
            this.message = "Skill input is empty";
            this.type = "danger";
            validity = false;
        }
        if (this.models.userDetails.skills.indexOf(this.dummySkill) >= 0) {
            this.message = this.dummySkill + " is already in your skill list";
            this.type = "danger";
            validity = false;
        }
        if (validity) {
            this.message = "";
            this.type = "";
            this.models.userDetails.skills.push(this.dummySkill);
        }
    };
    AccountSettingsComponent.prototype.removeSkill = function (item) {
        this.models.userDetails.skills.splice(this.models.userDetails.skills.indexOf(item), 1);
    };
    AccountSettingsComponent.prototype.onUpdate = function () {
        var _this = this;
        this.usm.updateUserData(this.models).subscribe(function (data) {
            if (data.success) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                    title: "Wonderful",
                    text: "Your account is successfully updated",
                    type: "success",
                    showConfirmButton: true
                }).then(function (res) {
                    _this.router.navigate(['/profile']);
                });
            }
            else {
                _this.message = data.message;
                return false;
            }
        });
    };
    AccountSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-settings',
            template: __webpack_require__("../../../../../src/app/modules/usm/components/account-settings/account-settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/components/account-settings/account-settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__usm_service__["a" /* UsmService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dash-layout></app-dash-layout>"

/***/ }),

/***/ "../../../../../src/app/modules/usm/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/modules/usm/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bdy{\r\n    background-image: url('/assets/images/bg.jpg') !important;\r\n    background-size: cover !important;\r\n    background-repeat: no-repeat;\r\n    height: 100vh;   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div class=\"container-fluid bdy\">\r\n    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/usm/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/modules/usm/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-login-form></app-login-form>"

/***/ }),

/***/ "../../../../../src/app/modules/usm/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/modules/usm/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dash-side-nav></app-dash-side-nav>\n<app-dash-nav></app-dash-nav>\n\n<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n        </div>\n\n        <div class=\"row\">\n      \n            <div class=\"col-lg-4 col-md-4 col-sm-4\">\n              \n              <div class=\"card\">\n                <div class=\"header bg-green text-center\" *ngIf=\"user\">\n                    <img src=\"../assets/uploads/avatars/{{user.picture}}\" style=\"width: 45%; border: 2px solid white\" class=\"img-rounded\">\n                    <br>\n                    <br>\n                    <h5>{{ user.firstname }}, {{ user.lastname }}</h5>\n      \n                    <blockquote>Full Stack Web Developer, MEAN, C#, Node.js</blockquote>\n                    <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"body\">\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\"><i class=\"fa fa-briefcase\">&nbsp;</i> Freelance Web Developer</li>\n                        <li class=\"list-group-item\"><i class=\"fa fa-map-marker\">&nbsp;</i> Caloocan City, Philippines</li>\n                    </ul>\n      \n                    <div class=\"ln_solid\"></div>\n      \n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\">\n                        Skills\n                      </div>\n                      <div class=\"panel-body\">\n                          <ul class=\"list-group\" *ngIf=\"user\">\n                              <li class=\"list-group-item\" *ngFor=\"let skill of user.skills\">{{skill}}</li>\n                          </ul>\n                      </div>\n                    </div>\n                </div>\n              </div>  \n            \n            </div>\n    \n\n            <div class=\"col-lg-8 col-md-8 col-sm-8\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2>\n                            Profile\n                        </h2>\n                    </div>\n                    <div class=\"body\">\n                        <!-- Nav tabs -->\n                        <ul class=\"nav nav-tabs tab-nav-right\" role=\"tablist\">\n                            <li role=\"presentation\" class=\"active\"><a href=\"#projects\" data-toggle=\"tab\">PROJECTS</a></li>\n                            <li role=\"presentation\"><a href=\"#assignments\" data-toggle=\"tab\">ASSIGNMENTS</a></li>\n                            <li role=\"presentation\"><a href=\"#schedules\" data-toggle=\"tab\">SCHEDULES</a></li>\n                        </ul>\n    \n                        <!-- Tab panes -->\n                        <div class=\"tab-content\">\n                            <div role=\"tabpanel\" class=\"tab-pane fade in active table-responsive\" id=\"projects\">\n                                <table class=\"table table-condensed table-bordered table-hover table-striped tblProjects\" data-toggle=\"project-tooltip\" title=\"Click the row of the project to open\" *ngIf=\"!checkObj(Projects); else NoPro\">\n                                    <thead>\n                                      <tr>\n                                        <td>Project Name</td>\n                                        <td>Owner</td>\n                                        <td>Project Progress</td>\n                                        <td>Start Date</td>\n                                        <td>End Date</td>\n                                        <td>Audience</td>\n                                        <td>Created At</td>\n                                      </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let item of convertKey(Projects)\" (click)=\"projectDash(Projects[item]['_id'])\" >\n                                          <td>{{Projects[item]['name']}}</td>\n                                          <td>{{Projects[item]['owner']['userDetails']['firstname'] }}</td>\n                                          <td *ngIf=\"!checkObj(Projects[item]['milestones']); else projectprog\">\n                                              Current Progress : {{ getProgress(Projects[item]['milestones']) }} % &nbsp;\n                                              <div class=\"progress progress_sm\">\n                                                  <span class=\"progress-bar bg-green\" role=\"progressbar\" [attr.data-transitiongoal]=\"getProgress(Projects[item]['milestones']['tasks'])\" [attr.aria-valuenow]=\"getProgress(Projects[item]['milestones'])\" [style.width.%]=\"getProgress(Projects[item]['milestones'])\"></span>\n                                              </div>\n                                          </td>\n                                          <ng-template #projectprog>\n                                            <td>\n                                              Current Progress : 0%\n                                              <div class=\"progress progress_sm\">\n                                                  <span class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"0\" aria-valuenow=\"0\" style=\"width: 0%\"></span>\n                                              </div>\n                                            </td>\n                                          </ng-template>\n                                          <td>{{ convertDate(Projects[item]['startDate']) }}</td>\n                                          <td>{{ convertDate(Projects[item]['endDate']) }}</td>\n                                          <td><span *ngIf=\"Projects[item]['privacy'] == 0\" >Public</span></td>\n                                          <td>{{ convertDate(Projects[item]['created_at']) }}</td>\n                                        </tr>\n                                    </tbody>\n                                  </table>\n                    \n                                  <ng-template #NoPro>\n                                    <div class=\"row text-center\">\n                                      <h1><b>You have no projects</b></h1>\n                                      <h1>Create New Project : <a class=\"btn btn-primary\" href=\"/project/init\">Here</a></h1>\n                                    </div>\n                                  </ng-template>\n                            </div>\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"assignments\">\n                                <b>Profile Content</b>\n                                <p>\n                                    Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.\n                                    Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid\n                                    pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren\n                                    sadipscing mel.\n                                </p>\n                            </div>\n                            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"messages\">\n                                <b>Message Content</b>\n                                <p>\n                                    Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.\n                                    Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid\n                                    pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren\n                                    sadipscing mel.\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n          \n      \n          </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/modules/usm/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prjm_prjm_service__ = __webpack_require__("../../../../../src/app/modules/prjm/prjm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(usm, pjrmService) {
        this.usm = usm;
        this.pjrmService = pjrmService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Keys = Object.keys;
        this.usm.getProfile().subscribe(function (profile) {
            _this.user = profile.user.userDetails;
        });
        this.pjrmService.getProject({ "owner_id": JSON.parse(localStorage.getItem('user')).id }).subscribe(function (data) {
            _this.Projects = data.projects;
        });
    };
    ProfileComponent.prototype.convertDate = function (date) {
        return new Date(date).toLocaleDateString();
    };
    ProfileComponent.prototype.convertKey = function (key) {
        return key == null ? [] : this.Keys(key);
    };
    ProfileComponent.prototype.checkObj = function (val) {
        return val instanceof Array ? val.length == 0 : val == null;
    };
    ProfileComponent.prototype.getProgress = function (milestone) {
        if (this.checkObj(milestone)) {
            return 0;
        }
        else {
            var counter = 0;
            for (var m in milestone) {
                counter += milestone[m].isCompleted == true ? 1 : 0;
            }
            return ((counter / milestone.length) * 100).toFixed(2);
        }
    };
    ProfileComponent.prototype.projectDash = function () {
        console.log("it was click bitch");
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/modules/usm/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__usm_service__["a" /* UsmService */], __WEBPACK_IMPORTED_MODULE_2__prjm_prjm_service__["a" /* PrjmService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/components/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/components/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n\n<section class=\"content\">\n    <div class=\"container-fluid\">\n      <app-registration-form></app-registration-form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/modules/usm/components/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/modules/usm/components/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/components/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/dash-layout/dash-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/dash-layout/dash-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dash-nav></app-dash-nav>\n<app-dash-side-nav></app-dash-side-nav>\n\n<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n        </div>\n\n\n          <!-- Start -->\n          \n          <div class=\"row\">\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\n                \n                <div style=\"padding-bottom: 2%;\" *ngFor=\"let post of convertKey(Projects)\">\n                  <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                      <h3>{{Projects[post]['name']}}</h3>\n                    </div>\n                    <div class=\"panel-body\">\n                      <h5><i>{{Projects[post]['desc']}}</i></h5>\n                    </div>\n                    <div class=\"panel-footer\">\n                      By: {{ Projects[post]['owner']['userDetails']['firstname'] }}\n                    </div>\n                  </div>\n                </div>\n        \n              </div>\n        \n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\">Public Chat</div>\n                  <div class=\"panel-body\"  style=\"height: 60vh; overflow-y: auto;\">\n                    <ul class=\"list-group\">\n                      <li class=\"list-group-item\" *ngFor=\"let m of messages\"><span [innerHTML] = \"m\"></span></li>\n                    </ul>\n                  </div>\n                  <div class=\"panel-footer text-right\">\n                    Send Message:\n                    <div class=\"row\">\n                      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n                        <textarea type=\"text\" [(ngModel)]=\"inMessage\" name=\"inMessage\" id=\"inMessage\" required style=\"width: 100%\" (keyup.enter)=\"sendMessage()\"></textarea>\n                        <hr>\n                        <button (click)=\"sendMessage()\" class=\"btn btn-md btn-primary waves-effect\">Send Message</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n        \n            </div>\n\n            <!-- end -->\n            \n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/dash-layout/dash-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rc_rc_service__ = __webpack_require__("../../../../../src/app/modules/rc/rc.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashLayoutComponent = /** @class */ (function () {
    function DashLayoutComponent(usm, router, rc) {
        this.usm = usm;
        this.router = router;
        this.rc = rc;
        this.messages = [];
    }
    DashLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Keys = Object.keys;
        this.usm.getProfile().subscribe(function (profile) {
            _this.user = profile.user.userDetails;
            _this.username = profile.user.loginDetails.username;
        }),
            function (err) {
                return false;
            };
        this.usm.getAllProjects().subscribe(function (project) {
            _this.Projects = project.projects;
        });
        this.rc.getMessage().subscribe(function (data) {
            _this.messages.push(data);
            console.log(data);
        });
    };
    DashLayoutComponent.prototype.convertKey = function (key) {
        return key == null ? [] : this.Keys(key);
    };
    DashLayoutComponent.prototype.sendMessage = function () {
        this.rc.sendMessage('<div class="media">' +
            '<div class="media-left">' +
            '<img class="img-rounded" src="../assets/uploads/avatars/' + this.user['picture'] + '" width="48" height="48"/>' +
            '</div>' +
            '<div class="media-body">' +
            '<h4 class="media-heading">' + this.username + '</h4>' +
            '<p>' + this.inMessage + '</p>' +
            '</div>' +
            '</div>');
        this.inMessage = "";
    };
    DashLayoutComponent.prototype.ngOnDestroy = function () {
    };
    DashLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-layout',
            template: __webpack_require__("../../../../../src/app/modules/usm/layouts/dash-layout/dash-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/layouts/dash-layout/dash-layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__usm_service__["a" /* UsmService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__rc_rc_service__["a" /* RcService */]])
    ], DashLayoutComponent);
    return DashLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/dash-left-nav/dash-left-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/dash-left-nav/dash-left-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  \n</section>"

/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/dash-left-nav/dash-left-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashLeftNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashLeftNavComponent = /** @class */ (function () {
    function DashLeftNavComponent() {
    }
    DashLeftNavComponent.prototype.ngOnInit = function () {
    };
    DashLeftNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-left-nav',
            template: __webpack_require__("../../../../../src/app/modules/usm/layouts/dash-left-nav/dash-left-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/layouts/dash-left-nav/dash-left-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashLeftNavComponent);
    return DashLeftNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/dash-nav/dash-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-styling{\r\n    \r\n    background: #EDEDED;\r\n    border-bottom: 1px solid #D9DEE4;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n\r\n}\r\n\r\n.nav-styling a:hover{\r\n    color: green !important;\r\n}\r\n\r\n.logo-eru{\r\n    width: 10%;\r\n}\r\n\r\n.dropdown-menu a:hover{\r\n    color: green;\r\n}\r\n\r\n.dropdown-toggle::after{\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 0;\r\n    margin-left: .255em;\r\n    vertical-align: .255em;\r\n    content: \"\";\r\n    border-top: 0 solid;\r\n    border-right: 0 solid transparent;\r\n    border-bottom: 0;\r\n    border-left: 0 solid transparent;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/dash-nav/dash-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a href=\"javascript:void(0);\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=\"false\"></a>\n            <a href=\"javascript:void(0);\" class=\"bars\"></a>\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">Erudite</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n               \n                <!-- #END# Notifications -->\n                <!-- Tasks -->\n                <li class=\"dropdown\">\n                    <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n                        <i class=\"fa fa-flag\"></i>\n                        Tasks\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li class=\"header\">TASKS</li>\n                        <li class=\"body\">\n                            <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 254px;\">\n                                    <ul class=\"menu tasks\"  style=\"overflow: hidden; width: auto; height: 254px;\">\n                                            <li>\n                                                <a *ngFor=\"let t of task\" class=\" waves-effect waves-block\">\n                                                    <div class=\"icon-circle bg-light-green\">\n                                                        <i class=\"fa fa-coffee\"></i>\n                                                    </div>\n                                                    <div class=\"menu-info\">\n                                                        <h4>{{ t['task_name'] }}</h4>\n                                                        <p>\n                                                                {{ t['task_endDate'] | date : 'short' }}\n                                                        </p>\n                                                    </div>\n                                                </a>\n                                            </li>\n                                        </ul>\n                            </div>\n                        </li>\n                        <li class=\"footer\">\n                            <a href=\"javascript:void(0);\">View All Tasks</a>\n                        </li>\n                    </ul>\n                </li>\n                <!-- #END# Tasks -->\n                <li class=\"pull-right\"><a href=\"javascript:void(0);\" class=\"js-right-sidebar\" data-close=\"true\"><i class=\"fa fa-bars\"></i></a></li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/dash-nav/dash-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashNavComponent = /** @class */ (function () {
    function DashNavComponent(usmService, router) {
        this.usmService = usmService;
        this.router = router;
    }
    DashNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usmService.getProfile().subscribe(function (profile) {
            _this.user = profile.user.userDetails;
        });
        this.usmService.getUserTasks({ "id": JSON.parse(localStorage.getItem('user')).id }).subscribe(function (data) {
            _this.task = data.result;
        });
    };
    DashNavComponent.prototype.ngAfterViewInit = function () {
        this.startNavs();
    };
    DashNavComponent.prototype.startNavs = function () {
        var $body = $('body');
        var $overlay = $('.overlay');
        //Open left sidebar panel
        $('.bars').on('click', function () {
            $body.toggleClass('overlay-open');
            if ($body.hasClass('overlay-open')) {
                $overlay.fadeIn();
            }
            else {
                $overlay.fadeOut();
            }
        });
        //Close collapse bar on click event
        $('.nav [data-close="true"]').on('click', function () {
            var isVisible = $('.navbar-toggle').is(':visible');
            var $navbarCollapse = $('.navbar-collapse');
            if (isVisible) {
                $navbarCollapse.slideUp(function () {
                    $navbarCollapse.removeClass('in').removeAttr('style');
                });
            }
        });
    };
    DashNavComponent.prototype.logout = function () {
        this.usmService.logoutUser();
        this.router.navigate(['/']);
    };
    DashNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-nav',
            template: __webpack_require__("../../../../../src/app/modules/usm/layouts/dash-nav/dash-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/layouts/dash-nav/dash-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__usm_service__["a" /* UsmService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DashNavComponent);
    return DashNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/dash-side-nav/dash-side-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The side navigation menu */\r\n.sidenav {\r\n    height: 100%; /* 100% Full-height */\r\n    width: 0; /* 0 width - change this with JavaScript */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Stay on top */\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111; /* Black*/\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    overflow-y: hidden;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\r\n}\r\n.logo-eru{\r\n    width: 25%;\r\n}\r\n.sidenav-c{\r\n    padding-top: 30px; \r\n    overflow-x: hidden;   \r\n}\r\n.nav_title{\r\n    background: #34A853;\r\n    width: 100%;\r\n    padding-bottom: 2%;\r\n}\r\n.nav_title a {\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #f1f1f1;\r\n    display: block;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s\r\n}\r\n.sidenav-c .c-menu{\r\n}\r\n.sidenav-c .c-menu a{\r\n    color:  rgb(14, 194, 62)\r\n}\r\n/* The navigation menu links */\r\n.sidenav-c .c-menu .accop a {\r\n    padding: 8px 8px 8px 44px;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    color: white;\r\n    display: block;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s\r\n}\r\n/* When you mouse over the navigation links, change their color */\r\n.sidenav-c .c-menu .accop a:hover, .offcanvas a:focus{\r\n    color: rgb(14, 194, 62);\r\n}\r\n/* Position and style the close button (top right corner) */\r\n.sidenav-c .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\r\n#main {\r\n    -webkit-transition: margin-left .5s;\r\n    transition: margin-left .5s;\r\n    padding: 20px;\r\n}\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    .sidenav-c {padding-top: 15px;}\r\n    .sidenav-c .c-menu .accop a {font-size: 18px;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/dash-side-nav/dash-side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n        <!-- Left Sidebar -->\n        <aside id=\"leftsidebar\" class=\"sidebar\">\n            <!-- User Info -->\n            <div class=\"user-info\" *ngIf=\"user\">\n                <div class=\"image\">\n                    <img src=\"../assets/uploads/avatars/{{ picture }}\" width=\"48\" height=\"48\" alt=\"User\"  />\n                </div>\n                <div class=\"info-container\">\n                    <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ user['firstname'] }}, {{ user['lastname'] }}</div>\n                    <div class=\"email\">{{ email }}</div>\n                </div>\n            </div>\n            <!-- #User Info -->\n            <!-- Menu -->\n            <div class=\"menu\">\n                <ul class=\"list\">\n\n                    <li class=\"header\" *ngIf=\"SA\">ADMINISTRATIVE NAVIGATION</li>\n\n                    <li [routerLinkActive]=\"['active']\" *ngIf=\"SA\">\n                        <a  [routerLink]=\"['/admin']\" >\n                            <i class=\"fa fa-dashboard\" style=\"font-size: 20pt\">&nbsp;</i>\n                            <span>Dashboard</span>\n                        </a>\n                    </li>\n\n                    <li class=\"header\">MAIN NAVIGATION</li>\n\n                    <li class=\"active\">\n                        <a  [routerLink]=\"['/']\">\n                            <i class=\"fa fa-home\" style=\"font-size: 20pt\">&nbsp;</i>\n                            <span>Home</span>\n                        </a>\n                    </li>\n\n                    <li [routerLinkActive]=\"['active']\">\n                        <a  [routerLink]=\"['/profile']\" >\n                            <i class=\"fa fa-user\" style=\"font-size: 20pt\">&nbsp;</i>\n                            <span>Profile</span>\n                        </a>\n                    </li>\n\n                    <li [routerLinkActive]=\"['active']\">\n                        <a  [routerLink]=\"['/settings']\" >\n                            <i class=\"mdi mdi-settings\" style=\"font-size: 20pt\">&nbsp;</i>\n                            <span>Settings</span>\n                        </a>\n                    </li>\n\n\n                    <li>\n                        <a  (click) = \"logout()\">\n                            <i class=\"mdi mdi-logout\" style=\"font-size: 20pt\">&nbsp;</i>\n                            <span>Logout</span>\n                        </a>\n                    </li>\n\n                    <li class=\"header\">PROJECT NAVIGATION</li>\n\n                    <li [routerLinkActive]=\"['active']\">\n                        <a  [routerLink]=\"['/projects']\" >\n                            <i class=\"fa fa-coffee\" style=\"font-size: 20pt\">&nbsp;</i>\n                            <span>Projects</span>\n                        </a>\n                    </li>\n                    <li [routerLinkActive]=\"['active']\">\n                        <a  [routerLink]=\"['/project/init']\" >\n                            <i class=\"material-icons\" style=\"font-size: 20pt\">create</i>&nbsp;\n                            <span>Start Collaboration</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n            <!-- #Menu -->\n            <!-- Footer -->\n            <div class=\"legal\">\n                <div class=\"copyright\">\n                  \n                </div>\n                <div class=\"version\">\n                    <b>\n                        Version: </b> 1.0.5\n                </div>\n            </div>\n            <!-- #Footer -->\n        </aside>\n        <!-- #END# Left Sidebar -->\n\n        <!-- Right Sidebar -->\n        <aside id=\"rightsidebar\" class=\"right-sidebar\">\n            <ul class=\"nav nav-tabs tab-nav-right\" role=\"tablist\">\n                <li role=\"presentation\" class=\"active\"><a href=\"#chat\" data-toggle=\"chat\">CHAT</a></li>\n                <li role=\"presentation\"><a href=\"#settings\" data-toggle=\"tab\">SETTINGS</a></li>\n            </ul>\n            <div class=\"tab-content\">\n                <div role=\"tabpanel\" class=\"tab-pane fade in active in active\" id=\"chat\">\n\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"settings\">\n                    <div class=\"demo-settings\">\n                        <p>GENERAL SETTINGS</p>\n                        <ul class=\"setting-list\">\n                            <li>\n                                <span>Report Panel Usage</span>\n                                <div class=\"switch\">\n                                    <label><input type=\"checkbox\" checked><span class=\"lever\"></span></label>\n                                </div>\n                            </li>\n                            <li>\n                                <span>Email Redirect</span>\n                                <div class=\"switch\">\n                                    <label><input type=\"checkbox\"><span class=\"lever\"></span></label>\n                                </div>\n                            </li>\n                        </ul>\n                        <p>SYSTEM SETTINGS</p>\n                        <ul class=\"setting-list\">\n                            <li>\n                                <span>Notifications</span>\n                                <div class=\"switch\">\n                                    <label><input type=\"checkbox\" checked><span class=\"lever\"></span></label>\n                                </div>\n                            </li>\n                            <li>\n                                <span>Auto Updates</span>\n                                <div class=\"switch\">\n                                    <label><input type=\"checkbox\" checked><span class=\"lever\"></span></label>\n                                </div>\n                            </li>\n                        </ul>\n                        <p>ACCOUNT SETTINGS</p>\n                        <ul class=\"setting-list\">\n                            <li>\n                                <span>Offline</span>\n                                <div class=\"switch\">\n                                    <label><input type=\"checkbox\"><span class=\"lever\"></span></label>\n                                </div>\n                            </li>\n                            <li>\n                                <span>Location Permission</span>\n                                <div class=\"switch\">\n                                    <label><input type=\"checkbox\" checked><span class=\"lever\"></span></label>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </aside>\n        \n        <!-- #END# Right Sidebar -->\n    </section>"

/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/dash-side-nav/dash-side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashSideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashSideNavComponent = /** @class */ (function () {
    function DashSideNavComponent(usm, router) {
        this.usm = usm;
        this.router = router;
    }
    DashSideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usm.getProfile().subscribe(function (profile) {
            _this.user = profile.user.userDetails;
            _this.email = profile.user.loginDetails.email;
            _this.picture = profile.user.userDetails.picture;
            _this.SA = profile.user.SA != undefined;
        }),
            function (err) {
                return false;
            };
    };
    DashSideNavComponent.prototype.ngAfterViewInit = function () {
        this.leftSideBar();
        this.rightSideBar();
    };
    DashSideNavComponent.prototype.leftSideBar = function () {
        var $body = $('body');
        var $overlay = $('.overlay');
        $("#cls-btn").click(function () {
            $('#leftsidebar').css('width', '0px');
            $('.content').css('margin-left', '0px');
        });
        //Close sidebar
        $(window).click(function (e) {
            var $target = $(e.target);
            if (e.target.nodeName.toLowerCase() === 'i') {
                $target = $(e.target).parent();
            }
            if (!$target.hasClass('bars') && $('body').hasClass('overlay-open') && $target.parents('#leftsidebar').length === 0) {
                if (!$target.hasClass('js-right-sidebar'))
                    $overlay.fadeOut();
                $body.removeClass('overlay-open');
            }
        });
        $.each($('.menu-toggle.toggled'), function (i, val) {
            $(val).next().slideToggle(0);
        });
        //When page load
        $.each($('.menu .list li.active'), function (i, val) {
            var $activeAnchors = $(val).find('a:eq(0)');
            $activeAnchors.addClass('toggled');
            $activeAnchors.next().show();
        });
        //dropdowns
        $('.menu-toggle').click(function (e) {
            var $this = $(this);
            var $content = $this.next();
            if ($($this.parents('ul')[0]).hasClass('list')) {
                var $not = $(this).hasClass('menu-toggle') ? this : $(e.target).parents('.menu-toggle');
                $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
                    if ($(val).is(':visible')) {
                        $(val).prev().toggleClass('toggled');
                        $(val).slideUp();
                    }
                });
            }
            $this.toggleClass('toggled');
            $content.slideToggle(320);
        });
        this.menuHeight();
        this.resizeNav(true);
        $(window).resize(function () {
            if (typeof $.fn.slimScroll != 'undefined') {
                var configs = {
                    scrollColor: 'rgba(0,0,0,0.5)',
                    scrollWidth: '4px',
                    scrollAlwaysVisible: false,
                    scrollBorderRadius: '0',
                    scrollRailBorderRadius: '0',
                    scrollActiveItemWhenPageLoad: true,
                    breakpointWidth: 1170
                };
                var height = ($(window).height() - ($('.legal').outerHeight() + $('.user-info').outerHeight() + $('.navbar').innerHeight()));
                var $el = $('.list');
                $el.slimscroll({
                    height: height + "px",
                    color: configs.scrollColor,
                    size: configs.scrollWidth,
                    alwaysVisible: configs.scrollAlwaysVisible,
                    borderRadius: configs.scrollBorderRadius,
                    railBorderRadius: configs.scrollRailBorderRadius
                });
                //Scroll active menu item when page load, if option set = true
                if (configs.scrollActiveItemWhenPageLoad) {
                    var activeItemOffsetTop = $('.menu .list li.active')[0].offsetTop;
                    if (activeItemOffsetTop > 150)
                        $el.slimscroll({ scrollTo: activeItemOffsetTop + 'px' });
                }
            }
            var $body = $('body');
            var $openCloseBar = $('.navbar .navbar-header .bars');
            var width = $body.width();
            var firstTime = false;
            if (firstTime) {
                $body.find('.content, .sidebar').addClass('no-animate').delay(1000).queue(function () {
                    $(this).removeClass('no-animate').dequeue();
                });
            }
            if (width < 1500) {
                $body.addClass('ls-closed');
                $openCloseBar.fadeIn();
            }
            else {
                $body.removeClass('ls-closed');
                $openCloseBar.fadeOut();
            }
        });
    };
    DashSideNavComponent.prototype.rightSideBar = function () {
        var $sidebar = $('#rightsidebar');
        var $overlay = $('.overlay');
        //Close sidebar
        $(window).click(function (e) {
            var $target = $(e.target);
            if (e.target.nodeName.toLowerCase() === 'i') {
                $target = $(e.target).parent();
            }
            if (!$target.hasClass('js-right-sidebar') && this.isOpen() && $target.parents('#rightsidebar').length === 0) {
                if (!$target.hasClass('bars'))
                    $overlay.fadeOut();
                $sidebar.removeClass('open');
            }
        });
        $('.js-right-sidebar').on('click', function () {
            $sidebar.toggleClass('open');
            if (this.isOpen()) {
                $overlay.fadeIn();
            }
            else {
                $overlay.fadeOut();
            }
        });
    };
    DashSideNavComponent.prototype.isOpen = function () {
        return $('.right-sidebar').hasClass('open');
    };
    DashSideNavComponent.prototype.menuHeight = function () {
        if (typeof $.fn.slimScroll != 'undefined') {
            var configs = {
                scrollColor: 'rgba(0,0,0,0.5)',
                scrollWidth: '4px',
                scrollAlwaysVisible: false,
                scrollBorderRadius: '0',
                scrollRailBorderRadius: '0',
                scrollActiveItemWhenPageLoad: true,
                breakpointWidth: 1170
            };
            var height = ($(window).height() - ($('.legal').outerHeight() + $('.user-info').outerHeight() + $('.navbar').innerHeight()));
            var $el = $('.list');
            $el.slimscroll({
                height: height + "px",
                color: configs.scrollColor,
                size: configs.scrollWidth,
                alwaysVisible: configs.scrollAlwaysVisible,
                borderRadius: configs.scrollBorderRadius,
                railBorderRadius: configs.scrollRailBorderRadius
            });
            //Scroll active menu item when page load, if option set = true
            if (configs.scrollActiveItemWhenPageLoad) {
                var activeItemOffsetTop = $('.menu .list li.active')[0].offsetTop;
                if (activeItemOffsetTop > 150)
                    $el.slimscroll({ scrollTo: activeItemOffsetTop + 'px' });
            }
        }
    };
    DashSideNavComponent.prototype.resizeNav = function (firstTime) {
        var $body = $('body');
        var $openCloseBar = $('.navbar .navbar-header .bars');
        var width = $body.width();
        console.log(width);
        if (firstTime) {
            $body.find('.content, .sidebar').addClass('no-animate').delay(1000).queue(function () {
                $(this).removeClass('no-animate').dequeue();
            });
        }
        if (width < 1500) {
            $body.addClass('ls-closed');
            $openCloseBar.fadeIn();
        }
        else {
            $body.removeClass('ls-closed');
            $openCloseBar.fadeOut();
        }
    };
    DashSideNavComponent.prototype.logout = function () {
        this.usm.logoutUser();
        this.router.navigate(['/']);
    };
    DashSideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-side-nav',
            template: __webpack_require__("../../../../../src/app/modules/usm/layouts/dash-side-nav/dash-side-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/layouts/dash-side-nav/dash-side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__usm_service__["a" /* UsmService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DashSideNavComponent);
    return DashSideNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bdy{\r\n    background-image: url('/assets/images/bg.png') !important;\r\n    background-size: cover !important;\r\n    background-repeat: no-repeat;\r\n    height: 100vh;   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row margin-top-10-percent\">\n    <div class=\"col-md-8 col-sm-8 col-xs-8 col-md-offset-2 col-sm-offset-2 col-xs-offset-2\">\n      <div class=\"c\">\n      \n        <div class=\"text-center\">\n          <h4 style=\"letter-spacing: 5px;\">WELCOME TO ERUDITE</h4>\n        </div>\n    \n        <div class=\"body\">\n            \n            <div *ngIf=\"message\" class=\"alert alert-{{status}}\">\n                <span class=\"mess-alert\"> {{message}}</span>\n            </div>\n\n             \n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" *ngIf=\"!locked\" >\n              <form (submit)=\"onLogin()\" >\n                <div class=\"form-group\">\n                    <label for=\"uname\">Username:</label>\n                    <div class=\"form-line\">\n                      <input required type=\"text\" class=\"form-control\" id=\"uname\" placeholder=\"Enter Username\" name=\"name\" [(ngModel)]=\"username\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"pwd\">Password:</label>\n                  <div class=\"form-line\">\n                    <input required type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"password\" [(ngModel)]=\"password\">\n                  </div>\n                </div>\n                \n                <div class=\"text-center margin-top-5-percent\">\n                  <button type=\"submit\" class=\"form-control btn btn-success\">Login</button>\n                </div>\n              </form>\n            </div>\n\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(usmService, router) {
        this.usmService = usmService;
        this.router = router;
        this.counter = 0;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.onLogin = function () {
        var _this = this;
        var login_details = {
            username: this.username,
            password: this.password
        };
        if (this.username == undefined) {
            this.message = "Username is empty",
                this.status = "danger"; //bootstrap       
            return false;
        }
        if (this.password == undefined) {
            this.message = "Password is empty",
                this.status = "danger"; //bootstrap       
            return false;
        }
        this.usmService.authenticateUser(login_details).subscribe(function (data) {
            if (data.success) {
                _this.usmService.storeUserData(data.token, data.user);
                _this.router.navigate(['/dashboard']);
            }
            else {
                if (data.error == "ue1") {
                    if (_this.counter < 3) {
                        _this.message = data.msg;
                        _this.status = "danger"; //bootstrap
                        _this.counter += 1;
                    }
                    else {
                        _this.message = "Your Account is Locked";
                        _this.status = "danger"; //bootstrap
                        _this.locked = true;
                    }
                }
                else {
                    _this.message = data.msg;
                    _this.status = "warning"; //bootstrap
                }
            }
        });
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/modules/usm/layouts/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/layouts/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__usm_service__["a" /* UsmService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/registration-form/registration-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/registration-form/registration-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\n    <div class=\"card\">\n      <div class=\"header bg-green\">Registration</div>\n      <div class=\"body\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12\" *ngIf=\"message\">\n              <div class=\"alert alert-danger\" style=\"color: white !important;\">\n                {{message}}\n              </div>\n            </div>\n  \n            <form (submit)=\"onRegister()\" id=\"regForm\">\n              \n  \n               <div class=\"form-group\">\n                <label for=\"uname\">Username:</label>\n                <div class=\"form-line\">\n                    <input required type=\"text\" class=\"form-control\" id=\"uname\" placeholder=\"Username\" name=\"name\" [(ngModel)]=\"username\">\n                </div>\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\"pwd\">Password:</label>\n                <div class=\"form-line\">\n                    <input required type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"confrimpwd\">Confirm Password:</label>\n                <div class=\"form-line\">\n                    <input required type=\"password\" class=\"form-control\" id=\"confirmpwd\" placeholder=\"Confirm Password\" name=\"confirm_password\" [(ngModel)]=\"confirm_password\">\n                </div>\n              </div>\n              \n              <div class=\"form-group\">\n                  <label for=\"email\">Email:</label>\n                  <div class=\"form-line\">\n                      <input required type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email Address\" name=\"email\" [(ngModel)]=\"email\">\n                  </div>\n              </div>\n  \n              \n              <div class=\"form-group\">\n                <label for=\"firstname\">Firstname:</label>\n                <div class=\"form-line\">\n                    <input required type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"Firstname\" name=\"firstname\" [(ngModel)]=\"firstname\">\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"lastname\">Lastname:</label>\n                <div class=\"form-line\">\n                    <input required type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Lastname\" name=\"lastname\" [(ngModel)]=\"lastname\">\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"middlename\">Middlename:</label>\n                <div class=\"form-line\">\n                    <input required type=\"text\" class=\"form-control\" id=\"middlename\" placeholder=\"Middlename\" name=\"middlename\" [(ngModel)]=\"middlename\">\n                </div>\n              </div>\n\n              <hr/>\n              \n              <div class=\"form-group\">\n                <label class=\"control-label\">Your Image</label>\n                <input type=\"file\" (change) = \"fileChange($event)\" required/>\n              </div>\n\n               <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n            \n            </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/modules/usm/layouts/registration-form/registration-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent(usmService, router) {
        this.usmService = usmService;
        this.router = router;
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.ngAfterViewInit = function () {
        this.xformload();
    };
    RegistrationFormComponent.prototype.fileChange = function ($event) {
        this.file = $event.target['files'][0];
    };
    RegistrationFormComponent.prototype.xformload = function () {
        //On focus event
        $('.form-control').focus(function () {
            $(this).parent().addClass('focused');
        });
        //On focusout event
        $('.form-control').focusout(function () {
            var $this = $(this);
            if ($this.parents('.form-group').hasClass('form-float')) {
                if ($this.val() == '') {
                    $this.parents('.form-line').removeClass('focused');
                }
            }
            else {
                $this.parents('.form-line').removeClass('focused');
            }
        });
        //On label click
        $('body').on('click', '.form-float .form-line .form-label', function () {
            $(this).parent().find('input').focus();
        });
        //Not blank form
        $('.form-control').each(function () {
            if ($(this).val() !== '') {
                $(this).parents('.form-line').addClass('focused');
            }
        });
    };
    RegistrationFormComponent.prototype.onRegister = function () {
        var _this = this;
        var frmData = new FormData();
        var userDetails = {
            firstname: this.firstname,
            lastname: this.lastname,
            middlename: this.middlename,
            username: this.username,
            password: this.password,
            email: this.email,
            confirm_password: this.confirm_password
        };
        frmData.append('profile', this.file, this.file.name);
        frmData.append('firstname', this.firstname);
        frmData.append('lastname', this.lastname);
        frmData.append('middlename', this.middlename);
        frmData.append('username', this.username);
        frmData.append('password', this.password);
        frmData.append('email', this.email);
        frmData.append('confirm_password', this.confirm_password);
        // Validation - Require Fields
        if (!this.usmService.validateRegister(userDetails)) {
            this.message = "Please check your fields";
            return false;
        }
        else {
            console.log("passed 1");
        }
        //Validation Email
        if (!this.usmService.validateEmail(userDetails.email)) {
            this.message = "Email is invalid";
            return false;
        }
        else {
            console.log("passed 2");
        }
        if (userDetails.confirm_password != userDetails.password) {
            this.message = null;
            this.message = "Passwords are not match";
            return false;
        }
        else {
            console.log("passed 4");
        }
        //Register User
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: "Halt!",
            text: "Are you sure all of this fields are correct?",
            type: "warning",
            showCancelButton: true,
            showLoaderOnConfirm: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then(function (result) {
            _this.usmService.registerUser(frmData).subscribe(function (data) {
                if (data.success) {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                        title: "Yehey!",
                        text: "You were successfully registered",
                        type: "success",
                        showCancelButton: true
                    }).then(function (res) {
                        _this.router.navigate(['/login']);
                    });
                }
                else {
                    _this.message = data.msg;
                    return false;
                }
            });
        });
    };
    RegistrationFormComponent.prototype.formload = function () {
        //On focus event
        $('.form-control').focus(function () {
            $(this).parent().addClass('focused');
        });
        //On focusout event
        $('.form-control').focusout(function () {
            var $this = $(this);
            if ($this.parents('.form-group').hasClass('form-float')) {
                if ($this.val() == '') {
                    $this.parents('.form-line').removeClass('focused');
                }
            }
            else {
                $this.parents('.form-line').removeClass('focused');
            }
        });
        //On label click
        $('body').on('click', '.form-float .form-line .form-label', function () {
            $(this).parent().find('input').focus();
        });
        //Not blank form
        $('.form-control').each(function () {
            if ($(this).val() !== '') {
                $(this).parents('.form-line').addClass('focused');
            }
        });
    };
    RegistrationFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__("../../../../../src/app/modules/usm/layouts/registration-form/registration-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/layouts/registration-form/registration-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__usm_service__["a" /* UsmService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/modules/usm/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(usm, router) {
        this.usm = usm;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.logout();
    };
    LogoutComponent.prototype.logout = function () {
        this.usm.logoutUser();
        this.router.navigate(['/']);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/modules/usm/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__usm_service__["a" /* UsmService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/testfrm/testfrm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/usm/testfrm/testfrm.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"testUpload()\">\n  <input type=\"file\" id=\"test\" (change) = \"fileChange($event)\"/>\n  <button type=\"submit\" >Submit</button>\n</form>\n\n\n{{ File }}"

/***/ }),

/***/ "../../../../../src/app/modules/usm/testfrm/testfrm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestfrmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestfrmComponent = /** @class */ (function () {
    function TestfrmComponent(usm, router) {
        this.usm = usm;
        this.router = router;
    }
    TestfrmComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: "Yehey!",
            text: "You were successfully registered",
            type: "success",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        });
    };
    TestfrmComponent.prototype.testUpload = function () {
        console.log(this.file);
        var frmData = new FormData();
        frmData.append('profile', this.file, this.file.name);
        this.usm.upload(frmData).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            alert(err);
        });
    };
    TestfrmComponent.prototype.fileChange = function ($event) {
        this.file = $event.target['files'][0];
    };
    TestfrmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testfrm',
            template: __webpack_require__("../../../../../src/app/modules/usm/testfrm/testfrm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/usm/testfrm/testfrm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__usm_service__["a" /* UsmService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], TestfrmComponent);
    return TestfrmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/usm.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsmModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/modules/usm/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_registration_registration_component__ = __webpack_require__("../../../../../src/app/modules/usm/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/modules/usm/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts_login_form_login_form_component__ = __webpack_require__("../../../../../src/app/modules/usm/layouts/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layouts_registration_form_registration_form_component__ = __webpack_require__("../../../../../src/app/modules/usm/layouts/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/layouts/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__usm_service__ = __webpack_require__("../../../../../src/app/modules/usm/usm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/modules/usm/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/modules/usm/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layouts_dash_layout_dash_layout_component__ = __webpack_require__("../../../../../src/app/modules/usm/layouts/dash-layout/dash-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_account_settings_account_settings_component__ = __webpack_require__("../../../../../src/app/modules/usm/components/account-settings/account-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navs_navs_module__ = __webpack_require__("../../../../../src/app/modules/navs/navs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__layouts_dash_left_nav_dash_left_nav_component__ = __webpack_require__("../../../../../src/app/modules/usm/layouts/dash-left-nav/dash-left-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__testfrm_testfrm_component__ = __webpack_require__("../../../../../src/app/modules/usm/testfrm/testfrm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__logout_logout_component__ = __webpack_require__("../../../../../src/app/modules/usm/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var UsmModule = /** @class */ (function () {
    function UsmModule() {
    }
    UsmModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_16__navs_navs_module__["a" /* NavsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_6__components_registration_registration_component__["a" /* RegistrationComponent */], __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_8__layouts_login_form_login_form_component__["a" /* LoginFormComponent */], __WEBPACK_IMPORTED_MODULE_9__layouts_registration_form_registration_form_component__["a" /* RegistrationFormComponent */], __WEBPACK_IMPORTED_MODULE_10__layouts_navigation_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_14__layouts_dash_layout_dash_layout_component__["a" /* DashLayoutComponent */], __WEBPACK_IMPORTED_MODULE_15__components_account_settings_account_settings_component__["a" /* AccountSettingsComponent */], __WEBPACK_IMPORTED_MODULE_17__layouts_dash_left_nav_dash_left_nav_component__["a" /* DashLeftNavComponent */], __WEBPACK_IMPORTED_MODULE_18__testfrm_testfrm_component__["a" /* TestfrmComponent */], __WEBPACK_IMPORTED_MODULE_19__logout_logout_component__["a" /* LogoutComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__usm_service__["a" /* UsmService */]]
        })
    ], UsmModule);
    return UsmModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/usm/usm.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsmService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_functions__ = __webpack_require__("../../../../../src/app/config/functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsmService = /** @class */ (function () {
    function UsmService(http, f) {
        this.http = http;
        this.f = f;
        this.dop = __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* APP_CONFIG */].Protocol + "://" + __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* APP_CONFIG */].Address + "/";
    }
    UsmService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    UsmService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.post(this.dop + 'users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsmService.prototype.checkUsernameIsExisting = function (uname) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.dop + 'users/UsernameExist', uname, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsmService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.dop + 'users/auth', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsmService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.dop + 'users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsmService.prototype.getUserTasks = function (send) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.dop + 'users/userTask', send, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsmService.prototype.AccountSettings = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.dop + 'users/accSettings', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsmService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    UsmService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    UsmService.prototype.updateUserData = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.dop + 'users/updateUser', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsmService.prototype.getAllProjects = function () {
        return this.f.post('/projects/getProjectsAllPublic', [], true).map(function (res) { return res.json(); });
    };
    UsmService.prototype.logoutUser = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    UsmService.prototype.validateRegister = function (user) {
        if (user.firstname == undefined || user.lastname == undefined || user.middlename == undefined || user.email == undefined || user.password == undefined || user.username == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    UsmService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    //testing uploads
    UsmService.prototype.upload = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.post(this.dop + 'users/uploadPhoto', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsmService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__config_functions__["a" /* functions */]])
    ], UsmService);
    return UsmService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map