(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[1064],{82880:(e,t,n)=>{n.d(t,{b:()=>a});var i=n(64862),o=n(26215),l=n(57750);const r="Bell";class a extends l.O{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["","Some content"],this.hintDirectionVariants=i.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.inputModeVariants=["text","numeric"],this.customContentVariants=["",r,"tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=this.customContentVariants[0],this.inputMode=this.inputModeVariants[0],this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.filler="",this.minHeight=null,this.maxHeight=null,this.iconLeftVariants=["","tuiIconMailLarge","tuiIconPieChartLarge"],this.iconLeft=this.iconLeftVariants[0],this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0],this.dropdownOpen=new o.X(!1),this.dropdownAlignVariants=["left","right","center"],this.dropdownAlign=i.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["bottom","top"],this.dropdownDirection=i.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownMinHeight=i.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=i.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight,this.prefixVariants=["","$","GBP","Very long text"],this.prefix=this.prefixVariants[0],this.postfix=this.prefixVariants[0],this.dropdownOffset=i.TUI_DROPDOWN_DEFAULT_OPTIONS.offset}get customContent(){return this.customContentSelected===r?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}},98204:(e,t,n)=>{n.d(t,{x:()=>i});const i=new(n(74788).OlP)("[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class")},57750:(e,t,n)=>{n.d(t,{O:()=>i});class i{constructor(){this.pseudoVariants=[!1,!0],this.textAlignVariants=["left","right"],this.textAlign=this.textAlignVariants[0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}},1064:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiFilesModule:()=>Le});var i=n(12057),o=n(23738),l=n(33982),r=n(52404),a=n(64862),s=n(66259),c=n(74788),u=n(82880),p=n(98204),d=n(43560),m=n(93525),f=n(33772),h=n(79765),g=n(25917),x=n(46797),w=n(43190),y=n(88002),Z=n(68939),F=n(2216),T=n(90197),P=n(69699);function v(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-input-files",5),c.NdJ("reject",(function(t){return c.CHM(e),c.oxw().onReject(t)})),c.qZA()}if(2&e){const e=c.oxw();c.Q6J("formControl",e.control)}}function N(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-file",6),c.NdJ("removed",(function(){return c.CHM(e),c.oxw().removeFile()})),c.qZA()}if(2&e){const e=t.ngIf,n=c.oxw();c.Q6J("file",e)("showDelete",n.control.enabled)}}function C(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-file",7),c.NdJ("removed",(function(){return c.CHM(e),c.oxw().clearRejected()})),c.qZA()}if(2&e){const e=t.ngIf,n=c.oxw();c.Q6J("file",e)("showDelete",n.control.enabled)}}function V(e,t){if(1&e&&c._UZ(0,"tui-file",8),2&e){const e=t.ngIf,n=c.oxw();c.Q6J("file",e)("showDelete",n.control.enabled)}}let _=(()=>{class e{constructor(){this.control=new o.NI,this.rejectedFiles$=new h.xQ,this.loadingFiles$=new h.xQ,this.loadedFiles$=this.control.valueChanges.pipe((0,w.w)((e=>e?this.makeRequest(e):(0,g.of)(null))))}onReject(e){this.rejectedFiles$.next(e)}removeFile(){this.control.setValue(null)}clearRejected(){this.removeFile(),this.rejectedFiles$.next(null)}makeRequest(e){return this.loadingFiles$.next(e),(0,x.H)(1e3).pipe((0,y.U)((()=>Math.random()>.5?e:(this.rejectedFiles$.next(e),null))),(0,Z.x)((()=>this.loadingFiles$.next(null))))}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-files-example-1"]],decls:8,vars:10,consts:[["accept","image/*",3,"formControl","reject",4,"ngIf"],[1,"tui-space_top-1"],[3,"file","showDelete","removed",4,"ngIf"],["state","error",3,"file","showDelete","removed",4,"ngIf"],["state","loading",3,"file","showDelete",4,"ngIf"],["accept","image/*",3,"formControl","reject"],[3,"file","showDelete","removed"],["state","error",3,"file","showDelete","removed"],["state","loading",3,"file","showDelete"]],template:function(e,t){1&e&&(c.YNc(0,v,1,1,"tui-input-files",0),c.TgZ(1,"tui-files",1),c.YNc(2,N,1,2,"tui-file",2),c.ALo(3,"async"),c.YNc(4,C,1,2,"tui-file",3),c.ALo(5,"async"),c.YNc(6,V,1,2,"tui-file",4),c.ALo(7,"async"),c.qZA()),2&e&&(c.Q6J("ngIf",!t.control.value),c.xp6(2),c.Q6J("ngIf",c.lcZ(3,4,t.loadedFiles$)),c.xp6(2),c.Q6J("ngIf",c.lcZ(5,6,t.rejectedFiles$)),c.xp6(2),c.Q6J("ngIf",c.lcZ(7,8,t.loadingFiles$)))},directives:[i.O5,F.D,T.N,o.JJ,o.oH,P._],pipes:[i.Ov],encapsulation:2,changeDetection:0}),e})();var J=n(4797),A=n(36951),D=n(7114);function b(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-file",5),c.NdJ("removed",(function(){const t=c.CHM(e).$implicit;return c.oxw().removeFile(t)})),c.qZA()}if(2&e){const e=t.$implicit,n=c.oxw();c.Q6J("file",e)("showDelete",n.control.enabled)}}function I(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-file",6),c.NdJ("removed",(function(){const t=c.CHM(e).$implicit;return c.oxw().clearRejected(t)})),c.qZA()}if(2&e){const e=t.$implicit,n=c.oxw();c.Q6J("file",e)("showDelete",n.control.enabled)}}const M=function(){return["maxLength"]};let Q=(()=>{class e{constructor(){this.control=new o.NI([],[({value:e})=>e.length>5?{maxLength:new J.TuiValidationError("Error: maximum limit - 5 files for upload")}:null]),this.rejectedFiles=[]}ngOnInit(){this.control.statusChanges.subscribe((e=>{console.info("STATUS",e),console.info("ERRORS",this.control.errors,"\n")}))}onReject(e){this.rejectedFiles=[...this.rejectedFiles,...e]}removeFile({name:e}){var t,n;this.control.setValue(null!==(n=null===(t=this.control.value)||void 0===t?void 0:t.filter((t=>t.name!==e)))&&void 0!==n?n:[])}clearRejected({name:e}){this.rejectedFiles=this.rejectedFiles.filter((t=>t.name!==e))}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-files-example-2"]],decls:8,vars:13,consts:[["accept","image/*",3,"formControl","multiple","ngModelChange","reject"],[1,"tui-space_top-1"],[3,"file","showDelete","removed",4,"ngFor","ngForOf"],["state","error",3,"file","showDelete","removed",4,"ngFor","ngForOf"],[3,"error","formControl"],[3,"file","showDelete","removed"],["state","error",3,"file","showDelete","removed"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-input-files",0),c.NdJ("ngModelChange",(function(){return t.control.markAsTouched()}))("reject",(function(e){return t.onReject(e)})),c.qZA(),c.TgZ(1,"tui-files",1),c.YNc(2,b,1,2,"tui-file",2),c.ALo(3,"async"),c.YNc(4,I,1,2,"tui-file",3),c.qZA(),c._UZ(5,"tui-error",4),c.ALo(6,"async"),c.ALo(7,"tuiFieldError")),2&e&&(c.Q6J("formControl",t.control)("multiple",!0),c.xp6(2),c.Q6J("ngForOf",c.lcZ(3,6,t.control.valueChanges)),c.xp6(2),c.Q6J("ngForOf",t.rejectedFiles),c.xp6(1),c.Q6J("error",c.lcZ(6,8,c.lcZ(7,10,c.DdM(12,M))))("formControl",t.control))},directives:[T.N,o.JJ,o.oH,F.D,i.sg,A.v,P._],pipes:[i.Ov,D.A],encapsulation:2,changeDetection:0}),e})();var U=n(82707),O=n(66596),z=n(34880);function S(e,t){if(1&e&&c._UZ(0,"tui-file",7),2&e){const e=t.$implicit,n=c.oxw();c.Q6J("file",e)("showDelete",n.control.enabled)}}function q(e,t){if(1&e&&c._UZ(0,"tui-file",8),2&e){const e=t.$implicit,n=c.oxw();c.Q6J("file",e)("showDelete",n.control.enabled)}}function L(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-file",9),c.NdJ("removed",(function(){return c.CHM(e),c.oxw().removeLoading()})),c.qZA()}if(2&e){const e=c.oxw();c.Q6J("file",e.loadingFile)("showDelete",e.control.enabled)}}function H(e,t){if(1&e&&c._UZ(0,"tui-file",7),2&e){const e=c.oxw();c.Q6J("file",e.fileWithLink)("showDelete",e.control.enabled)}}function Y(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-file",10),c.TgZ(1,"button",11),c.NdJ("click",(function(){const t=c.CHM(e).$implicit;return c.oxw().restore(t)})),c._uU(2," Restore "),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit,n=c.oxw();c.Q6J("file",e)("showDelete",n.control.enabled)}}function k(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-file",12),c.NdJ("removed",(function(){const t=c.CHM(e).$implicit;return c.oxw().remove(t)})),c.qZA()}if(2&e){const e=t.$implicit,n=c.oxw(),i=c.MAs(14);c.Q6J("file",e)("leftContent",i)("showDelete",n.control.enabled)}}function j(e,t){1&e&&c._UZ(0,"tui-svg",13)}let E=(()=>{class e{constructor(e){this.isE2E=e,this.control=new o.NI,this.files=[{name:"Loaded.txt"},{name:"A file with a very very long title to check that it can be cut correctly.txt"}],this.loadingFile={name:"Loading file.txt"},this.rejectedFiles=[{name:"File with an error.txt",content:"Something went wrong this time"}],this.fileWithLink={name:"with link.txt",src:"https://tools.ietf.org/html/rfc675"},this.removedFiles=[this.loadingFile],this.restoredFiles=[]}removeLoading(){this.loadingFile=null}restore(e){e&&(this.restoredFiles=[...this.restoredFiles,e],this.removedFiles=this.removedFiles.filter((t=>e.name!==(null==t?void 0:t.name))))}remove(e){this.removedFiles=[...this.removedFiles,e],this.restoredFiles=this.restoredFiles.filter((t=>e.name!==(null==t?void 0:t.name)))}}return e.ɵfac=function(t){return new(t||e)(c.Y36(J.TUI_IS_E2E))},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-files-example-3"]],decls:15,vars:5,consts:[["state","normal",3,"file","showDelete",4,"ngFor","ngForOf"],["state","error",3,"file","showDelete",4,"ngFor","ngForOf"],["state","loading",3,"file","showDelete","removed",4,"ngIf"],["state","normal",3,"file","showDelete",4,"tuiItem"],["size","l","state","deleted",3,"file","showDelete",4,"ngFor","ngForOf"],["size","l","state","normal",3,"file","leftContent","showDelete","removed",4,"ngFor","ngForOf"],["icon",""],["state","normal",3,"file","showDelete"],["state","error",3,"file","showDelete"],["state","loading",3,"file","showDelete","removed"],["size","l","state","deleted",3,"file","showDelete"],["tuiLink","","type","button",3,"click"],["size","l","state","normal",3,"file","leftContent","showDelete","removed"],["src","tuiIconFileLarge"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-files"),c.YNc(1,S,1,2,"tui-file",0),c.YNc(2,q,1,2,"tui-file",1),c.YNc(3,L,1,2,"tui-file",2),c.qZA(),c.TgZ(4,"h4"),c._uU(5,"With link"),c.qZA(),c.TgZ(6,"tui-files"),c.YNc(7,H,1,2,"tui-file",3),c.qZA(),c.TgZ(8,"h4"),c._uU(9,"With deleted state"),c.qZA(),c.TgZ(10,"tui-files"),c.YNc(11,Y,3,2,"tui-file",4),c.YNc(12,k,1,3,"tui-file",5),c.qZA(),c.YNc(13,j,1,0,"ng-template",null,6,c.W1O)),2&e&&(c.xp6(1),c.Q6J("ngForOf",t.files),c.xp6(1),c.Q6J("ngForOf",t.rejectedFiles),c.xp6(1),c.Q6J("ngIf",t.loadingFile&&!t.isE2E),c.xp6(8),c.Q6J("ngForOf",t.removedFiles),c.xp6(1),c.Q6J("ngForOf",t.restoredFiles))},directives:[F.D,i.sg,i.O5,U.w,P._,O.V,z.P],encapsulation:2,changeDetection:0}),e})();function R(e,t){if(1&e&&c._UZ(0,"tui-file",3),2&e){const e=c.oxw().$implicit;c.Q6J("file",e)}}function $(e,t){1&e&&(c.ynx(0),c.YNc(1,R,1,1,"tui-file",2),c.BQk())}function W(e,t){if(1&e&&c._UZ(0,"tui-file",5),2&e){const e=c.oxw().$implicit;c.Q6J("file",e)}}function B(e,t){1&e&&(c.ynx(0),c.YNc(1,W,1,1,"tui-file",4),c.BQk())}let X=(()=>{class e{constructor(){this.height=3,this.control=new o.NI,this.files=[{name:"Loaded.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"last_file.txt"}],this.rejectedFiles=[{name:"File with an error.txt"}]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-files-example-4"]],decls:3,vars:3,consts:[[3,"max"],[4,"ngFor","ngForOf"],["state","normal",3,"file",4,"tuiItem"],["state","normal",3,"file"],["state","error",3,"file",4,"tuiItem"],["state","error",3,"file"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-files",0),c.YNc(1,$,2,0,"ng-container",1),c.YNc(2,B,2,0,"ng-container",1),c.qZA()),2&e&&(c.Q6J("max",3),c.xp6(1),c.Q6J("ngForOf",t.files),c.xp6(1),c.Q6J("ngForOf",t.rejectedFiles))},directives:[F.D,i.sg,U.w,P._],encapsulation:2,changeDetection:0}),e})();var K=n(86187);function G(e,t){1&e&&(c.TgZ(0,"div",6),c._UZ(1,"tui-marker-icon",7),c.TgZ(2,"div"),c._uU(3,"Drop it like it's hot!"),c.qZA(),c.qZA())}function ee(e,t){1&e&&(c.TgZ(0,"div",6),c._UZ(1,"tui-marker-icon",8),c.TgZ(2,"div"),c._uU(3," Drag and drop file here or "),c.TgZ(4,"a",9),c._uU(5,"click to upload"),c.qZA(),c.qZA(),c.qZA())}function te(e,t){if(1&e&&(c.YNc(0,G,4,0,"div",4),c.YNc(1,ee,6,0,"ng-template",null,5,c.W1O)),2&e){const e=t.$implicit,n=c.MAs(2);c.Q6J("ngIf",e)("ngIfElse",n)}}function ne(e,t){1&e&&c._UZ(0,"tui-svg",10)}let ie=(()=>{class e{constructor(){this.control=new o.NI,this.file={name:"custom.txt"}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-files-example-5"]],decls:8,vars:3,consts:[[1,"control",3,"formControl"],[3,"file","leftContent"],[1,"tui-text_body-s-2"],["content",""],["class","content",4,"ngIf","ngIfElse"],["base",""],[1,"content"],["mode","link","src","tuiIconDropletLarge"],["mode","link","src","tuiIconUploadCloudLarge"],["tuiLink",""],["src","tuiIconClockLarge"]],template:function(e,t){if(1&e&&(c.TgZ(0,"tui-input-files",0),c.YNc(1,te,3,2,"ng-template"),c.qZA(),c.TgZ(2,"tui-files"),c.TgZ(3,"tui-file",1),c.TgZ(4,"span",2),c._uU(5,"file is on checking"),c.qZA(),c.qZA(),c.qZA(),c.YNc(6,ne,1,0,"ng-template",null,3,c.W1O)),2&e){const e=c.MAs(7);c.Q6J("formControl",t.control),c.xp6(3),c.Q6J("file",t.file)("leftContent",e)}},directives:[T.N,o.JJ,o.oH,F.D,P._,i.O5,K.B,O.V,z.P],styles:[".control[_ngcontent-%COMP%]{height:10rem;margin-bottom:1rem}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;grid-gap:1rem;gap:1rem}"],changeDetection:0}),e})();var oe=n(79121),le=n(22640);function re(e,t){if(1&e&&(c.TgZ(0,"tui-input-files",3),c._UZ(1,"input",4),c.qZA()),2&e){const e=c.oxw();c.Q6J("formControl",e.control)}}function ae(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-file",5),c.NdJ("removed",(function(){return c.CHM(e),c.oxw().removeFile()})),c.qZA()}if(2&e){const e=t.ngIf;c.Q6J("file",e)}}let se=(()=>{class e{constructor(){this.control=new o.NI}removeFile(){this.control.setValue(null)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-files-example-6"]],decls:4,vars:4,consts:[[3,"formControl",4,"ngIf"],[1,"tui-space_top-1"],[3,"file","removed",4,"ngIf"],[3,"formControl"],["accept","image/*","capture","user","title","Choose files (no limits)","tuiInputFiles",""],[3,"file","removed"]],template:function(e,t){1&e&&(c.YNc(0,re,2,1,"tui-input-files",0),c.TgZ(1,"tui-files",1),c.YNc(2,ae,1,1,"tui-file",2),c.ALo(3,"async"),c.qZA()),2&e&&(c.Q6J("ngIf",!t.control.value),c.xp6(2),c.Q6J("ngIf",c.lcZ(3,2,t.control.valueChanges)))},directives:[i.O5,F.D,T.N,o.JJ,o.oH,le.K,P._],pipes:[i.Ov],encapsulation:2,changeDetection:0}),e})();var ce=n(10977),ue=n(61544),pe=n(60404),de=n(83074);function me(e,t){if(1&e&&(c.TgZ(0,"p"),c._uU(1,"An input for upload one or several files. It uses native input file abilities."),c.qZA(),c.TgZ(2,"tui-doc-example",2),c._UZ(3,"tui-input-files-example-1"),c.qZA(),c.TgZ(4,"tui-doc-example",3),c._UZ(5,"tui-input-files-example-2"),c.qZA(),c.TgZ(6,"tui-doc-example",4),c._UZ(7,"tui-input-files-example-3"),c.qZA(),c.TgZ(8,"tui-doc-example",5),c._UZ(9,"tui-input-files-example-4"),c.qZA(),c.TgZ(10,"tui-doc-example",6),c._UZ(11,"tui-input-files-example-5"),c.qZA(),c.TgZ(12,"tui-doc-example",7),c.TgZ(13,"tui-notification",8),c._uU(14," The capture attribute works only on mobile browsers "),c.qZA(),c._UZ(15,"tui-input-files-example-6"),c.qZA()),2&e){const e=c.oxw();c.xp6(2),c.Q6J("content",e.example1),c.xp6(2),c.Q6J("content",e.example2),c.xp6(2),c.Q6J("content",e.example3),c.xp6(2),c.Q6J("content",e.example4),c.xp6(2),c.Q6J("content",e.example5),c.xp6(2),c.Q6J("content",e.example6)}}function fe(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-file",39),c.NdJ("removed",(function(t){c.CHM(e);const n=c.oxw().$implicit;c.oxw(2);const i=c.MAs(30);return c.oxw().removeFile(n),i.emitEvent(t)})),c.qZA()}if(2&e){const e=c.oxw().$implicit,t=c.oxw(3);c.Q6J("file",e)("showDelete",t.showDelete)("showSize",t.showSize)("size",t.size)}}function he(e,t){1&e&&(c.ynx(0),c.YNc(1,fe,1,4,"tui-file",38),c.BQk())}function ge(e,t){if(1&e&&(c.ynx(0),c.YNc(1,he,2,0,"ng-container",14),c.ALo(2,"async"),c.BQk()),2&e){const e=c.oxw(2);c.xp6(1),c.Q6J("ngForOf",c.lcZ(2,1,e.control.valueChanges))}}function xe(e,t){if(1&e&&c._UZ(0,"tui-file",42),2&e){const e=c.oxw().ngIf,t=c.oxw(3);c.Q6J("file",e)("showDelete",t.showDelete)("showSize",t.showSize)("size",t.size)}}function we(e,t){1&e&&(c.ynx(0),c.YNc(1,xe,1,4,"tui-file",41),c.BQk())}function ye(e,t){if(1&e&&c.YNc(0,we,2,0,"ng-container",40),2&e){const e=c.oxw(2);c.Q6J("ngIf",e.control.value)}}function Ze(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-file",44),c.NdJ("removed",(function(){c.CHM(e);const t=c.oxw().$implicit;return c.oxw(2).removeRejected(t)})),c.qZA()}if(2&e){const e=c.oxw().$implicit,t=c.oxw(2);c.Q6J("file",e)("showDelete",t.showDelete)("showSize",t.showSize)("size",t.size)}}function Fe(e,t){1&e&&(c.ynx(0),c.YNc(1,Ze,1,4,"tui-file",43),c.BQk())}function Te(e,t){1&e&&(c._uU(0," Disabled state (use "),c.TgZ(1,"code"),c._uU(2,"formControl.disable()"),c.qZA(),c._uU(3," ) "))}function Pe(e,t){1&e&&c._uU(0," Label text ")}function ve(e,t){1&e&&c._uU(0," Link text ")}function Ne(e,t){1&e&&c._uU(0," Max file size in bytes (30 MB by default — 30 * 1000 * 1000) ")}function Ce(e,t){1&e&&c._uU(0," Emits file that was rejected. ")}function Ve(e,t){1&e&&c._uU(0," Allowed formats ")}function _e(e,t){1&e&&c._uU(0," Allowed capture ")}function Je(e,t){1&e&&c._uU(0," Allows to upload several files ")}function Ae(e,t){1&e&&c._uU(0," Maximum number of displayed files ")}function De(e,t){1&e&&c._uU(0," Expanded/collapsed state for multiple files that are limited by the max property ")}function be(e,t){1&e&&c._uU(0," Allow to delete file after attach it ")}function Ie(e,t){1&e&&c._uU(0," File ")}function Me(e,t){1&e&&c._uU(0," State of the file ")}function Qe(e,t){1&e&&c._uU(0," Show file size ")}function Ue(e,t){1&e&&c._uU(0," Component size ")}function Oe(e,t){1&e&&c._uU(0," Emits file on click on close button. When subscribed to, close button appears. ")}function ze(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-doc-demo"),c.TgZ(1,"tui-input-files",9),c.NdJ("reject",(function(t){c.CHM(e);const n=c.MAs(14);return c.oxw().updateRejected(t),n.emitEvent(t)})),c._UZ(2,"input",10),c.qZA(),c.TgZ(3,"tui-files",11),c.NdJ("expandedChange",(function(t){return c.CHM(e),c.oxw().expanded=t})),c.YNc(4,ge,3,3,"ng-container",12),c.YNc(5,ye,1,1,"ng-template",null,13,c.W1O),c.YNc(7,Fe,2,0,"ng-container",14),c.qZA(),c.qZA(),c.TgZ(8,"tui-doc-documentation",15),c.YNc(9,Te,4,0,"ng-template",16),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().disabled=t})),c.YNc(10,Pe,1,0,"ng-template",17),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().label=t})),c.YNc(11,ve,1,0,"ng-template",18),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().link=t})),c.YNc(12,Ne,1,0,"ng-template",19),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().maxFileSize=t})),c.YNc(13,Ce,1,0,"ng-template",20,21,c.W1O),c.qZA(),c.TgZ(15,"tui-doc-documentation",22),c._UZ(16,"tui-doc-code",23),c.YNc(17,Ve,1,0,"ng-template",24),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().accept=t})),c.YNc(18,_e,1,0,"ng-template",25),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().capture=t})),c.YNc(19,Je,1,0,"ng-template",26),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().multipleChange(t)})),c.qZA(),c.TgZ(20,"tui-doc-documentation",27),c.YNc(21,Ae,1,0,"ng-template",28),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().maxFilesCount=t})),c.YNc(22,De,1,0,"ng-template",29),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().expanded=t})),c.qZA(),c.TgZ(23,"tui-doc-documentation",30),c.YNc(24,be,1,0,"ng-template",31),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().showDelete=t})),c.YNc(25,Ie,1,0,"ng-template",32),c.YNc(26,Me,1,0,"ng-template",33),c.YNc(27,Qe,1,0,"ng-template",34),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().showSize=t})),c.YNc(28,Ue,1,0,"ng-template",35),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().size=t})),c.YNc(29,Oe,1,0,"ng-template",36,37,c.W1O),c.qZA()}if(2&e){const e=c.MAs(6),t=c.oxw();c.xp6(1),c.Q6J("focusable",t.focusable)("formControl",t.control)("label",t.label)("link",t.link)("maxFileSize",t.maxFileSize)("pseudoActive",t.pseudoPressed)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered),c.xp6(1),c.Q6J("accept",t.accept)("multiple",t.multiple),c.uIk("capture",t.capture),c.xp6(1),c.Q6J("max",t.maxFilesCount)("expanded",t.expanded),c.xp6(1),c.Q6J("ngIf",t.multiple)("ngIfElse",e),c.xp6(3),c.Q6J("ngForOf",t.rejectedFiles),c.xp6(2),c.Q6J("documentationPropertyValue",t.disabled),c.xp6(1),c.Q6J("documentationPropertyValue",t.label),c.xp6(1),c.Q6J("documentationPropertyValue",t.link),c.xp6(1),c.Q6J("documentationPropertyValues",t.maxFileSizeVariants)("documentationPropertyValue",t.maxFileSize),c.xp6(4),c.Q6J("code",t.nativeInputInsideInputFiles),c.xp6(1),c.Q6J("documentationPropertyValues",t.acceptVariants)("documentationPropertyValue",t.accept),c.xp6(1),c.Q6J("documentationPropertyValues",t.captureVariants)("documentationPropertyValue",t.capture),c.xp6(1),c.Q6J("documentationPropertyValue",t.multiple),c.xp6(2),c.Q6J("documentationPropertyValue",t.maxFilesCount),c.xp6(1),c.Q6J("documentationPropertyValue",t.expanded),c.xp6(2),c.Q6J("documentationPropertyValues",t.showDeleteVariants)("documentationPropertyValue",t.showDelete),c.xp6(3),c.Q6J("documentationPropertyValue",t.showSize),c.xp6(1),c.Q6J("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size)}}function Se(e,t){if(1&e&&(c.TgZ(0,"ol",45),c.TgZ(1,"li"),c.TgZ(2,"p"),c._uU(3," Import "),c.TgZ(4,"code"),c._uU(5,"TuiInputFilesModule"),c.qZA(),c._uU(6," into a module where you want to use our component "),c.qZA(),c._UZ(7,"tui-doc-code",46),c.qZA(),c.TgZ(8,"li"),c.TgZ(9,"p"),c._uU(10,"Add to the template:"),c.qZA(),c._UZ(11,"tui-doc-code",47),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.xp6(7),c.Q6J("code",e.exampleModule),c.xp6(4),c.Q6J("code",e.exampleHtml)}}let qe=(()=>{class e extends u.b{constructor(){super(...arguments),this.exampleModule=n.e(67504).then(n.t.bind(n,67504,17)),this.exampleHtml=n.e(44703).then(n.t.bind(n,44703,17)),this.nativeInputInsideInputFiles=n.e(36515).then(n.t.bind(n,36515,17)),this.example1={TypeScript:n.e(40922).then(n.t.bind(n,40922,17)),HTML:n.e(66769).then(n.t.bind(n,66769,17))},this.example2={TypeScript:n.e(37803).then(n.t.bind(n,37803,17)),HTML:n.e(39928).then(n.t.bind(n,39928,17))},this.example3={TypeScript:n.e(7077).then(n.t.bind(n,7077,17)),HTML:n.e(45754).then(n.t.bind(n,45754,17))},this.example4={TypeScript:n.e(20604).then(n.t.bind(n,20604,17)),HTML:n.e(79375).then(n.t.bind(n,79375,17))},this.example5={TypeScript:n.e(75558).then(n.t.bind(n,75558,17)),HTML:n.e(6690).then(n.t.bind(n,6690,17)),LESS:n.e(78407).then(n.t.bind(n,78407,17))},this.example6={TypeScript:n.e(48544).then(n.t.bind(n,48544,17)),HTML:n.e(54640).then(n.t.bind(n,54640,17))},this.control=new o.NI,this.link="Choose a file",this.label="or drop it here",this.multiple=!0,this.showSize=!0,this.showDelete=!0,this.expanded=!1,this.maxFilesCount=3,this.accept="",this.acceptVariants=["image/*","application/pdf","image/*,application/pdf"],this.capture=null,this.captureVariants=[null,"user","environment"],this.showDeleteVariants=[!0,!1,"always"],this.maxFileSizeVariants=[100,512e3,3e7,22e5],this.sizeVariants=["m","l"],this.size=this.sizeVariants[0],this.rejectedFiles=[],this.maxFileSize=this.maxFileSizeVariants[2]}removeFile(e){this.control.setValue(this.control.value.filter((t=>t.name!==e.name)))}removeRejected(e){this.rejectedFiles=this.rejectedFiles.filter((t=>t.name!==e.name))}updateRejected(e){this.rejectedFiles=[...this.rejectedFiles,...Array.isArray(e)?e:[e]]}multipleChange(e){this.rejectedFiles=[],this.control.setValue(null),this.multiple=e}}return e.ɵfac=function(){let t;return function(n){return(t||(t=c.n5z(e)))(n||e)}}(),e.ɵcmp=c.Xpm({type:e,selectors:[["example-tui-input-files"]],features:[c._Bn([{provide:p.x,useExisting:(0,c.Gpc)((()=>e))}]),c.qOj],decls:4,vars:0,consts:[["header","InputFiles","package","KIT","type","components"],["pageTab",""],["id","single","heading","Basic single",3,"content"],["id","multiple","heading","multiple",3,"content"],["id","standalone-files","heading","Standalone files",3,"content"],["id","with-button","heading","With button",3,"content"],["id","custom","heading","Custom content",3,"content"],["id","front-camera","heading","Camera capture",3,"content"],["status","warning",1,"tui-space_bottom-4"],[3,"focusable","formControl","label","link","maxFileSize","pseudoActive","pseudoFocus","pseudoHover","reject"],["tuiInputFiles","",3,"accept","multiple"],[1,"tui-space_top-2",3,"max","expanded","expandedChange"],[4,"ngIf","ngIfElse"],["single",""],[4,"ngFor","ngForOf"],["heading","TuiInputFiles"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","label","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","link","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxFileSize","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","reject","documentationPropertyType","TuiFileLike"],["documentationPropertyReject","documentationProperty"],["heading","Native <input> inside TuiInputFiles"],[3,"code"],["documentationPropertyMode","input","documentationPropertyName","accept","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","attr.capture","documentationPropertyType","'user' | 'environment' | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","multiple","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","TuiFiles"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","expanded","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","TuiFile"],["documentationPropertyMode","input","documentationPropertyName","showDelete","documentationPropertyType","boolean | 'always'",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","file","documentationPropertyType","TuiFileLike"],["documentationPropertyMode","input","documentationPropertyName","state","documentationPropertyType","TuiFileState"],["documentationPropertyMode","input","documentationPropertyName","showSize","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","removed","documentationPropertyType","TuiFileLike"],["documentationPropertyRemoved","documentationProperty"],[3,"file","showDelete","showSize","size","removed",4,"tuiItem"],[3,"file","showDelete","showSize","size","removed"],[4,"ngIf"],[3,"file","showDelete","showSize","size",4,"tuiItem"],[3,"file","showDelete","showSize","size"],["state","error",3,"file","showDelete","showSize","size","removed",4,"tuiItem"],["state","error",3,"file","showDelete","showSize","size","removed"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,me,16,6,"ng-template",1),c.YNc(2,ze,31,34,"ng-template",1),c.YNc(3,Se,12,2,"ng-template",1),c.qZA())},directives:[d.q,m.n,f.f,_,Q,E,X,ie,oe.L,se,ce.F,T.N,o.JJ,o.oH,le.K,F.D,i.O5,i.sg,ue.z,pe.B,de.c,U.w,P._],pipes:[i.Ov],encapsulation:2,changeDetection:0}),e})(),Le=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=c.oAB({type:e}),e.ɵinj=c.cJS({imports:[[i.ez,o.UX,s.TuiFilesModule,s.TuiInputFilesModule,a.TuiLinkModule,a.TuiButtonModule,a.TuiSvgModule,a.TuiErrorModule,s.TuiFieldErrorPipeModule,a.TuiNotificationModule,s.TuiMarkerIconModule,r.fV,l.Bz.forChild((0,r.Ve)(qe))]]}),e})()}}]);