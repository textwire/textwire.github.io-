"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1970],{3204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"functions/arr","title":"Array Functions - v2","description":"Explore the various array functions available in Textwire","source":"@site/versioned_docs/version-v2/functions/arr.md","sourceDirName":"functions","slug":"/functions/arr","permalink":"/docs/v2/functions/arr","draft":false,"unlisted":false,"tags":[],"version":"v2","sidebarPosition":1,"frontMatter":{"title":"Array Functions - v2","sidebar_label":"Array Functions","sidebar_position":1,"description":"Explore the various array functions available in Textwire"},"sidebar":"tutorialSidebar","previous":{"title":"Built-in Functions","permalink":"/docs/v2/functions/"},"next":{"title":"String Functions","permalink":"/docs/v2/functions/str"}}');var l=t(4848),a=t(8453);const i={title:"Array Functions - v2",sidebar_label:"Array Functions",sidebar_position:1,description:"Explore the various array functions available in Textwire"},s="Array Functions",d={},c=[{value:"append",id:"append",level:2},{value:"Arguments",id:"arguments",level:4},{value:"Input example:",id:"input-example",level:4},{value:"Output:",id:"output",level:4},{value:"contains",id:"contains",level:2},{value:"Arguments",id:"arguments-1",level:4},{value:"Input example:",id:"input-example-1",level:4},{value:"Output:",id:"output-1",level:4},{value:"Notes",id:"notes",level:4},{value:"join",id:"join",level:2},{value:"Arguments",id:"arguments-2",level:4},{value:"Input example:",id:"input-example-2",level:4},{value:"Output:",id:"output-2",level:4},{value:"len",id:"len",level:2},{value:"Input example:",id:"input-example-3",level:4},{value:"Output:",id:"output-3",level:4},{value:"prepend",id:"prepend",level:2},{value:"Arguments",id:"arguments-3",level:4},{value:"Input example:",id:"input-example-4",level:4},{value:"Output:",id:"output-4",level:4},{value:"rand",id:"rand",level:2},{value:"Input example:",id:"input-example-5",level:4},{value:"Output:",id:"output-5",level:4},{value:"reverse",id:"reverse",level:2},{value:"Input example:",id:"input-example-6",level:4},{value:"Output:",id:"output-6",level:4},{value:"shuffle",id:"shuffle",level:2},{value:"Input example:",id:"input-example-7",level:4},{value:"Output:",id:"output-7",level:4},{value:"slice",id:"slice",level:2},{value:"Arguments",id:"arguments-4",level:4},{value:"Input example:",id:"input-example-8",level:4},{value:"Output:",id:"output-8",level:4}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"array-functions",children:"Array Functions"})}),"\n",(0,l.jsx)(n.h2,{id:"append",children:"append"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"append(elem: any...): arr\n"})}),"\n",(0,l.jsx)(n.p,{children:"Adds one or more elements to the end of an array and returns a new array"}),"\n",(0,l.jsx)(n.h4,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"elem"})," (any) - Any amount of elements to add to the array"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"input-example",children:"Input example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:'{{ ["one", "two"].append("three", "four") }}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"output",children:"Output:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"one, two, three, four\n"})}),"\n",(0,l.jsx)(n.h2,{id:"contains",children:"contains"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"contains(elem?: any): bool\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Returns ",(0,l.jsx)(n.code,{children:"true"})," if the array contains the given element, otherwise ",(0,l.jsx)(n.code,{children:"false"})]}),"\n",(0,l.jsx)(n.h4,{id:"arguments-1",children:"Arguments"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"elem"})," (any) - The element to search for in the array. Can be any type, including objects and arrays"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"input-example-1",children:"Input example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:'{{ ["one", "two"].contains("two") }}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"output-1",children:"Output:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"1\n"})}),"\n",(0,l.jsx)(n.h4,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.p,{children:"You can do deep comparison with objects and arrays as well"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"{{ obj = { name: 'Anna' }; [obj].contains(obj) }}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Keep in mind that the order of objects fields doesn't matter in the comparison, but the order of array elements does matter, because each element has a unique index. ",(0,l.jsx)(n.code,{children:"[1, 2]"})," and ",(0,l.jsx)(n.code,{children:"[2, 1]"})," are different arrays."]}),"\n",(0,l.jsx)(n.h2,{id:"join",children:"join"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:'join(separator?: str = ","): str\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Joins the elements of an array into a string and returns it. It takes an optional argument ",(0,l.jsx)(n.code,{children:"separator"})," which is used to join the elements. If no separator is provided, it defaults to a comma"]}),"\n",(0,l.jsx)(n.h4,{id:"arguments-2",children:"Arguments"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"separator"})," (str) (optional) - What separator to use to join the elements. Default is ",(0,l.jsx)(n.code,{children:'","'})," (comma)"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"input-example-2",children:"Input example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:'{{ ["one", "two"].join(" ") }}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"output-2",children:"Output:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"one two\n"})}),"\n",(0,l.jsx)(n.h2,{id:"len",children:"len"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"len(): int\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the length of an array"}),"\n",(0,l.jsx)(n.h4,{id:"input-example-3",children:"Input example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"{{ [1, 2, 3].len() }}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"output-3",children:"Output:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"3\n"})}),"\n",(0,l.jsx)(n.h2,{id:"prepend",children:"prepend"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"prepend(elem: any...): arr\n"})}),"\n",(0,l.jsx)(n.p,{children:"Adds one or more elements to the beginning of an array and returns a new array"}),"\n",(0,l.jsx)(n.h4,{id:"arguments-3",children:"Arguments"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"elem"})," (any) - Any amount of elements to add to the array"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"input-example-4",children:"Input example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:'{{ ["three", "four"].prepend("one", "two") }}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"output-4",children:"Output:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"one, two, three, four\n"})}),"\n",(0,l.jsx)(n.h2,{id:"rand",children:"rand"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"rand(): any\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns a random element from the array. The return type depends on the type of elements in the array."}),"\n",(0,l.jsx)(n.h4,{id:"input-example-5",children:"Input example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"{{ [1, 2, 3].rand() }}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"output-5",children:"Output:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"2\n"})}),"\n",(0,l.jsx)(n.h2,{id:"reverse",children:"reverse"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"reverse(): arr\n"})}),"\n",(0,l.jsx)(n.p,{children:"Reverses the elements of an array and returns a new array"}),"\n",(0,l.jsx)(n.h4,{id:"input-example-6",children:"Input example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"{{ [1, 2, 3].reverse() }}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"output-6",children:"Output:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"3, 2, 1\n"})}),"\n",(0,l.jsx)(n.h2,{id:"shuffle",children:"shuffle"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"shuffle(): arr\n"})}),"\n",(0,l.jsx)(n.p,{children:"Shuffles the elements of an array and returns a new array"}),"\n",(0,l.jsx)(n.h4,{id:"input-example-7",children:"Input example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"{{ [1, 2, 3, 5].shuffle() }}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"output-7",children:"Output:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"\x3c!-- The order of the elements will be random --\x3e\n2, 1, 3, 5\n"})}),"\n",(0,l.jsx)(n.h2,{id:"slice",children:"slice"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"slice(start: int, end?: int): arr\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Returns a portion of an array. The ",(0,l.jsx)(n.code,{children:"start"})," argument is the index at which to begin the slice. The ",(0,l.jsx)(n.code,{children:"end"})," argument is the index at which to end the slice. If ",(0,l.jsx)(n.code,{children:"end"})," is not provided, it slices to the end of the array"]}),"\n",(0,l.jsx)(n.h4,{id:"arguments-4",children:"Arguments"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"start"})," (int) - The index at which to begin the slice"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"end"})," (int) (optional) - The index at which to end the slice"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"input-example-8",children:"Input example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"{{ [1, 2, 3, 4, 5].slice(1, 3) }}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"output-8",children:"Output:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-textwire",children:"2, 3\n"})}),"\n",(0,l.jsx)(n.admonition,{title:"No negative arguments",type:"warning",children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"start"})," and ",(0,l.jsx)(n.code,{children:"end"})," arguments cannot be negative. If you provide a negative value for ",(0,l.jsx)(n.code,{children:"start"}),", it will be treated as ",(0,l.jsx)(n.code,{children:"0"}),". If you provide a negative value for ",(0,l.jsx)(n.code,{children:"end"})," or the value will exceed the length of the array, it will default to a value of the last index of the array"]})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const l={},a=r.createContext(l);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);