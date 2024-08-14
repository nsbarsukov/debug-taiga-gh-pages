"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[63377],{63377:(q,O,v)=>{v.r(O),v.d(O,{default:()=>Z});const g="[A-Za-z$_][0-9A-Za-z$_]*",M=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],w=["true","false","null","undefined","NaN","Infinity"],L=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],k=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],x=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],h=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],D=[].concat(x,L,k);function Z(n){const e=function(n){const e=n.regex,t=g,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(a,l)=>{const b=a[0].length+a.index,T=a.input[b];if("<"===T||","===T)return void l.ignoreMatch();let C;">"===T&&(((a,{after:l})=>{const b="</"+a[0].slice(1);return-1!==a.input.indexOf(b,l)})(a,{after:b})||l.ignoreMatch());const F=a.input.substring(b);((C=F.match(/^\s*=/))||(C=F.match(/^\s+extends\s+/))&&0===C.index)&&l.ignoreMatch()}},c={$pattern:g,keyword:M,literal:w,built_in:D,"variable.language":h},A="[0-9](_?[0-9])*",i=`\\.(${A})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",S={className:"number",variants:[{begin:`(\\b(${E})((${i})|\\.)?|(${i}))[eE][+-]?(${A})\\b`},{begin:`\\b(${E})\\b((${i})\\b|\\.)?|(${i})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},s={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,r],subLanguage:"xml"}},N={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,r],subLanguage:"css"}},m={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,r],subLanguage:"graphql"}},d={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,r]},y={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},B=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,s,N,m,d,{match:/\$\d+/},S];r.contains=B.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(B)});const U=[].concat(y,r.contains),I=U.concat([{begin:/(\s*)\(/,end:/\)/,keywords:c,contains:["self"].concat(U)}]),u={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:I},z={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,e.concat(t,"(",e.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},P={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...L,...k]}},K={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[u],illegal:/%/},X={match:e.concat(/\b/,(a=[...x,"super","import"].map(a=>`${a}\\s*\\(`),e.concat("(?!",a.join("|"),")")),t,e.lookahead(/\s*\(/)),className:"title.function",relevance:0},J={begin:e.concat(/\./,e.lookahead(e.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Q={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},u]},$="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",V={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead($)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[u]};var a;return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:I,CLASS_REFERENCE:P},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,s,N,m,d,y,{match:/\$\d+/},S,P,{className:"attr",begin:t+e.lookahead(":"),relevance:0},V,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[y,n.REGEXP_MODE,{className:"function",begin:$,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:I}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},K,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[u,n.inherit(n.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},J,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[u]},X,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},z,Q,{match:/\$[(.]/}]}}(n),t=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],_={begin:[/namespace/,/\s+/,n.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},R={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:t},contains:[e.exports.CLASS_REFERENCE]},A={$pattern:g,keyword:M.concat(["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"]),literal:w,built_in:D.concat(t),"variable.language":h},i={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},E=(s,N,m)=>{const d=s.contains.findIndex(p=>p.label===N);if(-1===d)throw new Error("can not find mode to replace");s.contains.splice(d,1,m)};Object.assign(e.keywords,A),e.exports.PARAMS_CONTAINS.push(i);const S=e.contains.find(s=>"attr"===s.className);return e.exports.PARAMS_CONTAINS.push([e.exports.CLASS_REFERENCE,S]),e.contains=e.contains.concat([i,_,R]),E(e,"shebang",n.SHEBANG()),E(e,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),e.contains.find(s=>"func.def"===s.label).relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),e}}}]);