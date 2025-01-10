"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6827],{7088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"functions/bool","title":"Boolean Functions - v2","description":"Explore the various boolean functions available in Textwire","source":"@site/versioned_docs/version-v2/functions/bool.md","sourceDirName":"functions","slug":"/functions/bool","permalink":"/docs/v2/functions/bool","draft":false,"unlisted":false,"tags":[],"version":"v2","sidebarPosition":5,"frontMatter":{"title":"Boolean Functions - v2","sidebar_label":"Boolean Functions","sidebar_position":5,"description":"Explore the various boolean functions available in Textwire"},"sidebar":"tutorialSidebar","previous":{"title":"Float Functions","permalink":"/docs/v2/functions/float"},"next":{"title":"Language Elements","permalink":"/docs/v2/language-elements/"}}');var s=t(4848),l=t(8453);const r={title:"Boolean Functions - v2",sidebar_label:"Boolean Functions",sidebar_position:5,description:"Explore the various boolean functions available in Textwire"},o="Boolean Functions",a={},c=[{value:"binary",id:"binary",level:2},{value:"Input example",id:"input-example",level:4},{value:"Output",id:"output",level:4},{value:"then",id:"then",level:2},{value:"Arguments",id:"arguments",level:4},{value:"Input example",id:"input-example-1",level:4},{value:"Output",id:"output-1",level:4}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"boolean-functions",children:"Boolean Functions"})}),"\n",(0,s.jsx)(n.h2,{id:"binary",children:"binary"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"binary(): int\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns an integer ",(0,s.jsx)(n.code,{children:"1"})," if the receiver is true, ",(0,s.jsx)(n.code,{children:"0"})," otherwise"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"<b>{{ true.binary() }}</b>\n<b>{{ false.binary() }}</b>\n"})}),"\n",(0,s.jsx)(n.h4,{id:"output",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"<b>1</b>\n<b>0</b>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"then",children:"then"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"then(consequence: any, alternative?: any = nil): any\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns the ",(0,s.jsx)(n.code,{children:"consequence"})," if the receiver is true, otherwise returns the ",(0,s.jsx)(n.code,{children:"alternative"}),". The ",(0,s.jsx)(n.code,{children:"alternative"})," is optional and defaults to ",(0,s.jsx)(n.code,{children:"nil"})]}),"\n",(0,s.jsx)(n.h4,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"consequence"})," (any) - The value to return if the receiver is true"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"alternative"})," (any) - The value to return if the receiver is false. Default is ",(0,s.jsx)(n.code,{children:"nil"}),", which will be converted to an empty string when rendered in the template"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-1",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'<b>{{ true.then("Yes", "No") }}</b>\n<b>{{ false.then("Yes", "No") }}</b>\n<b>{{ false.then("Yes") }}</b>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-1",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"<b>Yes</b>\n<b>No</b>\n<b></b>\n"})})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);