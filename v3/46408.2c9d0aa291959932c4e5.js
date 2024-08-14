"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[46408],{46408:(dt,p,e)=>{e.r(p),e.d(p,{FormModule:()=>ct});var g=e(12057),n=e(23738),A=e(33982),m=e(63881),f=e(52404),a=e(64862),r=e(66259),v=e(40241),t=e(74788),x=e(43560),U=e(93525),C=e(83315),M=e(33772),T=e(4797),_=e(48758),b=e(72817),q=e(77027),N=e(41360),I=e(84848),y=e(91030),V=e(36951),w=e(62483),O=e(40813),P=e(52721),L=e(21991),F=e(16753),J=e(13735),Q=e(89437),E=e(44056),D=e(50170),S=e(1414),z=e(52219),B=e(76111),H=e(45303),Y=e(39607),W=e(61423),R=e(72355),G=e(92078),j=e(81894),k=e(88135),X=e(68874),$=e(76189),K=e(50020),tt=e(16996),et=e(7114),ot=e(99886);function nt(o,u){if(1&o&&t._UZ(0,"tui-data-list-wrapper",59),2&o){const i=t.oxw();t.Q6J("items",i.persons)}}function it(o,u){if(1&o&&(t.TgZ(0,"div",60),t._uU(1),t.qZA()),2&o){const i=u.$implicit;t.xp6(1),t.AsE("",i.firstName," ",i.lastName,"")}}function ut(o,u){if(1&o&&t._UZ(0,"tui-data-list-wrapper",61),2&o){const i=t.oxw(),l=t.MAs(125);t.Q6J("itemContent",l)("items",i.accounts)}}function rt(o,u){if(1&o&&t._UZ(0,"tui-data-list-wrapper",61),2&o){const i=t.oxw(),l=t.MAs(125);t.Q6J("itemContent",l)("items",i.accounts)}}function lt(o,u){if(1&o&&(t.TgZ(0,"span",62),t._uU(1),t._UZ(2,"tui-money",63),t.qZA()),2&o){const i=u.$implicit;t.xp6(1),t.hij(" ",i.name," "),t.xp6(1),t.Q6J("value",i.amount)}}const s=function(){return[]};class h{constructor(u,i){this.firstName=u,this.lastName=i}toString(){return`${this.firstName} ${this.lastName}`}}class c{constructor(u,i,l,Z,d){this.id=u,this.name=i,this.amount=l,this.currency=Z,this.cardSvg=d}}let at=(()=>{class o{constructor(){this.svgIcons={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",intersection:"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.persons=[new h("Roman","Sedov"),new h("Alex","Inkin")],this.accounts=[new c("1","Common",24876.55,m.TuiCurrency.Ruble,this.svgIcons.common),new c("2","Universal",335,m.TuiCurrency.Dollar,this.svgIcons.universal),new c("3","Intersection",1e4,m.TuiCurrency.Euro,this.svgIcons.intersection),new c("4","Mutation",100,m.TuiCurrency.Pound,this.svgIcons.mutation)],this.testForm=new n.cw({nameValue:new n.NI("",n.kI.required),textValue:new n.NI("",n.kI.required),passwordValue:new n.NI("",n.kI.required),phoneValue:new n.NI("",n.kI.required),moneyValue:new n.NI("100",n.kI.required),periodValue:new n.NI(new T.TuiDay(2017,2,15),n.kI.required),timeValue:new n.NI(new T.TuiTime(12,30),n.kI.required),personValue:new n.NI(this.persons[0]),quantityValue:new n.NI(5e4,n.kI.required),radioValue:new n.NI("with-commission"),accountWherefrom:new n.NI(null),accountWhere:new n.NI(null),checkboxValue:new n.NI(!1),osnoValue:new n.NI(!1),usnValue:new n.NI(!1),eshnValue:new n.NI(!1),envdValue:new n.NI(!1),usn2Value:new n.NI(!1),patentValue:new n.NI(!1)})}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-form-example-1"]],decls:126,vars:60,consts:[[1,"tui-container"],[1,"stepper"],[3,"activeItemIndex"],["tuiStep",""],["tuiStep","",3,"disabled"],[3,"formGroup"],[1,"tui-row","tui-row_sme"],[1,"tui-col_8"],[1,"tui-form__header","tui-form__header_margin-top_none"],[1,"tui-form__row"],["formControlName","nameValue","tuiHintContent","A tooltip"],["placeholder","Field placeholder","tuiTextfield",""],[1,"tui-required"],["formControlName","nameValue",3,"error"],["formControlName","periodValue"],["placeholder","Placeholder","tuiTextfield",""],["formControlName","periodValue",3,"error"],[1,"tui-form__row","tui-form__row_multi-fields"],[1,"tui-form__multi-field"],["formControlName","passwordValue"],["formControlName","passwordValue",3,"error"],["formControlName","moneyValue",3,"tuiTextfieldPostfix"],["formControlName","moneyValue",3,"error"],["formControlName","quantityValue","tuiTextfieldPostfix","\u20bd",3,"max","min","segments"],[1,"ticks-labels"],[1,"tui-form__field-note"],["formControlName","quantityValue",3,"error"],["formControlName","personValue",3,"valueContent"],[3,"items",4,"tuiDataList"],["personValueContent",""],["formControlName","personValue",3,"error"],["formControlName","phoneValue"],["formControlName","phoneValue",3,"error"],[1,"tui-form__header"],["tuiGroup","",1,"tui-form__row",3,"adaptive","collapsed"],["contentAlign","right","formControlName","radioValue","item","with-commission","size","l"],["contentAlign","right","formControlName","radioValue","item","without-commission","size","l"],[1,"tui-form__row","tui-form__row_half-width"],["formControlName","timeValue"],[1,"tui-form__row","tui-form__row_checkboxes"],["formControlName","osnoValue","size","l",1,"tui-form__checkbox"],["formControlName","usnValue","size","l",1,"tui-form__checkbox"],["formControlName","eshnValue","size","l",1,"tui-form__checkbox"],["formControlName","envdValue","size","l",1,"tui-form__checkbox"],["formControlName","usn2Value","size","l",1,"tui-form__checkbox"],["formControlName","patentValue","size","l",1,"tui-form__checkbox"],[1,"tui-form__header","tui-form__header_margin-bottom_small"],["tuiLabel","From"],["formControlName","accountWherefrom",1,"accounts-select",3,"tuiTextfieldLabelOutside","valueContent"],[3,"itemContent","items",4,"tuiDataList"],["tuiLabel","To"],["formControlName","accountWhere",1,"accounts-select",3,"tuiTextfieldLabelOutside","valueContent"],["formControlName","textValue","tuiHintContent","A tooltip"],[1,"tui-form__field-checkbox"],["formControlName","checkboxValue","size","l"],[1,"tui-form__buttons"],["size","l","tuiButton","","type","submit",1,"tui-form__button"],["appearance","flat","size","l","tuiButton","","type","button",1,"tui-form__button"],["accountContent",""],[3,"items"],[1,"uppercase-name"],[3,"itemContent","items"],[1,"account"],[3,"value"]],template:function(i,l){if(1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"tui-stepper",2),t.TgZ(3,"button",3),t._uU(4,"First step"),t.qZA(),t.TgZ(5,"button",4),t._uU(6," Second step "),t.qZA(),t.TgZ(7,"button",4),t._uU(8," Third step "),t.qZA(),t.TgZ(9,"button",4),t._uU(10," Fourth step "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"form",5),t.TgZ(12,"div",6),t.TgZ(13,"div",7),t.TgZ(14,"h3",8),t._uU(15,"A header"),t.qZA(),t.TgZ(16,"div",9),t.TgZ(17,"tui-input",10),t._uU(18," Textfield "),t._UZ(19,"input",11),t._UZ(20,"span",12),t.qZA(),t._UZ(21,"tui-error",13),t.ALo(22,"async"),t.ALo(23,"tuiFieldError"),t.qZA(),t.TgZ(24,"div",9),t.TgZ(25,"tui-input-date",14),t._uU(26," Input date "),t._UZ(27,"input",15),t._UZ(28,"span",12),t.qZA(),t._UZ(29,"tui-error",16),t.ALo(30,"async"),t.ALo(31,"tuiFieldError"),t.qZA(),t.TgZ(32,"div",17),t.TgZ(33,"div",18),t.TgZ(34,"tui-input-password",19),t._uU(35,"Input password"),t.qZA(),t._UZ(36,"tui-error",20),t.ALo(37,"async"),t.ALo(38,"tuiFieldError"),t.qZA(),t.TgZ(39,"div",18),t.TgZ(40,"tui-input-number",21),t.ALo(41,"tuiCurrency"),t._uU(42," Input money "),t.qZA(),t._UZ(43,"tui-error",22),t.ALo(44,"async"),t.ALo(45,"tuiFieldError"),t.qZA(),t.qZA(),t.TgZ(46,"div",9),t.TgZ(47,"tui-input-slider",23),t._uU(48," Some slider "),t.qZA(),t.TgZ(49,"div",24),t.TgZ(50,"span"),t._uU(51,"from 50 000 \u20bd"),t.qZA(),t.TgZ(52,"span"),t._uU(53,"to 3 000 000 \u20bd"),t.qZA(),t.qZA(),t.TgZ(54,"div",25),t._uU(55,"Some additional text"),t.qZA(),t._UZ(56,"tui-error",26),t.ALo(57,"async"),t.ALo(58,"tuiFieldError"),t.qZA(),t.TgZ(59,"div",17),t.TgZ(60,"div",18),t.TgZ(61,"tui-select",27),t._uU(62," Choose a person "),t.YNc(63,nt,1,1,"tui-data-list-wrapper",28),t.qZA(),t.YNc(64,it,2,2,"ng-template",null,29,t.W1O),t._UZ(66,"tui-error",30),t.ALo(67,"async"),t.ALo(68,"tuiFieldError"),t.qZA(),t.TgZ(69,"div",18),t.TgZ(70,"tui-input-phone",31),t._uU(71,"Input phone"),t.qZA(),t._UZ(72,"tui-error",32),t.ALo(73,"async"),t.ALo(74,"tuiFieldError"),t.qZA(),t.qZA(),t.TgZ(75,"h3",33),t._uU(76,"Header"),t.qZA(),t.TgZ(77,"div",34),t.TgZ(78,"tui-radio-block",35),t._uU(79," One option "),t.qZA(),t.TgZ(80,"tui-radio-block",36),t._uU(81," An alternative one "),t.qZA(),t.qZA(),t.TgZ(82,"div",37),t.TgZ(83,"tui-input-time",38),t._uU(84,"Input time"),t.qZA(),t.qZA(),t.TgZ(85,"div",39),t.TgZ(86,"tui-checkbox-labeled",40),t._uU(87," First option "),t.qZA(),t.TgZ(88,"tui-checkbox-labeled",41),t._uU(89," Other option "),t.qZA(),t.TgZ(90,"tui-checkbox-labeled",42),t._uU(91," Cool option "),t.qZA(),t.TgZ(92,"tui-checkbox-labeled",43),t._uU(93," Your personal option "),t.qZA(),t.TgZ(94,"tui-checkbox-labeled",44),t._uU(95," Doubtful option "),t.qZA(),t.TgZ(96,"tui-checkbox-labeled",45),t._uU(97," One more value "),t.qZA(),t.qZA(),t.TgZ(98,"h3",46),t._uU(99,"Header"),t.qZA(),t.TgZ(100,"div",9),t.TgZ(101,"label",47),t.TgZ(102,"tui-select",48),t._uU(103," Choose an account "),t.YNc(104,ut,1,2,"tui-data-list-wrapper",49),t.qZA(),t.qZA(),t.qZA(),t.TgZ(105,"div",9),t.TgZ(106,"label",50),t.TgZ(107,"tui-select",51),t._uU(108," Choose an account "),t.YNc(109,rt,1,2,"tui-data-list-wrapper",49),t.qZA(),t.qZA(),t.qZA(),t.TgZ(110,"h3",33),t._uU(111,"Header"),t.qZA(),t.TgZ(112,"div",9),t.TgZ(113,"tui-input",52),t._uU(114," Textfield "),t._UZ(115,"input",15),t.qZA(),t.TgZ(116,"div",53),t.TgZ(117,"tui-checkbox-labeled",54),t._uU(118," Try this "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(119,"div",55),t.TgZ(120,"button",56),t._uU(121," Submit "),t.qZA(),t.TgZ(122,"button",57),t._uU(123," Cancel "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(124,lt,3,2,"ng-template",null,58,t.W1O),t.qZA(),t.qZA()),2&i){const Z=t.MAs(65),d=t.MAs(125);t.xp6(2),t.Q6J("activeItemIndex",0),t.xp6(3),t.Q6J("disabled",!0),t.xp6(2),t.Q6J("disabled",!0),t.xp6(2),t.Q6J("disabled",!0),t.xp6(2),t.Q6J("formGroup",l.testForm),t.xp6(10),t.Q6J("error",t.lcZ(22,23,t.lcZ(23,25,t.DdM(53,s)))),t.xp6(8),t.Q6J("error",t.lcZ(30,27,t.lcZ(31,29,t.DdM(54,s)))),t.xp6(7),t.Q6J("error",t.lcZ(37,31,t.lcZ(38,33,t.DdM(55,s)))),t.xp6(4),t.Q6J("tuiTextfieldPostfix",t.lcZ(41,35,"RUB")),t.xp6(3),t.Q6J("error",t.lcZ(44,37,t.lcZ(45,39,t.DdM(56,s)))),t.xp6(4),t.Q6J("max",3e6)("min",5e4)("segments",1),t.xp6(9),t.Q6J("error",t.lcZ(57,41,t.lcZ(58,43,t.DdM(57,s)))),t.xp6(5),t.Q6J("valueContent",Z),t.xp6(5),t.Q6J("error",t.lcZ(67,45,t.lcZ(68,47,t.DdM(58,s)))),t.xp6(6),t.Q6J("error",t.lcZ(73,49,t.lcZ(74,51,t.DdM(59,s)))),t.xp6(5),t.Q6J("adaptive",!0)("collapsed",!0),t.xp6(25),t.Q6J("tuiTextfieldLabelOutside",!0)("valueContent",d),t.xp6(5),t.Q6J("tuiTextfieldLabelOutside",!0)("valueContent",d)}},directives:[_.H,b.Q,n._Y,n.JL,n.sg,q.K,N.w,n.JJ,n.u,I.bZ,y.M,V.v,w.j,O.k,P.V,L.F,F.q,J.g,Q.T,E.h,D.u,S.O,z.g,B.y,H.X,Y.g,W._,R.G,G.x,j.p,k.A,X.x,$.v,K.e,tt.o],pipes:[g.Ov,et.A,ot.i],styles:["[_nghost-%COMP%]{display:block}.stepper[_ngcontent-%COMP%]{margin-bottom:2rem}.uppercase-name[_ngcontent-%COMP%]{text-transform:uppercase}.account[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:space-between}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .375rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.375rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.375rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .375rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:.75rem;margin-right:.75rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.75rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.75rem}"],changeDetection:0}),o})();function st(o,u){if(1&o&&(t._UZ(0,"tui-styles-info"),t.TgZ(1,"div",2),t._uU(2," Use global "),t.TgZ(3,"strong"),t._uU(4,".tui-form"),t.qZA(),t._uU(5," class and its modifications: "),t.qZA(),t.TgZ(6,"ul",3),t.TgZ(7,"li",4),t.TgZ(8,"code"),t._uU(9,".tui-form__header"),t.qZA(),t._uU(10," : form header. Margins: 32px top and 20px bottom. "),t.TgZ(11,"ul",5),t.TgZ(12,"li",4),t.TgZ(13,"code"),t._uU(14,".tui-form__header_margin-top_none"),t.qZA(),t._uU(15," : nullifies "),t.TgZ(16,"code"),t._uU(17,"margin-top"),t.qZA(),t.qZA(),t.TgZ(18,"li",4),t.TgZ(19,"code"),t._uU(20,".tui-form__header_margin-bottom_none"),t.qZA(),t._uU(21," : nullifies "),t.TgZ(22,"code"),t._uU(23,"margin-bottom"),t.qZA(),t.qZA(),t.TgZ(24,"li",4),t.TgZ(25,"code"),t._uU(26,".tui-form__header_margin-bottom_small"),t.qZA(),t._uU(27," : reduced margin bottom (16px) "),t.TgZ(28,"code"),t._uU(29,"margin-bottom"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"li",4),t.TgZ(31,"code"),t._uU(32,".tui-form__row"),t.qZA(),t._uU(33," : form row. Margin between rows is 20px. "),t.TgZ(34,"ul",5),t.TgZ(35,"li",4),t.TgZ(36,"code"),t._uU(37,".tui-form__row_multi-fields"),t.qZA(),t._uU(38," : row with several inputs with 20px margin between them "),t.qZA(),t.TgZ(39,"li",4),t.TgZ(40,"code"),t._uU(41,".tui-form__row_half-width"),t.qZA(),t._uU(42," : a half width row "),t.qZA(),t.TgZ(43,"li",4),t.TgZ(44,"code"),t._uU(45,".tui-form__row_checkboxes"),t.qZA(),t._uU(46," : a row with two columns for checkboxes "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(47,"li",4),t.TgZ(48,"code"),t._uU(49,".tui-form__multi-field"),t.qZA(),t._uU(50," : field in a row "),t.TgZ(51,"code"),t._uU(52,"tui-form__row_multi-fields"),t.qZA(),t._uU(53," . fields with 20px margin between "),t.qZA(),t.TgZ(54,"li",4),t.TgZ(55,"code"),t._uU(56,".tui-form__checkbox"),t.qZA(),t._uU(57," : checkbox with a label for two column case "),t.qZA(),t.TgZ(58,"li",4),t.TgZ(59,"code"),t._uU(60,".tui-form__field-note"),t.qZA(),t._uU(61," : a secondary text under field "),t.qZA(),t.TgZ(62,"li",4),t.TgZ(63,"code"),t._uU(64,".tui-form__field-checkbox"),t.qZA(),t._uU(65," : checkbox under a field "),t.qZA(),t.TgZ(66,"li",4),t.TgZ(67,"code"),t._uU(68,".tui-form__buttons"),t.qZA(),t._uU(69," : a block with buttons and margin top 32px "),t.TgZ(70,"ul",5),t.TgZ(71,"li",4),t.TgZ(72,"code"),t._uU(73,".tui-form__buttons_align_end"),t.qZA(),t._uU(74," : align buttons right "),t.qZA(),t.TgZ(75,"li",4),t.TgZ(76,"code"),t._uU(77,".tui-form__buttons_align_center"),t.qZA(),t._uU(78," : align buttons center "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(79,"li",4),t.TgZ(80,"code"),t._uU(81,".tui-form__button"),t.qZA(),t._uU(82," : a button of buttons block "),t.qZA(),t.qZA(),t.TgZ(83,"tui-doc-example",6),t._UZ(84,"tui-form-example-1"),t.qZA()),2&o){const i=t.oxw();t.xp6(83),t.Q6J("content",i.example1)}}let mt=(()=>{class o{constructor(){this.example1={TypeScript:e.e(94598).then(e.t.bind(e,94598,17)),HTML:e.e(95871).then(e.t.bind(e,95871,17)),LESS:e.e(59168).then(e.t.bind(e,59168,17))}}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["example-form"]],decls:2,vars:0,consts:[["header","Form"],["pageTab",""],[1,"tui-space_bottom-3"],[1,"tui-list","tui-list_small"],[1,"tui-list__item"],[1,"tui-list","tui-list_linear","tui-list_nested","tui-list_extra-small"],["id","form","heading","Basic",3,"content"]],template:function(i,l){1&i&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,st,85,1,"ng-template",1),t.qZA())},directives:[x.q,U.n,C.q,M.f,at],encapsulation:2,changeDetection:0}),o})(),ct=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.ez,n.u5,n.UX,v.e,m.TuiMoneyModule,r.TuiStepperModule,r.TuiInputDateModule,r.TuiInputTimeModule,r.TuiTextareaModule,r.TuiInputSliderModule,r.TuiInputRangeModule,r.TuiCheckboxLabeledModule,r.TuiRadioListModule,a.TuiButtonModule,a.TuiErrorModule,r.TuiFieldErrorPipeModule,r.TuiInputPasswordModule,r.TuiInputPhoneModule,r.TuiInputModule,r.TuiInputNumberModule,m.TuiCurrencyPipeModule,r.TuiInputTagModule,r.TuiInputCountModule,r.TuiSelectModule,a.TuiGroupModule,r.TuiRadioBlockModule,a.TuiTextfieldControllerModule,a.TuiHintModule,a.TuiDataListModule,r.TuiDataListWrapperModule,a.TuiLabelModule,f.fV,A.Bz.forChild((0,f.Ve)(mt))]]}),o})()}}]);