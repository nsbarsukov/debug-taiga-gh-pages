"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[41195],{41195:(b,m,a)=>{a.r(m),a.d(m,{ExampleTuiAvatarModule:()=>G});var u=a(12057),v=a(52404),g=a(64862),s=a(45578),x=a(91211),t=a(74788),T=a(43560),Z=a(93525),A=a(79121),h=a(33772),l=a(46516),p=a(24233);let f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-avatar-example-1"]],decls:14,vars:7,consts:[["src","tuiIconUserLarge"],[3,"src"],["src","AI"],["media","(min-width: 600px)","srcset","/assets/images/angular.svg"],["alt","Alex Inkin","src","/assets/images/avatar.jpg"],["autoplay","","loop","","playsinline","",3,"muted"],["src","/assets/media/bbb.mp4","type","video/mp4"]],template:function(n,i){1&n&&(t._UZ(0,"tui-avatar",0),t._UZ(1,"tui-avatar",1),t.ALo(2,"async"),t.ALo(3,"tuiFallbackSrc"),t._UZ(4,"tui-avatar",2),t.TgZ(5,"tui-avatar"),t._uU(6,"99+"),t.qZA(),t.TgZ(7,"tui-avatar"),t.TgZ(8,"picture"),t._UZ(9,"source",3),t._UZ(10,"img",4),t.qZA(),t.qZA(),t.TgZ(11,"tui-avatar"),t.TgZ(12,"video",5),t._UZ(13,"source",6),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("src",t.lcZ(2,2,t.xi3(3,4,"https://avatars.githubusercontent.com/u/11832552","tuiIconUserLarge"))),t.xp6(11),t.Q6J("muted",!0))},directives:[l.J],pipes:[u.Ov,p.S],styles:["[_nghost-%COMP%]{display:flex;grid-gap:1rem;gap:1rem}"],changeDetection:0}),e})();var y=a(1090),d=a(52994);let U=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-avatar-example-2"]],decls:6,vars:4,consts:[["src","tuiIconUserLarge",1,"avatar"],["src","AI",1,"text"],[1,"text"],["tuiFade",""]],template:function(n,i){1&n&&(t._UZ(0,"tui-avatar",0),t.TgZ(1,"tui-avatar",1),t.ALo(2,"tuiAutoColor"),t.qZA(),t.TgZ(3,"tui-avatar",2),t.TgZ(4,"div",3),t._uU(5,"Fading"),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Udp("background",t.lcZ(2,2,"AI")))},directives:[l.J,y.X],pipes:[d.$],styles:["[_nghost-%COMP%]{display:flex;grid-gap:1rem;gap:1rem}.avatar[_ngcontent-%COMP%]{background:var(--tui-accent);color:var(--tui-text-01-night)}.text[_ngcontent-%COMP%]{background:var(--tui-base-05);color:var(--tui-text-01-night)}"],changeDetection:0}),e})(),E=(()=>{class e{constructor(){this.names=["Jason Statham","Silvester Stallone","Jackie Chan"]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-avatar-example-3"]],decls:12,vars:0,consts:[["size","xxl"],["size","xl"],["size","l"],["size","m"],["size","s"],["size","xs"]],template:function(n,i){1&n&&(t.TgZ(0,"tui-avatar",0),t._uU(1,"XXL"),t.qZA(),t.TgZ(2,"tui-avatar",1),t._uU(3,"XL"),t.qZA(),t.TgZ(4,"tui-avatar",2),t._uU(5,"L"),t.qZA(),t.TgZ(6,"tui-avatar",3),t._uU(7,"M"),t.qZA(),t.TgZ(8,"tui-avatar",4),t._uU(9,"S"),t.qZA(),t.TgZ(10,"tui-avatar",5),t._uU(11,"XS"),t.qZA())},directives:[l.J],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;grid-gap:1rem;gap:1rem}"],changeDetection:0}),e})();var J=a(87772),L=a(39413);function C(e,o){if(1&e&&(t.TgZ(0,"tui-avatar",4),t.ALo(1,"tuiAutoColor"),t.ALo(2,"tuiInitials"),t.qZA()),2&e){const n=o.$implicit,i=t.oxw(),c=i.odd,r=i.$implicit;t.Udp("background",t.lcZ(1,5,n)),t.Q6J("round",c)("size",r)("src",t.lcZ(2,7,n))}}function S(e,o){if(1&e&&(t.TgZ(0,"tui-avatar-stack",1),t.YNc(1,C,3,9,"tui-avatar",2),t.TgZ(2,"tui-avatar",3),t._uU(3," 99+ "),t.qZA(),t.qZA()),2&e){const n=o.$implicit,i=o.odd,c=t.oxw();t.Q6J("direction",i?"left":"right"),t.xp6(1),t.Q6J("ngForOf",c.names),t.xp6(1),t.Q6J("round",i)("size",n)}}let z=(()=>{class e{constructor(){this.names=["Jason Statham","Silvester Stallone","Jackie Chan"],this.sizes=["xxl","xl","l","m","s","xs"]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-avatar-example-4"]],decls:1,vars:1,consts:[["class","tui-space_vertical-4",3,"direction",4,"ngFor","ngForOf"],[1,"tui-space_vertical-4",3,"direction"],[3,"round","size","src","background",4,"ngFor","ngForOf"],["size","l",3,"round","size"],[3,"round","size","src"]],template:function(n,i){1&n&&t.YNc(0,S,4,4,"tui-avatar-stack",0),2&n&&t.Q6J("ngForOf",i.sizes)},directives:[u.sg,J.D,l.J],pipes:[d.$,L.X],encapsulation:2,changeDetection:0}),e})(),M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-avatar-example-5"]],features:[t._Bn([(0,s.ug)({size:"l"})])],decls:1,vars:0,consts:[["src","DI"]],template:function(n,i){1&n&&t._UZ(0,"tui-avatar",0)},directives:[l.J],encapsulation:2,changeDetection:0}),e})();var P=a(62915);let F=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-avatar-example-6"]],decls:20,vars:30,consts:[["label","Grigori Constantinopolsky"],[3,"src"],["label","Nikolai Rimsky-Korsakov"],["label","Hubert Wolfflegelstainhausenbergedorf"],["label","Arkhangelsky Constantine"],["label","Zoya Kosmodemyanskaya"]],template:function(n,i){1&n&&(t.TgZ(0,"tui-avatar-labeled",0),t._UZ(1,"tui-avatar",1),t.ALo(2,"async"),t.ALo(3,"tuiFallbackSrc"),t.qZA(),t.TgZ(4,"tui-avatar-labeled",2),t._UZ(5,"tui-avatar",1),t.ALo(6,"async"),t.ALo(7,"tuiFallbackSrc"),t.qZA(),t.TgZ(8,"tui-avatar-labeled",3),t._UZ(9,"tui-avatar",1),t.ALo(10,"async"),t.ALo(11,"tuiFallbackSrc"),t.qZA(),t.TgZ(12,"tui-avatar-labeled",4),t._UZ(13,"tui-avatar",1),t.ALo(14,"async"),t.ALo(15,"tuiFallbackSrc"),t.qZA(),t.TgZ(16,"tui-avatar-labeled",5),t._UZ(17,"tui-avatar",1),t.ALo(18,"async"),t.ALo(19,"tuiFallbackSrc"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("src",t.lcZ(2,5,t.xi3(3,7,"https://avatars.githubusercontent.com/u/10106368","tuiIconUserLarge"))),t.xp6(4),t.Q6J("src",t.lcZ(6,10,t.xi3(7,12,"https://avatars.githubusercontent.com/u/11832552","tuiIconUserLarge"))),t.xp6(4),t.Q6J("src",t.lcZ(10,15,t.xi3(11,17,"https://avatars.githubusercontent.com/u/46284632","tuiIconUserLarge"))),t.xp6(4),t.Q6J("src",t.lcZ(14,20,t.xi3(15,22,"https://avatars.githubusercontent.com/u/35179038","tuiIconUserLarge"))),t.xp6(4),t.Q6J("src",t.lcZ(18,25,t.xi3(19,27,"https://avatars.githubusercontent.com/u/8158578","tuiIconUserLarge"))))},directives:[P.B,l.J],pipes:[u.Ov,p.S],styles:["[_nghost-%COMP%]{display:flex;grid-gap:1rem;gap:1rem}tui-avatar[_ngcontent-%COMP%]{border:1px solid var(--tui-base-04)}"],changeDetection:0}),e})();var Q=a(13424);let V=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-avatar-example-7"]],decls:4,vars:4,consts:[["size","m","src","tuiIconHeart","tuiAvatarOutline",""],["size","l","tuiAvatarOutline","var(--tui-accent)"],["alt","Alex Inkin","src","/assets/images/avatar.jpg"],["size","xl","src","OK","tuiAvatarOutline","linear-gradient(#c86dd7, #3023ae)"]],template:function(n,i){1&n&&(t._UZ(0,"tui-avatar",0),t.TgZ(1,"tui-avatar",1),t._UZ(2,"img",2),t.qZA(),t._UZ(3,"tui-avatar",3)),2&n&&(t.xp6(3),t.Udp("background","linear-gradient(#3023ae, #c86dd7)")("color","#fff"))},directives:[l.J,Q._],styles:["[_nghost-%COMP%]{display:flex;grid-gap:1rem;gap:1rem}"],changeDetection:0}),e})();var I=a(27027);let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-avatar-example-8"]],features:[t._Bn([(0,s.ug)({size:"l"})])],decls:3,vars:3,consts:[["alt","Visa",3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"tui-avatar"),t._UZ(1,"img",0),t.ALo(2,"tuiIcon"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("src",t.lcZ(2,1,"tuiIconVisa"),t.LSH))},directives:[l.J],pipes:[I.v],encapsulation:2,changeDetection:0}),e})();var N=a(10977),H=a(61544),X=a(60404),D=a(83074);function Y(e,o){if(1&e&&(t.TgZ(0,"tui-notification",2),t._uU(1," This code is "),t.TgZ(2,"strong"),t._uU(3,"experimental"),t.qZA(),t._uU(4," and is a subject to change. Expect final solution to be shipped in the next major version "),t.qZA(),t.TgZ(5,"p"),t._uU(6,"New version for Avatar component following updated design specs for displaying text, pictures and icons."),t.qZA(),t.TgZ(7,"tui-doc-example",3),t.TgZ(8,"tui-notification",4),t._uU(9," This example requires import of "),t.TgZ(10,"code"),t._uU(11,"TuiFallbackSrcModule"),t.qZA(),t.qZA(),t._UZ(12,"tui-avatar-example-1"),t.qZA(),t.TgZ(13,"tui-doc-example",5),t.TgZ(14,"tui-notification",4),t._uU(15," This example requires import of "),t.TgZ(16,"code"),t._uU(17,"TuiFadeModule"),t.qZA(),t.qZA(),t._UZ(18,"tui-avatar-example-2"),t.qZA(),t.TgZ(19,"tui-doc-example",6),t._UZ(20,"tui-avatar-example-3"),t.qZA(),t.TgZ(21,"tui-doc-example",7),t.TgZ(22,"tui-notification",4),t._uU(23," This example requires import of "),t.TgZ(24,"code"),t._uU(25,"TuiAvatarStackModule"),t.qZA(),t.qZA(),t._UZ(26,"tui-avatar-example-4"),t.qZA(),t.TgZ(27,"tui-doc-example",8),t._UZ(28,"tui-avatar-example-5"),t.qZA(),t.TgZ(29,"tui-doc-example",9),t.TgZ(30,"tui-notification",4),t._uU(31," This example requires import of "),t.TgZ(32,"code"),t._uU(33,"TuiAvatarLabeledModule"),t.qZA(),t.qZA(),t._UZ(34,"tui-avatar-example-6"),t.qZA(),t.TgZ(35,"tui-doc-example",10),t.TgZ(36,"tui-notification",4),t._uU(37," This example requires import of "),t.TgZ(38,"code"),t._uU(39,"TuiAvatarOutlineModule"),t.qZA(),t.qZA(),t._UZ(40,"tui-avatar-example-7"),t.qZA(),t.TgZ(41,"tui-doc-example",11),t._UZ(42,"tui-avatar-example-8"),t.qZA()),2&e){const n=t.oxw();t.xp6(7),t.Q6J("content",n.example1),t.xp6(6),t.Q6J("content",n.example2),t.xp6(6),t.Q6J("content",n.example3),t.xp6(2),t.Q6J("content",n.example4),t.xp6(6),t.Q6J("content",n.example5),t.xp6(2),t.Q6J("content",n.example6),t.xp6(6),t.Q6J("content",n.example7),t.xp6(6),t.Q6J("content",n.example8)}}function j(e,o){1&e&&t._uU(0," Use round shape ")}function B(e,o){1&e&&t._uU(0," Size ")}function R(e,o){1&e&&(t._uU(0," Initials, image URL, or icon name. Alternatively you can pass text as "),t.TgZ(1,"code"),t._uU(2,"ng-content"),t.qZA(),t._uU(3," which would be styled differently from initials and fade if overflown "))}function $(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"tui-doc-demo"),t._UZ(1,"tui-avatar",12),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,j,1,0,"ng-template",13),t.NdJ("documentationPropertyValueChange",function(c){return t.CHM(n),t.oxw().round=c}),t.YNc(4,B,1,0,"ng-template",14),t.NdJ("documentationPropertyValueChange",function(c){return t.CHM(n),t.oxw().size=c}),t.YNc(5,R,4,0,"ng-template",15),t.NdJ("documentationPropertyValueChange",function(c){return t.CHM(n),t.oxw().src=c}),t.qZA()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("round",n.round)("size",n.size)("src",n.src),t.xp6(2),t.Q6J("documentationPropertyValue",n.round),t.xp6(1),t.Q6J("documentationPropertyValues",n.sizes)("documentationPropertyValue",n.size),t.xp6(1),t.Q6J("documentationPropertyValues",n.srcVariants)("documentationPropertyValue",n.src)}}function K(e,o){if(1&e&&(t.TgZ(0,"ol",16),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3,"Import module:"),t.qZA(),t._UZ(4,"tui-doc-code",17),t.qZA(),t.TgZ(5,"li"),t.TgZ(6,"p"),t._uU(7,"Add to the template:"),t.qZA(),t._UZ(8,"tui-doc-code",18),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(4),t.Q6J("code",n.exampleModule),t.xp6(4),t.Q6J("code",n.exampleHtml)}}let W=(()=>{class e{constructor(n){this.sanitizer=n,this.exampleModule=a.e(90098).then(a.t.bind(a,90098,17)),this.exampleHtml=a.e(71799).then(a.t.bind(a,71799,17)),this.example1={TypeScript:a.e(65028).then(a.t.bind(a,65028,17)),HTML:a.e(33788).then(a.t.bind(a,33788,17))},this.example2={TypeScript:a.e(49999).then(a.t.bind(a,56287,17)),HTML:a.e(73205).then(a.t.bind(a,73205,17)),LESS:a.e(71088).then(a.t.bind(a,71088,17))},this.example3={TypeScript:a.e(63754).then(a.t.bind(a,63754,17)),HTML:a.e(58025).then(a.t.bind(a,58025,17))},this.example4={TypeScript:a.e(16453).then(a.t.bind(a,16453,17)),HTML:a.e(77005).then(a.t.bind(a,77005,17))},this.example5={TypeScript:a.e(68274).then(a.t.bind(a,68274,17)),HTML:a.e(4068).then(a.t.bind(a,4068,17))},this.example6={TypeScript:a.e(64477).then(a.t.bind(a,64477,17)),HTML:a.e(42903).then(a.t.bind(a,42903,17)),LESS:a.e(4004).then(a.t.bind(a,4004,17))},this.example7={TypeScript:a.e(93804).then(a.t.bind(a,93804,17)),HTML:a.e(23423).then(a.t.bind(a,23423,17)),LESS:a.e(864).then(a.t.bind(a,864,17))},this.example8={TypeScript:a.e(57646).then(a.t.bind(a,57646,17)),HTML:a.e(32814).then(a.t.bind(a,32814,17))},this.sizes=["xs","s","m","l","xl","xxl"],this.size=this.sizes[3],this.srcVariants=["MW","https://avatars.githubusercontent.com/u/11832552","https://taiga-ui.dev/assets/images/test-not-found.png","tuiIconUserLarge",this.sanitizer.bypassSecurityTrustResourceUrl("https://avatars.githubusercontent.com/u/10106368")],this.src=this.srcVariants[0],this.round=!0}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(x.H7))},e.\u0275cmp=t.Xpm({type:e,selectors:[["example-avatar"]],decls:4,vars:0,consts:[["header","Avatar","package","EXPERIMENTAL","type","components"],["pageTab",""],["status","warning"],["id","content","heading","Content types",3,"content"],[1,"tui-space_bottom-4"],["id","color","heading","Colors",3,"content"],["id","size","heading","Sizes",3,"content"],["id","stacking","heading","Stacking",3,"content"],["id","options","heading","Options with DI",3,"content"],["id","labeled","heading","Labeled",3,"content"],["id","outline","heading","Outline",3,"content"],["id","colored","heading","Nested colored",3,"content"],[3,"round","size","src"],["documentationPropertyMode","input","documentationPropertyName","round","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeS | TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","src","documentationPropertyType","SafeResourceUrl | string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(n,i){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,Y,43,8,"ng-template",1),t.YNc(2,$,6,8,"ng-template",1),t.YNc(3,K,9,2,"ng-template",1),t.qZA())},directives:[T.q,Z.n,A.L,h.f,f,U,E,z,M,F,V,O,N.F,l.J,H.z,X.B,D.c],encapsulation:2,changeDetection:0}),e})();a(41841);let G=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,s.Jm,s.JW,s.Tq,s.DF,s.uA,s.uE,g.TuiNotificationModule,s.H8,s.me,s.Zi,(0,v.bG)(W)]]}),e})()}}]);