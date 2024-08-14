"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[39839],{89104:(P,T,n)=>{n.d(T,{X:()=>f});var l=n(98204),i=n(74788),x=n(33982),w=n(66596),C=n(61544),m=n(60404),s=n(12057);function y(u,g){1&u&&i._uU(0," Hard control/monitor for the dropdown being visible ")}function t(u,g){1&u&&(i._uU(0," Align of dropdown (does not work together with "),i.TgZ(1,"code"),i._uU(2,"limitWidth === 'fixed'"),i.qZA(),i._uU(3," ) "))}function E(u,g){1&u&&i._uU(0," Set a vertical direction of dropdown ")}function M(u,g){1&u&&i._uU(0," Limit width of dropdown ")}function Z(u,g){1&u&&(i._uU(0," Minimum height to calculate that dropdown fits to set "),i.TgZ(1,"code"),i._uU(2,"tuiDropdownDirection"),i.qZA())}function O(u,g){1&u&&i._uU(0," Maximum height of dropdown ")}function A(u,g){1&u&&i._uU(0," Dropdown offset ")}n(155);let f=(()=>{class u{constructor(_){this.documentedComponent=_}}return u.\u0275fac=function(_){return new(_||u)(i.Y36(l.x))},u.\u0275cmp=i.Xpm({type:u,selectors:[["dropdown-documentation"]],decls:17,vars:12,consts:[[1,"tui-text_h6"],["routerLink","/directives/dropdown","target","_blank","tuiLink",""],["documentationPropertyMode","input-output","documentationPropertyName","tuiDropdownOpen","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownAlign","documentationPropertyType","TuiDropdownAlign",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownDirection","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyType","TuiDropdownWidth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownMinHeight","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownOffset","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"]],template:function(_,c){1&_&&(i.TgZ(0,"h6",0),i._uU(1," Can be expanded with "),i.TgZ(2,"a",1),i._uU(3," TuiDropdown "),i.qZA(),i.qZA(),i.TgZ(4,"p"),i._uU(5," Requires you to import "),i.TgZ(6,"code"),i._uU(7,"TuiDropdownModule"),i.qZA(),i.qZA(),i.TgZ(8,"tui-doc-documentation"),i.YNc(9,y,1,0,"ng-template",2),i.ALo(10,"async"),i.NdJ("documentationPropertyValueChange",function(h){return c.documentedComponent.dropdownOpen.next(h)}),i.YNc(11,t,4,0,"ng-template",3),i.NdJ("documentationPropertyValueChange",function(h){return c.documentedComponent.dropdownAlign=h}),i.YNc(12,E,1,0,"ng-template",4),i.NdJ("documentationPropertyValueChange",function(h){return c.documentedComponent.dropdownDirection=h}),i.YNc(13,M,1,0,"ng-template",5),i.NdJ("documentationPropertyValueChange",function(h){return c.documentedComponent.dropdownLimitWidth=h}),i.YNc(14,Z,3,0,"ng-template",6),i.NdJ("documentationPropertyValueChange",function(h){return c.documentedComponent.dropdownMinHeight=h}),i.YNc(15,O,1,0,"ng-template",7),i.NdJ("documentationPropertyValueChange",function(h){return c.documentedComponent.dropdownMaxHeight=h}),i.YNc(16,A,1,0,"ng-template",8),i.NdJ("documentationPropertyValueChange",function(h){return c.documentedComponent.dropdownOffset=h}),i.qZA()),2&_&&(i.xp6(9),i.Q6J("documentationPropertyValue",i.lcZ(10,10,c.documentedComponent.dropdownOpen)),i.xp6(2),i.Q6J("documentationPropertyValues",c.documentedComponent.dropdownAlignVariants)("documentationPropertyValue",c.documentedComponent.dropdownAlign),i.xp6(1),i.Q6J("documentationPropertyValues",c.documentedComponent.dropdownDirectionVariants)("documentationPropertyValue",c.documentedComponent.dropdownDirection),i.xp6(1),i.Q6J("documentationPropertyValues",c.documentedComponent.dropdownLimitWidthVariants)("documentationPropertyValue",c.documentedComponent.dropdownLimitWidth),i.xp6(1),i.Q6J("documentationPropertyValue",c.documentedComponent.dropdownMinHeight),i.xp6(1),i.Q6J("documentationPropertyValue",c.documentedComponent.dropdownMaxHeight),i.xp6(1),i.Q6J("documentationPropertyValue",c.documentedComponent.dropdownOffset))},directives:[x.yS,w.V,C.z,m.B],pipes:[s.Ov],encapsulation:2,changeDetection:0}),u})()},19180:(P,T,n)=>{n.d(T,{F:()=>m});var l=n(12057),i=n(33982),x=n(52404),w=n(64862),C=n(74788);let m=(()=>{class s{}return s.\u0275fac=function(y){return new(y||s)},s.\u0275mod=C.oAB({type:s}),s.\u0275inj=C.cJS({imports:[[l.ez,i.Bz,x.Lx,w.TuiLinkModule]]}),s})()},155:(P,T,n)=>{n.d(T,{X:()=>x});var l=n(64862),i=n(26215);class x{constructor(){this.dropdownAlignVariants=["left","right","center"],this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownDirectionVariants=["bottom","top"],this.dropdownAlign=l.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownDirection=l.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownLimitWidth=l.TUI_DROPDOWN_DEFAULT_OPTIONS.limitWidth,this.dropdownMinHeight=l.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=l.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight,this.dropdownOffset=l.TUI_DROPDOWN_DEFAULT_OPTIONS.offset,this.dropdownOpen=new i.X(!1)}}},98204:(P,T,n)=>{n.d(T,{x:()=>i});const i=new(n(74788).OlP)("[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class")},39839:(P,T,n)=>{n.r(T),n.d(T,{ExampleTuiHostedDropdownModule:()=>Ct});var l=n(12057),i=n(23738),x=n(33982),w=n(52404),C=n(4797),m=n(64862),s=n(66259),v=n(89570),y=n(19180),t=n(74788),E=n(155),M=n(98204),Z=n(43560),O=n(93525),A=n(33772),f=n(62939),u=n(33250),g=n(76189),_=n(20933),c=n(89786),D=n(35065);function h(e,d){if(1&e){const o=t.EpF();t.TgZ(0,"button",4),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).onClick()}),t._uU(1),t.qZA()}if(2&e){const o=d.$implicit;t.xp6(1),t.hij(" ",o," ")}}function V(e,d){if(1&e){const o=t.EpF();t.TgZ(0,"tui-data-list"),t.TgZ(1,"tui-opt-group"),t.YNc(2,h,2,1,"button",3),t.qZA(),t.TgZ(3,"tui-opt-group"),t.TgZ(4,"button",4),t.NdJ("click",function(){return t.CHM(o).close()}),t._uU(5," Nevermind "),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.items)}}let N=(()=>{class e{constructor(){this.items=["Edit","Download","Rename","Delete"],this.open=!1}onClick(){var o,p;this.open=!1,null===(p=null===(o=this.component)||void 0===o?void 0:o.nativeFocusableElement)||void 0===p||p.focus()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-hosted-dropdown-example-1"]],viewQuery:function(o,p){if(1&o&&t.Gf(m.TuiHostedDropdownComponent,5),2&o){let a;t.iGM(a=t.CRH())&&(p.component=a.first)}},decls:5,vars:4,consts:[["tuiDropdownAlign","right",3,"content","sided","open","openChange"],["appearance","flat","iconRight","tuiIconChevronRight","size","m","tuiButton","","type","button",3,"pseudoActive"],["dropdown",""],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","",3,"click"]],template:function(o,p){if(1&o&&(t.TgZ(0,"tui-hosted-dropdown",0),t.NdJ("openChange",function(r){return p.open=r}),t.TgZ(1,"button",1),t._uU(2," Button "),t.qZA(),t.qZA(),t.YNc(3,V,6,1,"ng-template",null,2,t.W1O)),2&o){const a=t.MAs(4);t.Q6J("content",a)("sided",!0)("open",p.open),t.xp6(1),t.Q6J("pseudoActive",p.open||null)}},directives:[f.o,u.Ek,g.v,_.q,c.R,l.sg,D.v],styles:[".icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),e})();var J=n(39607),I=n(25121),H=n(34880),L=n(50170),R=n(1414),W=n(17163),B=n(52219),U=n(50020);function S(e,d){if(1&e&&t._UZ(0,"tui-svg",6),2&e){const o=t.oxw();t.ekj("icon_rotated",o.open)}}function Q(e,d){if(1&e&&t._UZ(0,"tui-data-list-wrapper",11),2&e){const o=t.oxw(2);t.Q6J("items",o.selectItems)}}function F(e,d){if(1&e){const o=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).onClick()}),t._uU(1),t.qZA()}if(2&e){const o=d.$implicit;t.xp6(1),t.hij(" ",o," ")}}function Y(e,d){if(1&e){const o=t.EpF();t.TgZ(0,"p",7),t._uU(1," There is "),t.TgZ(2,"code"),t._uU(3,"let-activeZone"),t.qZA(),t._uU(4," in dropdown template context to work with nested dropdowns "),t.qZA(),t.TgZ(5,"tui-select",8),t.NdJ("ngModelChange",function(a){return t.CHM(o),t.oxw().selected=a}),t._uU(6," Nested Select "),t.YNc(7,Q,1,1,"tui-data-list-wrapper",9),t.qZA(),t.TgZ(8,"tui-data-list"),t.YNc(9,F,2,1,"button",10),t.qZA()}if(2&e){const o=d.$implicit,p=t.oxw();t.xp6(5),t.Q6J("tuiActiveZoneParent",o)("ngModel",p.selected),t.xp6(4),t.Q6J("ngForOf",p.items)}}let K=(()=>{class e{constructor(){this.items=["Edit","Download","Rename","Delete"],this.selectItems=["Item 1","Item 2"],this.open=!1,this.selected=null}onClick(){var o,p;this.open=!1,null===(p=null===(o=this.component)||void 0===o?void 0:o.nativeFocusableElement)||void 0===p||p.focus()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-hosted-dropdown-example-2"]],viewQuery:function(o,p){if(1&o&&t.Gf(m.TuiHostedDropdownComponent,5),2&o){let a;t.iGM(a=t.CRH())&&(p.component=a.first)}},decls:9,vars:3,consts:[["tuiDropdownLimitWidth","fixed",3,"content","open","openChange"],["tuiGroup",""],["size","l","tuiButton","","type","button",1,"tui-group__auto-width-item"],["size","l","title","Menu","tuiHostedDropdownHost","","tuiIconButton","","type","button",1,"tui-group__auto-width-item",3,"iconRight"],["icon",""],["dropdown",""],["src","tuiIconChevronDown",1,"icon"],[1,"margin"],[1,"margin",3,"tuiActiveZoneParent","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],[3,"items"],["tuiOption","",3,"click"]],template:function(o,p){if(1&o&&(t.TgZ(0,"tui-hosted-dropdown",0),t.NdJ("openChange",function(r){return p.open=r}),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t._uU(3," Button that does not open dropdown "),t.qZA(),t._UZ(4,"button",3),t.YNc(5,S,1,2,"ng-template",null,4,t.W1O),t.qZA(),t.qZA(),t.YNc(7,Y,10,3,"ng-template",null,5,t.W1O)),2&o){const a=t.MAs(6),r=t.MAs(8);t.Q6J("content",r)("open",p.open),t.xp6(4),t.Q6J("iconRight",a)}},directives:[f.o,u.Ek,J.g,g.v,I.i,H.P,L.u,R.O,W.e,i.JJ,i.On,B.g,_.q,l.sg,U.e,D.v],styles:["[_nghost-%COMP%]{display:block;width:-webkit-max-content;width:max-content}.margin[_ngcontent-%COMP%]{margin:1rem}.icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),e})();var z=n(66596);function j(e,d){1&e&&t._UZ(0,"tui-svg",10)}function X(e,d){if(1&e){const o=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){const r=t.CHM(o).$implicit;return t.oxw(3).onClick(r)}),t._uU(1),t.YNc(2,j,1,0,"tui-svg",9),t.qZA()}if(2&e){const o=d.$implicit,p=t.oxw(3);t.xp6(1),t.hij(" ",o," "),t.xp6(1),t.Q6J("ngIf",p.itemIsActive(o))}}function G(e,d){if(1&e&&(t.TgZ(0,"tui-opt-group"),t.YNc(1,X,3,2,"button",7),t.qZA()),2&e){const o=d.$implicit;t.xp6(1),t.Q6J("ngForOf",o)}}function $(e,d){if(1&e&&(t.TgZ(0,"tui-data-list"),t.YNc(1,G,2,1,"tui-opt-group",6),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.items)}}let b=(()=>{class e{constructor(){this.open=!1,this.items=[["By interest","By genre","By release year","By subject"],["Ascending","Descending"]],this.primary="By genre",this.ascending=!1}onClick(o){this.items[0].includes(o)?this.primary=o:this.ascending=o===this.items[1][0]}itemIsActive(o){return o===this.primary||this.ascending&&o===this.items[1][0]||!this.ascending&&o===this.items[1][1]}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-hosted-dropdown-example-3"]],decls:8,vars:7,consts:[[1,"wrapper"],["tuiDropdownAlign","right",3,"content","open","openChange"],["tabindex","0","tuiLink","",1,"link"],["src","tuiIconSortDown",1,"sort"],["src","tuiIconChevronDown",1,"arrow"],["dropdown",""],[4,"ngFor","ngForOf"],["tuiOption","","class","item",3,"click",4,"ngFor","ngForOf"],["tuiOption","",1,"item",3,"click"],["src","tuiIconCheck",4,"ngIf"],["src","tuiIconCheck"]],template:function(o,p){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"tui-hosted-dropdown",1),t.NdJ("openChange",function(r){return p.open=r}),t.TgZ(2,"a",2),t._UZ(3,"tui-svg",3),t._uU(4),t._UZ(5,"tui-svg",4),t.qZA(),t.qZA(),t.qZA(),t.YNc(6,$,2,1,"ng-template",null,5,t.W1O)),2&o){const a=t.MAs(7);t.xp6(1),t.Q6J("content",a)("open",p.open),t.xp6(2),t.ekj("sort_ascending",p.ascending),t.xp6(1),t.hij(" ",p.primary," "),t.xp6(1),t.ekj("arrow_open",p.open)}},directives:[f.o,u.Ek,z.V,H.P,_.q,l.sg,c.R,D.v,l.O5],styles:[".wrapper[_ngcontent-%COMP%]{width:12.5rem;text-align:right}.link[_ngcontent-%COMP%]{font-size:1.0625rem}.sort_ascending[_ngcontent-%COMP%]{transform:scaleY(-1)}.item[_ngcontent-%COMP%]{min-width:12.5rem}.arrow[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.arrow_open[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),e})();var k=n(20501),q=n(13176);function tt(e,d){if(1&e&&t._UZ(0,"tui-data-list-wrapper",5),2&e){const o=t.oxw();t.Q6J("items",o.items)}}function ot(e,d){1&e&&t._UZ(0,"button",6)}let nt=(()=>{class e{constructor(){this.form=new i.cw({control:new i.NI([])}),this.open=!1,this.items=["Drafts","In Progress","Completed"],this.arrow=s.TUI_ARROW}get value(){var o;return(null===(o=this.form.get("control"))||void 0===o?void 0:o.value)||[]}get appearance(){return this.length?"whiteblock-active":"whiteblock"}get length(){return this.value.length||0}get text(){switch(this.length){case 0:return"Select";case 1:return this.value[0];default:return`${this.length} selected`}}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-hosted-dropdown-example-4"]],decls:8,vars:8,consts:[[3,"formGroup"],[3,"content","open","openChange"],["tuiButton","","type","button",3,"appearance","iconRight","keydown.delete"],["dropdown",""],["cleaner",""],["formControlName","control","tuiMultiSelectGroup","",3,"items"],["appearance","icon","icon","tuiIconClose","size","xs","tuiIconButton","","tuiPreventDefault","mousedown","type","reset"]],template:function(o,p){if(1&o&&(t.TgZ(0,"form",0),t.TgZ(1,"tui-hosted-dropdown",1),t.NdJ("openChange",function(r){return p.open=r}),t.TgZ(2,"button",2),t.NdJ("keydown.delete",function(){return p.form.reset()}),t._uU(3),t.qZA(),t.YNc(4,tt,1,1,"ng-template",null,3,t.W1O),t.YNc(6,ot,1,0,"ng-template",null,4,t.W1O),t.qZA(),t.qZA()),2&o){const a=t.MAs(5),r=t.MAs(7);t.Q6J("formGroup",p.form),t.xp6(1),t.Q6J("content",a)("open",p.open),t.xp6(1),t.Udp("--tui-padding",1.25,"rem"),t.Q6J("appearance",p.appearance)("iconRight",p.length?r:p.arrow),t.xp6(1),t.hij(" ",p.text," ")}},directives:[i._Y,i.JL,i.sg,f.o,g.v,U.e,i.JJ,i.u,k.Q,q.A],encapsulation:2,changeDetection:0}),e})(),et=(()=>{class e extends m.TuiPositionAccessor{constructor(o){super(),this.el=o,this.type="dropdown"}getPosition({height:o}){const{right:p,top:a}=this.el.nativeElement.getBoundingClientRect();return[a-o,p]}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.SBq))},e.\u0275dir=t.lG2({type:e,selectors:[["","topRight",""]],features:[t._Bn([(0,m.tuiAsPositionAccessor)(e)]),t.qOj]}),e})();function it(e,d){1&e&&(t.TgZ(0,"div",3),t.TgZ(1,"h2",4),t._uU(2,"Custom positioning"),t.qZA(),t._uU(3," You can achieve this with "),t.TgZ(4,"code"),t._uU(5,"tuiAsPositionAccessor"),t.qZA(),t._uU(6," helper and a custom directive "),t.qZA())}let pt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-hosted-dropdown-example-5"]],decls:4,vars:1,consts:[["topRight","",3,"content"],["icon","tuiIconArrowUpRightLarge","size","s","title","Show details","tuiIconButton",""],["content",""],[1,"dropdown"],[1,"tui-text_h6"]],template:function(o,p){if(1&o&&(t.TgZ(0,"tui-hosted-dropdown",0),t._UZ(1,"button",1),t.qZA(),t.YNc(2,it,7,0,"ng-template",null,2,t.W1O)),2&o){const a=t.MAs(3);t.Q6J("content",a)}},directives:[f.o,et,g.v],styles:[".dropdown[_ngcontent-%COMP%]{width:13rem;padding:0 1rem 1rem;line-height:2}"],changeDetection:0}),e})();var dt=n(10977),at=n(77027),rt=n(41360),ut=n(61544),ct=n(60404),lt=n(89104),mt=n(83074);function st(e,d){if(1&e&&(t.TgZ(0,"p"),t.TgZ(1,"code"),t._uU(2,"tui-hosted-dropdown"),t.qZA(),t._uU(3," is a wrapper for focusable elements to attach to them a dropdown. Working with keyboard is also included. "),t.qZA(),t.TgZ(4,"p"),t._uU(5," If a wrapped element is input, arrow down press opens a dropdown. The next press focuses the first item from the list. "),t.qZA(),t.TgZ(6,"p"),t._uU(7," If it is not, mouseclick opens and closes a dropdown. A component uses the first focusable item inside component as a host for opening a dropdown. If you want another element to be host, use "),t.TgZ(8,"code"),t._uU(9,"tuiHostedDropdownHost"),t.qZA(),t._uU(10," directive. "),t.qZA(),t.TgZ(11,"tui-doc-example",2),t._UZ(12,"tui-hosted-dropdown-example-1"),t.qZA(),t.TgZ(13,"tui-doc-example",3),t._UZ(14,"tui-hosted-dropdown-example-2"),t.qZA(),t.TgZ(15,"tui-doc-example",4),t._UZ(16,"tui-hosted-dropdown-example-3"),t.qZA(),t.TgZ(17,"tui-doc-example",5),t._UZ(18,"tui-hosted-dropdown-example-4"),t.qZA(),t.TgZ(19,"tui-doc-example",6),t._UZ(20,"tui-hosted-dropdown-example-5"),t.qZA()),2&e){const o=t.oxw();t.xp6(11),t.Q6J("content",o.example1),t.xp6(2),t.Q6J("content",o.example2),t.xp6(2),t.Q6J("content",o.example3),t.xp6(2),t.Q6J("content",o.example4),t.xp6(2),t.Q6J("content",o.example5)}}function gt(e,d){if(1&e){const o=t.EpF();t.TgZ(0,"div",14),t.TgZ(1,"div"),t._uU(2,"Do you like using Taiga UI?"),t.qZA(),t.TgZ(3,"p",15),t.TgZ(4,"button",16),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).onClick()}),t._uU(5," Yes "),t.qZA(),t.TgZ(6,"button",17),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).onClick()}),t._uU(7," Yes "),t.qZA(),t.qZA(),t.qZA()}}function ht(e,d){1&e&&t._uU(0," Open/close state ")}function Tt(e,d){1&e&&t._uU(0," A handler to enable/disable opening ")}function _t(e,d){1&e&&t._uU(0," Content inside a dropdown ")}function Dt(e,d){1&e&&t._uU(0," Whether dropdown should appear on the side or not ")}function ft(e,d){if(1&e){const o=t.EpF();t.TgZ(0,"tui-doc-demo"),t.TgZ(1,"tui-hosted-dropdown",7),t.NdJ("openChange",function(a){return t.CHM(o),t.oxw().open=a}),t.TgZ(2,"tui-input",8),t.NdJ("ngModelChange",function(a){return t.CHM(o),t.oxw().onInput(a)}),t._uU(3," Start typing "),t.qZA(),t.qZA(),t.qZA(),t.YNc(4,gt,8,0,"ng-template",null,9,t.W1O),t.TgZ(6,"tui-doc-documentation"),t.YNc(7,ht,1,0,"ng-template",10),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(o),t.oxw().open=a}),t.YNc(8,Tt,1,0,"ng-template",11),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(o),t.oxw().canOpenSelected=a}),t.YNc(9,_t,1,0,"ng-template",12),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(o),t.oxw().content=a}),t.YNc(10,Dt,1,0,"ng-template",13),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(o),t.oxw().sided=a}),t.qZA(),t._UZ(11,"dropdown-documentation")}if(2&e){const o=t.MAs(5),p=t.oxw();t.xp6(1),t.Q6J("canOpen",p.canOpen)("content",p.template?o:p.content)("sided",p.sided)("tuiDropdownAlign",p.dropdownAlign)("tuiDropdownDirection",p.dropdownDirection)("tuiDropdownLimitWidth",p.dropdownLimitWidth)("tuiDropdownMaxHeight",p.dropdownMaxHeight)("tuiDropdownMinHeight",p.dropdownMinHeight)("tuiDropdownOffset",p.dropdownOffset)("open",p.open),t.xp6(1),t.Q6J("ngModel",p.input),t.xp6(5),t.Q6J("documentationPropertyValue",p.open),t.xp6(1),t.Q6J("documentationPropertyValues",p.canOpenVariants)("documentationPropertyValue",p.canOpenSelected),t.xp6(1),t.Q6J("documentationPropertyValues",p.contentVariants)("documentationPropertyValue",p.content),t.xp6(1),t.Q6J("documentationPropertyValue",p.sided)}}function xt(e,d){if(1&e&&(t.TgZ(0,"ol",18),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Import "),t.TgZ(4,"code"),t._uU(5,"TuiHostedDropdownModule"),t.qZA(),t._uU(6," into a module where you want to use our component "),t.qZA(),t._UZ(7,"tui-doc-code",19),t.qZA(),t.TgZ(8,"li"),t.TgZ(9,"p"),t._uU(10,"Add to the template:"),t.qZA(),t._UZ(11,"tui-doc-code",20),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.xp6(7),t.Q6J("code",o.exampleModule),t.xp6(4),t.Q6J("code",o.exampleHtml)}}let wt=(()=>{class e extends E.X{constructor(){super(...arguments),this.exampleModule=n.e(59141).then(n.t.bind(n,59141,17)),this.exampleHtml=n.e(71744).then(n.t.bind(n,71744,17)),this.example1={TypeScript:n.e(29035).then(n.t.bind(n,29035,17)),HTML:n.e(64483).then(n.t.bind(n,64483,17)),LESS:n.e(96549).then(n.t.bind(n,96549,17))},this.example2={TypeScript:n.e(89923).then(n.t.bind(n,89923,17)),HTML:n.e(94291).then(n.t.bind(n,94291,17))},this.example3={TypeScript:n.e(95725).then(n.t.bind(n,95725,17)),HTML:n.e(45490).then(n.t.bind(n,45490,17)),LESS:n.e(84959).then(n.t.bind(n,84959,17))},this.example4={TypeScript:n.e(94611).then(n.t.bind(n,94611,17)),HTML:n.e(22134).then(n.t.bind(n,22134,17))},this.example5={TypeScript:n.e(56399).then(n.t.bind(n,56399,17)),HTML:n.e(97409).then(n.t.bind(n,97409,17)),LESS:n.e(78359).then(n.t.bind(n,78359,17)),"accessor.ts":n.e(3233).then(n.t.bind(n,3233,17))},this.open=!1,this.sided=!1,this.input="",this.canOpenVariants=[!0,"getter this.input.length > 2"],this.canOpenSelected=this.canOpenVariants[0],this.contentVariants=["Template","Custom string"],this.content=this.contentVariants[0]}get template(){return"Template"===this.content}get canOpen(){return!0===this.canOpenSelected||this.input.length>2}onInput(o){this.input=o,this.open=this.canOpen}onClick(){this.open=!1}}return e.\u0275fac=function(){let d;return function(p){return(d||(d=t.n5z(e)))(p||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["example-tui-hosted-dropdown"]],features:[t._Bn([{provide:M.x,useExisting:(0,t.Gpc)(()=>e)}]),t.qOj],decls:4,vars:0,consts:[["header","HostedDropdown","package","CORE","type","components"],["pageTab",""],["id","menu","heading","Menu",3,"content"],["id","tui-dropdown-host","heading","With custom host",3,"content"],["id","native","heading","With link",3,"content"],["id","complex","heading","Complex example",3,"content"],["id","position","heading","Custom positioning",3,"content"],[3,"canOpen","content","sided","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMaxHeight","tuiDropdownMinHeight","tuiDropdownOffset","open","openChange"],[1,"input",3,"ngModel","ngModelChange"],["dropdown",""],["documentationPropertyMode","input-output","documentationPropertyName","open","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","canOpen","documentationPropertyType","boolean",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","content","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","sided","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"dropdown"],[1,"buttons"],["size","m","tuiButton","","type","button",1,"button",3,"click"],["appearance","secondary","size","m","tuiButton","","type","button",1,"button",3,"click"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(o,p){1&o&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,st,21,5,"ng-template",1),t.YNc(2,ft,12,17,"ng-template",1),t.YNc(3,xt,12,2,"ng-template",1),t.qZA())},directives:[Z.q,O.n,A.f,N,K,b,nt,pt,dt.F,f.o,u.Ek,at.K,rt.w,i.JJ,i.On,ut.z,ct.B,lt.X,g.v,mt.c],styles:[".input[_ngcontent-%COMP%]{width:15.625rem}.dropdown[_ngcontent-%COMP%]{padding:1.25rem}.buttons[_ngcontent-%COMP%]{display:flex;margin-bottom:0}.button[_ngcontent-%COMP%]{flex:1}.button[_ngcontent-%COMP%]:first-child{margin-right:.75rem}"],changeDetection:0}),e})(),Ct=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,i.UX,v.wq,i.u5,m.TuiHostedDropdownModule,m.TuiNotificationModule,s.TuiTabsModule,s.TuiInputModule,m.TuiButtonModule,m.TuiGroupModule,m.TuiSvgModule,m.TuiLinkModule,s.TuiSelectModule,C.TuiActiveZoneModule,m.TuiDropdownModule,m.TuiDataListModule,s.TuiDataListWrapperModule,y.F,w.fV,s.TuiToggleModule,s.TuiMultiSelectModule,C.TuiPreventDefaultModule,x.Bz.forChild((0,w.Ve)(wt))]]}),e})()}}]);