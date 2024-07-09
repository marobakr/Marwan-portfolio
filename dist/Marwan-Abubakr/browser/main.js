"use strict";
(self["webpackChunkMarwan_Abubakr"] = self["webpackChunkMarwan_Abubakr"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./core/pages/home/home.component */ 8196)).then(m => m.HomeComponent)
}, {
  path: 'about',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_core_pages_about_about_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/pages/about/about.component */ 4803)).then(m => m.AboutComponent)
}, {
  path: 'projects',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_core_pages_project_project_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/pages/project/project.component */ 4355)).then(m => m.ProjectComponent)
}, {
  path: 'resume',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_core_pages_resume_resume_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/pages/resume/resume.component */ 3338)).then(m => m.ResumeComponent)
}, {
  path: '**',
  loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./core/pages/home/home.component */ 8196)).then(m => m.HomeComponent)
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _core_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/navbar/navbar.component */ 8394);
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/footer/footer.component */ 6093);
/* harmony import */ var _shared_loding_loding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/loding/loding.component */ 5563);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);






function AppComponent_div_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_0_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.scrollToTop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \uD83D\uDC46 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-navbar")(2, "router-outlet")(3, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AppComponent_div_0_button_4_Template, 2, 0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isScroll);
  }
}
class AppComponent {
  constructor(_viewportScroller) {
    this._viewportScroller = _viewportScroller;
    this.isScroll = false;
    this.isLoding = true;
    this.afterViewInit = false;
  }
  onScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 150) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoding = false;
    }, 1000);
    this.afterViewInit = true;
  }
  scrollToTop() {
    this._viewportScroller.scrollToPosition([0, 0]);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.ViewportScroller));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
      }
    },
    decls: 2,
    vars: 2,
    consts: [["class", "app", 4, "ngIf"], [3, "isLoding"], [1, "app"], ["class", "btn main__btn position-fixed scroll__top text-white", 3, "click", 4, "ngIf"], [1, "btn", "main__btn", "position-fixed", "scroll__top", "text-white", 3, "click"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loding", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoding);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoding", ctx.isLoding);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _core_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _shared_loding_loding_component__WEBPACK_IMPORTED_MODULE_2__.LodingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
    styles: [".scroll__top[_ngcontent-%COMP%] {\n  \n\n  width: -moz-fit-content;\n  width: fit-content;\n  \n\n  bottom: 15px;\n  right: 15px;\n  \n\n  font-size: 20px;\n  font-weight: 500;\n  \n\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb3JlL3N0eWxlL3V0aWxpdGllcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLFNBQUE7RUFFRSxlQ0RRO0VERVIsZ0JDRFU7RURJWixVQUFBO0VBQ0EsYUFBQTtBQU5GIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG4uc2Nyb2xsX190b3Age1xuICAvKiBCb3ggTW9kZWwgKi9cbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gIC8qIFBvc2l0aW9ucyAqL1xuICBib3R0b206IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuXG4gIC8qIFRleHQgKi9cbiAgZm9udDoge1xuICAgIHNpemU6ICRtYWluLWZvbnQ7XG4gICAgd2VpZ2h0OiAkbWFpbi13ZWlnaHQ7XG4gIH1cblxuICAvKiBPdGhlciAqL1xuICB6LWluZGV4OiA5OTk5O1xufVxuIiwiQGltcG9ydCBcIm1peGluXCI7XG5cbiRwcmltYXJ5LWNvbG9yOiAjMTcxMTI2O1xuJGFsdGVybmF0ZS1jb2xvcjogIzYxMzE4MjtcbiRib3JkZXItY29sb3I6ICM2MjM2ODY7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjYzk1YmY1O1xuJHBvcHVsYXItY29sb3I6ICNjNzcwZjA7XG4kbWFpbi1hbmltYXRpb246IGFsbCAwLjVzO1xuJG1haW4tcGFkZGluZzogMTAwcHg7XG4kc2VjdGlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMGYwYjE4O1xuJHNjYWxlLWFuaW1hdGlvbjogc2NhbGUoMS4wMik7XG4kbWFpbi1mb250OiAyMHB4O1xuJG1haW4td2VpZ2h0OiA1MDA7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 8081);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet]
  });
})();

/***/ }),

/***/ 6093:
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



