"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[97466],{97466:(B,p,o)=>{o.r(p),o.d(p,{ExampleTuiFormatNumberModule:()=>O});var g=o(12057),u=o(23738),c=o(33982),d=o(52404),l=o(64862),s=o(66259),t=o(74788),T=o(43560),f=o(93525),h=o(66596),y=o(33772),x=o(59544);const Z=function(){return{decimalLimit:4,decimalSeparator:"."}},N=function(){return{decimalLimit:2,decimalSeparator:".",rounding:"ceil"}};let F=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-format-number-example-1"]],decls:9,vars:13,template:function(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"tuiFormatNumber"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.ALo(5,"tuiFormatNumber"),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.ALo(8,"tuiFormatNumber"),t.qZA()),2&n&&(t.xp6(1),t.hij("Formatted number by default: ",t.lcZ(2,3,10500.33),""),t.xp6(3),t.hij("Formatted number with custom params: ",t.xi3(5,5,10500.33,t.DdM(11,Z)),""),t.xp6(3),t.hij(" Formatted number with rounding: ",t.xi3(8,8,10500.334,t.DdM(12,N)),"\n"))},pipes:[x.m],encapsulation:2,changeDetection:0}),e})();var C=o(44056),v=o(10200),b=o(68874),M=o(61544),A=o(60404),E=o(83074);function L(e,m){if(1&e&&(t.TgZ(0,"p"),t._uU(1,"Pipe to format number values to separate thousands"),t.qZA(),t.TgZ(2,"p"),t._uU(3," Number formatting can be customized by using "),t.TgZ(4,"a",2),t._uU(5," TUI_NUMBER_FORMAT "),t.qZA(),t.qZA(),t.TgZ(6,"tui-doc-example",3),t._UZ(7,"tui-format-number-example-1"),t.qZA()),2&e){const n=t.oxw();t.xp6(6),t.Q6J("content",n.example1)}}function P(e,m){1&e&&(t._uU(0," Digits after comma (use "),t.TgZ(1,"code"),t._uU(2,"Infinity"),t.qZA(),t._uU(3," not to change) "))}function V(e,m){1&e&&t._uU(0," Symbol for separating fraction ")}const U=function(e,m){return{decimalLimit:e,decimalSeparator:m}};function S(e,m){if(1&e){const n=t.EpF();t.TgZ(0,"p",4),t._uU(1),t.ALo(2,"tuiFormatNumber"),t.qZA(),t.TgZ(3,"tui-input-slider",5),t.NdJ("ngModelChange",function(a){return t.CHM(n),t.oxw().value=a}),t.qZA(),t.TgZ(4,"tui-doc-documentation"),t.YNc(5,P,4,0,"ng-template",6),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(n),t.oxw().decimalLimit=a}),t.YNc(6,V,1,0,"ng-template",7),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(n),t.oxw().decimalSeparator=a}),t.qZA()}if(2&e){const n=t.oxw();t.xp6(1),t.hij(" Formatted number: ",t.xi3(2,9,n.value,t.WLB(12,U,n.decimalLimit,n.decimalSeparator))," "),t.xp6(2),t.Q6J("max",1e7)("quantum",.111)("tuiTextfieldLabelOutside",!0)("ngModel",n.value),t.xp6(2),t.Q6J("documentationPropertyValues",n.decimalLimitVariants)("documentationPropertyValue",n.decimalLimit),t.xp6(1),t.Q6J("documentationPropertyValues",n.decimalSeparatorVariants)("documentationPropertyValue",n.decimalSeparator)}}function J(e,m){if(1&e&&(t.TgZ(0,"ol",8),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Import "),t.TgZ(4,"code"),t._uU(5,"TuiFormatNumberPipeModule"),t.qZA(),t._uU(6," into a module where you want to use the pipe "),t.qZA(),t._UZ(7,"tui-doc-code",9),t.qZA(),t.TgZ(8,"li"),t.TgZ(9,"p"),t._uU(10,"Use pipe in template with function and its arguments:"),t.qZA(),t._UZ(11,"tui-doc-code",10),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(7),t.Q6J("code",n.exampleModule),t.xp6(4),t.Q6J("code",n.exampleHtml)}}let z=(()=>{class e{constructor(){this.exampleModule=o.e(59969).then(o.t.bind(o,59969,17)),this.exampleHtml=o.e(29178).then(o.t.bind(o,29178,17)),this.example1={TypeScript:o.e(46844).then(o.t.bind(o,46844,17)),HTML:o.e(48364).then(o.t.bind(o,48364,17))},this.value=100,this.decimalLimitVariants=[1/0,0,2,4],this.decimalLimit=this.decimalLimitVariants[0],this.decimalSeparatorVariants=[",","."],this.decimalSeparator=this.decimalSeparatorVariants[0]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["example-tui-format-number"]],decls:4,vars:0,consts:[["header","FormatNumber","package","CORE","type","pipes"],["pageTab",""],["fragment","number-format","routerLink","/utils/tokens","tuiLink",""],["id","base","heading","Basic",3,"content"],[1,"text","b-full-width"],["tuiTextfieldSize","m",1,"slider",3,"max","quantum","tuiTextfieldLabelOutside","ngModel","ngModelChange"],["documentationPropertyName","decimalLimit","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalSeparator","documentationPropertyType","TuiDecimalSymbol",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(n,r){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,L,8,1,"ng-template",1),t.YNc(2,S,7,15,"ng-template",1),t.YNc(3,J,12,2,"ng-template",1),t.qZA())},directives:[T.q,f.n,c.yS,h.V,y.f,F,C.h,v.s,b.x,u.JJ,u.On,M.z,A.B,E.c],pipes:[x.m],styles:[".text[_ngcontent-%COMP%]{font-size:1.1875rem}.slider[_ngcontent-%COMP%]{margin-top:.75rem;width:9.375rem}"],changeDetection:0}),e})(),O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.TuiFormatNumberPipeModule,s.TuiInputSliderModule,u.UX,u.u5,g.ez,s.TuiRadioListModule,d.fV,l.TuiLinkModule,c.Bz.forChild((0,d.Ve)(z)),l.TuiTextfieldControllerModule]]}),e})()}}]);