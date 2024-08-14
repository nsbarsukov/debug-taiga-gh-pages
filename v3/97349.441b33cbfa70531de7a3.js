(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[97349],{97349:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiCompassModule:()=>q});var n=o(12057),i=o(33982),c=o(52404),a=o(64862),s=o(45578),r=o(74788),u=o(43560),p=o(93525),l=o(79121),d=o(33772),m=o(83116);let g=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["tui-compass-example-1"]],decls:1,vars:0,template:function(e,t){1&e&&r._UZ(0,"tui-compass")},directives:[m.I],encapsulation:2,changeDetection:0}),e})();var h=o(4797);let f=(()=>{class e{constructor(){this.degrees=0}calculate(e){var t,o;const n=null!==(o=null===(t=this.compass)||void 0===t?void 0:t.nativeElement.getBoundingClientRect())&&void 0!==o?o:h.EMPTY_CLIENT_RECT,i=Math.ceil(e.clientX-(n.left+n.width/2)),c=Math.ceil(e.clientY-(n.top+n.height/2));this.degrees=180-Math.atan2(i,c)*(180/Math.PI)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["tui-compass-example-2"]],viewQuery:function(e,t){if(1&e&&r.Gf(s.If,5,r.SBq),2&e){let e;r.iGM(e=r.CRH())&&(t.compass=e.first)}},hostBindings:function(e,t){1&e&&r.NdJ("mousemove",(function(e){return t.calculate(e)}),!1,r.evT)},decls:1,vars:1,consts:[[3,"degrees"]],template:function(e,t){1&e&&r._UZ(0,"tui-compass",0),2&e&&r.Q6J("degrees",t.degrees)},directives:[m.I],encapsulation:2,changeDetection:0}),e})();var Z=o(10977),x=o(61544),y=o(60404),T=o(83074);function _(e,t){if(1&e&&(r.TgZ(0,"tui-notification",2),r._uU(1," This code is "),r.TgZ(2,"strong"),r._uU(3,"experimental"),r.qZA(),r._uU(4," and is a subject to change. Expect final solution to be shipped in the next major version "),r.qZA(),r.TgZ(5,"tui-doc-example",3),r._UZ(6,"tui-compass-example-1"),r.qZA(),r.TgZ(7,"tui-doc-example",4),r._UZ(8,"tui-compass-example-2"),r.qZA()),2&e){const e=r.oxw();r.xp6(5),r.Q6J("content",e.example1),r.xp6(2),r.Q6J("content",e.example2)}}function v(e,t){1&e&&r._uU(0," Pointer direction in degrees ")}function P(e,t){1&e&&r._uU(0," Custom color ")}function C(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"tui-doc-demo"),r._UZ(1,"tui-compass",5),r.qZA(),r.TgZ(2,"tui-doc-documentation"),r.YNc(3,v,1,0,"ng-template",6),r.NdJ("documentationPropertyValueChange",(function(t){return r.CHM(e),r.oxw().degrees=t})),r.qZA(),r.TgZ(4,"tui-doc-documentation",7),r.YNc(5,P,1,0,"ng-template",8),r.NdJ("documentationPropertyValueChange",(function(t){return r.CHM(e),r.oxw().color=t})),r.qZA()}if(2&e){const e=r.oxw();r.xp6(1),r.Udp("color",e.color),r.Q6J("degrees",e.degrees),r.xp6(2),r.Q6J("documentationPropertyValue",e.degrees),r.xp6(2),r.Q6J("documentationPropertyValues",e.colorVariants)("documentationPropertyValue",e.color)}}function w(e,t){if(1&e&&(r.TgZ(0,"ol",9),r.TgZ(1,"li"),r.TgZ(2,"p"),r._uU(3,"Import module:"),r.qZA(),r._UZ(4,"tui-doc-code",10),r.qZA(),r.TgZ(5,"li"),r.TgZ(6,"p"),r._uU(7,"Add to the template:"),r.qZA(),r._UZ(8,"tui-doc-code",11),r.qZA(),r.qZA()),2&e){const e=r.oxw();r.xp6(4),r.Q6J("code",e.exampleModule),r.xp6(4),r.Q6J("code",e.exampleHtml)}}let A=(()=>{class e{constructor(){this.exampleModule=o.e(22114).then(o.t.bind(o,22114,17)),this.exampleHtml=o.e(36558).then(o.t.bind(o,36558,17)),this.example1={TypeScript:o.e(87726).then(o.t.bind(o,87726,17))},this.example2={TypeScript:o.e(592).then(o.t.bind(o,592,17))},this.colorVariants=["#428bf9","rgb(234, 56, 24)","var(--tui-positive)",""],this.color=this.colorVariants[0],this.degrees=90}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["example-compass"]],decls:4,vars:0,consts:[["header","Compass","package","EXPERIMENTAL","type","components"],["pageTab",""],["status","warning"],["id","without-direction","description","Direction isn't present (direction is NaN)","heading","Basic",3,"content"],["id","user-position","description","Following pointer on the page","heading","Direction",3,"content"],[3,"degrees"],["documentationPropertyName","degrees","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.color","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(r.TgZ(0,"tui-doc-page",0),r.YNc(1,_,9,2,"ng-template",1),r.YNc(2,C,6,6,"ng-template",1),r.YNc(3,w,9,2,"ng-template",1),r.qZA())},directives:[u.q,p.n,l.L,d.f,g,f,Z.F,m.I,x.z,y.B,T.c],encapsulation:2,changeDetection:0}),e})(),q=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=r.oAB({type:e}),e.ɵinj=r.cJS({imports:[[n.ez,s.Oz,c.fV,a.TuiNotificationModule,i.Bz.forChild((0,c.Ve)(A))]]}),e})()}}]);