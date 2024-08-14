"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[78977],{78977:(F,g,i)=>{i.r(g),i.d(g,{SkeletonModule:()=>P});var p=i(12057),o=i(23738),T=i(33982),r=i(52404),a=i(64862),u=i(66259),f=i(40241),e=i(74788),c=i(43560),A=i(93525),v=i(83315),M=i(33772),m=i(76189),k=i(77027),h=i(41360),b=i(10200),Z=i(30644),V=i(70329),U=i(82535),S=i(66596);let q=(()=>{class n{constructor(){this.radius=0,this.testForm=new o.cw({testValue:new o.NI(!0)}),this.skeletonVisible=!1,this.lightMode=!1,this.placeholder="Some paragraph with information"}showSkeleton(){this.skeletonVisible=!this.skeletonVisible}toggleLight(){this.lightMode=!this.lightMode}}return n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-skeleton-example-1"]],decls:46,vars:83,consts:[[1,"header"],["size","xs","tuiButton","","type","button",1,"tui-space_right-2",3,"click"],[1,"skeleton-options","b-form"],["tuiTextfieldSize","s",1,"radius-option",3,"ngModel","ngModelChange"],[1,"container",3,"tuiMode"],[1,"tui-row"],[1,"tui-col_md-4","tui-col_stretch"],["size","l",1,"island",3,"transparent"],[1,"tui-island__content"],[1,"tui-island__figure"],[3,"formGroup"],["formControlName","testValue","size","l"],[1,"island-content"],[1,"tui-island__category"],[1,"tui-island__title"],[1,"tui-island__paragraph"],[1,"tui-island__paragraph","tui-island__paragraph_link"],["href","https://github.com/taiga-family/taiga-ui","rel","noreferrer","target","_blank","tuiLink",""],["href","https://ng-web-apis.github.io/dist/assets/images/web-api.svg","rel","noreferrer","size","l","target","_blank","tuiIsland","",1,"island",3,"hoverable","transparent"],[1,"some-figure"],["size","l","textAlign","center",1,"island",3,"transparent"]],template:function(l,t){1&l&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e.NdJ("click",function(){return t.showSkeleton()}),e._uU(2," Show/hide skeleton "),e.qZA(),e.TgZ(3,"button",1),e.NdJ("click",function(){return t.toggleLight()}),e._uU(4," Light mode "),e.qZA(),e.TgZ(5,"div",2),e._uU(6," --tui-skeleton-radius: "),e.TgZ(7,"tui-input",3),e.NdJ("ngModelChange",function(w){return t.radius=w}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"div",4),e.TgZ(9,"div",5),e.TgZ(10,"div",6),e.TgZ(11,"tui-island",7),e.TgZ(12,"div",8),e.TgZ(13,"div",9),e.TgZ(14,"form",10),e._UZ(15,"tui-toggle",11),e.qZA(),e.qZA(),e.TgZ(16,"div",12),e.TgZ(17,"p",13),e._uU(18," A category "),e.qZA(),e.TgZ(19,"h3",14),e._uU(20),e.qZA(),e.TgZ(21,"p",15),e._uU(22),e.qZA(),e.TgZ(23,"p",16),e.TgZ(24,"a",17),e._uU(25," Link "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"div",6),e.TgZ(27,"a",18),e.TgZ(28,"div",8),e.TgZ(29,"figure",9),e._UZ(30,"div",19),e.qZA(),e.TgZ(31,"div",12),e.TgZ(32,"h3",14),e._uU(33),e.qZA(),e.TgZ(34,"p",15),e._uU(35),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(36,"div",6),e.TgZ(37,"tui-island",20),e.TgZ(38,"div",8),e.TgZ(39,"figure",9),e._UZ(40,"div",19),e.qZA(),e.TgZ(41,"div",12),e.TgZ(42,"h3",14),e._uU(43),e.qZA(),e.TgZ(44,"p",15),e._uU(45),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&l&&(e.xp6(7),e.Q6J("ngModel",t.radius),e.xp6(1),e.Udp("--tui-skeleton-radius",t.radius,"px"),e.ekj("container_dark",t.lightMode),e.Q6J("tuiMode",t.lightMode?"onDark":null),e.xp6(3),e.Q6J("transparent",!0),e.xp6(3),e.Q6J("formGroup",t.testForm),e.xp6(1),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton",t.skeletonVisible),e.xp6(2),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton",t.skeletonVisible),e.xp6(2),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton_short",t.skeletonVisible)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton",t.skeletonVisible),e.xp6(1),e.hij(" ",t.skeletonVisible?"":"Title"," "),e.xp6(1),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton",t.skeletonVisible),e.xp6(1),e.hij(" ",t.skeletonVisible?"":t.placeholder," "),e.xp6(1),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton",t.skeletonVisible),e.xp6(4),e.Q6J("hoverable",!0)("transparent",!0),e.xp6(3),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton_rounded",t.skeletonVisible)("tui-skeleton",t.skeletonVisible),e.xp6(2),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton_short",t.skeletonVisible)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton",t.skeletonVisible),e.xp6(1),e.hij(" ",t.skeletonVisible?"":"Another title"," "),e.xp6(1),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton",t.skeletonVisible),e.xp6(1),e.hij(" ",t.skeletonVisible?"":"And some new text again"," "),e.xp6(2),e.Q6J("transparent",!0),e.xp6(3),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton_rounded",t.skeletonVisible)("tui-skeleton",t.skeletonVisible),e.xp6(2),e.ekj("tui-skeleton_center",t.skeletonVisible)("tui-skeleton_light",t.lightMode)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton",t.skeletonVisible),e.xp6(1),e.hij(" ",t.skeletonVisible?"":"One more title"," "),e.xp6(1),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton",t.skeletonVisible),e.xp6(1),e.hij(" ",t.skeletonVisible?"":"All right, I get it"," "))},directives:[m.v,k.K,h.w,b.s,o.JJ,o.On,Z.w,V.h,o._Y,o.JL,o.sg,U.p,o.u,S.V],styles:[".container[_ngcontent-%COMP%]{max-width:62.5rem;padding:1.5rem}.container_dark[_ngcontent-%COMP%]{background-image:linear-gradient(225deg,#3023ae,#c86dd7)}.container_dark[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.island[_ngcontent-%COMP%]{width:100%}.some-figure[_ngcontent-%COMP%]{border-radius:100%;width:3rem;height:3rem;background-color:var(--tui-secondary-active)}.island-content[_ngcontent-%COMP%]{width:100%}.header[_ngcontent-%COMP%], .skeleton-options[_ngcontent-%COMP%]{display:flex;align-items:center}.radius-option[_ngcontent-%COMP%]{width:3.75rem;margin-left:.625rem;text-align:center}"],changeDetection:0}),n})();var C=i(4797),j=i(91030),y=i(52721),x=i(21991),N=i(16753),J=i(13735),I=i(72355),z=i(92078),_=i(81894);let L=(()=>{class n{constructor(){this.testForm=new o.cw({nameValue:new o.NI("",o.kI.required),passwordValue:new o.NI("",o.kI.required),moneyValue:new o.NI("100",o.kI.required),timeValue:new o.NI(new C.TuiTime(12,30),o.kI.required),osnoValue:new o.NI(!1),usnValue:new o.NI(!1),eshnValue:new o.NI(!1),envdValue:new o.NI(!1)}),this.skeletonVisible=!1,this.lightMode=!1}showSkeleton(){this.skeletonVisible=!this.skeletonVisible}toggleLight(){this.lightMode=!this.lightMode}}return n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-skeleton-example-2"]],decls:40,vars:54,consts:[["size","xs","tuiButton","","type","button",1,"tui-space_right-2",3,"click"],["size","xs","tuiButton","","type","button",3,"click"],[1,"tui-container"],[3,"formGroup"],[1,"tui-row","tui-row_sme"],[1,"tui-col_8"],[1,"container",3,"tuiMode"],[1,"tui-form__header","tui-form__header_margin-top_none"],[1,"tui-form__row"],["formControlName","nameValue","tuiHintContent","With a hint"],["placeholder","Name Surname","tuiTextfield",""],[1,"tui-form__row","tui-form__row_multi-fields"],[1,"tui-form__multi-field"],["formControlName","passwordValue"],["formControlName","moneyValue"],[1,"tui-form__row","tui-form__row_half-width"],["formControlName","timeValue"],[1,"tui-form__row","tui-form__row_checkboxes"],["formControlName","osnoValue","size","l",1,"tui-form__checkbox"],["formControlName","usnValue","size","l",1,"tui-form__checkbox"],["formControlName","eshnValue","size","l",1,"tui-form__checkbox"],["formControlName","envdValue","size","l",1,"tui-form__checkbox"],[1,"tui-form__buttons"],["size","l","tuiButton","","type","submit",1,"tui-form__button"],["appearance","flat","size","l","tuiButton","","type","button",1,"tui-form__button"]],template:function(l,t){1&l&&(e.TgZ(0,"p"),e.TgZ(1,"button",0),e.NdJ("click",function(){return t.showSkeleton()}),e._uU(2," Show/hide skeleton "),e.qZA(),e.TgZ(3,"button",1),e.NdJ("click",function(){return t.toggleLight()}),e._uU(4," Light mode "),e.qZA(),e.qZA(),e.TgZ(5,"div",2),e.TgZ(6,"form",3),e.TgZ(7,"div",4),e.TgZ(8,"div",5),e.TgZ(9,"div",6),e.TgZ(10,"h3",7),e._uU(11," A header "),e.qZA(),e.TgZ(12,"div",8),e.TgZ(13,"tui-input",9),e._uU(14," Some input "),e._UZ(15,"input",10),e.qZA(),e.qZA(),e.TgZ(16,"div",11),e.TgZ(17,"div",12),e.TgZ(18,"tui-input-password",13),e._uU(19," Some password input "),e.qZA(),e.qZA(),e.TgZ(20,"div",12),e.TgZ(21,"tui-input-number",14),e._uU(22," Some number input "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"div",15),e.TgZ(24,"tui-input-time",16),e._uU(25," Some textfield "),e.qZA(),e.qZA(),e.TgZ(26,"div",17),e.TgZ(27,"tui-checkbox-labeled",18),e._uU(28," First option "),e.qZA(),e.TgZ(29,"tui-checkbox-labeled",19),e._uU(30," Cool option "),e.qZA(),e.TgZ(31,"tui-checkbox-labeled",20),e._uU(32," Boring option "),e.qZA(),e.TgZ(33,"tui-checkbox-labeled",21),e._uU(34," Interesting option "),e.qZA(),e.qZA(),e.TgZ(35,"div",22),e.TgZ(36,"button",23),e._uU(37," Submit "),e.qZA(),e.TgZ(38,"button",24),e._uU(39," Cancel "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&l&&(e.xp6(6),e.Q6J("formGroup",t.testForm),e.xp6(3),e.ekj("container_dark",t.lightMode),e.Q6J("tuiMode",t.lightMode?"onDark":null),e.xp6(1),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton_short",t.skeletonVisible)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton",t.skeletonVisible),e.xp6(3),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton",t.skeletonVisible),e.xp6(5),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton",t.skeletonVisible),e.xp6(3),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton",t.skeletonVisible),e.xp6(3),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton",t.skeletonVisible),e.xp6(3),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton",t.skeletonVisible),e.xp6(2),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton",t.skeletonVisible),e.xp6(2),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton",t.skeletonVisible),e.xp6(2),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton_short",t.skeletonVisible)("tui-skeleton",t.skeletonVisible),e.xp6(3),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton",t.skeletonVisible),e.xp6(2),e.ekj("tui-skeleton_light",t.lightMode)("tui-skeleton",t.skeletonVisible))},directives:[m.v,o._Y,o.JL,o.sg,Z.w,k.K,h.w,o.JJ,o.u,j.M,y.V,x.F,N.q,J.g,I.G,z.x,_.p],styles:["[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{padding:1.5rem}.container_dark[_ngcontent-%COMP%]{background-image:linear-gradient(225deg,#3023ae,#c86dd7);color:var(--tui-text-01-night)}"],changeDetection:0}),n})();function E(n,s){if(1&n&&(e._UZ(0,"tui-styles-info"),e.TgZ(1,"div",2),e.TgZ(2,"p"),e._uU(3," Use "),e.TgZ(4,"strong"),e._uU(5,".tui-skeleton"),e.qZA(),e._uU(6," class on an element to add skeleton of the same size above it. "),e.qZA(),e.TgZ(7,"p"),e._uU(8,"You can also use the following modifiers:"),e.qZA(),e.qZA(),e.TgZ(9,"ul",3),e.TgZ(10,"li",4),e.TgZ(11,"code"),e._uU(12,".tui-skeleton"),e.qZA(),e._uU(13," : "),e.TgZ(14,"ul",5),e.TgZ(15,"li",4),e.TgZ(16,"code"),e._uU(17,".tui-skeleton_light"),e.qZA(),e._uU(18," : style for dark background "),e.qZA(),e.TgZ(19,"li",4),e.TgZ(20,"code"),e._uU(21,".tui-skeleton_rounded"),e.qZA(),e._uU(22," : rounded as an element "),e.qZA(),e.TgZ(23,"li",4),e.TgZ(24,"code"),e._uU(25,".tui-skeleton_short"),e.qZA(),e._uU(26," : short mode "),e.qZA(),e.TgZ(27,"li",4),e.TgZ(28,"code"),e._uU(29,".tui-skeleton_center"),e.qZA(),e._uU(30," : short centered mode "),e.qZA(),e.TgZ(31,"li",4),e.TgZ(32,"code"),e._uU(33,".tui-skeleton_text"),e.qZA(),e._uU(34," : for containers with texts "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(35,"li",4),e._uU(36," if you want to use border-radius for skeleton you can use "),e.TgZ(37,"code"),e._uU(38,"--tui-skeleton-radius"),e.qZA(),e._uU(39," css variable "),e.qZA(),e.qZA(),e.TgZ(40,"tui-doc-example",6),e._UZ(41,"tui-skeleton-example-1"),e.qZA(),e.TgZ(42,"tui-doc-example",7),e._UZ(43,"tui-skeleton-example-2"),e.qZA()),2&n){const l=e.oxw();e.xp6(40),e.Q6J("content",l.example1)("fullsize",!0),e.xp6(2),e.Q6J("content",l.example2)}}let O=(()=>{class n{constructor(){this.example1={TypeScript:i.e(62451).then(i.t.bind(i,62451,17)),HTML:i.e(40116).then(i.t.bind(i,40116,17)),LESS:i.e(30316).then(i.t.bind(i,30316,17))},this.example2={TypeScript:i.e(26402).then(i.t.bind(i,26402,17)),HTML:i.e(66331).then(i.t.bind(i,19728,17)),LESS:i.e(19926).then(i.t.bind(i,19926,17))}}}return n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["skeleton"]],decls:2,vars:0,consts:[["header","Skeleton"],["pageTab",""],[1,"tui-space_bottom-3"],[1,"tui-list","tui-list_small"],[1,"tui-list__item"],[1,"tui-list","tui-list_linear","tui-list_nested","tui-list_extra-small"],["id","classes","heading","Classes",3,"content","fullsize"],["id","mixins","heading","Mixins",3,"content"]],template:function(l,t){1&l&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,E,44,3,"ng-template",1),e.qZA())},directives:[c.q,A.n,v.q,M.f,q,L],encapsulation:2,changeDetection:0}),n})(),P=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,o.u5,o.UX,f.e,a.TuiModeModule,u.TuiInputTimeModule,u.TuiCheckboxLabeledModule,a.TuiButtonModule,u.TuiInputPasswordModule,u.TuiInputModule,u.TuiInputNumberModule,u.TuiIslandModule,a.TuiLinkModule,u.TuiToggleModule,r.fV,T.Bz.forChild((0,r.Ve)(O)),a.TuiTextfieldControllerModule]]}),n})()}}]);