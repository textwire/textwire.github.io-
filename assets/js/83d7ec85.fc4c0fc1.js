"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[702],{9144:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"language-elements/literals","title":"Literals - v2","description":"Learn about Textwire literals like string, int, float, bool, nil, array, objects, etc.","source":"@site/versioned_docs/version-v2/language-elements/literals.md","sourceDirName":"language-elements","slug":"/language-elements/literals","permalink":"/docs/v2/language-elements/literals","draft":false,"unlisted":false,"tags":[],"version":"v2","sidebarPosition":4,"frontMatter":{"title":"Literals - v2","sidebar_label":"Literals","sidebar_position":4,"description":"Learn about Textwire literals like string, int, float, bool, nil, array, objects, etc."},"sidebar":"tutorialSidebar","previous":{"title":"Expressions","permalink":"/docs/v2/language-elements/expressions"},"next":{"title":"Other Information","permalink":"/docs/v2/language-elements/other"}}');var a=i(4848),r=i(8453);const s={title:"Literals - v2",sidebar_label:"Literals",sidebar_position:4,description:"Learn about Textwire literals like string, int, float, bool, nil, array, objects, etc."},t="Literals",o={},c=[{value:"String literals",id:"string-literals",level:2},{value:"Integer literals",id:"integer-literals",level:2},{value:"Nil literal",id:"nil-literal",level:2},{value:"Float literals",id:"float-literals",level:2},{value:"Boolean literals",id:"boolean-literals",level:2},{value:"Array literals",id:"array-literals",level:2},{value:"Object literals",id:"object-literals",level:2},{value:"Shorthand property notation",id:"shorthand-property-notation",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"literals",children:"Literals"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Literals","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#string-literals",children:"String literals"})," ",(0,a.jsx)(n.code,{children:'{{ "Hello, World!" }}'})," or ",(0,a.jsx)(n.code,{children:"{{ `Hello, World!` }}"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#integer-literals",children:"Integer literals"})," ",(0,a.jsx)(n.code,{children:"{{ 123 }}"})," or ",(0,a.jsx)(n.code,{children:"{{ -234 }}"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#float-literals",children:"Float literals"})," ",(0,a.jsx)(n.code,{children:"{{ 123.456 }}"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#boolean-literals",children:"Boolean literals"})," ",(0,a.jsx)(n.code,{children:"{{ true }}"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#nil-literal",children:"Nil literal"})," ",(0,a.jsx)(n.code,{children:"{{ nil }}"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#array-literals",children:"Array literals"})," ",(0,a.jsx)(n.code,{children:"{{ [1, 2, 3] }}"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#object-literals",children:"Object literals"})," ",(0,a.jsx)(n.code,{children:'{{ { "name": "John", "age": 25 } }}'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"string-literals",children:"String literals"}),"\n",(0,a.jsx)(n.p,{children:"You can use string literals and concatenate them with other strings. You can use double or single quotes for strings. Here is an example of using string literals:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-textwire",children:"{{ \"Hello\" + 'World!' }}\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["When you print a string, it will be automatically escaped. If you want to print a string without escaping it, you can use the a ",(0,a.jsx)(n.a,{href:"/docs/v2/functions/str#raw",children:"raw()"})," function on strings. Example: ",(0,a.jsx)(n.code,{children:'{{ "<h1>Test</h1>".raw() }}'})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"integer-literals",children:"Integer literals"}),"\n",(0,a.jsx)(n.p,{children:"You can use integer literals and perform arithmetic operations with them. Here is an example of using integer literals:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-textwire",children:"<span>{{ 1 + 2 }}</span>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"nil-literal",children:"Nil literal"}),"\n",(0,a.jsx)(n.p,{children:"You can use nil literal to check if a variable is nil. Here is an example of using nil literal:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-textwire",children:"@if(nil)\n    <p>It will not be displayed</p>\n@end\n"})}),"\n",(0,a.jsx)(n.h2,{id:"float-literals",children:"Float literals"}),"\n",(0,a.jsx)(n.p,{children:"You can use float literals and perform arithmetic operations with them. Here is an example of using float literals:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-textwire",children:"<span>{{ 1.534 + 2.5 }}</span>\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Precision limit",type:"warning",children:(0,a.jsxs)(n.p,{children:["Most languages (including Textwire) use ",(0,a.jsx)(n.strong,{children:"IEEE 754 standard"})," for floating-point numbers. These floating-point types have a finite precision and are unable to accurately represent more than approximately 15-17 digits. For example ",(0,a.jsx)(n.code,{children:"1234567890.1234567890"})," will be rounded to ",(0,a.jsx)(n.code,{children:"1234567890.1234567"})," in Textwire because of the precision limit of floating-point numbers. If you need to work with large numbers, you can keep them as strings."]})}),"\n",(0,a.jsx)(n.h2,{id:"boolean-literals",children:"Boolean literals"}),"\n",(0,a.jsx)(n.p,{children:"You can use boolean literals to check if a variable is true or false. Here is an example of using boolean literals:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-textwire",children:"@if(true)\n    <p>Is tall</p>\n@end\n"})}),"\n",(0,a.jsx)(n.h2,{id:"array-literals",children:"Array literals"}),"\n",(0,a.jsx)(n.p,{children:"Defining an array in Textwire is done is a similar way as in other languages. Here is an example of defining an array:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-textwire",children:'{{ names = ["John", "Jane", "Jack"] }}\n\n<ul>\n    @each(name in names)\n        <li>{{ name }}</li>\n        <li>{{ loop.index }}</li> \x3c!-- Index of the current item --\x3e\n    @end\n</ul>\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can access values in an array by using an index. Here is an example of accessing values in an array:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-textwire",children:'{{ names = ["John", "Jane", "Jack"] }}\n\n<ul>\n    <li>{{ names[0] }}</li> \x3c!-- "John" --\x3e\n    <li>{{ names[1] }}</li> \x3c!-- "Jane" --\x3e\n    <li>{{ names[2] }}</li> \x3c!-- "Jack" --\x3e\n</ul>\n'})}),"\n",(0,a.jsx)(n.h2,{id:"object-literals",children:"Object literals"}),"\n",(0,a.jsx)(n.p,{children:"Objects in Textwire are very similar to JavaScript object with key-value pairs. Here is an example of defining an object:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-textwire",children:'{{ person = {"name": "John", "age": 25} }}\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can also use key names without quotes if your keys are valid identifiers:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-textwire",children:'{{ person = { name: "John", age: 25 } }}\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can access values in an object by using a key. Here is an example of accessing values in an object:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-textwire",children:'{{ user = {age: 25, name: {first: "Anna", last: "Cho"}} }}\n\n<ul>\n    <li>First name: {{ user.name.first }}</li> \x3c!-- "Anna" --\x3e\n    <li>Last name: {{ user.name.last }}</li> \x3c!-- "Cho" --\x3e\n    <li>Age: {{ user.age }}</li> \x3c!-- 25 --\x3e\n</ul>\n'})}),"\n",(0,a.jsx)(n.admonition,{title:"Case insensitive fields",type:"tip",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Object fields are case insensitive"}),". It means that you can access fields in an object by using any case. For example, ",(0,a.jsx)(n.code,{children:"{{ user.name.first }}"})," and ",(0,a.jsx)(n.code,{children:"{{ user.Name.First }}"})," will return the same value. It's done this way for convenience."]})}),"\n",(0,a.jsx)(n.h3,{id:"shorthand-property-notation",children:"Shorthand property notation"}),"\n",(0,a.jsx)(n.p,{children:"Similar to objects in JavaScript, you can use shorthand property notation to define an object. Here is an example of using shorthand property notation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-textwire",children:'{{ name = "John"; age = 25; person = { name, age } }}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>t});var l=i(6540);const a={},r=l.createContext(a);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);