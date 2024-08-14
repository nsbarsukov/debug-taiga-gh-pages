"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[92160],{92160:(le,h,o)=>{o.r(h),o.d(h,{ExampleTuiCalendarModule:()=>oe});var u=o(12057),c=o(33982),s=o(52404),p=o(64862),m=o(4797),e=o(74788),C=o(43560),T=o(93525),g=o(66596),y=o(33772),d=o(49746);function x(n,r){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij("Chosen date: ",t.value,"")}}let v=(()=>{class n{constructor(){this.value=null}onDayClick(t){this.value=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-calendar-example-1"]],decls:2,vars:2,consts:[[3,"value","dayClick"],[4,"ngIf"]],template:function(t,a){1&t&&(e.TgZ(0,"tui-calendar",0),e.NdJ("dayClick",function(l){return a.onDayClick(l)}),e.qZA(),e.YNc(1,x,2,1,"div",1)),2&t&&(e.Q6J("value",a.value),e.xp6(1),e.Q6J("ngIf",a.value))},directives:[d.a,u.O5],encapsulation:2,changeDetection:0}),n})();function f(n,r){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij("Chosen dates: ",t.value,"")}}let _=(()=>{class n{constructor(){this.value=null,this.firstMonth=m.TuiMonth.currentLocal(),this.middleMonth=m.TuiMonth.currentLocal().append({month:1}),this.lastMonth=m.TuiMonth.currentLocal().append({month:2}),this.hoveredItem=null}onDayClick(t){(null===this.value||!this.value.isSingleDay)&&(this.value=new m.TuiDayRange(t,t)),this.value=m.TuiDayRange.sort(this.value.from,t)}onMonthChangeFirst(t){this.firstMonth=t,this.middleMonth=t.append({month:1}),this.lastMonth=t.append({month:2})}onMonthChangeMiddle(t){this.firstMonth=t.append({month:-1}),this.middleMonth=t,this.lastMonth=t.append({month:1})}onMonthChangeLast(t){this.firstMonth=t.append({month:-2}),this.middleMonth=t.append({month:-1}),this.lastMonth=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-calendar-example-2"]],decls:5,vars:17,consts:[[1,"wrapper"],[3,"maxViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[3,"maxViewedMonth","minViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[3,"minViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[4,"ngIf"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"tui-calendar",1),e.NdJ("hoveredItemChange",function(l){return a.hoveredItem=l})("dayClick",function(l){return a.onDayClick(l)})("monthChange",function(l){return a.onMonthChangeFirst(l)}),e.qZA(),e.TgZ(2,"tui-calendar",2),e.NdJ("hoveredItemChange",function(l){return a.hoveredItem=l})("dayClick",function(l){return a.onDayClick(l)})("monthChange",function(l){return a.onMonthChangeMiddle(l)}),e.qZA(),e.TgZ(3,"tui-calendar",3),e.NdJ("hoveredItemChange",function(l){return a.hoveredItem=l})("dayClick",function(l){return a.onDayClick(l)})("monthChange",function(l){return a.onMonthChangeLast(l)}),e.qZA(),e.qZA(),e.YNc(4,f,2,1,"div",4)),2&t&&(e.xp6(1),e.Q6J("maxViewedMonth",a.firstMonth)("month",a.firstMonth)("showAdjacent",!1)("value",a.value)("hoveredItem",a.hoveredItem),e.xp6(1),e.Q6J("maxViewedMonth",a.middleMonth)("minViewedMonth",a.middleMonth)("month",a.middleMonth)("showAdjacent",!1)("value",a.value)("hoveredItem",a.hoveredItem),e.xp6(1),e.Q6J("minViewedMonth",a.lastMonth)("month",a.lastMonth)("showAdjacent",!1)("value",a.value)("hoveredItem",a.hoveredItem),e.xp6(1),e.Q6J("ngIf",a.value))},directives:[d.a,u.O5],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),n})();function M(n,r){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij("Chosen dates: ",t.value,"")}}const V=["var(--tui-primary)","var(--tui-info-fill)"],E=["var(--tui-success-fill)"];let P=(()=>{class n{constructor(){this.value=null,this.firstMonth=m.TuiMonth.currentLocal(),this.middleMonth=m.TuiMonth.currentLocal().append({month:1}),this.lastMonth=m.TuiMonth.currentLocal().append({month:2}),this.hoveredItem=null,this.markerHandler=t=>t.day%2==0?V:E}onDayClick(t){(null===this.value||!this.value.isSingleDay)&&(this.value=new m.TuiDayRange(t,t)),this.value=m.TuiDayRange.sort(this.value.from,t)}onMonthChangeFirst(t){this.firstMonth=t,this.middleMonth=t.append({month:1}),this.lastMonth=t.append({month:2})}onMonthChangeMiddle(t){this.firstMonth=t.append({month:-1}),this.middleMonth=t,this.lastMonth=t.append({month:1})}onMonthChangeLast(t){this.firstMonth=t.append({month:-2}),this.middleMonth=t.append({month:-1}),this.lastMonth=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-calendar-example-3"]],decls:5,vars:20,consts:[[1,"wrapper"],[3,"markerHandler","maxViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[3,"markerHandler","maxViewedMonth","minViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[3,"markerHandler","minViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[4,"ngIf"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"tui-calendar",1),e.NdJ("hoveredItemChange",function(l){return a.hoveredItem=l})("dayClick",function(l){return a.onDayClick(l)})("monthChange",function(l){return a.onMonthChangeFirst(l)}),e.qZA(),e.TgZ(2,"tui-calendar",2),e.NdJ("hoveredItemChange",function(l){return a.hoveredItem=l})("dayClick",function(l){return a.onDayClick(l)})("monthChange",function(l){return a.onMonthChangeMiddle(l)}),e.qZA(),e.TgZ(3,"tui-calendar",3),e.NdJ("hoveredItemChange",function(l){return a.hoveredItem=l})("dayClick",function(l){return a.onDayClick(l)})("monthChange",function(l){return a.onMonthChangeLast(l)}),e.qZA(),e.qZA(),e.YNc(4,M,2,1,"div",4)),2&t&&(e.xp6(1),e.Q6J("markerHandler",a.markerHandler)("maxViewedMonth",a.firstMonth)("month",a.firstMonth)("showAdjacent",!1)("value",a.value)("hoveredItem",a.hoveredItem),e.xp6(1),e.Q6J("markerHandler",a.markerHandler)("maxViewedMonth",a.middleMonth)("minViewedMonth",a.middleMonth)("month",a.middleMonth)("showAdjacent",!1)("value",a.value)("hoveredItem",a.hoveredItem),e.xp6(1),e.Q6J("markerHandler",a.markerHandler)("minViewedMonth",a.lastMonth)("month",a.lastMonth)("showAdjacent",!1)("value",a.value)("hoveredItem",a.hoveredItem),e.xp6(1),e.Q6J("ngIf",a.value))},directives:[d.a,u.O5],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-calendar-example-4"]],features:[e._Bn([{provide:p.TUI_FIRST_DAY_OF_WEEK,useValue:m.TuiDayOfWeek.Sunday}])],decls:1,vars:0,template:function(t,a){1&t&&e._UZ(0,"tui-calendar")},directives:[d.a],encapsulation:2,changeDetection:0}),n})();const I=n=>10===n.day?"holiday":n.isWeekend?"weekend":"weekday";let A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-calendar-example-5"]],features:[e._Bn([{provide:p.TUI_DAY_TYPE_HANDLER,useValue:I}])],decls:1,vars:0,template:function(t,a){1&t&&e._UZ(0,"tui-calendar")},directives:[d.a],styles:["tui-primitive-calendar [data-type=holiday]{background-color:var(--tui-support-09)}\n"],encapsulation:2,changeDetection:0}),n})(),D=(()=>{class n{constructor(){this.value=[]}onDayClick(t){this.value=this.value.find(a=>a.daySame(t))?this.value.filter(a=>!a.daySame(t)):this.value.concat(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-calendar-example-6"]],decls:3,vars:2,consts:[[3,"value","dayClick"]],template:function(t,a){1&t&&(e.TgZ(0,"tui-calendar",0),e.NdJ("dayClick",function(l){return a.onDayClick(l)}),e.qZA(),e.TgZ(1,"div"),e._uU(2),e.qZA()),2&t&&(e.Q6J("value",a.value),e.xp6(2),e.hij("Chosen dates: ",a.value,""))},directives:[d.a],encapsulation:2,changeDetection:0}),n})();function H(n,r){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij("Chosen date: ",t.value,"")}}let N=(()=>{class n{constructor(){this.value=null}onDayClick(t){this.value=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-calendar-example-7"]],decls:2,vars:2,consts:[["initialView","year",3,"value","dayClick"],[4,"ngIf"]],template:function(t,a){1&t&&(e.TgZ(0,"tui-calendar",0),e.NdJ("dayClick",function(l){return a.onDayClick(l)}),e.qZA(),e.YNc(1,H,2,1,"div",1)),2&t&&(e.Q6J("value",a.value),e.xp6(1),e.Q6J("ngIf",a.value))},directives:[d.a,u.O5],encapsulation:2,changeDetection:0}),n})();var J=o(10977),U=o(61544),w=o(60404),L=o(83074);function Q(n,r){1&n&&(e._uU(0," Use "),e.TgZ(1,"a",12),e._uU(2," TUI_FIRST_DAY_OF_WEEK "),e.qZA(),e._uU(3," token to change start day of the week (Monday by default). "))}function S(n,r){1&n&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"TUI_DAY_TYPE_HANDLER"),e.qZA(),e._uU(3," token to change cell's data-type attribute and customize its color. (The default color for Saturday and Sunday is var(--tui-negative)) "))}const Y=function(){return["/components/input-date"]},k=function(){return["/components/input-date-range"]};function j(n,r){if(1&n&&(e.TgZ(0,"p"),e._uU(1," A simple calendar. If you want a textfield with date, see "),e.TgZ(2,"a",2),e._uU(3," InputDate "),e.qZA(),e._uU(4," and "),e.TgZ(5,"a",2),e._uU(6," InputDateRange "),e.qZA(),e.qZA(),e.TgZ(7,"tui-doc-example",3),e._UZ(8,"tui-calendar-example-1"),e.qZA(),e.TgZ(9,"tui-doc-example",4),e._UZ(10,"tui-calendar-example-2"),e.qZA(),e.TgZ(11,"tui-doc-example",5),e._UZ(12,"tui-calendar-example-3"),e.qZA(),e.TgZ(13,"tui-doc-example",6),e.YNc(14,Q,4,0,"ng-template",null,7,e.W1O),e._UZ(16,"tui-calendar-example-4"),e.qZA(),e.TgZ(17,"tui-doc-example",8),e.YNc(18,S,4,0,"ng-template",null,9,e.W1O),e._UZ(20,"tui-calendar-example-5"),e.qZA(),e.TgZ(21,"tui-doc-example",10),e._UZ(22,"tui-calendar-example-6"),e.qZA(),e.TgZ(23,"tui-doc-example",11),e._UZ(24,"tui-calendar-example-7"),e.qZA()),2&n){const t=e.MAs(15),a=e.MAs(19),i=e.oxw();e.xp6(2),e.Q6J("routerLink",e.DdM(11,Y)),e.xp6(3),e.Q6J("routerLink",e.DdM(12,k)),e.xp6(2),e.Q6J("content",i.example1),e.xp6(2),e.Q6J("content",i.example2),e.xp6(2),e.Q6J("content",i.example3),e.xp6(2),e.Q6J("content",i.example4)("description",t),e.xp6(4),e.Q6J("content",i.example5)("description",a),e.xp6(4),e.Q6J("content",i.example6),e.xp6(2),e.Q6J("content",i.example7)}}function F(n,r){1&n&&(e.TgZ(0,"div"),e._uU(1,"A handler that gets a date and returns true if it is disabled."),e.qZA(),e.TgZ(2,"strong"),e._uU(3,"Must be a pure function"),e.qZA())}function O(n,r){1&n&&e._uU(0," Show adjacent months days ")}function R(n,r){1&n&&e._uU(0," Hovered date ")}function W(n,r){1&n&&e._uU(0," A handler that gets date and returns null or a tuple with circled marker colors ")}function z(n,r){1&n&&e._uU(0," Maximal date to choose ")}function B(n,r){1&n&&e._uU(0," Maximal month to access ")}function X(n,r){1&n&&e._uU(0," Minimum date to choose ")}function K(n,r){1&n&&e._uU(0," Minimum month to access ")}function G(n,r){1&n&&e._uU(0," Current month ")}function $(n,r){1&n&&e._uU(0," Selected day or range ")}function q(n,r){1&n&&e._uU(0," Date click ")}function b(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tui-doc-demo"),e.TgZ(1,"tui-calendar",13),e.NdJ("hoveredItemChange",function(i){return e.CHM(t),e.oxw().hoveredItem=i})("monthChange",function(i){return e.CHM(t),e.oxw().month=i})("dayClick",function(i){return e.CHM(t),e.MAs(14).emitEvent(i)}),e.qZA(),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,F,4,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().disabledItemHandler=i}),e.YNc(4,O,1,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().showAdjacent=i}),e.YNc(5,R,1,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().hoveredItem=i}),e.YNc(6,W,1,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().markerHandler=i}),e.YNc(7,z,1,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().max=i}),e.YNc(8,B,1,0,"ng-template",19),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().max=i}),e.YNc(9,X,1,0,"ng-template",20),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().min=i}),e.YNc(10,K,1,0,"ng-template",21),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().min=i}),e.YNc(11,G,1,0,"ng-template",22),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().month=i}),e.YNc(12,$,1,0,"ng-template",23),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().value=i}),e.YNc(13,q,1,0,"ng-template",24,25,e.W1O),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("disabledItemHandler",t.disabledItemHandler)("markerHandler",t.markerHandler)("max",t.max)("maxViewedMonth",t.maxViewedMonth)("min",t.min)("minViewedMonth",t.minViewedMonth)("showAdjacent",t.showAdjacent)("value",t.value)("hoveredItem",t.hoveredItem)("month",t.month),e.xp6(2),e.Q6J("documentationPropertyValues",t.disabledItemHandlerVariants)("documentationPropertyValue",t.disabledItemHandler),e.xp6(1),e.Q6J("documentationPropertyValue",t.showAdjacent),e.xp6(1),e.Q6J("documentationPropertyValue",t.hoveredItem),e.xp6(1),e.Q6J("documentationPropertyValues",t.markerHandlerVariants)("documentationPropertyValue",t.markerHandler),e.xp6(1),e.Q6J("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),e.xp6(1),e.Q6J("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),e.xp6(1),e.Q6J("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),e.xp6(1),e.Q6J("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),e.xp6(1),e.Q6J("documentationPropertyValue",t.month),e.xp6(1),e.Q6J("documentationPropertyValues",t.valueVariants)("documentationPropertyValue",t.value)}}function ee(n,r){if(1&n&&(e.TgZ(0,"ol",26),e.TgZ(1,"li"),e.TgZ(2,"p"),e._uU(3," Import "),e.TgZ(4,"code"),e._uU(5,"TuiCalendarModule"),e.qZA(),e._uU(6," into a module where you want to use our component "),e.qZA(),e._UZ(7,"tui-doc-code",27),e.qZA(),e.TgZ(8,"li"),e.TgZ(9,"p"),e._uU(10,"Add to the template:"),e.qZA(),e._UZ(11,"tui-doc-code",28),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(7),e.Q6J("code",t.exampleModule),e.xp6(4),e.Q6J("code",t.exampleHtml)}}const te=["var(--tui-primary)","var(--tui-info-fill)"],ne=["var(--tui-success-fill)"];let ae=(()=>{class n{constructor(){this.exampleModule=o.e(21580).then(o.t.bind(o,21580,17)),this.exampleHtml=o.e(84034).then(o.t.bind(o,84034,17)),this.example1={TypeScript:o.e(73773).then(o.t.bind(o,73773,17)),HTML:o.e(22029).then(o.t.bind(o,22029,17))},this.example2={TypeScript:o.e(80785).then(o.t.bind(o,80785,17)),HTML:o.e(97571).then(o.t.bind(o,97571,17))},this.example3={TypeScript:o.e(38596).then(o.t.bind(o,38596,17)),HTML:o.e(38918).then(o.t.bind(o,38918,17))},this.example4={TypeScript:o.e(92432).then(o.t.bind(o,92432,17)),HTML:o.e(48887).then(o.t.bind(o,48887,17))},this.example5={TypeScript:o.e(5657).then(o.t.bind(o,5657,17)),HTML:o.e(90903).then(o.t.bind(o,90903,17)),LESS:o.e(45575).then(o.t.bind(o,45575,17))},this.example6={TypeScript:o.e(42353).then(o.t.bind(o,42353,17)),HTML:o.e(81074).then(o.t.bind(o,81074,17))},this.example7={TypeScript:o.e(8088).then(o.t.bind(o,89602,17)),HTML:o.e(24892).then(o.t.bind(o,24892,17))},this.showAdjacent=!0,this.minVariants=[m.TUI_FIRST_DAY,new m.TuiDay(2017,2,5),new m.TuiDay(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[m.TUI_LAST_DAY,new m.TuiDay(2020,3,30),new m.TuiDay(2300,0,1)],this.max=this.maxVariants[0],this.minViewedMonthVariants=[new m.TuiMonth(0,0),new m.TuiMonth(2017,2),new m.TuiMonth(1900,0)],this.minViewedMonth=this.minViewedMonthVariants[0],this.maxViewedMonthVariants=[m.TUI_LAST_DAY,new m.TuiMonth(2020,3),new m.TuiMonth(2300,0)],this.maxViewedMonth=this.maxViewedMonthVariants[0],this.disabledItemHandlerVariants=[m.ALWAYS_FALSE_HANDLER,({day:t})=>t%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.markerHandlerVariants=[p.TUI_DEFAULT_MARKER_HANDLER,t=>t.day%2==0?te:ne],this.markerHandler=this.markerHandlerVariants[0],this.valueVariants=[m.TuiDay.currentLocal(),new m.TuiDayRange(m.TuiDay.currentLocal(),m.TuiDay.currentLocal().append({day:3})),new m.TuiDay(2020,3,21)],this.value=null,this.month=m.TuiMonth.currentLocal(),this.hoveredItem=null}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["example-tui-calendar"]],decls:4,vars:0,consts:[["header","Calendar","package","CORE","type","components"],["pageTab",""],["tuiLink","",3,"routerLink"],["id","base","heading","Basic",3,"content"],["id","range","heading","range",3,"content"],["id","markers","heading","With markers",3,"content"],["id","localization","heading","Localization",3,"content","description"],["localizationDescription",""],["id","color","heading","Color customization",3,"content","description"],["colorDescription",""],["id","select-multi-dates","heading","Select multiple dates",3,"content"],["id","year-view","heading","Open in year view",3,"content"],["fragment","first-day-of-week","routerLink","/utils/tokens","tuiLink",""],[3,"disabledItemHandler","markerHandler","max","maxViewedMonth","min","minViewedMonth","showAdjacent","value","hoveredItem","month","hoveredItemChange","monthChange","dayClick"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","showAdjacent","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","hoveredItem","documentationPropertyType","TuiDay | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","markerHandler","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","TuiDay | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxViewedMonth","documentationPropertyType","TuiMonth | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","TuiDay | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","minViewedMonth","documentationPropertyType","TuiMonth | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","month","documentationPropertyType","TuiMonth",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","value","documentationPropertyType","TuiDay | TuiDayRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","dayClick","documentationPropertyType","TuiDay"],["documentationPropertyDayClick","documentationProperty"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,a){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,j,25,13,"ng-template",1),e.YNc(2,b,15,27,"ng-template",1),e.YNc(3,ee,12,2,"ng-template",1),e.qZA())},directives:[C.q,T.n,g.V,c.yS,y.f,v,_,P,Z,A,D,N,J.F,d.a,U.z,w.B,L.c],encapsulation:2,changeDetection:0}),n})(),oe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.ez,c.Bz,p.TuiLinkModule,p.TuiCalendarModule,s.fV,c.Bz.forChild((0,s.Ve)(ae))]]}),n})()}}]);