class FooterComponent {
  constructor() {
    this.cuurentData = new Date();
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 18,
    vars: 3,
    consts: [[1, "py-4"], [1, "container"], [1, "innner", "text-white", "d-flex", "justify-content-center", "justify-content-lg-between", "align-items-center", "flex-wrap", "gap-4"], [1, "mb-0"], [1, "mb-0", "px-5"], [1, "icons", "px-5", "d-flex", "justify-content-center", "align-items-center", "gap-4"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "https://www.facebook.com/profile.php?id=100093257703015", "target", "_blank"], [1, "fa-brands", "fa-facebook", "text-white"], ["href", "https://www.linkedin.com/in/marwan-abubakr-2b504528a", "target", "_blank"], [1, "fa-brands", "fa-linkedin", "text-white"], ["href", "https://marobakr.com", "target", "_blank"], [1, "fa-brands", "fa-github", "text-white"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Developed by Marwan Abubakr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "span", 6)(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6)(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6)(16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Copyright \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.cuurentData), "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["footer[_ngcontent-%COMP%] {\n  \n\n  background-color: #0a0416;\n  \n\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFFQSxTQUFBO0FBQUY7QUFDRTtFQUNFLGdCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICAvKiBDb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwNDE2O1xuXG4gIC8qIFRleHQgKi9cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8394:
/*!************************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-routing.module */ 3966);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/projects.service */ 9801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);






const _c0 = ["navbarCollapse"];
const _c1 = function (a0) {
  return {
    scrolling: a0
  };
};
class NavbarComponent {
  constructor() {
    this.Scrolling = false;
    this.inResume = 0;
    this.isShow = false;
    this.repoPath = 'https://github.com/marobakr/Marwan-portfolio';
  }
  onScroll() {
    if (window.scrollY > 10) {
      this.Scrolling = true;
    } else {
      this.Scrolling = false;
    }
  }
  closeNavbar() {
    this.btnMopileNav.nativeElement.classList.remove('show');
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    viewQuery: function NavbarComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.btnMopileNav = _t.first);
      }
    },
    hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_projects_service__WEBPACK_IMPORTED_MODULE_1__.ProjectsService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 41,
    vars: 4,
    consts: [[1, "navbar", "navbar-expand-md", "position-fixed", "w-100", 3, "ngClass"], [1, "container", "text-center"], ["role", "button", "routerLink", "home", "routerLinkActive", "link-active", 1, "navbar-brand"], [1, "navbar__img-logo", "mb-0"], ["src", "./assets/marwan-abubakr.JPG", "alt", "logo", 1, "w-100", "img-thumbnail"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], ["navbarCollapse", ""], [1, "navbar__links", "navbar-nav", "ms-auto", "mb-2", "gap-2", "mb-lg-0"], ["routerLink", "/home", "routerLinkActive", "link-active", 1, "nav-item", 3, "click"], ["aria-current", "page", 1, "nav-link", "active", "text-white", "text-capitalize", "px-3"], ["stroke", "currentColor", "fill", "currentColor", "stroke-width", "0", "viewBox", "0 0 1024 1024", "height", "1em", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 2, "margin-bottom", "2px"], ["d", "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"], ["routerLink", "about", "routerLinkActive", "link-active", 1, "nav-item", 3, "click"], ["d", "M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"], ["routerLink", "projects", "routerLinkActive", "link-active", 1, "nav-item", 3, "click"], ["stroke", "currentColor", "fill", "currentColor", "stroke-width", "0", "t", "1569683753031", "viewBox", "0 0 1024 1024", "version", "1.1", "height", "1em", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 2, "margin-bottom", "2px"], ["d", "M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L517 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L275.3 543.4c-3.1 3.1-3.1 8.2 0 11.3l36.8 36.8z"], ["d", "M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1c-3.7 2.4-4.7 7.3-2.3 11l30.3 47.2v0.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-0.1l30.3-47.2c2.4-3.7 1.3-8.6-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 512H160V232h704v440z"], ["routerLink", "resume", "routerLinkActive", "link-active", 1, "nav-item", 3, "click"], ["stroke", "currentColor", "fill", "none", "stroke-width", "0", "viewBox", "0 0 24 24", "height", "1em", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 2, "margin-bottom", "2px"], ["d", "M7 18H17V16H7V18Z", "fill", "currentColor"], ["d", "M17 14H7V12H17V14Z", "fill", "currentColor"], ["d", "M7 10H11V8H7V10Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z", "fill", "currentColor"], [1, "nav-item", "align-items-center", "icons", 3, "click"], ["target", "_blank", "aria-current", "page", 1, "navbar-bg", "nav-link", "text-white", "rounded-2", "py-1", "px-3", 3, "href"], ["stroke", "currentColor", "fill", "none", "stroke-width", "0", "viewBox", "0 0 24 24", "height", "1em", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 2, "font-size", "1.2em"], ["d", "M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z", "fill", "currentColor"], ["stroke", "currentColor", "fill", "currentColor", "stroke-width", "0", "viewBox", "0 0 1024 1024", "height", "1em", "width", "1em", "xmlns", "http://www.w3.org/2000/svg", 2, "font-size", "1.1em"], ["d", "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7, 8)(9, "ul", 9)(10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_10_listener() {
          return ctx.closeNavbar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_15_listener() {
          return ctx.closeNavbar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_20_listener() {
          return ctx.closeNavbar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "defs")(24, "path", 18)(25, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_27_listener() {
          return ctx.closeNavbar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "path", 22)(31, "path", 23)(32, "path", 24)(33, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Resume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_35_listener() {
          return ctx.closeNavbar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx.Scrolling));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.repoPath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive],
    styles: [".navbar[_ngcontent-%COMP%] {\n  \n\n  padding-top: 10px;\n  padding-bottom: 10px;\n  \n\n  transition: all 0.5s;\n  \n\n\n\n\n  \n\n  z-index: 999;\n}\n.navbar__img-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  \n\n  transition: all 0.5s;\n}\n.navbar.scrolling[_ngcontent-%COMP%] {\n  \n\n  padding-top: 5px;\n  padding-bottom: 5px;\n  \n\n  -webkit-backdrop-filter: blur(15px);\n          backdrop-filter: blur(15px);\n  box-shadow: 0 10px 10px 0 rgba(9, 5, 29, 0.171);\n}\n.navbar.scrolling[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  \n\n  width: 75% !important;\n}\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    \n\n    background-color: #0f0b18; \n\n  }\n}\n.navbar__img-logo[_ngcontent-%COMP%] {\n  \n\n  width: 50px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  background-color: #613182;\n  border: 3px solid #fff;\n}\n.navbar__links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  \n\n  position: relative;\n  \n\n  font-size: 20px;\n  \n\n  cursor: pointer;\n  transition: all 0.5s;\n  \n\n}\n.navbar__links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.icons)::before {\n  \n\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  \n\n  height: 0px;\n  \n\n  content: \"\";\n  background-color: #613182;\n  transition: all 0.5s;\n  z-index: -1;\n}\n.navbar__links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::before {\n  \n\n  top: 0;\n  \n\n  width: 100%;\n  height: 100%;\n}\n.navbar__links[_ngcontent-%COMP%]   li.link-active[_ngcontent-%COMP%]::before {\n  \n\n  width: 100%;\n  z-index: -1;\n  height: 100% !important;\n  top: 0;\n}\n.navbar-bg[_ngcontent-%COMP%] {\n  \n\n  border: 2px solid #623686;\n  \n\n  background-color: #613182;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvcmUvc3R5bGUvdXRpbGl0aWVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFFRSxpQkFBQTtFQUNBLG9CQUFBO0VBR0YsVUFBQTtFQUNBLG9CQ0plO0VEMkJmOzs7R0FBQTtFQVNBLFVBQUE7RUFDQSxZQUFBO0FBaENGO0FBQ0U7RUFDRSxVQUFBO0VBQ0Esb0JDUmE7QURTakI7QUFFRTtFQUNFLGNBQUE7RUFFRSxnQkFBQTtFQUNBLG1CQUFBO0VBRUYsVUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwrQ0FBQTtBQUZKO0FBSUk7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFGTjtBQVVFO0VBbkNGO0lBb0NJLFVBQUE7SUFDQSx5QkMvQnVCLEVEK0JzQixNQUFBO0VBUC9DO0FBQ0Y7QUFZRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBVko7QUFhRTtFQUNFLHlCQ2pEYztFRGtEZCxzQkFBQTtBQVhKO0FBY0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsU0FBQTtFQUNBLGVBQUE7RUFFQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQzFEVztFRDREWCw4Q0FBQTtBQWZOO0FBZ0JNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGNBQUE7RUFDQSxXQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkM3RVU7RUQ4RVYsb0JDMUVTO0VEMkVULFdBQUE7QUFoQlI7QUFvQlE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFFQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFuQlY7QUF1Qk07RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7QUFyQlI7QUEwQkU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFFQSxVQUFBO0VBQ0EseUJDNUdjO0FEbUZsQiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJtaXhpblwiO1xuXG4ubmF2YmFyIHtcbiAgLyogQm94IE1vZGVsICovXG4gIHBhZGRpbmc6IHtcbiAgICB0b3A6IDEwcHg7XG4gICAgYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLyogT3RoZXIgKi9cbiAgdHJhbnNpdGlvbjogJG1haW4tYW5pbWF0aW9uO1xuXG4gICZfX2ltZy1sb2dvIGltZyB7XG4gICAgLyogT3RoZXIgKi9cbiAgICB0cmFuc2l0aW9uOiAkbWFpbi1hbmltYXRpb247XG4gIH1cblxuICAmLnNjcm9sbGluZyB7XG4gICAgLyogQm94IE1vZGVsICovXG4gICAgcGFkZGluZzoge1xuICAgICAgdG9wOiA1cHg7XG4gICAgICBib3R0b206IDVweDtcbiAgICB9XG4gICAgLyogT3RoZXIgKi9cbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggMCByZ2JhKDksIDUsIDI5LCAwLjE3MSk7XG5cbiAgICBpbWcge1xuICAgICAgLyogQm94IE1vZGVsICovXG4gICAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gKiBIZWxwZXIgY2xhc3MgYWRkIGJnIGluIG1vcGlsZSBtZWRpYSBpbnN0ZWQgb2YgdHJhbnNwYXJlbnRcbiAqIDEuQ29sb3JcbiAqL1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAvKiBDb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWJhY2tncm91bmQtY29sb3I7IC8qIDEgKi9cbiAgfVxuXG4gIC8qIE90aGVyICovXG4gIHotaW5kZXg6IDk5OTtcblxuICAmX19pbWctbG9nbyB7XG4gICAgLyogQm94IE1vZGVsICovXG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cblxuICAubmF2YmFyLXRvZ2dsZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhbHRlcm5hdGUtY29sb3I7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgfVxuICAmX19saW5rcyB7XG4gICAgbGkge1xuICAgICAgLyogUG9zaXRpb25pbmcgKi9cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLyogVGV4dCAqL1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgICAvKiBPdGhlciAqL1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogJG1haW4tYW5pbWF0aW9uO1xuXG4gICAgICAvKiBoZWxwZXIgbm90IGFkZCBwc3VkbyBjbGFzcyBhdCBpY29ucyBpdGVtICAqL1xuICAgICAgJjpub3QoLmljb25zKTo6YmVmb3JlIHtcbiAgICAgICAgLyogUG9zaXRpb25pbmcgKi9cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgIC8qIEJveCBNb2RlbCAqL1xuICAgICAgICBoZWlnaHQ6IDBweDtcblxuICAgICAgICAvKiBPdGhlciAqL1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWx0ZXJuYXRlLWNvbG9yO1xuICAgICAgICB0cmFuc2l0aW9uOiAkbWFpbi1hbmltYXRpb247XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAvKiBQb3NpdGlvbmluZyAqL1xuICAgICAgICAgIHRvcDogMDtcblxuICAgICAgICAgIC8qIEJveCBNb2RlbCAqL1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmxpbmstYWN0aXZlOjpiZWZvcmUge1xuICAgICAgICAvKiBCb3ggTW9kZWwgKi9cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtYmcge1xuICAgIC8qIEJveCBNb2RlbCAqL1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXItY29sb3I7XG5cbiAgICAvKiBDb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhbHRlcm5hdGUtY29sb3I7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJtaXhpblwiO1xuXG4kcHJpbWFyeS1jb2xvcjogIzE3MTEyNjtcbiRhbHRlcm5hdGUtY29sb3I6ICM2MTMxODI7XG4kYm9yZGVyLWNvbG9yOiAjNjIzNjg2O1xuJHNlY29uZGFyeS1jb2xvcjogI2M5NWJmNTtcbiRwb3B1bGFyLWNvbG9yOiAjYzc3MGYwO1xuJG1haW4tYW5pbWF0aW9uOiBhbGwgMC41cztcbiRtYWluLXBhZGRpbmc6IDEwMHB4O1xuJHNlY3Rpb24tYmFja2dyb3VuZC1jb2xvcjogIzBmMGIxODtcbiRzY2FsZS1hbmltYXRpb246IHNjYWxlKDEuMDIpO1xuJG1haW4tZm9udDogMjBweDtcbiRtYWluLXdlaWdodDogNTAwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8081:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 8394);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ 8196);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 6093);
/* harmony import */ var _shared_loding_loding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loding/loding.component */ 5563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class CoreModule {
  static #_ = this.ɵfac = function CoreModule_Factory(t) {
    return new (t || CoreModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: CoreModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _shared_loding_loding_component__WEBPACK_IMPORTED_MODULE_3__.LodingComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _shared_loding_loding_component__WEBPACK_IMPORTED_MODULE_3__.LodingComponent],
    exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _shared_loding_loding_component__WEBPACK_IMPORTED_MODULE_3__.LodingComponent]
  });
})();

/***/ }),

/***/ 1489:
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/home/components/contact/contact.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var src_app_shared_maintitle_maintitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/maintitle/maintitle.component */ 7215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




