(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[80831],{80831:(e,o,t)=>{t.r(o),t.d(o,{JestModule:()=>l});var s=t(12057),i=t(33982),n=t(52404),u=t(64862),a=t(74788),r=t(43560),c=t(83074);let d=(()=>{class e{constructor(){this.jestConfigJs=t.e(32033).then(t.t.bind(t,32033,17)),this.packageJson=t.e(91173).then(t.t.bind(t,91173,17)),this.setupJestJs=t.e(83380).then(t.t.bind(t,83380,17))}}return e.ɵfac=function(o){return new(o||e)},e.ɵcmp=a.Xpm({type:e,selectors:[["jest"]],decls:67,vars:3,consts:[["header","Jest"],[1,"tui-list"],[1,"tui-list__item"],["filename","jest.config.js",3,"code"],["filename","package.json",3,"code"],["filename","setup-jest.js",3,"code"]],template:function(e,o){1&e&&(a.TgZ(0,"tui-doc-page",0),a.TgZ(1,"p"),a._uU(2," If you use Jest to run your tests, you need additional configuration because Jest is running on a Node.js emulator. "),a.qZA(),a.TgZ(3,"p"),a._uU(4," Taiga UI uses "),a.TgZ(5,"code"),a._uU(6,"@ng-web-apis/common"),a.qZA(),a._uU(7," to avoid accessing global variables like "),a.TgZ(8,"code"),a._uU(9,"window"),a.qZA(),a._uU(10," or "),a.TgZ(11,"code"),a._uU(12,"navigator"),a.qZA(),a._uU(13," directly. Which requires Server Side Rendering (SSR) with the help of its sister library "),a.TgZ(14,"code"),a._uU(15,"@ng-web-apis/universal"),a.qZA(),a._uU(16," for Jest to run properly. "),a.qZA(),a.TgZ(17,"p"),a._uU(18," Otherwise, you're gonna face errors like "),a.TgZ(19,"code"),a._uU(20,"ReferenceError: IntersectionObserver is not defined"),a.qZA(),a.qZA(),a.TgZ(21,"h2"),a._uU(22," Using "),a.TgZ(23,"code"),a._uU(24,"@angular-builders/jest"),a.qZA(),a._uU(25," or "),a.TgZ(26,"code"),a._uU(27,"jest-preset-angular"),a.qZA(),a.qZA(),a.TgZ(28,"p"),a._uU(29,"If you're using one of these libraries. You can follow the following steps :"),a.qZA(),a.TgZ(30,"ol",1),a.TgZ(31,"li",2),a._uU(32," Install "),a.TgZ(33,"code"),a._uU(34,"npm i @ng-web-apis/universal --save-dev"),a.qZA(),a._uU(35," (install it as a devDependency only if you will use it for Jest, otherwise install it as a regular dependency). Install 2.0 and above for Taiga UI 3.0 and above, otherwise install 1.x.x. "),a.qZA(),a.TgZ(36,"li",2),a._uU(37," Add a "),a.TgZ(38,"code"),a._uU(39,"setupFilesAfterEnv"),a.qZA(),a._uU(40," property to your "),a.TgZ(41,"code"),a._uU(42,"jest.config.js"),a.qZA(),a._uU(43," or "),a.TgZ(44,"code"),a._uU(45,"package.json"),a.qZA(),a._uU(46," jest configuration (depending on where your configuration is) with the path to "),a.TgZ(47,"code"),a._uU(48,"setup-jest.js"),a.qZA(),a._uU(49," if you have not already. "),a._UZ(50,"tui-doc-code",3),a._uU(51," or "),a._UZ(52,"tui-doc-code",4),a.qZA(),a.TgZ(53,"li",2),a._uU(54," Create the file "),a.TgZ(55,"code"),a._uU(56,"setup-jest.js"),a.qZA(),a._uU(57," (wherever you want as long as it's at the path referenced above) if you have not already. For example here at the root of the project. "),a.qZA(),a.TgZ(58,"li",2),a._uU(59," Add the following line to the "),a.TgZ(60,"code"),a._uU(61,"setup-jest.js"),a.qZA(),a._uU(62," : "),a.TgZ(63,"code"),a._uU(64,"import '@ng-web-apis/universal/mocks';"),a.qZA(),a._uU(65," . "),a._UZ(66,"tui-doc-code",5),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(50),a.Q6J("code",o.jestConfigJs),a.xp6(2),a.Q6J("code",o.packageJson),a.xp6(14),a.Q6J("code",o.setupJestJs))},directives:[r.q,c.c],encapsulation:2,changeDetection:0}),e})(),l=(()=>{class e{}return e.ɵfac=function(o){return new(o||e)},e.ɵmod=a.oAB({type:e}),e.ɵinj=a.cJS({imports:[[s.ez,n.fV,u.TuiLinkModule,i.Bz.forChild((0,n.Ve)(d))]]}),e})()}}]);