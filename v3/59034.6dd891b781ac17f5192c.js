(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[59034],{59034:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiRingChartModule:()=>z});var a=n(12057),i=n(33982),o=n(50179),u=n(63881),r=n(52404),c=n(89570),l=n(74788),s=n(43560),d=n(93525),p=n(33772),m=n(57464);let h=(()=>{class e{constructor(){this.value=[40,30,20,10]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-ring-chart-example-1"]],decls:5,vars:4,consts:[[1,"wrapper"],["size","s",1,"tui-space_right-4",3,"value"],["size","m",1,"tui-space_right-4",3,"value"],["size","l",1,"tui-space_right-4",3,"value"],["size","xl",1,"tui-space_right-4",3,"value"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l._UZ(1,"tui-ring-chart",1),l._UZ(2,"tui-ring-chart",2),l._UZ(3,"tui-ring-chart",3),l._UZ(4,"tui-ring-chart",4),l.qZA()),2&e&&(l.xp6(1),l.Q6J("value",t.value),l.xp6(1),l.Q6J("value",t.value),l.xp6(1),l.Q6J("value",t.value),l.xp6(1),l.Q6J("value",t.value))},directives:[m.i],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),e})();var g=n(4797),x=n(16996);let v=(()=>{class e{constructor(){this.labels=["Food","Cafe","Open Source","Taxi","other"],this.value=[13769,12367,10172,3018,2592],this.total=(0,g.tuiSum)(...this.value),this.index=NaN}get sum(){return Number.isNaN(this.index)?this.total:this.value[this.index]}get label(){return Number.isNaN(this.index)?"Total":this.labels[this.index]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-ring-chart-example-2"]],decls:4,vars:4,consts:[[3,"value","activeItemIndex","activeItemIndexChange"],[3,"value"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-ring-chart",0),l.NdJ("activeItemIndexChange",(function(e){return t.index=e})),l._UZ(1,"tui-money",1),l.TgZ(2,"div"),l._uU(3),l.qZA(),l.qZA()),2&e&&(l.Q6J("value",t.value)("activeItemIndex",t.index),l.xp6(1),l.Q6J("value",t.sum),l.xp6(2),l.Oqu(t.label))},directives:[m.i,x.o],styles:["[_nghost-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8;--tui-chart-4: #9795cd}"],changeDetection:0}),e})();var y=n(10977),f=n(61544),Z=n(60404),I=n(83074);function T(e,t){if(1&e&&(l.TgZ(0,"tui-doc-example",2),l._UZ(1,"tui-ring-chart-example-1"),l.qZA(),l.TgZ(2,"tui-doc-example",3),l._UZ(3,"tui-ring-chart-example-2"),l.qZA()),2&e){const e=l.oxw();l.Q6J("content",e.example1),l.xp6(2),l.Q6J("content",e.example2)}}function P(e,t){1&e&&l._uU(0," Active fragment ")}function V(e,t){1&e&&l._uU(0," Size ")}function _(e,t){1&e&&l._uU(0," Value ")}function C(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"tui-doc-demo"),l.TgZ(1,"tui-ring-chart",4),l.NdJ("activeItemIndexChange",(function(t){return l.CHM(e),l.oxw().activeItemIndex=t})),l.qZA(),l.qZA(),l.TgZ(2,"tui-doc-documentation"),l.YNc(3,P,1,0,"ng-template",5),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().activeItemIndex=t})),l.YNc(4,V,1,0,"ng-template",6),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().size=t})),l.YNc(5,_,1,0,"ng-template",7),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().value=t})),l.qZA()}if(2&e){const e=l.oxw();l.xp6(1),l.Q6J("size",e.size)("value",e.value)("activeItemIndex",e.activeItemIndex),l.xp6(2),l.Q6J("documentationPropertyValues",e.activeItemIndexVariants)("documentationPropertyValue",e.activeItemIndex),l.xp6(1),l.Q6J("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),l.xp6(1),l.Q6J("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value)}}function N(e,t){if(1&e&&(l.TgZ(0,"ol",8),l.TgZ(1,"li"),l.TgZ(2,"p"),l._uU(3," Import "),l.TgZ(4,"code"),l._uU(5,"TuiRingChartModule"),l.qZA(),l._uU(6," into a module where you want to use our component "),l.qZA(),l._UZ(7,"tui-doc-code",9),l.qZA(),l.TgZ(8,"li"),l.TgZ(9,"p"),l._uU(10,"Add to the template:"),l.qZA(),l._UZ(11,"tui-doc-code",10),l.qZA(),l.qZA()),2&e){const e=l.oxw();l.xp6(7),l.Q6J("code",e.exampleModule),l.xp6(4),l.Q6J("code",e.exampleHtml)}}let b=(()=>{class e{constructor(){this.exampleModule=n.e(29262).then(n.t.bind(n,29262,17)),this.exampleHtml=n.e(68855).then(n.t.bind(n,68855,17)),this.example1={TypeScript:n.e(46783).then(n.t.bind(n,46783,17)),HTML:n.e(38027).then(n.t.bind(n,38027,17)),LESS:n.e(69240).then(n.t.bind(n,11832,17))},this.example2={TypeScript:n.e(18463).then(n.t.bind(n,18463,17)),HTML:n.e(24214).then(n.t.bind(n,24214,17)),LESS:n.e(98330).then(n.t.bind(n,98330,17))},this.valueVariants=[[40,30,20,10],[13769,10172,3018,2592]],this.value=this.valueVariants[0],this.activeItemIndexVariants=[NaN,0,1,2],this.activeItemIndex=this.activeItemIndexVariants[0],this.sizeVariants=["xs","s","m","l","xl"],this.size=this.sizeVariants[2]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["example-tui-ring-chart"]],decls:4,vars:0,consts:[["header","RingChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","sizes","heading","sizes",3,"content"],["id","labels","heading","With labels",3,"content"],[1,"chart",3,"size","value","activeItemIndex","activeItemIndexChange"],["documentationPropertyMode","input-output","documentationPropertyName","activeItemIndex","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeXS | TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","value","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-doc-page",0),l.YNc(1,T,4,2,"ng-template",1),l.YNc(2,C,6,9,"ng-template",1),l.YNc(3,N,12,2,"ng-template",1),l.qZA())},directives:[s.q,d.n,p.f,h,v,y.F,m.i,f.z,Z.B,I.c],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),e})(),z=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=l.oAB({type:e}),e.ɵinj=l.cJS({imports:[[a.ez,i.Bz,o.TuiRingChartModule,u.TuiMoneyModule,c.wq,r.fV,i.Bz.forChild((0,r.Ve)(b))]]}),e})()}}]);