(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[65962],{65962:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiFilterByInputModule:()=>B});var n=i(12057),o=i(23738),a=i(33982),r=i(52404),s=i(64862),u=i(66259),l=i(74788),p=i(43560),c=i(93525),m=i(33772),d=i(77027),f=i(41360),h=i(52219),g=i(50020),x=i(68800);function T(e,t){if(1&e&&(l._UZ(0,"tui-data-list-wrapper",3),l.ALo(1,"tuiFilterByInput")),2&e){const e=l.oxw();l.Q6J("items",l.lcZ(1,1,e.items))}}let Z=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.form=new o.cw({user:new o.NI})}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-filter-by-input-example-1"]],decls:4,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","user"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(l.TgZ(0,"form",0),l.TgZ(1,"tui-input",1),l._uU(2," User "),l.YNc(3,T,2,3,"tui-data-list-wrapper",2),l.qZA(),l.qZA()),2&e&&l.Q6J("formGroup",t.form)},directives:[o._Y,o.JL,o.sg,d.K,f.w,o.JJ,o.u,h.g,g.e],pipes:[x.b],encapsulation:2,changeDetection:0}),e})();var y=i(41967),b=i(89290),w=i(60666);function _(e,t){if(1&e&&(l._UZ(0,"tui-data-list-wrapper",5),l.ALo(1,"tuiFilterByInput")),2&e){const e=l.oxw();l.Q6J("items",l.xi3(1,1,e.items,e.matcherString))}}function J(e,t){if(1&e&&(l._UZ(0,"tui-data-list-wrapper",6),l.ALo(1,"tuiStringifyContent"),l.ALo(2,"tuiFilterByInput")),2&e){const e=l.oxw();l.Q6J("itemContent",l.lcZ(1,2,e.stringify))("items",l.xi3(2,4,e.users,e.matcherUser))}}let C=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.users=[{id:1,name:"John Cleese"},{id:2,name:"Eric Idle"},{id:3,name:"Graham Chapman"},{id:4,name:"Michael Palin"},{id:5,name:"Terry Gilliam"}],this.form=new o.cw({user:new o.NI,user2:new o.NI}),this.stringify=({name:e})=>e,this.matcherString=(e,t)=>e.split(" ").pop().toLowerCase().startsWith(t.toLowerCase()),this.matcherUser=(e,t)=>e.name.toLowerCase().startsWith(t.toLowerCase())}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-filter-by-input-example-2"]],decls:7,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","user"],[3,"items",4,"tuiDataList"],["formControlName","user2",1,"tui-space_top-5",3,"stringify"],[3,"itemContent","items",4,"tuiDataList"],[3,"items"],[3,"itemContent","items"]],template:function(e,t){1&e&&(l.TgZ(0,"form",0),l.TgZ(1,"tui-combo-box",1),l._uU(2," Search by last name "),l.YNc(3,_,2,4,"tui-data-list-wrapper",2),l.qZA(),l.TgZ(4,"tui-combo-box",3),l._uU(5," With ids "),l.YNc(6,J,3,7,"tui-data-list-wrapper",4),l.qZA(),l.qZA()),2&e&&(l.Q6J("formGroup",t.form),l.xp6(4),l.Q6J("stringify",t.stringify))},directives:[o._Y,o.JL,o.sg,y._,b.m,o.JJ,o.u,h.g,g.e],pipes:[x.b,w.Q],encapsulation:2,changeDetection:0}),e})();var L=i(93251),U=i(49538),A=i(68874),M=i(20501);function I(e,t){if(1&e&&(l._UZ(0,"tui-data-list-wrapper",2),l.ALo(1,"tuiFilterByInput")),2&e){const e=l.oxw();l.Q6J("items",l.lcZ(1,1,e.items))}}let q=(()=>{class e{constructor(){this.items=["Luke Skywalker","Leia Organa Solo","Darth Vader","Han Solo","Obi-Wan Kenobi","Yoda"],this.control=new o.NI([this.items[0]])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-filter-by-input-example-3"]],decls:3,vars:2,consts:[["placeholder","Ignored text",1,"b-form",3,"formControl","tuiTextfieldLabelOutside"],["tuiMultiSelectGroup","",3,"items",4,"tuiDataList"],["tuiMultiSelectGroup","",3,"items"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-multi-select",0),l._uU(1," Star Wars persons "),l.YNc(2,I,2,3,"tui-data-list-wrapper",1),l.qZA()),2&e&&l.Q6J("formControl",t.control)("tuiTextfieldLabelOutside",!0)},directives:[L.V,U.b,o.JJ,o.oH,A.x,h.g,g.e,M.Q],pipes:[x.b],encapsulation:2,changeDetection:0}),e})();var S=i(83074);function Q(e,t){if(1&e&&(l._uU(0," Pipe for filtering an array by value entered in a textfield "),l.TgZ(1,"tui-doc-example",3),l._UZ(2,"tui-filter-by-input-example-1"),l.qZA(),l.TgZ(3,"tui-doc-example",4),l._UZ(4,"tui-filter-by-input-example-2"),l.qZA(),l.TgZ(5,"tui-doc-example",5),l._UZ(6,"tui-filter-by-input-example-3"),l.qZA()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("content",e.example1),l.xp6(2),l.Q6J("content",e.example2),l.xp6(2),l.Q6J("content",e.example3)}}function v(e,t){if(1&e&&(l.TgZ(0,"ol",6),l.TgZ(1,"li"),l.TgZ(2,"p"),l._uU(3," Import "),l.TgZ(4,"code"),l._uU(5,"TuiFilterByInputPipeModule"),l.qZA(),l._uU(6," into a module where you want to use our component "),l.qZA(),l._UZ(7,"tui-doc-code",7),l.qZA(),l.TgZ(8,"li"),l.TgZ(9,"p"),l._uU(10,"Use pipe in template under Taiga UI control:"),l.qZA(),l._UZ(11,"tui-doc-code",8),l.qZA(),l.qZA()),2&e){const e=l.oxw();l.xp6(7),l.Q6J("code",e.exampleModule),l.xp6(4),l.Q6J("code",e.exampleHtml)}}let N=(()=>{class e{constructor(){this.exampleModule=i.e(69031).then(i.t.bind(i,69031,17)),this.exampleHtml=i.e(9370).then(i.t.bind(i,9370,17)),this.example1={TypeScript:i.e(60077).then(i.t.bind(i,60077,17)),HTML:i.e(83339).then(i.t.bind(i,83339,17))},this.example2={TypeScript:i.e(16699).then(i.t.bind(i,16699,17)),HTML:i.e(2013).then(i.t.bind(i,2013,17))},this.example3={TypeScript:i.e(97208).then(i.t.bind(i,97208,17)),HTML:i.e(67705).then(i.t.bind(i,67705,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["example-tui-filter-by-input"]],decls:3,vars:0,consts:[["header","FilterByInput","package","KIT","type","pipes"],["pageTab",""],["pageTab","Setup"],["id","base","heading","Basic",3,"content"],["id","matcher","heading","Custom matcher",3,"content"],["id","multi","heading","Multiselect",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-doc-page",0),l.YNc(1,Q,7,3,"ng-template",1),l.YNc(2,v,12,2,"ng-template",2),l.qZA())},directives:[p.q,c.n,m.f,Z,C,q,S.c],encapsulation:2,changeDetection:0}),e})(),B=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=l.oAB({type:e}),e.ɵinj=l.cJS({imports:[[n.ez,o.UX,u.TuiFilterByInputPipeModule,r.fV,u.TuiInputModule,s.TuiDataListModule,u.TuiDataListWrapperModule,u.TuiComboBoxModule,u.TuiMultiSelectModule,s.TuiTextfieldControllerModule,u.TuiStringifyContentPipeModule,a.Bz.forChild((0,r.Ve)(N))]]}),e})()}}]);