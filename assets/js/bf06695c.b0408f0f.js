"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9394],{9117:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"language-elements/language-elements","title":"Language Elements - v2","description":"Textwire has a simple syntax that is easy to learn","source":"@site/versioned_docs/version-v2/language-elements/language-elements.md","sourceDirName":"language-elements","slug":"/language-elements/","permalink":"/docs/v2/language-elements/","draft":false,"unlisted":false,"tags":[],"version":"v2","sidebarPosition":5,"frontMatter":{"title":"Language Elements - v2","sidebar_label":"Language Elements","sidebar_position":5,"description":"Textwire has a simple syntax that is easy to learn"},"sidebar":"tutorialSidebar","previous":{"title":"Boolean Functions","permalink":"/docs/v2/functions/bool"},"next":{"title":"Statements","permalink":"/docs/v2/language-elements/statements"}}');var i=s(4848),r=s(8453);const d={title:"Language Elements - v2",sidebar_label:"Language Elements",sidebar_position:5,description:"Textwire has a simple syntax that is easy to learn"},l="Language Elements",c={},a=[{value:"Syntax",id:"syntax",level:2},{value:"Bracket statements",id:"bracket-statements",level:3},{value:"Directives",id:"directives",level:3},{value:"Types and Literals",id:"types-and-literals",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"language-elements",children:"Language Elements"})}),"\n",(0,i.jsx)(t.p,{children:"Textwire is designed to be easy to use for Go developers. It has a similar syntax to Go, but it is a separate language and has specific grammar to make it easier to use as a template language."}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.p,{children:"Textwire has a simple syntax that is easy to learn. Here are some rules that you need to follow when writing Textwire code:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["All the HTML files that you want to parse with Textwire must have a ",(0,i.jsx)(t.code,{children:".tw.html"})," extension."]}),"\n",(0,i.jsxs)(t.li,{children:["All the Textwire code must be inside of the ",(0,i.jsx)(t.code,{children:"{{ }}"})," brackets, or start with ",(0,i.jsx)(t.code,{children:"@"})," symbol."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"VSCode Extension",type:"info",children:(0,i.jsxs)(t.p,{children:["If you use VSCode code editor, you can use our ",(0,i.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire",children:"VSCode extension"})," to get syntax highlighting and other features for Textwire."]})}),"\n",(0,i.jsx)(t.h3,{id:"bracket-statements",children:"Bracket statements"}),"\n",(0,i.jsxs)(t.p,{children:["Bracket statements are special Textwire statements that start with ",(0,i.jsx)(t.code,{children:"{{"})," brackets and end with ",(0,i.jsx)(t.code,{children:"}}"}),". They can be used to define variables, perform arithmetic operations, conditionally render content and so on. Bracket statements can be placed anywhere in the file except inside of directives."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you want multiple expressions inside ",(0,i.jsx)(t.code,{children:"{{ }}"})," brackets, use ",(0,i.jsx)(t.code,{children:";"})," to separate them. For example: ",(0,i.jsx)(t.code,{children:"{{ x = 5; y = 10 }}"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["All the bracket statements return a string. For example, ",(0,i.jsx)(t.code,{children:"{{ x = 5 }}"})," will return an empty string, but ",(0,i.jsx)(t.code,{children:"{{ 5 + 5 }}"}),' will return "10".']}),"\n",(0,i.jsxs)(t.li,{children:["There are special bracket statements that need to be closed with ",(0,i.jsx)(t.code,{children:"{{ end }}"})," keyword. For example, ",(0,i.jsx)(t.a,{href:"/docs/v2/language-elements/statements#if-statement",children:"if statement"})," and ",(0,i.jsx)(t.a,{href:"/docs/v2/language-elements/statements#for-loop",children:"for statements"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["To escape ",(0,i.jsx)(t.code,{children:"{{ }}"})," brackets, you can use ",(0,i.jsx)(t.code,{children:"\\"}),". For example ",(0,i.jsx)(t.code,{children:"\\{{ x }}"})," will not be parsed as a bracket statement but as HTML."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"directives",children:"Directives"}),"\n",(0,i.jsxs)(t.p,{children:["Directives are special Textwire statements that start with ",(0,i.jsx)(t.code,{children:"@"})," symbol. They can be used to define a layout, insert content into reserved places, if statements and so on. Directives can be placed anywhere in the file except inside of ",(0,i.jsx)(t.code,{children:"{{ }}"})," brackets."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["To escape directive symbols, you can use ",(0,i.jsx)(t.code,{children:"\\"}),". For example ",(0,i.jsx)(t.code,{children:"\\@if(x == 1)"})," will not be parsed as a directive but as HTML"]}),"\n",(0,i.jsxs)(t.li,{children:["You can use textwire expressions and variables inside of directives. For example ",(0,i.jsx)(t.code,{children:"@if(x == 1)"})," or ",(0,i.jsx)(t.code,{children:"@use(layoutName)"})]}),"\n",(0,i.jsxs)(t.li,{children:["All the directives with body like ",(0,i.jsx)(t.code,{children:"@if"}),", ",(0,i.jsx)(t.code,{children:"@for"}),", ",(0,i.jsx)(t.code,{children:"@each"}),", ",(0,i.jsx)(t.code,{children:"@component"}),", etc. must be closed with ",(0,i.jsx)(t.code,{children:"@end"})," keyword"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"types-and-literals",children:"Types and Literals"}),"\n",(0,i.jsx)(t.p,{children:"Textwire has a different type system that Go. When you pass a variable to Textwire, it will be automatically converted to a Textwire type. Here is a list of supported types that you can pass to Textwire or define in Textwire:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Textwire type"}),(0,i.jsx)(t.th,{children:"Equivalent Go types"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Str"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Bool"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bool"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Int"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"int"}),", ",(0,i.jsx)(t.code,{children:"int8"}),", ",(0,i.jsx)(t.code,{children:"int16"}),", ",(0,i.jsx)(t.code,{children:"int32"}),", ",(0,i.jsx)(t.code,{children:"int64"}),", ",(0,i.jsx)(t.code,{children:"uint"}),", ",(0,i.jsx)(t.code,{children:"uint8"}),", ",(0,i.jsx)(t.code,{children:"uint16"}),", ",(0,i.jsx)(t.code,{children:"uint32"}),", ",(0,i.jsx)(t.code,{children:"uint64"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Float"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"float32"}),", ",(0,i.jsx)(t.code,{children:"float64"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Nil"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Array"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"[]string"}),", ",(0,i.jsx)(t.code,{children:"[]bool"}),", ",(0,i.jsx)(t.code,{children:"[]int"}),", ",(0,i.jsx)(t.code,{children:"[]int64"}),", ",(0,i.jsx)(t.code,{children:"[]int32"}),", ",(0,i.jsx)(t.code,{children:"[]int16"}),", ",(0,i.jsx)(t.code,{children:"[]int8"}),", ",(0,i.jsx)(t.code,{children:"[]uint"}),", ",(0,i.jsx)(t.code,{children:"[]uint64"}),", ",(0,i.jsx)(t.code,{children:"[]uint32"}),", ",(0,i.jsx)(t.code,{children:"[]uint16"}),", ",(0,i.jsx)(t.code,{children:"[]uint8"}),", ",(0,i.jsx)(t.code,{children:"[]float64"}),", ",(0,i.jsx)(t.code,{children:"[]float32"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Object"})}),(0,i.jsxs)(t.td,{children:["any struct can be just ",(0,i.jsx)(t.code,{children:"struct{}"})," or a typed struct like ",(0,i.jsx)(t.code,{children:"User{}"})," with any fields or a ",(0,i.jsx)(t.code,{children:"map"})," type like ",(0,i.jsx)(t.code,{children:"map[string]string"})," or something else"]})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The biggest difference in types and type literals between Textwire and Go is that Textwire's literals have functions that you can call on them. For example, you can call a ",(0,i.jsx)(t.code,{children:"split"})," function on a string literal like this: ",(0,i.jsx)(t.code,{children:'{{ "hello world".split(" ") }}'})," to get an array of strings ",(0,i.jsx)(t.code,{children:'["hello", "world"]'}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>l});var n=s(6540);const i={},r=n.createContext(i);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);