function ContactComponent_a_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("reflection-grid-cell reflection-grid-cell-", item_r1 + 1, "");
  }
}
// import { CanvasComponent } from 'src/app/core/pages/home/components/canvas/canvas.component';
class ContactComponent {
  constructor() {
    this.reflection = [];
  }
  ngOnInit() {
    this.generateEle();
  }
  generateEle() {
    for (let i = 0; i <= 100; i++) {
      this.reflection.push(i);
    }
  }
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 56,
    vars: 2,
    consts: [[1, "contact"], [1, "container"], [1, "row", "gy-5"], [1, "col-md-8"], [3, "popular"], [1, "before", "text-capitalize"], [1, "after", "text-capitalize"], [1, "contact__info"], [1, "mb-5", "text-white"], [1, "popular__main__color"], [1, "col-md-4", "mb-5"], ["role", "button", 1, "contact__reflection"], [3, "class", 4, "ngFor", "ngForOf"], [1, "w-75", "mx-auto", "ms-md-a", "reflection-content"], ["src", "./assets/marwan-abubakr.JPG", "alt", "marwan abubakr", 1, "w-100", "img-thumbnail", "rounded-5"], [1, "contact__getme", "text-center"], [1, "h1", "text-white", "mb-3"], [1, "mb-3", "text-white", "fw-medium"], [1, "icons", "d-flex", "justify-content-center", "align-items-center", "gap-4"], [1, "bg-white", "d-flex", "align-items-center", "justify-content-center"], ["href", "https://www.facebook.com/profile.php?id=100093257703015", "target", "_blank"], [1, "fa-brands", "fa-facebook"], ["href", "https://www.linkedin.com/in/marwan-abubakr-2b504528a", "target", "_blank"], [1, "fa-brands", "fa-linkedin"], ["href", "https://marobakr.com", "target", "_blank"], [1, "fa-brands", "fa-github"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "app-maintitle", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "LET ME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "MYSELF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " I fell in love with programming and I have at least learnt something, I think\u2026 \uD83E\uDD37\u200D\u2642\uFE0F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " I am fluent in classics like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "C++, Javascript, c#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " My field of Interest's are building new ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Web Technologies and Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Whenever possible, I also apply my passion for developing products with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "ASP.NET");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Modern");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Javascript Library and Frameworks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "angular +2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10)(34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ContactComponent_a_35_Template, 1, 3, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 15)(39, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "FIND ME ON");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Feel free to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " with me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 18)(47, "span", 19)(48, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 19)(51, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 19)(54, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("popular", "INTRODUCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reflection);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, src_app_shared_maintitle_maintitle_component__WEBPACK_IMPORTED_MODULE_0__.MaintitleComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  \n\n  padding-top: 150px;\n  padding-bottom: 100px;\n  \n\n  background-color: #0f0b18;\n}\n\n.contact[_ngcontent-%COMP%] {\n  \n\n  background-image: linear-gradient(to left, rgb(27, 20, 41), rgb(20, 15, 35)) !important;\n}\n.contact__info[_ngcontent-%COMP%] {\n  \n\n  font-size: 20px;\n  font-weight: 700;\n  font-style: italic;\n}\n.contact__info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  \n\n  font-weight: 600;\n}\n.contact__getme[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  \n\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.contact__getme[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  \n\n  color: #623686;\n  \n\n  font-size: 25px;\n}\n.contact__reflection[_ngcontent-%COMP%] {\n  \n\n  perspective: 1000px;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transition: 100ms linear transform;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell[_ngcontent-%COMP%] {\n  \n\n  position: absolute;\n  \n\n  width: 10%;\n  height: 10%;\n  \n\n  z-index: 1;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-1[_ngcontent-%COMP%] {\n  \n\n  top: 0%;\n  left: 0%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-1[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(20deg) rotateY(-20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-1[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-2[_ngcontent-%COMP%] {\n  \n\n  top: 0%;\n  left: 10%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-2[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(20deg) rotateY(-15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-2[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-3[_ngcontent-%COMP%] {\n  \n\n  top: 0%;\n  left: 20%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-3[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(20deg) rotateY(-10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-3[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-4[_ngcontent-%COMP%] {\n  \n\n  top: 0%;\n  left: 30%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-4[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(20deg) rotateY(-5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-4[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-5[_ngcontent-%COMP%] {\n  \n\n  top: 0%;\n  left: 40%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-5[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(20deg) rotateY(0deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-5[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-6[_ngcontent-%COMP%] {\n  \n\n  top: 0%;\n  left: 50%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-6[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(20deg) rotateY(5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-6[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-7[_ngcontent-%COMP%] {\n  \n\n  top: 0%;\n  left: 60%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-7[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(20deg) rotateY(10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-7[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-8[_ngcontent-%COMP%] {\n  \n\n  top: 0%;\n  left: 70%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-8[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(20deg) rotateY(15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-8[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-9[_ngcontent-%COMP%] {\n  \n\n  top: 0%;\n  left: 80%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-9[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(20deg) rotateY(20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-9[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-10[_ngcontent-%COMP%] {\n  \n\n  top: 0%;\n  left: 90%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-10[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(20deg) rotateY(25deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-10[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-11[_ngcontent-%COMP%] {\n  \n\n  top: 10%;\n  left: 0%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-11[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(15deg) rotateY(-20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-11[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-12[_ngcontent-%COMP%] {\n  \n\n  top: 10%;\n  left: 10%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-12[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(15deg) rotateY(-15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-12[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-13[_ngcontent-%COMP%] {\n  \n\n  top: 10%;\n  left: 20%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-13[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(15deg) rotateY(-10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-13[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-14[_ngcontent-%COMP%] {\n  \n\n  top: 10%;\n  left: 30%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-14[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(15deg) rotateY(-5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-14[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-15[_ngcontent-%COMP%] {\n  \n\n  top: 10%;\n  left: 40%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-15[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(15deg) rotateY(0deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-15[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-16[_ngcontent-%COMP%] {\n  \n\n  top: 10%;\n  left: 50%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-16[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(15deg) rotateY(5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-16[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-17[_ngcontent-%COMP%] {\n  \n\n  top: 10%;\n  left: 60%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-17[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(15deg) rotateY(10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-17[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-18[_ngcontent-%COMP%] {\n  \n\n  top: 10%;\n  left: 70%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-18[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(15deg) rotateY(15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-18[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-19[_ngcontent-%COMP%] {\n  \n\n  top: 10%;\n  left: 80%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-19[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(15deg) rotateY(20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-19[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-20[_ngcontent-%COMP%] {\n  \n\n  top: 10%;\n  left: 90%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-20[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(15deg) rotateY(25deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-20[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-21[_ngcontent-%COMP%] {\n  \n\n  top: 20%;\n  left: 0%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-21[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(10deg) rotateY(-20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-21[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-22[_ngcontent-%COMP%] {\n  \n\n  top: 20%;\n  left: 10%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-22[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(10deg) rotateY(-15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-22[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-23[_ngcontent-%COMP%] {\n  \n\n  top: 20%;\n  left: 20%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-23[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(10deg) rotateY(-10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-23[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-24[_ngcontent-%COMP%] {\n  \n\n  top: 20%;\n  left: 30%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-24[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(10deg) rotateY(-5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-24[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-25[_ngcontent-%COMP%] {\n  \n\n  top: 20%;\n  left: 40%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-25[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(10deg) rotateY(0deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-25[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-26[_ngcontent-%COMP%] {\n  \n\n  top: 20%;\n  left: 50%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-26[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(10deg) rotateY(5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-26[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-27[_ngcontent-%COMP%] {\n  \n\n  top: 20%;\n  left: 60%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-27[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(10deg) rotateY(10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-27[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-28[_ngcontent-%COMP%] {\n  \n\n  top: 20%;\n  left: 70%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-28[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(10deg) rotateY(15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-28[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-29[_ngcontent-%COMP%] {\n  \n\n  top: 20%;\n  left: 80%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-29[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(10deg) rotateY(20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-29[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-30[_ngcontent-%COMP%] {\n  \n\n  top: 20%;\n  left: 90%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-30[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(10deg) rotateY(25deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-30[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-31[_ngcontent-%COMP%] {\n  \n\n  top: 30%;\n  left: 0%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-31[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(5deg) rotateY(-20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-31[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-32[_ngcontent-%COMP%] {\n  \n\n  top: 30%;\n  left: 10%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-32[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(5deg) rotateY(-15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-32[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-33[_ngcontent-%COMP%] {\n  \n\n  top: 30%;\n  left: 20%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-33[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(5deg) rotateY(-10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-33[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-34[_ngcontent-%COMP%] {\n  \n\n  top: 30%;\n  left: 30%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-34[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(5deg) rotateY(-5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-34[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-35[_ngcontent-%COMP%] {\n  \n\n  top: 30%;\n  left: 40%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-35[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(5deg) rotateY(0deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-35[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-36[_ngcontent-%COMP%] {\n  \n\n  top: 30%;\n  left: 50%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-36[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(5deg) rotateY(5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-36[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-37[_ngcontent-%COMP%] {\n  \n\n  top: 30%;\n  left: 60%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-37[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(5deg) rotateY(10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-37[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-38[_ngcontent-%COMP%] {\n  \n\n  top: 30%;\n  left: 70%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-38[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(5deg) rotateY(15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-38[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-39[_ngcontent-%COMP%] {\n  \n\n  top: 30%;\n  left: 80%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-39[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(5deg) rotateY(20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-39[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-40[_ngcontent-%COMP%] {\n  \n\n  top: 30%;\n  left: 90%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-40[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(5deg) rotateY(25deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-40[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-41[_ngcontent-%COMP%] {\n  \n\n  top: 40%;\n  left: 0%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-41[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(0deg) rotateY(-20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-41[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(0%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-42[_ngcontent-%COMP%] {\n  \n\n  top: 40%;\n  left: 10%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-42[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(0deg) rotateY(-15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-42[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(0%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-43[_ngcontent-%COMP%] {\n  \n\n  top: 40%;\n  left: 20%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-43[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(0deg) rotateY(-10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-43[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(0%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-44[_ngcontent-%COMP%] {\n  \n\n  top: 40%;\n  left: 30%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-44[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(0deg) rotateY(-5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-44[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(0%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-45[_ngcontent-%COMP%] {\n  \n\n  top: 40%;\n  left: 40%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-45[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(0deg) rotateY(0deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-45[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(0%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-46[_ngcontent-%COMP%] {\n  \n\n  top: 40%;\n  left: 50%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-46[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(0deg) rotateY(5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-46[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(0%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-47[_ngcontent-%COMP%] {\n  \n\n  top: 40%;\n  left: 60%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-47[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(0deg) rotateY(10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-47[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(0%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-48[_ngcontent-%COMP%] {\n  \n\n  top: 40%;\n  left: 70%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-48[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(0deg) rotateY(15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-48[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(0%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-49[_ngcontent-%COMP%] {\n  \n\n  top: 40%;\n  left: 80%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-49[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(0deg) rotateY(20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-49[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(0%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-50[_ngcontent-%COMP%] {\n  \n\n  top: 40%;\n  left: 90%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-50[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(0deg) rotateY(25deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-50[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(0%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-51[_ngcontent-%COMP%] {\n  \n\n  top: 50%;\n  left: 0%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-51[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-5deg) rotateY(-20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-51[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-52[_ngcontent-%COMP%] {\n  \n\n  top: 50%;\n  left: 10%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-52[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-5deg) rotateY(-15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-52[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-53[_ngcontent-%COMP%] {\n  \n\n  top: 50%;\n  left: 20%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-53[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-5deg) rotateY(-10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-53[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-54[_ngcontent-%COMP%] {\n  \n\n  top: 50%;\n  left: 30%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-54[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-5deg) rotateY(-5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-54[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-55[_ngcontent-%COMP%] {\n  \n\n  top: 50%;\n  left: 40%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-55[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-5deg) rotateY(0deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-55[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-56[_ngcontent-%COMP%] {\n  \n\n  top: 50%;\n  left: 50%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-56[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-5deg) rotateY(5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-56[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-57[_ngcontent-%COMP%] {\n  \n\n  top: 50%;\n  left: 60%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-57[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-5deg) rotateY(10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-57[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-58[_ngcontent-%COMP%] {\n  \n\n  top: 50%;\n  left: 70%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-58[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-5deg) rotateY(15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-58[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-59[_ngcontent-%COMP%] {\n  \n\n  top: 50%;\n  left: 80%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-59[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-5deg) rotateY(20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-59[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-60[_ngcontent-%COMP%] {\n  \n\n  top: 50%;\n  left: 90%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-60[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-5deg) rotateY(25deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-60[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-5%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-61[_ngcontent-%COMP%] {\n  \n\n  top: 60%;\n  left: 0%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-61[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-10deg) rotateY(-20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-61[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-62[_ngcontent-%COMP%] {\n  \n\n  top: 60%;\n  left: 10%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-62[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-10deg) rotateY(-15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-62[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-63[_ngcontent-%COMP%] {\n  \n\n  top: 60%;\n  left: 20%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-63[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-10deg) rotateY(-10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-63[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-64[_ngcontent-%COMP%] {\n  \n\n  top: 60%;\n  left: 30%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-64[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-10deg) rotateY(-5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-64[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-65[_ngcontent-%COMP%] {\n  \n\n  top: 60%;\n  left: 40%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-65[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-10deg) rotateY(0deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-65[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-66[_ngcontent-%COMP%] {\n  \n\n  top: 60%;\n  left: 50%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-66[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-10deg) rotateY(5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-66[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-67[_ngcontent-%COMP%] {\n  \n\n  top: 60%;\n  left: 60%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-67[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-10deg) rotateY(10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-67[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-68[_ngcontent-%COMP%] {\n  \n\n  top: 60%;\n  left: 70%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-68[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-10deg) rotateY(15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-68[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-69[_ngcontent-%COMP%] {\n  \n\n  top: 60%;\n  left: 80%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-69[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-10deg) rotateY(20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-69[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-70[_ngcontent-%COMP%] {\n  \n\n  top: 60%;\n  left: 90%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-70[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-10deg) rotateY(25deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-70[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-10%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-71[_ngcontent-%COMP%] {\n  \n\n  top: 70%;\n  left: 0%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-71[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-15deg) rotateY(-20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-71[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-72[_ngcontent-%COMP%] {\n  \n\n  top: 70%;\n  left: 10%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-72[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-15deg) rotateY(-15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-72[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-73[_ngcontent-%COMP%] {\n  \n\n  top: 70%;\n  left: 20%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-73[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-15deg) rotateY(-10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-73[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-74[_ngcontent-%COMP%] {\n  \n\n  top: 70%;\n  left: 30%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-74[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-15deg) rotateY(-5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-74[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-75[_ngcontent-%COMP%] {\n  \n\n  top: 70%;\n  left: 40%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-75[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-15deg) rotateY(0deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-75[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-76[_ngcontent-%COMP%] {\n  \n\n  top: 70%;\n  left: 50%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-76[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-15deg) rotateY(5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-76[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-77[_ngcontent-%COMP%] {\n  \n\n  top: 70%;\n  left: 60%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-77[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-15deg) rotateY(10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-77[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-78[_ngcontent-%COMP%] {\n  \n\n  top: 70%;\n  left: 70%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-78[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-15deg) rotateY(15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-78[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-79[_ngcontent-%COMP%] {\n  \n\n  top: 70%;\n  left: 80%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-79[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-15deg) rotateY(20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-79[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-80[_ngcontent-%COMP%] {\n  \n\n  top: 70%;\n  left: 90%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-80[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-15deg) rotateY(25deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-80[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-15%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-81[_ngcontent-%COMP%] {\n  \n\n  top: 80%;\n  left: 0%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-81[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-20deg) rotateY(-20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-81[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-82[_ngcontent-%COMP%] {\n  \n\n  top: 80%;\n  left: 10%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-82[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-20deg) rotateY(-15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-82[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-83[_ngcontent-%COMP%] {\n  \n\n  top: 80%;\n  left: 20%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-83[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-20deg) rotateY(-10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-83[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-84[_ngcontent-%COMP%] {\n  \n\n  top: 80%;\n  left: 30%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-84[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-20deg) rotateY(-5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-84[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-85[_ngcontent-%COMP%] {\n  \n\n  top: 80%;\n  left: 40%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-85[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-20deg) rotateY(0deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-85[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-86[_ngcontent-%COMP%] {\n  \n\n  top: 80%;\n  left: 50%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-86[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-20deg) rotateY(5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-86[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-87[_ngcontent-%COMP%] {\n  \n\n  top: 80%;\n  left: 60%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-87[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-20deg) rotateY(10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-87[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-88[_ngcontent-%COMP%] {\n  \n\n  top: 80%;\n  left: 70%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-88[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-20deg) rotateY(15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-88[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-89[_ngcontent-%COMP%] {\n  \n\n  top: 80%;\n  left: 80%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-89[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-20deg) rotateY(20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-89[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-90[_ngcontent-%COMP%] {\n  \n\n  top: 80%;\n  left: 90%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-90[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-20deg) rotateY(25deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-90[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-20%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-91[_ngcontent-%COMP%] {\n  \n\n  top: 90%;\n  left: 0%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-91[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-25deg) rotateY(-20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-91[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-25%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-92[_ngcontent-%COMP%] {\n  \n\n  top: 90%;\n  left: 10%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-92[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-25deg) rotateY(-15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-92[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-25%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-93[_ngcontent-%COMP%] {\n  \n\n  top: 90%;\n  left: 20%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-93[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-25deg) rotateY(-10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-93[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-25%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-94[_ngcontent-%COMP%] {\n  \n\n  top: 90%;\n  left: 30%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-94[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-25deg) rotateY(-5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-94[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-25%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-95[_ngcontent-%COMP%] {\n  \n\n  top: 90%;\n  left: 40%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-95[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-25deg) rotateY(0deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-95[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-25%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-96[_ngcontent-%COMP%] {\n  \n\n  top: 90%;\n  left: 50%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-96[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-25deg) rotateY(5deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-96[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-25%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-97[_ngcontent-%COMP%] {\n  \n\n  top: 90%;\n  left: 60%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-97[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-25deg) rotateY(10deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-97[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-25%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-98[_ngcontent-%COMP%] {\n  \n\n  top: 90%;\n  left: 70%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-98[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-25deg) rotateY(15deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-98[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-25%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-99[_ngcontent-%COMP%] {\n  \n\n  top: 90%;\n  left: 80%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-99[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-25deg) rotateY(20deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-99[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-25%);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-100[_ngcontent-%COMP%] {\n  \n\n  top: 90%;\n  left: 90%;\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-100[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%] {\n  \n\n  transform: rotateX(-25deg) rotateY(25deg);\n}\n.contact__reflection[_ngcontent-%COMP%]   .reflection-grid-cell-100[_ngcontent-%COMP%]:hover    ~ .reflection-content[_ngcontent-%COMP%]:before {\n  \n\n  transform: translateY(-25%);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zdHlsZS90aGVtZXMvX21haW5UaGVtZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zdHlsZS91dGlsaXRpZXMvX3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb3JlL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkNJYTtFREZiLFVBQUE7RUFDQSx5QkNFeUI7QUNIM0I7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsdUZBQUE7QUFNRjtBQUFFO0VBQ0UsU0FBQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ047QUFFRTtFQUNFLFNBQUE7RUFHRSxnQkFBQTtBQUZOO0FBTUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUpOO0FBTUk7RUFDRSxVQUFBO0VBQ0EsY0QvQlM7RUNnQ1QsU0FBQTtFQUNBLGVBQUE7QUFKTjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQU5KO0FBUUk7RUFDRSxVQUFBO0VBQ0Esa0NBQUE7QUFOTjtBQVNJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsVUFBQTtFQUNBLFVBQUE7QUFUTjtBQWFRO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBWFY7QUFjUTtFQUVFLGVBQUE7RUFDQSx5Q0FBQTtBQWJWO0FBZVU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFiWjtBQUFRO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBRVY7QUFDUTtFQUVFLGVBQUE7RUFDQSx5Q0FBQTtBQUFWO0FBRVU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFBWjtBQWJRO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBZVY7QUFaUTtFQUVFLGVBQUE7RUFDQSx5Q0FBQTtBQWFWO0FBWFU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFhWjtBQTFCUTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQTRCVjtBQXpCUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQTBCVjtBQXhCVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQTBCWjtBQXZDUTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQXlDVjtBQXRDUTtFQUVFLGVBQUE7RUFDQSx1Q0FBQTtBQXVDVjtBQXJDVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQXVDWjtBQXBEUTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQXNEVjtBQW5EUTtFQUVFLGVBQUE7RUFDQSx1Q0FBQTtBQW9EVjtBQWxEVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQW9EWjtBQWpFUTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQW1FVjtBQWhFUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQWlFVjtBQS9EVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQWlFWjtBQTlFUTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQWdGVjtBQTdFUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQThFVjtBQTVFVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQThFWjtBQTNGUTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQTZGVjtBQTFGUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQTJGVjtBQXpGVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQTJGWjtBQXhHUTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQTBHVjtBQXZHUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQXdHVjtBQXRHVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQXdHWjtBQXJIUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQXVIVjtBQXBIUTtFQUVFLGVBQUE7RUFDQSx5Q0FBQTtBQXFIVjtBQW5IVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQXFIWjtBQWxJUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQW9JVjtBQWpJUTtFQUVFLGVBQUE7RUFDQSx5Q0FBQTtBQWtJVjtBQWhJVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQWtJWjtBQS9JUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQWlKVjtBQTlJUTtFQUVFLGVBQUE7RUFDQSx5Q0FBQTtBQStJVjtBQTdJVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQStJWjtBQTVKUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQThKVjtBQTNKUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQTRKVjtBQTFKVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQTRKWjtBQXpLUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQTJLVjtBQXhLUTtFQUVFLGVBQUE7RUFDQSx1Q0FBQTtBQXlLVjtBQXZLVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQXlLWjtBQXRMUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQXdMVjtBQXJMUTtFQUVFLGVBQUE7RUFDQSx1Q0FBQTtBQXNMVjtBQXBMVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQXNMWjtBQW5NUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQXFNVjtBQWxNUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQW1NVjtBQWpNVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQW1NWjtBQWhOUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQWtOVjtBQS9NUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQWdOVjtBQTlNVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQWdOWjtBQTdOUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQStOVjtBQTVOUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQTZOVjtBQTNOVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQTZOWjtBQTFPUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQTRPVjtBQXpPUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQTBPVjtBQXhPVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQTBPWjtBQXZQUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQXlQVjtBQXRQUTtFQUVFLGVBQUE7RUFDQSx5Q0FBQTtBQXVQVjtBQXJQVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQXVQWjtBQXBRUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQXNRVjtBQW5RUTtFQUVFLGVBQUE7RUFDQSx5Q0FBQTtBQW9RVjtBQWxRVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQW9RWjtBQWpSUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQW1SVjtBQWhSUTtFQUVFLGVBQUE7RUFDQSx5Q0FBQTtBQWlSVjtBQS9RVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQWlSWjtBQTlSUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQWdTVjtBQTdSUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQThSVjtBQTVSVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQThSWjtBQTNTUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQTZTVjtBQTFTUTtFQUVFLGVBQUE7RUFDQSx1Q0FBQTtBQTJTVjtBQXpTVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQTJTWjtBQXhUUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQTBUVjtBQXZUUTtFQUVFLGVBQUE7RUFDQSx1Q0FBQTtBQXdUVjtBQXRUVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQXdUWjtBQXJVUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQXVVVjtBQXBVUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQXFVVjtBQW5VVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQXFVWjtBQWxWUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQW9WVjtBQWpWUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQWtWVjtBQWhWVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQWtWWjtBQS9WUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQWlXVjtBQTlWUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQStWVjtBQTdWVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQStWWjtBQTVXUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQThXVjtBQTNXUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQTRXVjtBQTFXVTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQTRXWjtBQXpYUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQTJYVjtBQXhYUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQXlYVjtBQXZYVTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQXlYWjtBQXRZUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQXdZVjtBQXJZUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQXNZVjtBQXBZVTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQXNZWjtBQW5aUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQXFaVjtBQWxaUTtFQUVFLGVBQUE7RUFDQSx3Q0FBQTtBQW1aVjtBQWpaVTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQW1aWjtBQWhhUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQWthVjtBQS9aUTtFQUVFLGVBQUE7RUFDQSx1Q0FBQTtBQWdhVjtBQTlaVTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQWdhWjtBQTdhUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQSthVjtBQTVhUTtFQUVFLGVBQUE7RUFDQSxzQ0FBQTtBQTZhVjtBQTNhVTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQTZhWjtBQTFiUTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQTRiVjtBQXpiUTtFQUVFLGVBQUE7RUFDQSxzQ0FB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RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUE0dkNWO0FBenZDUTtFQUVFLGVBQUE7RUFDQSx5Q0FBQTtBQTB2Q1Y7QUF4dkNVO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FBMHZDWiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcbnNlY3Rpb24ge1xuICAvKiBCb3ggTW9kZWwgKi9cbiAgcGFkZGluZy10b3A6ICRtYWluLXBhZGRpbmcgKiAxLjU7XG4gIHBhZGRpbmctYm90dG9tOiAkbWFpbi1wYWRkaW5nO1xuXG4gIC8qIENvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWJhY2tncm91bmQtY29sb3I7XG59XG4iLCJAaW1wb3J0IFwibWl4aW5cIjtcblxuJHByaW1hcnktY29sb3I6ICMxNzExMjY7XG4kYWx0ZXJuYXRlLWNvbG9yOiAjNjEzMTgyO1xuJGJvcmRlci1jb2xvcjogIzYyMzY4NjtcbiRzZWNvbmRhcnktY29sb3I6ICNjOTViZjU7XG4kcG9wdWxhci1jb2xvcjogI2M3NzBmMDtcbiRtYWluLWFuaW1hdGlvbjogYWxsIDAuNXM7XG4kbWFpbi1wYWRkaW5nOiAxMDBweDtcbiRzZWN0aW9uLWJhY2tncm91bmQtY29sb3I6ICMwZjBiMTg7XG4kc2NhbGUtYW5pbWF0aW9uOiBzY2FsZSgxLjAyKTtcbiRtYWluLWZvbnQ6IDIwcHg7XG4kbWFpbi13ZWlnaHQ6IDUwMDtcbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJtYWluVGhlbWVzXCI7XG5cbi5jb250YWN0IHtcbiAgLyogQ29sb3IgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIGxlZnQsXG4gICAgcmdiKDI3IDIwIDQxKSxcbiAgICByZ2IoMjAgMTUgMzUpXG4gICkgIWltcG9ydGFudDtcblxuICAmX19pbmZvIHtcbiAgICAvKiBUZXh0ICovXG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogMjBweDtcbiAgICAgIHdlaWdodDogNzAwO1xuICAgICAgc3R5bGU6IGl0YWxpYztcbiAgICB9XG4gIH1cbiAgJl9faW5mbyBwIHtcbiAgICAvKiBUZXh0ICovXG5cbiAgICBmb250OiB7XG4gICAgICB3ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cbiAgJl9fZ2V0bWUge1xuICAgIHNwYW4ge1xuICAgICAgLyogQm94IE1vZGVsICovXG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgaSB7XG4gICAgICAvKiBDb2xvciAqL1xuICAgICAgY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgICAvKiBUZXh0ICovXG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuICB9XG5cbiAgJl9fcmVmbGVjdGlvbiB7XG4gICAgLyogM0QgQW5pbWF0aW9ucyAqL1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG5cbiAgICAucmVmbGVjdGlvbi1jb250ZW50IHtcbiAgICAgIC8qIE90aGVyICovXG4gICAgICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXIgdHJhbnNmb3JtO1xuICAgIH1cblxuICAgIC5yZWZsZWN0aW9uLWdyaWQtY2VsbCB7XG4gICAgICAvKiBQb3NpdGlvbmcgKi9cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgLyogQm94IE1vZGVsICovXG4gICAgICB3aWR0aDogMTAlO1xuICAgICAgaGVpZ2h0OiAxMCU7XG5cbiAgICAgIC8qIE90aGVyICovXG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICBAZm9yICRyIGZyb20gMSB0byAxMSB7XG4gICAgICBAZm9yICRjIGZyb20gMSB0byAxMSB7XG4gICAgICAgIC5yZWZsZWN0aW9uLWdyaWQtY2VsbC0jeyggKCRyKjEwKSArICRjIC0gMTApfSB7XG4gICAgICAgICAgLyogUG9zaXRpb2luZyAqL1xuICAgICAgICAgIHRvcDogKCRyICogMTAlKS0xMCU7XG4gICAgICAgICAgbGVmdDogKCRjICogMTAlKS0xMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucmVmbGVjdGlvbi1ncmlkLWNlbGwtI3soICgkcioxMCkgKyAkYyAtIDEwKX06aG92ZXJcbiAgICAgICAgICB+IC5yZWZsZWN0aW9uLWNvbnRlbnQge1xuICAgICAgICAgIC8qIFBvc2l0aW9pbmcgKi9cbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoKCgkciAqIC01KSsyNWRlZykpIHJvdGF0ZVkoKC0yNWRlZysgKCRjICogNSkpKTtcblxuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIC8qIFBvc2l0aW9pbmcgKi9cbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNS0oNSUgKiAkcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6082:
/*!*************************************************************************!*\
  !*** ./src/app/core/pages/home/components/landing/landing.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-typed-js */ 9363);






const _c0 = function () {
  return ["Software Engineer", "Front End Angular +2", "Freelancer", "Open Source Contributor"];
};
function LandingComponent_ngx_typed_js_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-typed-js", 12)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("loop", true)("showCursor", true)("typeSpeed", 60)("backDelay", 1000);
  }
}
class LandingComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId);
  }
  static #_ = this.ɵfac = function LandingComponent_Factory(t) {
    return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LandingComponent,
    selectors: [["app-landing"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 17,
    vars: 1,
    consts: [[1, "landing", "position-relative", "d-flex", "justify-content-center", "align-items-end", "align-items-md-center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "landing__heading"], [1, "text-white", "text-capitalize", "pb-3"], ["role", "img", "aria-labelledby", "wave", 1, "landing__wave"], [1, "h1", "pb-3", "text-white"], [1, "heading-color", "text-uppercase"], ["class", "landing__type text-capitalize heading-color", 3, "strings", "loop", "showCursor", "typeSpeed", "backDelay", 4, "ngIf"], [1, "mb-0"], ["src", "./assets/home-main.svg", "alt", "", 1, "w-100"], [1, "landing__type", "text-capitalize", "heading-color", 3, "strings", "loop", "showCursor", "typeSpeed", "backDelay"], [1, "typing", "h1"]],
    template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Hi There! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\uD83D\uDC4B\uD83C\uDFFB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " I'M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " marwan abubakr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LandingComponent_ngx_typed_js_13_Template, 3, 6, "ngx-typed-js", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3)(15, "figure", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBrowser);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ngx_typed_js__WEBPACK_IMPORTED_MODULE_2__.NgxTypedJsModule, ngx_typed_js__WEBPACK_IMPORTED_MODULE_2__.NgxTypedJsComponent],
    styles: [".landing[_ngcontent-%COMP%] {\n  \n\n  min-height: 100vh;\n  \n\n  background-image: url('home-bg.jpg');\n  background-position: top;\n  background-size: cover;\n  \n\n  z-index: 1;\n  \n\n\n\n\n}\n.landing[_ngcontent-%COMP%]::before {\n  \n\n  position: absolute;\n  inset: 0;\n  content: \"\";\n  \n\n  \n\n  top: 0;\n  \n\n  z-index: -1;\n  \n\n  background-image: linear-gradient(to left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904));\n}\n@media (max-width: 767px) {\n  .landing-pt[_ngcontent-%COMP%] {\n    padding-top: 150px; \n \n\n  }\n}\n.landing[_ngcontent-%COMP%]   .heading-color[_ngcontent-%COMP%] {\n  \n\n  color: #c95bf5;\n}\n.landing__wave[_ngcontent-%COMP%] {\n  \n\n  display: inline-block;\n  \n\n  transform-origin: 70% 70%;\n  \n\n  animation: wave-animation 2.1s infinite ease-in-out;\n}\n.landing__type[_ngcontent-%COMP%] {\n  \n\n  font-size: 2.2rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9wYWdlcy9ob21lL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb3JlL3N0eWxlL3V0aWxpdGllcy9fbWl4aW4uc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zdHlsZS91dGlsaXRpZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBRUEsVUFBQTtFQUVFLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUdGLFVBQUE7RUFDQSxVQUFBO0VBaUJBOzs7R0FBQTtBQWxCRjtBQUdFO0VDZkEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxXQUFBO0VBQ0EsVUFBQTtFRFlFLGFBQUE7RUFDQSxNQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFFQSxVQUFBO0VBQ0EsMkZBQUE7QUFDSjtBQVNFO0VBQ0U7SUFDRSxrQkFBQSxFQUFBLGFBQUEsRUFBQSxNQUFBO0VBUEo7QUFDRjtBQVdJO0VBQ0UsVUFBQTtFQUNBLGNFdkNZO0FGOEJsQjtBQWFFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBRUEsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLFVBQUE7RUFDQSxtREFBQTtBQWJKO0FBZUU7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWJKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG4ubGFuZGluZyB7XG4gIC8qIEJveCBNb2RlbCAqL1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAvKiBDb2xvciAqL1xuICBiYWNrZ3JvdW5kIDoge1xuICAgIGltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaG9tZS1iZy5qcGdcIik7XG4gICAgcG9zaXRpb246IHRvcDtcbiAgICBzaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC8qIE90aGVyICovXG4gIHotaW5kZXg6IDE7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBAaW5jbHVkZSBwc2V1ZG8tZWxlbWVudDtcbiAgICAvKiBQb3NpdGlvbiAqL1xuICAgIHRvcDogMDtcblxuICAgIC8qIE90aGVyICovXG4gICAgei1pbmRleDogLTE7XG5cbiAgICAvKiBDb2xvciAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIGxlZnQsXG4gICAgICByZ2JhKDE3LCAxNiwgMTYsIDAuNTgyKSxcbiAgICAgIHJnYmEoMTIsIDgsIDI0LCAwLjkwNClcbiAgICApO1xuICB9XG4gIC8qKlxuICAqIGFkZCBiaWcgcGFkZGluZyBpbiBzbWFsbCBtZWRpYSBxdWVyaWVzXG4gICoxIEJveE1vZGVsXG4qL1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAmLXB0IHtcbiAgICAgIHBhZGRpbmctdG9wOiAxNTBweDsgLyogQm94TW9kZWwgKi8gLyogMSAqL1xuICAgIH1cbiAgfVxuXG4gIC5oZWFkaW5nIHtcbiAgICAmLWNvbG9yIHtcbiAgICAgIC8qIENvbG9yICovXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmX193YXZlIHtcbiAgICAvKiBMYXlvdXQgKi9cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAvKiBQb3NpdGlvbmluZyAgKi9cbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA3MCUgNzAlO1xuXG4gICAgLyogT3RoZXIgKi9cbiAgICBhbmltYXRpb246IHdhdmUtYW5pbWF0aW9uIDIuMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgJl9fdHlwZSB7XG4gICAgLyogVGV4dCAqL1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cbiIsIkBtaXhpbiBwc2V1ZG8tZWxlbWVudCB7XG4gIC8qIFBvc2l0aW9uaW5nICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG5cbiAgY29udGVudDogXCJcIjtcbiAgLyogT3RoZXIgKi9cbn1cbiIsIkBpbXBvcnQgXCJtaXhpblwiO1xuXG4kcHJpbWFyeS1jb2xvcjogIzE3MTEyNjtcbiRhbHRlcm5hdGUtY29sb3I6ICM2MTMxODI7XG4kYm9yZGVyLWNvbG9yOiAjNjIzNjg2O1xuJHNlY29uZGFyeS1jb2xvcjogI2M5NWJmNTtcbiRwb3B1bGFyLWNvbG9yOiAjYzc3MGYwO1xuJG1haW4tYW5pbWF0aW9uOiBhbGwgMC41cztcbiRtYWluLXBhZGRpbmc6IDEwMHB4O1xuJHNlY3Rpb24tYmFja2dyb3VuZC1jb2xvcjogIzBmMGIxODtcbiRzY2FsZS1hbmltYXRpb246IHNjYWxlKDEuMDIpO1xuJG1haW4tZm9udDogMjBweDtcbiRtYWluLXdlaWdodDogNTAwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8196:
/*!***************************************************!*\
  !*** ./src/app/core/pages/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/contact/contact.component */ 1489);
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/landing/landing.component */ 6082);
/* harmony import */ var src_app_shared_canvase_canvase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/canvase/canvase.component */ 8083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 0,
    consts: [[1, "home", "position-relative"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-landing")(2, "app-contact")(3, "app-canvase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent, _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent, src_app_shared_canvase_canvase_component__WEBPACK_IMPORTED_MODULE_2__.CanvaseComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6241:
/*!************************************************!*\
  !*** ./src/app/core/services/projects-data.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsData: () => (/* binding */ ProjectsData)
/* harmony export */ });
const ProjectsData = [{
  id: 1,
  name: 'Bondi',
  discription: 'Bondi is a sleek and modern website designed to showcase various aspects of a project or personal portfolio. It utilizes a clean layout with minimalist design elements to highlight content effectively. The website is responsive and compatible with different devices, providing a seamless user experience.',
  image: './assets/Projects/bondi.png',
  demo: 'https://curious-gaufre-7cf14d.netlify.app',
  githup: 'https://github.com/marobakr/bondi',
  rule: 'landing',
  languages: ['html5', 'css3', 'Bootstrap']
}, {
  id: 2,
  name: 'avengers',
  discription: "The Avengers website is a fan site dedicated to the Marvel Cinematic Universe's superhero team, the Avengers. It features information about the Avengers, their members, movies, comics, and more. The website is designed to be visually appealing and engaging for fans of the franchise",
  image: './assets/Projects/avengers.png',
  demo: 'https://soft-dusk-c13369.netlify.app',
  githup: 'https://github.com/marobakr/Avengers',
  rule: 'landing',
  languages: ['html5', 'css3', 'javascript']
}, {
  id: 3,
  name: 'Kasper',
  discription: 'Kasper is a sleek and modern website designed to showcase various aspects of a project or personal portfolio. It utilizes a clean layout with minimalist design elements to highlight content effectively. The website is responsive and compatible with different devices, providing a seamless user experience.',
  image: './assets/Projects/kasper.png',
  demo: 'https://inspiring-salamander-f38f86.netlify.app/',
  githup: 'https://github.com/marobakr/Kasper',
  rule: 'landing',
  languages: ['html5', 'css3']
}, {
  id: 4,
  name: 'crude',
  discription: 'This CRUD application is developed using React.js for the frontend, Redux Toolkit for state management, and vanilla JavaScript for interactions. The application allows users to perform CRUD operations (Create, Read, Update, Delete) on a set of data. Redux Toolkit simplifies the process of managing application state, making it more predictable and efficient.',
  image: './assets/Projects/crude-system.png',
  demo: 'https://cheery-hotteok-a74cad.netlify.app/',
  githup: 'https://github.com/marobakr/crude-redux',
  rule: 'crude',
  languages: ['html5', 'css3', 'javascript', 'redux toolkit', 'react', 'Bootstrap']
}, {
  id: 5,
  name: 'hangmen',
  discription: 'The Hangman game is a classic word-guessing game where players try to guess a hidden word by suggesting letters within a certain number of attempts. This implementation of Hangman provides an interactive and enjoyable gaming experience using web technologies. The game features a user-friendly interface with intuitive contrules and dynamic feedback to engage players throughout the gameplay',
  image: './assets/Projects/hangmen.png',
  demo: 'https://fascinating-tapioca-38cf31.netlify.app',
  githup: 'https://github.com/marobakr/hangmen',
  rule: 'pure',
  languages: ['html5', 'css3', 'javascript']
}, {
  id: 6,
  name: 'devfolio',
  discription: "Devfolio is a modern and professional portfolio website template tailored for developers, programmers, and designers to showcase their projects, skills, and achievements. The website features a clean and responsive design, making it easy for visitors to navigate and explore your portfolio on various devices. With Bootstrap's powerful grid system and CSS customization, Devfolio provides a customizable and visually appealing platform for developers to present their work effectively.",
  image: './assets/Projects/devfolio.png',
  demo: 'https://prismatic-pudding-54693a.netlify.app/',
  githup: 'https://github.com/marobakr/devFolio',
  rule: 'landing',
  languages: ['html5', 'css3', 'Bootstrap', 'javascript']
}, {
  id: 7,
  name: 'mealify',
  discription: "Mealify is a user-friendly website designed to assist users in finding recipes for various meals and cuisines. Whether you're looking for quick weekday dinners, healthy options, or indulgent treats, Mealify has you covered. The website offers a vast collection of recipes, categorized by meal type, dietary preferences, and ingredients. With a clean and intuitive interface, users can easily search, browse, and save their favorite recipes for future reference.",
  image: './assets/Projects/mealify.png',
  demo: 'https://eloquent-kulfi-749b40.netlify.app/',
  githup: 'https://github.com/marobakr/Mealify',
  rule: 'landing',
  languages: ['html5', 'css3', 'javascript', 'Bootstrap']
}, {
  id: 8,
  name: 'fokir',
  discription: "Fokir is a versatile and stylish website built to showcase personal or business portfolios, projects, or services. It leverages the power of HTML, CSS, and Bootstrap to create a visually appealing and responsive web presence. Whether you're a freelancer, entrepreneur, or creative professional, Fokir provides a customizable platform to present your work or offerings effectively.",
  image: './assets/Projects/fokir.png',
  demo: 'https://splendorous-cascaron-033aec.netlify.app',
  githup: 'https://github.com/marobakr/fokir',
  rule: 'landing',
  languages: ['html5', 'css3', 'Bootstrap', 'javascript']
}, {
  id: 9,
  name: 'homeLand',
  discription: 'HomeLand is a modern and responsive website designed to showcase real estate properties and services. Leveraging the power of Tailwind CSS for styling and layout, along with React.js and Vite for efficient development, HomeLand provides a seamless and engaging user experience. The website features intuitive navigation, dynamic property listings, and interactive elements to help users find their dream home.',
  image: './assets/Projects/homeland.png',
  demo: 'https://effervescent-custard-b3d9e1.netlify.app/',
  githup: 'https://github.com/marobakr/homeLand',
  rule: 'frameworks',
  languages: ['html5', 'css3', 'javascript', 'tailwind', 'nextJS', 'API']
}, {
  id: 10,
  name: 'fresh cart',
  discription: 'Our commerce project aims to provide users with an engaging and seamless online shopping experience, inspired by industry leading platforms like Amazon. Built with HTML, CSS, TypeScript Angular Bootstrap Angular NgxPaginationModule and NotifierModule the project offers a feature-rich platform for browsing, purchasing, and managing products.',
  image: './assets/Projects/eco.png',
  demo: 'https://e-commerce-website-angular-seven.vercel.app/home',
  githup: 'https://github.com/marobakr/E-commerce-website-Angular',
  rule: 'frameworks',
  languages: ['html5', 'css3', 'TypeScript', 'Angular 16', 'Bootstrap', 'Angular Material', 'API']
}, {
  id: 11,
  name: 'freetoGame',
  discription: 'The FreeToGame Website is a web application that provides a curated list of free-to-play games. It leverages the FreeToGame API to fetch game data and presents it in an organized and user-friendly manner. Users can explore a diverse range of games, filter them based on various criteria, and find details about each game.',
  image: './assets/Projects/freetoGame.png',
  demo: 'https://gentle-cannoli-609b00.netlify.app/',
  githup: 'https://github.com/marobakr/freetoGame-API',
  rule: 'pure',
  languages: ['html5', 'css3', 'javascript', 'Bootstrap', 'API']
}, {
  id: 12,
  name: 'soundblaze',
  discription: "Certainly! Creating a compelling and informative description for your Git repository can help potential collaborators and users understand the purpose and features of your project. Here's a sample description for a party night club website repository:",
  image: './assets/Projects/party.png',
  demo: 'https://harmonious-fox-ff3061.netlify.app/',
  githup: 'https://github.com/marobakr/Party-Night',
  rule: 'jquery',
  languages: ['html5', 'css3', 'javascript', 'JQuery', 'Bootstrap']
}, {
  id: 13,
  name: 'danials',
  discription: "Welcome to Daniels' Portfolio Website! This project showcases the skills and works of Daniels through a personalized portfolio. The website is built using HTML, CSS, Bootstrap, and JavaScript to create a responsive and visually appealing experience.",
  image: './assets/Projects/danials.png',
  demo: 'https://genuine-stroopwafel-c30fdd.netlify.app/',
  githup: 'https://github.com/marobakr/Daniels',
  rule: 'landing',
  languages: ['html5', 'css3', 'javascript', 'Bootstrap']
}, {
  id: 14,
  name: 'bookmarks',
  discription: "Bookmarks is a convenient and user-friendly website designed to help users organize and manage their online bookmarks effectively. With Bookmarks, users can save their favorite websites, articles, or resources, categorize them into folders, and access them easily from any device. The website offers a clean and intuitive interface, making it easy for users to add, edit, and delete bookmarks as needed. Whether you're a student, professional, or casual internet user, Bookmarks provides a simple solution for keeping track of your favorite online content.",
  image: './assets/Projects/bookmarks-light.png',
  demo: 'https://velvety-speculoos-6943ee.netlify.app',
  githup: 'https://github.com/marobakr/bookMarks',
  rule: 'pure',
  languages: ['html5', 'css3', 'javascript']
}, {
  id: 15,
  name: 'crude system',
  discription: 'Our CRUD system provides a simple yet effective solution for managing data with basic CRUD operations. Built with HTML5, CSS3, Bootstrap for styling and layout, and JavaScript for interactivity and functionality, this system allows users to create, read, update, and delete records stored locally using LocalStorage. It offers a user-friendly interface with responsive design, making it accessible across different devices and screen sizes.',
  image: './assets/Projects/crude-system.png',
  demo: 'https://aesthetic-paletas-493e6f.netlify.app/',
  githup: 'https://github.com/marobakr/crudeSystem',
  rule: 'pure',
  languages: ['html5', 'css3', 'javascript', 'localStorge', 'Bootstrap']
}, {
  id: 16,
  name: 'Olivia',
  discription: 'Olivia Wedding is a charming and elegant website designed to celebrate your special day and provide essential information to your guests. With its romantic design and user-friendly interface, Olivia Wedding offers a delightful platform for sharing wedding details, RSVP management, and showcasing your love story. Built with HTML, CSS, JavaScript, and Bootstrap, Olivia Wedding ensures a seamless and memorable experience for both you and your guests.',
  image: './assets/Projects/olivia.png',
  demo: 'https://curious-puppy-00a7be.netlify.app',
  githup: 'https://github.com/marobakr/Olivia',
  rule: 'landing',
  languages: ['html5', 'css3', 'javascript', 'Bootstrap']
}, {
  id: 17,
  name: 'yummy',
  discription: 'Yammy is a web platform dedicated to the world of culinary delights. From an extensive recipe library and meal inspiration to cooking tips and a vibrant community, our project aims to be the go-to resource for anyone passionate about creating and enjoying delicious meals.',
  image: './assets/Projects/yummy.png',
  demo: 'https://lighthearted-mochi-181b8a.netlify.app/',
  githup: 'https://github.com/marobakr/Yummy',
  rule: 'jquery',
  languages: ['html5', 'css3', 'javascript', 'Bootstrap', 'API', 'JQuery']
}, {
  id: 18,
  name: 'weather',
  discription: 'The Weather App is a web application that allows users to check the current weather conditions and forecasts for different locations. It utilizes a weather API to fetch real-time data and provides a user-friendly interface for users to explore weather information.',
  image: './assets/Projects/weather.png',
  demo: 'https://deft-kelpie-0b6c12.netlify.app/',
  githup: 'https://github.com/marobakr/weather-site',
  rule: 'pure',
  languages: ['html5', 'css3', 'javascript', 'API', 'Bootstrap']
}, {
  id: 19,
  name: 'LocaStorge App',
  discription: 'Our LocalStorage app is a simple yet powerful tool for storing and managing data locally in the browser. Built with HTML, CSS, and JavaScript, and leveraging the LocalStorage API, our app allows users to store key-value pairs directly in the browser, enabling persistent storage of data even after the browser window is closed. With an intuitive user interface and straightforward functionality, our app provides a convenient solution for managing small-scale data without the need for server-side storage.',
  image: './assets/Projects/LocaStorge.png',
  demo: 'https://luxury-strudel-0c9dda.netlify.app/',
  githup: 'https://github.com/marobakr/localStorge',
  rule: 'crude',
  languages: ['html5', 'css3', 'javascript', 'localStorge']
}, {
  id: 21,
  name: 'Super Fetch Githup',
  discription: "Our GitHub User Information Website provides users with a convenient way to explore GitHub users' profiles, including their repositories, names, followers, and locations. With a clean and intuitive interface, users can easily search for GitHub users and access detailed information about them. Built with HTML, CSS, JavaScript, and the GitHub API, our website offers a seamless experience for discovering and learning more about GitHub users and their contributions.",
  image: './assets/Projects/super-fetch-githup.png',
  demo: 'https://githup-cloned.vercel.app/',
  githup: 'https://github.com/marobakr/Githup-Cloned',
  rule: 'pure',
  languages: ['html5', 'css3', 'javascript', 'API', 'Scss']
}];

