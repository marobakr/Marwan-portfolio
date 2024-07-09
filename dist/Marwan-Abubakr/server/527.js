"use strict";
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 4527:
/*!*********************************************************!*\
  !*** ./src/app/core/pages/project/project.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectComponent: () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var src_app_shared_maintitle_maintitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/maintitle/maintitle.component */ 15600);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/projects.service */ 70602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);






function ProjectComponent_div_28_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const language_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", language_r3, " ");
  }
}
function ProjectComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "figure", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 17)(6, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 19)(9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProjectComponent_div_28_p_12_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 22)(14, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "discription");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 25)(19, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "githup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", project_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", project_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", project_r1.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", project_r1.discription.split("").splice(0, 315).join(""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", project_r1.githup, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", project_r1.demo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function (a0) {
  return {
    projects__active: a0
  };
};
class ProjectComponent {
  constructor(_projectsService) {
    this._projectsService = _projectsService;
    this.allProjects = [];
    this.all = true;
    this.landing = false;
    this.pure = false;
    this.jquery = false;
    this.frameworks = false;
    this.crude = false;
    this.lengthProjects = 0;
  }
  ngOnInit() {
    this.fetchProjects();
  }
  fetchProjects() {
    this.allProjects = this._projectsService.getProjects();
    this.lengthProjects = this.allProjects.length;
  }
  fillter(rule) {
    if (rule === 'all') {
      this.fetchProjects();
    } else {
      this.allProjects = this._projectsService.getProjectsByRule(rule);
      this.lengthProjects = this.allProjects.length;
    }
    this.toggleProjects(rule);
  }
  toggleProjects(word) {
    this.all = word === 'all';
    this.landing = word === 'landing';
    this.pure = word === 'pure';
    this.jquery = word === 'jquery';
    this.frameworks = word === 'frameworks';
    this.crude = word === 'crude';
  }
  static #_ = this.ɵfac = function ProjectComponent_Factory(t) {
    return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_1__.ProjectsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProjectComponent,
    selectors: [["app-project"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_projects_service__WEBPACK_IMPORTED_MODULE_1__.ProjectsService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 29,
    vars: 21,
    consts: [[1, "projects"], [1, "container"], [1, "mb-5"], [1, "mb-0", 3, "popular"], [1, "before", "text-capitalize"], [1, "text-center", "text-white"], [1, "row", "gy-5", "gx-4"], [1, "d-flex", "justify-content-center", "gap-3", "pt-4", "flex-wrap"], [1, "btn", "fw-semibold", "main__btn", "text-white", "text-capitalize", 3, "ngClass", "click"], [1, "text-white"], [1, "popular__main__color"], ["class", "col-md-6 col-xl-4", "role", "button", 4, "ngFor", "ngForOf"], ["role", "button", 1, "col-md-6", "col-xl-4"], [1, "projects__card", "text-white", "rounded-4"], [1, "card__header", "p-3"], [1, "w-100"], ["alt", "project-1", 1, "w-100", "bg-transparent", "border-0", "rounded-2", 3, "src"], [1, "card__footer", "p-3"], [1, "text-center", "popular__main__color", "text-capitalize"], [1, "projects__languages", "mb-4"], [1, "Technologies"], ["class", "fw-light mb-0 d-inline-block px-1", 4, "ngFor", "ngForOf"], [1, "discription", "mb-4"], [1, "text-center", "text-capitalize"], [1, "projects__discription", "mb-3"], [1, "buttons", "d-flex", "justify-content-center", "align-items-center", "gap-3"], ["target", "_blank", 1, "btn", "main__btn", "text-white", 3, "href"], [1, "fa-brands", "fa-github"], [1, "fa-solid", "fa-eye"], [1, "fw-light", "mb-0", "d-inline-block", "px-1"]],
    template: function ProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "app-maintitle", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "my recent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Here are a few projects I've worked on recently. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_10_listener() {
          return ctx.fillter("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_12_listener() {
          return ctx.fillter("landing");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " landing padge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_14_listener() {
          return ctx.fillter("pure");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " pure javascript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_16_listener() {
          return ctx.fillter("jquery");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " jquery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_18_listener() {
          return ctx.fillter("frameworks");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " frameworks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_20_listener() {
          return ctx.fillter("crude");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Crude ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h4", 9)(23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ProjectComponent_div_28_Template, 27, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("popular", "works");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx.all));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx.landing));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx.pure));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, ctx.jquery));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, ctx.frameworks));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c0, ctx.crude));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.lengthProjects, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.allProjects);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, src_app_shared_maintitle_maintitle_component__WEBPACK_IMPORTED_MODULE_0__.MaintitleComponent],
    styles: ["section[_ngcontent-%COMP%] {\n  \n\n  padding-top: 150px;\n  padding-bottom: 100px;\n  \n\n  background-color: #0f0b18;\n}\n\n.main-fonts[_ngcontent-%COMP%] {\n  \n\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.projects__active[_ngcontent-%COMP%] {\n  \n\n  background-color: #171126;\n}\n\n.projects__card[_ngcontent-%COMP%] {\n  \n\n  min-height: 650px;\n  box-shadow: 0 4px 9px 4px rgba(119, 53, 136, 0.459);\n  \n\n  opacity: 0.9;\n  transition: all 0.5s;\n}\n.projects__card[_ngcontent-%COMP%]:hover {\n  \n\n  transform: scale(1.02);\n  \n\n  opacity: 1;\n}\n.projects__discription[_ngcontent-%COMP%] {\n  \n\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zdHlsZS90aGVtZXMvX21haW5UaGVtZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zdHlsZS91dGlsaXRpZXMvX3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb3JlL3BhZ2VzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zdHlsZS91dGlsaXRpZXMvX3BsYWNlaG9sZGVycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJDSWE7RURGYixVQUFBO0VBQ0EseUJDRXlCO0FDSDNCOztBQ0pBO0VBQ0UsU0FBQTtFQUVFLGVGTVE7RUVMUixnQkZNVTtBQ0FkOztBQ0hBO0VBQ0UsVUFBQTtFQUNBLHlCRlRjO0FDZWhCOztBQVpFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CRExhO0FDbUJqQjtBQVpJO0VBQ0UsZ0JBQUE7RUFDQSxzQkROWTtFQ1FaLFVBQUE7RUFDQSxVQUFBO0FBYU47QUFWRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQVlKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuc2VjdGlvbiB7XG4gIC8qIEJveCBNb2RlbCAqL1xuICBwYWRkaW5nLXRvcDogJG1haW4tcGFkZGluZyAqIDEuNTtcbiAgcGFkZGluZy1ib3R0b206ICRtYWluLXBhZGRpbmc7XG5cbiAgLyogQ29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tYmFja2dyb3VuZC1jb2xvcjtcbn1cbiIsIkBpbXBvcnQgXCJtaXhpblwiO1xuXG4kcHJpbWFyeS1jb2xvcjogIzE3MTEyNjtcbiRhbHRlcm5hdGUtY29sb3I6ICM2MTMxODI7XG4kYm9yZGVyLWNvbG9yOiAjNjIzNjg2O1xuJHNlY29uZGFyeS1jb2xvcjogI2M5NWJmNTtcbiRwb3B1bGFyLWNvbG9yOiAjYzc3MGYwO1xuJG1haW4tYW5pbWF0aW9uOiBhbGwgMC41cztcbiRtYWluLXBhZGRpbmc6IDEwMHB4O1xuJHNlY3Rpb24tYmFja2dyb3VuZC1jb2xvcjogIzBmMGIxODtcbiRzY2FsZS1hbmltYXRpb246IHNjYWxlKDEuMDIpO1xuJG1haW4tZm9udDogMjBweDtcbiRtYWluLXdlaWdodDogNTAwO1xuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIm1haW5UaGVtZXNcIjtcbkBpbXBvcnQgXCJwbGFjZWhvbGRlcnNcIjtcblxuLnByb2plY3RzIHtcbiAgJl9fY2FyZCB7XG4gICAgLyogQm94IE1vZGVsICovXG4gICAgbWluLWhlaWdodDogNjUwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOXB4IDRweCByZ2JhKDExOSwgNTMsIDEzNiwgMC40NTkpO1xuXG4gICAgLyogT3RoZXIgKi9cbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdHJhbnNpdGlvbjogJG1haW4tYW5pbWF0aW9uO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAvKiBQb3NpdGlvbmluZyAqL1xuICAgICAgdHJhbnNmb3JtOiAkc2NhbGUtYW5pbWF0aW9uO1xuXG4gICAgICAvKiBPdGhlciAqL1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgJl9fZGlzY3JpcHRpb24ge1xuICAgIC8qIExheW91dCAqL1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuLm1haW4tZm9udHMge1xuICAvKiBUZXh0ICovXG4gIGZvbnQ6IHtcbiAgICBzaXplOiAkbWFpbi1mb250O1xuICAgIHdlaWdodDogJG1haW4td2VpZ2h0O1xuICB9XG59XG4ucHJvamVjdHNfX2FjdGl2ZSB7XG4gIC8qIENvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ })

};
;
//# sourceMappingURL=527.js.map