"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5593],{7982:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"functions/str","title":"String Functions - v2","description":"Explore the various string functions available in Textwire","source":"@site/versioned_docs/version-v2/functions/str.md","sourceDirName":"functions","slug":"/functions/str","permalink":"/docs/v2/functions/str","draft":false,"unlisted":false,"tags":[],"version":"v2","sidebarPosition":2,"frontMatter":{"title":"String Functions - v2","sidebar_label":"String Functions","sidebar_position":2,"description":"Explore the various string functions available in Textwire"},"sidebar":"tutorialSidebar","previous":{"title":"Array Functions","permalink":"/docs/v2/functions/arr"},"next":{"title":"Integer Functions","permalink":"/docs/v2/functions/int"}}');var s=l(4848),i=l(8453);const r={title:"String Functions - v2",sidebar_label:"String Functions",sidebar_position:2,description:"Explore the various string functions available in Textwire"},a="String Functions",d={},c=[{value:"capitalize",id:"capitalize",level:2},{value:"Input example",id:"input-example",level:4},{value:"Output",id:"output",level:4},{value:"contains",id:"contains",level:2},{value:"Arguments",id:"arguments",level:4},{value:"Input example",id:"input-example-1",level:4},{value:"Output",id:"output-1",level:4},{value:"decimal",id:"decimal",level:2},{value:"Arguments",id:"arguments-1",level:4},{value:"Input example",id:"input-example-2",level:4},{value:"Output",id:"output-2",level:4},{value:"len",id:"len",level:2},{value:"Input example",id:"input-example-3",level:4},{value:"Output",id:"output-3",level:4},{value:"lower",id:"lower",level:2},{value:"Input example",id:"input-example-4",level:4},{value:"Output",id:"output-4",level:4},{value:"raw",id:"raw",level:2},{value:"Input example",id:"input-example-5",level:4},{value:"Output",id:"output-5",level:4},{value:"reverse",id:"reverse",level:2},{value:"Input example",id:"input-example-6",level:4},{value:"Output",id:"output-6",level:4},{value:"split",id:"split",level:2},{value:"Arguments",id:"arguments-2",level:4},{value:"Input example",id:"input-example-7",level:4},{value:"Output",id:"output-7",level:4},{value:"trim",id:"trim",level:2},{value:"Arguments",id:"arguments-3",level:4},{value:"Input example",id:"input-example-8",level:4},{value:"Output",id:"output-8",level:4},{value:"truncate",id:"truncate",level:2},{value:"Arguments",id:"arguments-4",level:4},{value:"Input example",id:"input-example-9",level:4},{value:"Output",id:"output-9",level:4},{value:"upper",id:"upper",level:2},{value:"Input example",id:"input-example-10",level:4},{value:"Output",id:"output-10",level:4}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"string-functions",children:"String Functions"})}),"\n",(0,s.jsx)(n.h2,{id:"capitalize",children:"capitalize"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"capitalize(): str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Capitalizes the first letter of a string"}),"\n",(0,s.jsx)(n.h4,{id:"input-example",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<b>{{ "hello, world!".capitalize() }}</b>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<b>Hello, world!</b>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"contains",children:"contains"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"contains(substr: str): bool\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns true if the string contains the given substring, otherwise false. The function is sase-sensitive, so the substring must match the case of the string"}),"\n",(0,s.jsx)(n.h4,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"substr"})," (str) - The substring to search for"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-1",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<b>{{ "Hello, World!".contains("World") }}</b>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-1",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<b>true</b>\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Empty substring",type:"tip",children:(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"substr"})," argument is an empty string, the function will always return ",(0,s.jsx)(n.code,{children:"true"}),". It's done this way because an empty string is always a substring of any string"]})}),"\n",(0,s.jsx)(n.h2,{id:"decimal",children:"decimal"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'decimal(separator?: str = ".", decimals?: int = 2): str\n'})}),"\n",(0,s.jsx)(n.p,{children:"Converts to a string with a decimal part by appending a decimal separator and the number of decimal places. Here are some rules:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When the string is not a number, it will return the string as is"}),"\n",(0,s.jsx)(n.li,{children:"When the string is already a decimal number, it will return the string as is"}),"\n",(0,s.jsx)(n.li,{children:"When the you use on a string, it will return the string as is if it's not a number"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"arguments-1",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"separator"})," (str) (optional) - The separator to use for the decimal. Default is ",(0,s.jsx)(n.code,{children:'"."'})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"decimals"})," (int) (optional) - The number of decimal places add to the number. Default is ",(0,s.jsx)(n.code,{children:"2"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-2",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<b>{{ "123".decimal() }}</b>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-2",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<b>123.00</b>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"len",children:"len"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"len(): int\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the length of the string"}),"\n",(0,s.jsx)(n.h4,{id:"input-example-3",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<b>{{ "Hello, World!".len() }}</b>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-3",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<b>13</b>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"lower",children:"lower"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"lower(): str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Converts a string to lowercase"}),"\n",(0,s.jsx)(n.h4,{id:"input-example-4",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<span>{{ "Hello, World!".lower() }}<span>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-4",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<span>hello, world!</span>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"raw",children:"raw"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"raw(): str\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Function ",(0,s.jsx)(n.code,{children:"raw"})," is used to render a string as raw HTML. This is useful when you want to render HTML tags from a string. By default, HTML tags in a string are escaped to prevent XSS attacks"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-5",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'{{ "<h1>Test</h1>".raw() }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-5",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<h1>Test</h1>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"reverse",children:"reverse"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"reverse(): str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns a string with the characters reversed"}),"\n",(0,s.jsx)(n.h4,{id:"input-example-6",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<b>{{ "stressed".reverse() }}</b>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-6",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<b>desserts</b>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"split",children:"split"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'split(separator?: str = " "): arr\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Function ",(0,s.jsx)(n.code,{children:"split"})," is used to split a string into an array of substrings. It takes an optional argument ",(0,s.jsx)(n.code,{children:"separator"})," which is used to split the string. If no separator is provided, it defaults to a space"]}),"\n",(0,s.jsx)(n.h4,{id:"arguments-2",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"separator"})," (str) (optional) - What separator to use to split the string. Default is ",(0,s.jsx)(n.code,{children:'" "'})," (space)"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-7",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div>{{ "one two".split(" ") }}</div>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-7",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<div>one, two</div>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"trim",children:"trim"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'trim(chars?: str = "\\t \\n\\r"): str\n'})}),"\n",(0,s.jsx)(n.p,{children:"Trims a string from spaces and special characters like tabs, spaces and new lines by default. You can pass a argument to trim a specific set of characters from a string"}),"\n",(0,s.jsx)(n.h4,{id:"arguments-3",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chars"})," (str) (optional) - A string of characters to trim from a string. Default is ",(0,s.jsx)(n.code,{children:'"\\t \\n\\r"'})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-8",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<span>{{ " Anna ".trim() }}</span>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-8",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<span>Anna</span>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"truncate",children:"truncate"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'truncate(length: int, ellipsis: str = "..."): str\n'})}),"\n",(0,s.jsx)(n.p,{children:"Returns a string truncated to the given length with an optional ellipsis at the end"}),"\n",(0,s.jsx)(n.h4,{id:"arguments-4",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"length"})," (int) - The length to truncate the string to"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ellipsis"})," (str) (optional) - The ellipsis to append to the truncated string. Default is ",(0,s.jsx)(n.code,{children:'"..."'})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-9",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<b>{{ "Hello, World!".truncate(5) }}</b>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-9",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<b>Hello...</b>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"upper",children:"upper"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"upper(): str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Converts a string to uppercase"}),"\n",(0,s.jsx)(n.h4,{id:"input-example-10",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<b>{{ "Hello, World!".upper() }}</b>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-10",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<b>HELLO, WORLD!</b>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>a});var t=l(6540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);