/***/ }),

/***/ 9801:
/*!***************************************************!*\
  !*** ./src/app/core/services/projects.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsService: () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var _projects_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-data */ 6241);

class ProjectsService {
  constructor() {}
  getProjects() {
    return _projects_data__WEBPACK_IMPORTED_MODULE_0__.ProjectsData;
  }
  getProjectsByRule(rule) {
    return _projects_data__WEBPACK_IMPORTED_MODULE_0__.ProjectsData.filter(project => project.rule === rule);
  }
}

/***/ }),

/***/ 8083:
/*!*****************************************************!*\
  !*** ./src/app/shared/canvase/canvase.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CanvaseComponent: () => (/* binding */ CanvaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _particles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particles */ 7463);





class CanvaseComponent {
  constructor(platformId) {
    this.platformId = platformId;
  }
  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      this.invokeParticles();
    }
  }
  invokeParticles() {
    particlesJS('particles-js', _particles__WEBPACK_IMPORTED_MODULE_0__.ParticlesConfig);
  }
  static #_ = this.ɵfac = function CanvaseComponent_Factory(t) {
    return new (t || CanvaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CanvaseComponent,
    selectors: [["app-canvase"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    consts: [["id", "particles-js"]],
    template: function CanvaseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    styles: ["#particles-js[_ngcontent-%COMP%] {\n  \n\n  position: absolute;\n  \n\n  inset: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NhbnZhc2UvY2FudmFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIiNwYXJ0aWNsZXMtanMge1xuICAvKiBQb3NpdGlvbmluZyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgLyogT3RoZXIgKi9cbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7463:
/*!*********************************************!*\
  !*** ./src/app/shared/canvase/particles.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParticlesConfig: () => (/* binding */ ParticlesConfig)
/* harmony export */ });
const ParticlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 1.5,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: true
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

/***/ }),

