(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[62202],{62202:(e,t,a)=>{a.r(t),a.d(t,{ExampleTuiBarChartModule:()=>X});var n=a(12057),o=a(23738),i=a(33982),u=a(50179),r=a(63881),l=a(52404),c=a(64862),s=a(66259),p=a(74788),d=a(43560),m=a(93525),h=a(66596),x=a(33772),g=a(4797),y=a(70390),Z=a(88549);let b=(()=>{class e{constructor(){this.value=[[3660,8281,1069,9034,5797,6918,8495,3234,6204,1392,2088,8637,8779],[3952,3671,3781,5323,3537,4107,2962,3320,8632,4755,9130,1195,3574]],this.labelsX=["Jan 2019","Feb","Mar"],this.labelsY=["0","10 000"]}getHeight(e){return e/(0,g.tuiCeil)(e,-3)*100}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-bar-chart-example-1"]],decls:2,vars:4,consts:[[1,"axes",3,"axisXLabels","axisYLabels"],[3,"max","value"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-axes",0),p._UZ(1,"tui-bar-chart",1),p.qZA()),2&e&&(p.Q6J("axisXLabels",t.labelsX)("axisYLabels",t.labelsY),p.xp6(1),p.Q6J("max",1e4)("value",t.value))},directives:[y.v,Z.g],styles:[".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}"],changeDetection:0}),e})();var f=a(79121),T=a(84848),_=a(50170),v=a(1414),P=a(52219),M=a(50020);function A(e,t){if(1&e&&p._UZ(0,"tui-data-list-wrapper",6),2&e){const e=p.oxw();p.Q6J("items",e.appearances)}}let C=(()=>{class e{constructor(){this.value=[[1e3,8e3,4e3,3e3,4e3],[6e3,2e3,4500,7e3,5e3]],this.labelsX=["Jan 2021","Feb","Mar"],this.labelsY=["0","10 000"],this.appearances=["onDark","error"],this.appearance="onDark",this.hint=({$implicit:e})=>this.value.reduce(((t,a)=>`${t}$${(0,c.tuiFormatNumber)(a[e])}\n`),"").trim()}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-bar-chart-example-2"]],decls:8,vars:14,consts:[[1,"flex"],[1,"axes",3,"axisXLabels","axisYLabels"],[3,"max","tuiHintAppearance","tuiHintContent","value"],[3,"collapsed","max","tuiHintAppearance","tuiHintContent","value"],[1,"b-form",3,"ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"tui-axes",1),p._UZ(2,"tui-bar-chart",2),p.qZA(),p.TgZ(3,"tui-axes",1),p._UZ(4,"tui-bar-chart",3),p.qZA(),p.qZA(),p.TgZ(5,"tui-select",4),p.NdJ("ngModelChange",(function(e){return t.appearance=e})),p._uU(6," Hint appearance "),p.YNc(7,A,1,1,"tui-data-list-wrapper",5),p.qZA()),2&e&&(p.xp6(1),p.Q6J("axisXLabels",t.labelsX)("axisYLabels",t.labelsY),p.xp6(1),p.Q6J("max",1e4)("tuiHintAppearance",t.appearance)("tuiHintContent",t.hint)("value",t.value),p.xp6(1),p.Q6J("axisXLabels",t.labelsX)("axisYLabels",t.labelsY),p.xp6(1),p.Q6J("collapsed",!0)("max",1e4)("tuiHintAppearance",t.appearance)("tuiHintContent",t.hint)("value",t.value),p.xp6(1),p.Q6J("ngModel",t.appearance))},directives:[y.v,Z.g,T.bZ,_.u,v.O,o.JJ,o.On,P.g,M.e],styles:[".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}.axes[_ngcontent-%COMP%]:first-child{--tui-chart-0: gold;--tui-chart-1: purple}.axes[_ngcontent-%COMP%]:last-child{--tui-chart-0: skyblue;--tui-chart-1: violet}.flex[_ngcontent-%COMP%]{display:flex;min-width:31.25rem}"],changeDetection:0}),e})();var J=a(10977),U=a(61544),V=a(60404),q=a(83074);const w=function(){return["/components/axes"]};function L(e,t){if(1&e&&(p.TgZ(0,"p"),p._uU(1," Bar chart that can be used as a content to "),p.TgZ(2,"a",2),p._uU(3," axes "),p.qZA(),p._uU(4," . "),p.qZA(),p.TgZ(5,"tui-doc-example",3),p._UZ(6,"tui-bar-chart-example-1"),p.qZA(),p.TgZ(7,"tui-doc-example",4),p.TgZ(8,"tui-notification",5),p._uU(9," Use "),p.TgZ(10,"a",6),p.TgZ(11,"code"),p._uU(12,"Hint"),p.qZA(),p.qZA(),p._uU(13," directive to enable hints with "),p.TgZ(14,"code"),p._uU(15,"tuiHintContent"),p.qZA(),p.qZA(),p._UZ(16,"tui-bar-chart-example-2"),p.qZA()),2&e){const e=p.oxw();p.xp6(2),p.Q6J("routerLink",p.DdM(3,w)),p.xp6(3),p.Q6J("content",e.example1),p.xp6(2),p.Q6J("content",e.example2)}}function H(e,t){1&e&&p._uU(0," Shows data set in a single bar ")}function N(e,t){1&e&&p._uU(0," Sets chart max manually ")}function Q(e,t){1&e&&(p._uU(0," Size (use "),p.TgZ(1,"code"),p._uU(2,"null"),p.qZA(),p._uU(3," for autosize) "))}function Y(e,t){1&e&&p._uU(0," Array of segments ")}function S(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"tui-doc-demo"),p._UZ(1,"tui-bar-chart",7),p.qZA(),p.TgZ(2,"tui-doc-documentation"),p.YNc(3,H,1,0,"ng-template",8),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().collapsed=t})),p.YNc(4,N,1,0,"ng-template",9),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().max=t})),p.YNc(5,Q,4,0,"ng-template",10),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().size=t})),p.YNc(6,Y,1,0,"ng-template",11),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().value=t})),p.qZA()}if(2&e){const e=p.oxw();p.xp6(1),p.Q6J("collapsed",e.collapsed)("max",e.max)("size",e.size)("value",e.value),p.xp6(2),p.Q6J("documentationPropertyValue",e.collapsed),p.xp6(1),p.Q6J("documentationPropertyValue",e.max),p.xp6(1),p.Q6J("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),p.xp6(1),p.Q6J("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value)}}function z(e,t){if(1&e&&(p.TgZ(0,"ol",12),p.TgZ(1,"li"),p.TgZ(2,"p"),p._uU(3," Import "),p.TgZ(4,"code"),p._uU(5,"TuiBarChartModule"),p.qZA(),p._uU(6," into a module where you want to use our component "),p.qZA(),p._UZ(7,"tui-doc-code",13),p.qZA(),p.TgZ(8,"li"),p.TgZ(9,"p"),p._uU(10,"Add to the template:"),p.qZA(),p._UZ(11,"tui-doc-code",14),p.qZA(),p.qZA()),2&e){const e=p.oxw();p.xp6(7),p.Q6J("code",e.exampleModule),p.xp6(4),p.Q6J("code",e.exampleHtml)}}let k=(()=>{class e{constructor(){this.exampleModule=a.e(15240).then(a.t.bind(a,15240,17)),this.exampleHtml=a.e(26307).then(a.t.bind(a,26307,17)),this.example1={TypeScript:a.e(37816).then(a.t.bind(a,37816,17)),HTML:a.e(29156).then(a.t.bind(a,29156,17)),LESS:a.e(65498).then(a.t.bind(a,65498,17))},this.example2={TypeScript:a.e(57888).then(a.t.bind(a,57888,17)),HTML:a.e(15294).then(a.t.bind(a,15294,17)),LESS:a.e(71019).then(a.t.bind(a,71019,17))},this.collapsed=!1,this.sizeVariants=["s","m","l"],this.size=null,this.max=0,this.valueVariants=[[[3e4,20500,12345],[12422,16124,22424]],[[30,65,30,80,54],[98,48,33,25,11],[55,10,27,36,73]]],this.value=this.valueVariants[0]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["example-tui-bar-chart"]],decls:4,vars:0,consts:[["header","BarChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["tuiLink","",3,"routerLink"],["id","axes","heading","With axes",3,"content"],["id","collapsed","heading","Same values with collapsed mode",3,"content"],[1,"tui-space_bottom-6"],["routerLink","/directives/hint","tuiLink",""],[1,"chart",3,"collapsed","max","size","value"],["documentationPropertyMode","input","documentationPropertyName","collapsed","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeS | TuiSizeL | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","value","documentationPropertyType","ReadonlyArray<readonly number[]>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,L,17,4,"ng-template",1),p.YNc(2,S,7,10,"ng-template",1),p.YNc(3,z,12,2,"ng-template",1),p.qZA())},directives:[d.q,m.n,h.V,i.yS,x.f,b,f.L,C,J.F,Z.g,U.z,V.B,q.c],styles:[".chart[_ngcontent-%COMP%]{height:12.5rem}"],changeDetection:0}),e})(),X=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[[n.ez,o.u5,u.TuiAxesModule,u.TuiBarChartModule,c.TuiHintModule,c.TuiNotificationModule,c.TuiLinkModule,r.TuiMoneyModule,s.TuiSelectModule,s.TuiDataListWrapperModule,l.fV,i.Bz.forChild((0,l.Ve)(k))]]}),e})()}}]);