"use strict";exports.id=527,exports.ids=[527],exports.modules={4527:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProjectComponent:()=>ProjectComponent});var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4565),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5993),src_app_shared_maintitle_maintitle_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5600),_services_projects_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2278),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8371);function ProjectComponent_div_36_p_13_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(0,"p",29),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()),2&rf){const language_r4=ctx.$implicit;_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",language_r4," ")}}function ProjectComponent_div_36_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"figure",15),_angular_core__WEBPACK_IMPORTED_MODULE_1__._UZ(4,"img",16),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(5,"div",17)(6,"h5",18),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(7),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(8,"div",19)(9,"h5"),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(10),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(11,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(12,"div",20),_angular_core__WEBPACK_IMPORTED_MODULE_1__.YNc(13,ProjectComponent_div_36_p_13_Template,2,1,"p",21),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(14,"div",22)(15,"h5",23),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(16),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(17,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(18,"p",24),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(19),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(20,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(21,"div",25)(22,"a",26),_angular_core__WEBPACK_IMPORTED_MODULE_1__._UZ(23,"i",27),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(24,"span"),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(25),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(26,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(27,"a",26),_angular_core__WEBPACK_IMPORTED_MODULE_1__._UZ(28,"i",28),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(29,"span"),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(30),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(31,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()()()()()()),2&rf){const project_r1=ctx.$implicit,i_r2=ctx.index,ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_1__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(4),_angular_core__WEBPACK_IMPORTED_MODULE_1__.s9C("src",project_r1.image,_angular_core__WEBPACK_IMPORTED_MODULE_1__.LSH),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",project_r1.name," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(11,10,"projects.commonuse.title")),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngForOf",project_r1.languages),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(17,12,"projects.commonuse.discription")," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(20,14,ctx_r0.getTranslationKey(i_r2))," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.s9C("href",project_r1.githup,_angular_core__WEBPACK_IMPORTED_MODULE_1__.LSH),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(26,16,"projects.commonuse.code")," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.s9C("href",project_r1.demo,_angular_core__WEBPACK_IMPORTED_MODULE_1__.LSH),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(31,18,"projects.commonuse.demo")," ")}}const _c0=function(a0){return{projects__active:a0}};let ProjectComponent=(()=>{class ProjectComponent2{constructor(_projectsService){this._projectsService=_projectsService,this.allProjects=[],this.all=!0,this.landing=!1,this.pure=!1,this.jquery=!1,this.frameworks=!1,this.crude=!1,this.lengthProjects=0}ngOnInit(){this.fetchProjects()}fetchProjects(){this.allProjects=this._projectsService.getProjects(),this.lengthProjects=this.allProjects.length}fillter(rule){"all"===rule?this.fetchProjects():(this.allProjects=this._projectsService.getProjectsByRule(rule),this.lengthProjects=this.allProjects.length),this.toggleProjects(rule)}toggleProjects(word){this.all="all"===word,this.landing="landing"===word,this.pure="pure"===word,this.jquery="jquery"===word,this.frameworks="frameworks"===word,this.crude="crude"===word}getTranslationKey(index){return`projects.project_${index+1}.description`}static#_=this.\u0275fac=function(t){return new(t||ProjectComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.m))};static#_2=this.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Xpm({type:ProjectComponent2,selectors:[["app-project"]],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_1__._Bn([_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.m]),_angular_core__WEBPACK_IMPORTED_MODULE_1__.jDz],decls:37,vars:44,consts:[[1,"projects"],[1,"container"],[1,"mb-5"],[1,"mb-0",3,"popular"],[1,"before","text-capitalize"],[1,"text-center","text-white"],[1,"row","gy-5","gx-4"],[1,"d-flex","justify-content-center","gap-3","pt-4","flex-wrap"],[1,"btn","fw-semibold","main__btn","text-white","text-capitalize",3,"ngClass","click"],[1,"text-white"],[1,"popular__main__color"],["class","col-md-6 col-xl-4","role","button",4,"ngFor","ngForOf"],["role","button",1,"col-md-6","col-xl-4"],[1,"projects__card","text-white","rounded-4"],[1,"card__header","p-3"],[1,"w-100"],["alt","project-1",1,"w-100","bg-transparent","border-0","rounded-2",3,"src"],[1,"card__footer","p-3"],[1,"text-center","popular__main__color","text-capitalize"],[1,"projects__languages","mb-4"],[1,"Technologies"],["class","fw-light mb-0 d-inline-block px-1",4,"ngFor","ngForOf"],[1,"discription","mb-4"],[1,"text-center","text-capitalize"],[1,"projects__discription","mb-3"],[1,"buttons","d-flex","justify-content-center","align-items-center","gap-3"],["target","_blank",1,"btn","main__btn","text-white",3,"href"],[1,"fa-brands","fa-github"],[1,"fa-solid","fa-eye"],[1,"fw-light","mb-0","d-inline-block","px-1"]],template:function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"app-maintitle",3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(4,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(5,"span",4),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(7,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(8,"p",5),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(9),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(10,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(11,"div",6)(12,"div",7)(13,"button",8),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return ctx.fillter("all")}),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(14),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(15,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(16,"button",8),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return ctx.fillter("landing")}),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(17),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(18,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(19,"button",8),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return ctx.fillter("pure")}),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(20," pure javascript "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(21,"button",8),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return ctx.fillter("jquery")}),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(22," jquery "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(23,"button",8),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return ctx.fillter("frameworks")}),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(24),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(25,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(26,"button",8),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return ctx.fillter("crude")}),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(27," Crude "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(28,"h4",9)(29,"span",10),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(30),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(31),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(32,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(33,"span",10),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(34),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(35,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.YNc(36,ProjectComponent_div_36_Template,32,20,"div",11),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()()()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("popular",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(4,16,"projects.labels.primary")),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(7,18,"projects.labels.alter")," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(10,20,"projects.commonuse.recenlty-project")," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(4),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_1__.VKq(32,_c0,ctx.all)),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(15,22,"projects.labels.all")," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_1__.VKq(34,_c0,ctx.landing)),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(18,24,"projects.labels.landing")," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_1__.VKq(36,_c0,ctx.pure)),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_1__.VKq(38,_c0,ctx.jquery)),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_1__.VKq(40,_c0,ctx.frameworks)),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(25,26,"projects.labels.frameworks")," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_1__.VKq(42,_c0,ctx.crude)),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(4),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij("",ctx.lengthProjects," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(32,28,"projects.commonuse.project_pro")," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(35,30,"projects.commonuse.found")," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngForOf",ctx.allProjects))},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.ez,_angular_common__WEBPACK_IMPORTED_MODULE_2__.mk,_angular_common__WEBPACK_IMPORTED_MODULE_2__.sg,src_app_shared_maintitle_maintitle_component__WEBPACK_IMPORTED_MODULE_3__.y,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.aw,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.X$],styles:["section[_ngcontent-%COMP%]{padding-top:150px;padding-bottom:100px;background-color:#0f0b18}.main-fonts[_ngcontent-%COMP%]{font-size:20px;font-weight:500}.projects__active[_ngcontent-%COMP%]{background-color:#171126}.projects__card[_ngcontent-%COMP%]{min-height:650px;box-shadow:0 4px 9px 4px #77358875;opacity:.9;transition:all .5s}.projects__card[_ngcontent-%COMP%]:hover{transform:scale(1.02);opacity:1}.projects__discription[_ngcontent-%COMP%]{text-align:justify}"],changeDetection:0})}return ProjectComponent2})()}};