/***/ 5563:
/*!***************************************************!*\
  !*** ./src/app/shared/loding/loding.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LodingComponent: () => (/* binding */ LodingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



function LodingComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1)(1, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class LodingComponent {
  constructor() {
    this.isLoding = false;
  }
  static #_ = this.ɵfac = function LodingComponent_Factory(t) {
    return new (t || LodingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LodingComponent,
    selectors: [["app-loding"]],
    inputs: {
      isLoding: "isLoding"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "loding d-flex justify-content-center align-items-center", 4, "ngIf"], [1, "loding", "d-flex", "justify-content-center", "align-items-center"], ["src", "./assets/pre.svg", "alt", ""]],
    template: function LodingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LodingComponent_section_0_Template, 3, 0, "section", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoding);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".loding[_ngcontent-%COMP%] {\n  \n\n  position: absolute;\n  \n\n  background-color: #171126;\n  \n\n  inset: 0;\n  z-index: 99999;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xvZGluZy9sb2RpbmcuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvcmUvc3R5bGUvdXRpbGl0aWVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxVQUFBO0VBQ0EseUJDTGM7RURPZCxVQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuLmxvZGluZyB7XG4gIC8qIFBvc2l0aW9uaW5nICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAvKiBDb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcblxuICAvKiBPdGhlciAqL1xuICBpbnNldDogMDtcbiAgei1pbmRleDogOTk5OTk7XG59XG4iLCJAaW1wb3J0IFwibWl4aW5cIjtcblxuJHByaW1hcnktY29sb3I6ICMxNzExMjY7XG4kYWx0ZXJuYXRlLWNvbG9yOiAjNjEzMTgyO1xuJGJvcmRlci1jb2xvcjogIzYyMzY4NjtcbiRzZWNvbmRhcnktY29sb3I6ICNjOTViZjU7XG4kcG9wdWxhci1jb2xvcjogI2M3NzBmMDtcbiRtYWluLWFuaW1hdGlvbjogYWxsIDAuNXM7XG4kbWFpbi1wYWRkaW5nOiAxMDBweDtcbiRzZWN0aW9uLWJhY2tncm91bmQtY29sb3I6ICMwZjBiMTg7XG4kc2NhbGUtYW5pbWF0aW9uOiBzY2FsZSgxLjAyKTtcbiRtYWluLWZvbnQ6IDIwcHg7XG4kbWFpbi13ZWlnaHQ6IDUwMDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7215:
/*!*********************************************************!*\
  !*** ./src/app/shared/maintitle/maintitle.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintitleComponent: () => (/* binding */ MaintitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


const _c0 = [[["", 8, "before"]], [["", 8, "after"]]];
const _c1 = [".before", ".after"];
class MaintitleComponent {
  constructor() {
    this.popular = '';
  }
  static #_ = this.ɵfac = function MaintitleComponent_Factory(t) {
    return new (t || MaintitleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MaintitleComponent,
    selectors: [["app-maintitle"]],
    inputs: {
      popular: "popular"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 1,
    consts: [[1, "text-white", "text-center"], [1, "popular__main__color"]],
    template: function MaintitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.popular, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map