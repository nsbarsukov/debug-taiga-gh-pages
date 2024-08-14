(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72036],{72036:(t,e,o)=>{o.r(e),o.d(e,{default:()=>C});var n=o(66094),i=o(39527),r=o(37109),a=o(68879),u=o(29389),s=o(94344),c=o(43921),p=o(35548),d=o(39628),l=o(42436),m=o(9627);function h(t,e){1&t&&(p.TgZ(0,"p",13),p._uU(1,"The first step is to choose the size of metadata."),p.qZA(),p.TgZ(2,"tui-notification")(3,"div")(4,"strong"),p._uU(5,"Google"),p.qZA(),p.TgZ(6,"a",14),p._uU(7," uses "),p.qZA(),p._uU(8," the word "),p.TgZ(9,"strong"),p._uU(10,'"metadata"'),p.qZA(),p._uU(11," to refer to all information about phone numbering in a particular country - what the country code, international and national dialling prefixes are, what carrier codes are operational, which phone numbers are possible or valid for a particular country, how to optimally format them, which prefixes represent a particular geographical area, etc. "),p.qZA()(),p.TgZ(12,"p"),p._uU(13," The complete list of all phone rules is huge, so "),p.TgZ(14,"code"),p._uU(15,"libphonenumber-js"),p.qZA(),p._uU(16,' provides different "metadata" sets to provides a way to optimize bundle size by choosing between '),p.TgZ(17,"strong"),p._uU(18,"max"),p.qZA(),p._uU(19," , "),p.TgZ(20,"strong"),p._uU(21,"min"),p.qZA(),p._uU(22," (default value) and "),p.TgZ(23,"strong"),p._uU(24,"mobile"),p.qZA(),p._uU(25," sets. "),p.qZA(),p.TgZ(26,"p",15),p._uU(27," Read in-depth "),p.TgZ(28,"a",16),p._uU(29," description about every set "),p.qZA(),p._uU(30," . "),p.qZA())}function g(t,e){1&t&&(p._uU(0," Parameter "),p.TgZ(1,"code"),p._uU(2,"countries"),p.qZA(),p._uU(3," allows you to choose which countries user can select from the dropdown. "),p.TgZ(4,"p",13),p._uU(5," You can even pick all possible countries by built-in utility "),p.TgZ(6,"code"),p._uU(7,"getCountries"),p.qZA(),p._uU(8," from "),p.TgZ(9,"code"),p._uU(10,"libphonenumber-js"),p.qZA(),p._uU(11," . "),p.qZA(),p.TgZ(12,"p",15),p._uU(13," Use "),p.TgZ(14,"code"),p._uU(15,"TuiSortCountriesPipe"),p.qZA(),p._uU(16," to sort countries according to your current language. "),p.qZA())}function Z(t,e){1&t&&(p.TgZ(0,"code"),p._uU(1,"InputPhoneInternational"),p.qZA(),p._uU(2," internally uses "),p.TgZ(3,"strong"),p._uU(4,"Maskito"),p.qZA(),p._uU(5," to format phone number. "),p._UZ(6,"br"),p._uU(7," Don't hesitate to use it too to manually format any phone number. "))}function f(t,e){if(1&t&&(p.TgZ(0,"p"),p._uU(1,"Allows to input phone number in international format"),p.qZA(),p.TgZ(2,"p")(3,"code"),p._uU(4,"InputPhoneInternational"),p.qZA(),p._uU(5," is based on "),p.TgZ(6,"a",3)(7,"strong"),p._uU(8,"@maskito/phone"),p.qZA()(),p._uU(9," and "),p.TgZ(10,"a",4)(11,"strong"),p._uU(12,"libphonenumber-js"),p.qZA()(),p._uU(13," libraries. "),p.qZA(),p.TgZ(14,"tui-notification")(15,"div")(16,"a",5)(17,"strong"),p._uU(18,"libphonenumber"),p.qZA()(),p._uU(19," is an ultimate phone number formatting and parsing library developed by "),p.TgZ(20,"strong"),p._uU(21,"Google"),p.qZA(),p._uU(22," . "),p.TgZ(23,"p"),p._uU(24," This library "),p.TgZ(25,"a",6),p._uU(26," collects "),p.qZA(),p._uU(27," the latest phone number rules from ITU documents, user bug reports, telecom company home pages and government telecommunication authorities. It is always up-to-date (for more than 10 years), and releases are published almost every month. It means that "),p.TgZ(28,"code"),p._uU(29,"InputPhoneInternational"),p.qZA(),p._uU(30," has the robust source of truth! "),p.qZA()()(),p.TgZ(31,"tui-doc-example",7),p.ALo(32,"tuiComponent"),p.ALo(33,"tuiExample"),p.YNc(34,h,31,0,"ng-template",null,8,p.W1O),p.qZA(),p.TgZ(36,"tui-doc-example",9),p.ALo(37,"tuiComponent"),p.ALo(38,"tuiExample"),p.YNc(39,g,17,0,"ng-template",null,10,p.W1O),p.qZA(),p.TgZ(41,"tui-doc-example",11),p.ALo(42,"tuiComponent"),p.ALo(43,"tuiExample"),p.YNc(44,Z,8,0,"ng-template",null,12,p.W1O),p.qZA()),2&t){const t=p.MAs(35),e=p.MAs(40),o=p.MAs(45);p.xp6(31),p.Q6J("component",p.lcZ(32,9,1))("content",p.xi3(33,11,1,"html,ts"))("description",t),p.xp6(5),p.Q6J("component",p.lcZ(37,14,2))("content",p.xi3(38,16,2,"html,ts"))("description",e),p.xp6(5),p.Q6J("component",p.lcZ(42,19,3))("content",p.xi3(43,21,3,"ts"))("description",o)}}function b(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"tui-input-phone-international",21),p.NdJ("countryIsoCodeChange",(function(e){p.CHM(t);const o=p.oxw(2);return p.KtG(o.countryIsoCode=e)})),p._uU(1," Type a phone number "),p.qZA()}if(2&t){const t=p.oxw(2);p.Q6J("countries",t.countries)("formControl",t.control)("invalid",t.pseudoInvalid)("readOnly",t.readOnly)("tuiDropdownDirection",t.dropdownDirection)("tuiDropdownMaxHeight",t.dropdownMaxHeight)("tuiDropdownMinHeight",t.dropdownMinHeight)("tuiDropdownOffset",t.dropdownOffset)("tuiHintAppearance",t.hintAppearance)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldSize",t.size)("countryIsoCode",t.countryIsoCode)}}function y(t,e){1&t&&(p._uU(0," Disabled state (use "),p.TgZ(1,"code"),p._uU(2,"formControl.disable()"),p.qZA(),p._uU(3," ) "))}function U(t,e){1&t&&p._uU(0," Array of ISO-codes of countries to choose ")}function _(t,e){1&t&&p._uU(0," ISO-code of selected country ")}function A(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"tui-doc-demo",17),p.YNc(1,b,2,14,"ng-template"),p.qZA(),p.TgZ(2,"tui-doc-documentation"),p.YNc(3,y,4,0,"ng-template",18),p.NdJ("documentationPropertyValueChange",(function(e){p.CHM(t);const o=p.oxw();return p.KtG(o.disabled=e)})),p.YNc(4,U,1,0,"ng-template",19),p.NdJ("documentationPropertyValueChange",(function(e){p.CHM(t);const o=p.oxw();return p.KtG(o.countries=e)})),p.YNc(5,_,1,0,"ng-template",20),p.NdJ("documentationPropertyValueChange",(function(e){p.CHM(t);const o=p.oxw();return p.KtG(o.countryIsoCode=e)})),p.qZA(),p._UZ(6,"inherited-documentation")}if(2&t){const t=p.oxw();p.Q6J("control",t.control),p.xp6(3),p.Q6J("documentationPropertyValue",t.disabled),p.xp6(1),p.Q6J("documentationPropertyValues",t.countriesVariants)("documentationPropertyValue",t.countries),p.xp6(1),p.Q6J("documentationPropertyValues",t.countryIsoCodeVariants)("documentationPropertyValue",t.countryIsoCode)}}function T(t,e){1&t&&p._UZ(0,"tui-setup")}const C=(()=>{var t;class e extends s.b{constructor(){super(...arguments),this.countriesVariants=[["RU","KZ","UA","BY"],(0,a.o)()],this.countries=this.countriesVariants[0],this.countryIsoCodeVariants=["RU","KZ","UA","BY"],this.countryIsoCode=this.countryIsoCodeVariants[0],this.cleaner=!1,this.control=new n.NI("",[n.kI.required,n.kI.minLength(9)])}}return(t=e).ɵfac=function(){let e;return function(o){return(e||(e=p.n5z(t)))(o||t)}}(),t.ɵcmp=p.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[p._Bn([(0,i.Q2E)(u.x,t)]),p.qOj,p.jDz],decls:4,vars:0,consts:[["header","InputPhoneInternational","package","KIT","type","components"],["pageTab",""],[4,"pageTab"],["href","https://maskito.dev/addons/phone","target","_blank","tuiLink",""],["href","https://www.npmjs.com/package/libphonenumber-js","target","_blank","tuiLink",""],["href","https://github.com/google/libphonenumber","target","_blank","tuiLink",""],["tuiLink","https://github.com/google/libphonenumber/blob/master/FAQ.md#where-do-we-get-information-from-to-determine-if-a-number-range-is-valid"],["id","metadata","heading","Choose metadata",3,"component","content","description"],["metadataDescription",""],["id","countries","heading","Choose any countries",3,"component","content","description"],["selectCountriesDescription",""],["id","phone-format-helpers","heading","Use phone format helpers",3,"component","content","description"],["phoneFormatHelpersDescription",""],[1,"tui-space_top-0"],["href","https://github.com/google/libphonenumber/blob/master/FAQ.md#what-do-we-mean-by-metadata","target","_blank","tuiLink",""],[1,"tui-space_bottom-0"],["href","https://github.com/catamphetamine/libphonenumber-js?tab=readme-ov-file#min-vs-max-vs-mobile-vs-core","target","_blank","tuiLink",""],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","countries","documentationPropertyType","ReadonlyArray<TuiCountryIsoCode>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","countryIsoCode","documentationPropertyType","TuiCountryIsoCode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"countries","formControl","invalid","readOnly","tuiDropdownDirection","tuiDropdownMaxHeight","tuiDropdownMinHeight","tuiDropdownOffset","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldSize","countryIsoCode","countryIsoCodeChange"]],template:function(t,e){1&t&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,f,46,24,"ng-template",1),p.YNc(2,A,7,6,"ng-template",1),p.YNc(3,T,1,0,"tui-setup",2),p.qZA())},dependencies:[c.C,d.oI,d.Cv,d.cJ,d.b7,d.xR,d.Cn,l.lI3,l.tK9,m.RC,m.I0,m.J3,l.Ekv,l.bZA,r.uTp,l.qmE,n.UX,n.JJ,n.oH],encapsulation:2,changeDetection:0}),e})()}}]);