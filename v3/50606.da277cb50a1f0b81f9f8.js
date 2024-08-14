"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[50606],{44146:(O,s,o)=>{o.r(s),o.d(s,{ExampleTuiAutoFocusModule:()=>I});var c=o(12057),l=o(23738),d=o(33982),a=o(52404),g=o(4797),m=o(64862),T=o(66259),t=o(74788),x=o(43560),f=o(93525),A=o(33772),Z=o(76189),h=o(77027),F=o(41360),v=o(20986);function M(e,u){if(1&e){const n=t.EpF();t.TgZ(0,"tui-input",2),t.NdJ("ngModelChange",function(p){return t.CHM(n),t.oxw().model=p}),t._uU(1," Focusable tui-input\n"),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("ngModel",n.model)}}let y=(()=>{class e{constructor(){this.showInput=!1,this.model="Focused after its appearance"}onClick(){this.showInput=!0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-auto-focus-example-1"]],decls:3,vars:1,consts:[["tuiButton","","type","button",1,"tui-space_bottom-5",3,"click"],["tuiAutoFocus","",3,"ngModel","ngModelChange",4,"ngIf"],["tuiAutoFocus","",3,"ngModel","ngModelChange"]],template:function(n,i){1&n&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return i.onClick()}),t._uU(1," Show input\n"),t.qZA(),t.YNc(2,M,2,1,"tui-input",1)),2&n&&(t.xp6(2),t.Q6J("ngIf",i.showInput))},directives:[Z.v,c.O5,h.K,F.w,v.k,l.JJ,l.On],encapsulation:2,changeDetection:0}),e})();var r=o(66596),C=o(83074);function E(e,u){if(1&e&&(t.TgZ(0,"p"),t.TgZ(1,"code"),t._uU(2,"tuiAutoFocus"),t.qZA(),t._uU(3," allows to focus HTML-element right after its appearance. It works also with focusable Taiga UI components "),t.qZA(),t.TgZ(4,"tui-doc-example",3),t._UZ(5,"tui-auto-focus-example-1"),t.qZA(),t.TgZ(6,"tui-doc-example",4),t.TgZ(7,"ul",5),t.TgZ(8,"li",6),t.TgZ(9,"a",7),t._uU(10," [Webkit bugzilla]: Autofocus on text input does not show keyboard "),t.qZA(),t.qZA(),t.TgZ(11,"li",6),t.TgZ(12,"a",8),t._uU(13," Fixed only iOS 16.3+ "),t.qZA(),t.qZA(),t.qZA(),t._UZ(14,"img",9),t.qZA()),2&e){const n=t.oxw();t.xp6(4),t.Q6J("content",n.example1),t.xp6(2),t.Q6J("fullsize",!0)}}function U(e,u){if(1&e&&(t.TgZ(0,"ol",10),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Import "),t.TgZ(4,"code"),t._uU(5,"TuiAutoFocus"),t.qZA(),t._uU(6," into a module where you want to use our directive "),t.qZA(),t._UZ(7,"tui-doc-code",11),t.qZA(),t.TgZ(8,"li"),t.TgZ(9,"p"),t._uU(10,"Add to the template:"),t.qZA(),t._UZ(11,"tui-doc-code",12),t.qZA(),t.TgZ(12,"li"),t.TgZ(13,"p"),t._uU(14,"Optional delay for autofocus:"),t.qZA(),t._UZ(15,"tui-doc-code",13),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(7),t.Q6J("code",n.exampleModule),t.xp6(4),t.Q6J("code",n.exampleHtml),t.xp6(4),t.Q6J("code",n.exampleTs)}}let J=(()=>{class e{constructor(){this.exampleModule=o.e(41226).then(o.t.bind(o,41226,17)),this.exampleHtml=o.e(55342).then(o.t.bind(o,55342,17)),this.exampleTs=o.e(82433).then(o.t.bind(o,82433,17)),this.example1={TypeScript:o.e(12839).then(o.t.bind(o,12839,17)),HTML:o.e(45503).then(o.t.bind(o,45503,17))}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["example-tui-auto-focus"]],decls:3,vars:0,consts:[["header","AutoFocus","package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],["id","base","heading","Basic",3,"content"],["id","ios","heading","iOS",3,"fullsize"],[1,"tui-list","tui-list_small","tui-space_top-4"],[1,"tui-list__item"],["href","https://bugs.webkit.org/show_bug.cgi?id=195884","tuiLink",""],["href","https://github.com/WebKit/WebKit/pull/2907","tuiLink",""],["alt","ios-keyboard","src","assets/images/ios-keyboard.png","title","ios-keyboard",1,"t-image","tui-space_top-4"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"],["filename","my.component.ts",3,"code"]],template:function(n,i){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,E,15,2,"ng-template",1),t.YNc(2,U,16,3,"ng-template",2),t.qZA())},directives:[x.q,f.n,A.f,y,r.V,C.c],styles:[".t-image[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),e})(),I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,l.u5,T.TuiInputModule,g.TuiAutoFocusModule,m.TuiButtonModule,m.TuiLinkModule,a.fV,d.Bz.forChild((0,a.Ve)(J))]]}),e})()}}]);