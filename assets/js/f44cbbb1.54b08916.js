"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5593],{5446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"functions/str","title":"String Functions - v2","description":"Explore the various string functions available in Textwire","source":"@site/versioned_docs/version-v2/functions/str.md","sourceDirName":"functions","slug":"/functions/str","permalink":"/docs/v2/functions/str","draft":false,"unlisted":false,"tags":[],"version":"v2","sidebarPosition":2,"frontMatter":{"title":"String Functions - v2","sidebar_label":"String Functions","sidebar_position":2,"description":"Explore the various string functions available in Textwire"},"sidebar":"tutorialSidebar","previous":{"title":"Array Functions","permalink":"/docs/v2/functions/arr"},"next":{"title":"Integer Functions","permalink":"/docs/v2/functions/int"}}');var s=t(4848),l=t(8453);const r={title:"String Functions - v2",sidebar_label:"String Functions",sidebar_position:2,description:"Explore the various string functions available in Textwire"},a="String Functions",d={},c=[{value:"at",id:"at",level:2},{value:"Arguments",id:"arguments",level:4},{value:"Input example",id:"input-example",level:4},{value:"Output",id:"output",level:4},{value:"capitalize",id:"capitalize",level:2},{value:"Input example",id:"input-example-1",level:4},{value:"Output",id:"output-1",level:4},{value:"contains",id:"contains",level:2},{value:"Arguments",id:"arguments-1",level:4},{value:"Input example",id:"input-example-2",level:4},{value:"Output",id:"output-2",level:4},{value:"decimal",id:"decimal",level:2},{value:"Arguments",id:"arguments-2",level:4},{value:"Input example",id:"input-example-3",level:4},{value:"Output",id:"output-3",level:4},{value:"first",id:"first",level:2},{value:"Input example",id:"input-example-4",level:4},{value:"Output",id:"output-4",level:4},{value:"last",id:"last",level:2},{value:"Input example",id:"input-example-5",level:4},{value:"Output",id:"output-5",level:4},{value:"len",id:"len",level:2},{value:"Input example",id:"input-example-6",level:4},{value:"Output",id:"output-6",level:4},{value:"lower",id:"lower",level:2},{value:"Input example",id:"input-example-7",level:4},{value:"Output",id:"output-7",level:4},{value:"raw",id:"raw",level:2},{value:"Input example",id:"input-example-8",level:4},{value:"Output",id:"output-8",level:4},{value:"repeat",id:"repeat",level:2},{value:"Arguments",id:"arguments-3",level:4},{value:"Input example",id:"input-example-9",level:4},{value:"Output",id:"output-9",level:4},{value:"reverse",id:"reverse",level:2},{value:"Input example",id:"input-example-10",level:4},{value:"Output",id:"output-10",level:4},{value:"split",id:"split",level:2},{value:"Arguments",id:"arguments-4",level:4},{value:"Input example",id:"input-example-11",level:4},{value:"Output",id:"output-11",level:4},{value:"trim",id:"trim",level:2},{value:"Arguments",id:"arguments-5",level:4},{value:"Input example",id:"input-example-12",level:4},{value:"Output",id:"output-12",level:4},{value:"trimLeft",id:"trimleft",level:2},{value:"Arguments",id:"arguments-6",level:4},{value:"Input example",id:"input-example-13",level:4},{value:"Output",id:"output-13",level:4},{value:"trimRight",id:"trimright",level:2},{value:"Arguments",id:"arguments-7",level:4},{value:"Input example",id:"input-example-14",level:4},{value:"Output",id:"output-14",level:4},{value:"truncate",id:"truncate",level:2},{value:"Arguments",id:"arguments-8",level:4},{value:"Input example",id:"input-example-15",level:4},{value:"Output",id:"output-15",level:4},{value:"upper",id:"upper",level:2},{value:"Input example",id:"input-example-16",level:4},{value:"Output",id:"output-16",level:4}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"string-functions",children:"String Functions"})}),"\n",(0,s.jsx)(n.h2,{id:"at",children:"at"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"at(index?: int = 0): str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the character at the given index."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When the index is out of bounds, it will return ",(0,s.jsx)(n.code,{children:"nil"})," type, which will be converted to an empty string when rendered in the template"]}),"\n",(0,s.jsxs)(n.li,{children:["When the index is negative, it will count from the end of the string. For example, ",(0,s.jsx)(n.code,{children:"-1"})," will return the last character of the string"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"index"})," (int) - The index of the character to return. Default is ",(0,s.jsx)(n.code,{children:"0"}),", which returns the first character of the string"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "Textwire".at(1) }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"e\n"})}),"\n",(0,s.jsx)(n.h2,{id:"capitalize",children:"capitalize"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"capitalize(): str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Capitalizes the first letter of a string"}),"\n",(0,s.jsx)(n.h4,{id:"input-example-1",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "hello, world!".capitalize() }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-1",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"Hello, world!\n"})}),"\n",(0,s.jsx)(n.h2,{id:"contains",children:"contains"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"contains(substr: str): bool\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns true if the string contains the given substring, otherwise false. The function is sase-sensitive, so the substring must match the case of the string"}),"\n",(0,s.jsx)(n.h4,{id:"arguments-1",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"substr"})," (str) - The substring to search for"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-2",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "Hello, World!".contains("World") }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-2",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"true\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Empty substring",type:"tip",children:(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"substr"})," argument is an empty string, the function will always return ",(0,s.jsx)(n.code,{children:"true"}),". It's done this way because an empty string is always a substring of any string"]})}),"\n",(0,s.jsxs)(n.admonition,{title:"Ignore case",type:"tip",children:[(0,s.jsxs)(n.p,{children:["If you want to search for a substring without considering the case, you can use the ",(0,s.jsx)(n.code,{children:"lower"})," function to convert both the string and the substring to lowercase:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "Hello, World!".lower().contains("world") }} \x3c!-- true --\x3e\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"decimal",children:"decimal"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'decimal(separator?: str = ".", decimals?: int = 2): str\n'})}),"\n",(0,s.jsx)(n.p,{children:"Converts to a string with a decimal part by appending a decimal separator and the number of decimal places. Here are some rules:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When the string is not a number, it will return the string as is"}),"\n",(0,s.jsx)(n.li,{children:"When the string is already a decimal number, it will return the string as is"}),"\n",(0,s.jsx)(n.li,{children:"When the you use on a string, it will return the string as is if it's not a number"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"arguments-2",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"separator"})," (str) (optional) - The separator to use for the decimal. Default is ",(0,s.jsx)(n.code,{children:'"."'})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"decimals"})," (int) (optional) - The number of decimal places add to the number. Default is ",(0,s.jsx)(n.code,{children:"2"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-3",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "123".decimal() }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-3",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"123.00\n"})}),"\n",(0,s.jsx)(n.h2,{id:"first",children:"first"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"first(): str\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns the first character of a string. When the index is out of bounds, it will return ",(0,s.jsx)(n.code,{children:"nil"})," type, which will be converted to an empty string when rendered in the template"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-4",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "Textwire".first() }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-4",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"T\n"})}),"\n",(0,s.jsx)(n.h2,{id:"last",children:"last"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"last(): str\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns the last character of a string. When the index is out of bounds, it will return ",(0,s.jsx)(n.code,{children:"nil"})," type, which will be converted to an empty string when rendered in the template"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-5",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "Textwire".last() }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-5",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"e\n"})}),"\n",(0,s.jsx)(n.h2,{id:"len",children:"len"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"len(): int\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the length of the string"}),"\n",(0,s.jsx)(n.h4,{id:"input-example-6",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "Hello, World!".len() }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-6",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"13\n"})}),"\n",(0,s.jsx)(n.h2,{id:"lower",children:"lower"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"lower(): str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Converts a string to lowercase"}),"\n",(0,s.jsx)(n.h4,{id:"input-example-7",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "Hello, World!".lower() }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-7",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"hello, world!\n"})}),"\n",(0,s.jsx)(n.h2,{id:"raw",children:"raw"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"raw(): str\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Function ",(0,s.jsx)(n.code,{children:"raw"})," is used to render a string as raw HTML. This is useful when you want to render HTML tags from a string. By default, HTML tags in a string are escaped to prevent XSS attacks"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-8",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "<h1>Test</h1>".raw() }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-8",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"<h1>Test</h1>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"repeat",children:"repeat"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"repeat(times: int): str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns a new string consisting of count copies of the string on which it was called"}),"\n",(0,s.jsx)(n.h4,{id:"arguments-3",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"times"})," (int) - The number of times to repeat the string"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-9",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "Hello".repeat(3) }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-9",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"HelloHelloHello\n"})}),"\n",(0,s.jsx)(n.h2,{id:"reverse",children:"reverse"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"reverse(): str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns a string with the characters reversed"}),"\n",(0,s.jsx)(n.h4,{id:"input-example-10",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "stressed".reverse() }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-10",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"desserts\n"})}),"\n",(0,s.jsx)(n.h2,{id:"split",children:"split"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'split(separator?: str = " "): arr\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Function ",(0,s.jsx)(n.code,{children:"split"})," is used to split a string into an array of substrings. It takes an optional argument ",(0,s.jsx)(n.code,{children:"separator"})," which is used to split the string. If no separator is provided, it defaults to a space"]}),"\n",(0,s.jsx)(n.h4,{id:"arguments-4",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"separator"})," (str) (optional) - What separator to use to split the string. Default is ",(0,s.jsx)(n.code,{children:'" "'})," (space)"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-11",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'<div>{{ "one two".split(" ") }}</div>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-11",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"<div>one, two</div>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"trim",children:"trim"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'trim(chars?: str = "\\t \\n\\r"): str\n'})}),"\n",(0,s.jsx)(n.p,{children:"Trims a string from spaces and special characters like tabs, spaces and new lines by default. You can pass a argument to trim a specific set of characters from a string"}),"\n",(0,s.jsx)(n.h4,{id:"arguments-5",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chars"})," (str) (optional) - A string of characters to trim from a string. Default is ",(0,s.jsx)(n.code,{children:'"\\t \\n\\r"'})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-12",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'<span>{{ " Textwire ".trim() }}</span>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-12",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"<span>Textwire</span>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"trimleft",children:"trimLeft"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'trimLeft(chars?: str = "\\t \\n\\r"): str\n'})}),"\n",(0,s.jsx)(n.p,{children:"Trims left side of a string from spaces and special characters like tabs, spaces and new lines by default. You can pass a argument to trim a specific set of characters from a string"}),"\n",(0,s.jsx)(n.h4,{id:"arguments-6",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chars"})," (str) (optional) - A string of characters to trim from a string. Default is ",(0,s.jsx)(n.code,{children:'"\\t \\n\\r"'})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-13",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'<span>{{ " Textwire".trimLeft() }}</span>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-13",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"<span>Textwire</span>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"trimright",children:"trimRight"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'trimRight(chars?: str = "\\t \\n\\r"): str\n'})}),"\n",(0,s.jsx)(n.p,{children:"Trims right side of a string from spaces and special characters like tabs, spaces and new lines by default. You can pass a argument to trim a specific set of characters from a string"}),"\n",(0,s.jsx)(n.h4,{id:"arguments-7",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chars"})," (str) (optional) - A string of characters to trim from a string. Default is ",(0,s.jsx)(n.code,{children:'"\\t \\n\\r"'})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-14",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'<span>{{ "Textwire ".trimRight() }}</span>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-14",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"<span>Textwire</span>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"truncate",children:"truncate"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'truncate(length: int, ellipsis: str = "..."): str\n'})}),"\n",(0,s.jsx)(n.p,{children:"Returns a string truncated to the given length with an optional ellipsis at the end"}),"\n",(0,s.jsx)(n.h4,{id:"arguments-8",children:"Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"length"})," (int) - The length to truncate the string to"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ellipsis"})," (str) (optional) - The ellipsis to append to the truncated string. Default is ",(0,s.jsx)(n.code,{children:'"..."'})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"input-example-15",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "Hello, World!".truncate(5) }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-15",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"Hello...\n"})}),"\n",(0,s.jsx)(n.h2,{id:"upper",children:"upper"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"upper(): str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Converts a string to uppercase"}),"\n",(0,s.jsx)(n.h4,{id:"input-example-16",children:"Input example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:'{{ "Hello, World!".upper() }}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"output-16",children:"Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textwire",children:"HELLO, WORLD!\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);