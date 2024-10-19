"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9919],{4401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(4848),s=n(8453);const a={sidebar_position:2},r="Usage with Templates",l={id:"get-started/template-usage",title:"Usage with Templates",description:"Template Configuration",source:"@site/versioned_docs/version-v1/get-started/template-usage.md",sourceDirName:"get-started",slug:"/get-started/template-usage",permalink:"/docs/v1/get-started/template-usage",draft:!1,unlisted:!1,tags:[],version:"v1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/v1/get-started/"},next:{title:"Evaluate a string",permalink:"/docs/v1/get-started/eval-string"}},o={},d=[{value:"Template Configuration",id:"template-configuration",level:2},{value:"Available Configurations",id:"available-configurations",level:3},{value:"Write response to the client",id:"write-response-to-the-client",level:2},{value:"Layouts",id:"layouts",level:2},{value:"Reserve space in the layout",id:"reserve-space-in-the-layout",level:3},{value:"Insert content into reserved space",id:"insert-content-into-reserved-space",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"usage-with-templates",children:"Usage with Templates"})}),"\n",(0,i.jsx)(t.h2,{id:"template-configuration",children:"Template Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["To use Textwire as a template language, you need to import the ",(0,i.jsx)(t.code,{children:"github.com/textwire/textwire"})," package and create a new Template instance. You can ether pass ",(0,i.jsx)(t.code,{children:"nil"})," or a ",(0,i.jsx)(t.code,{children:"*textwire.Config"})," to the ",(0,i.jsx)(t.code,{children:"NewTemplate"})," function. The ",(0,i.jsx)(t.code,{children:"*textwire.Config"})," is used to configure the template language."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="main.go"',children:'import "github.com/textwire/textwire"\n\nfunc main() {\n    tpl, err := textwire.NewTemplate(&textwire.Config{\n        TemplateDir: "src/templates",\n    })\n\n    if err != nil {\n        log.Fatal(err)\n    }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Non of the configurations are required, because each configuration has a default value. The ",(0,i.jsx)(t.code,{children:"NewTemplate"})," function returns 2 values:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"*textwire.Template"})," is a struct that holds the parsed templates and has methods to evaluate the templates."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"error"})," is the error that might occur during any stage of the template parsing."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In return from the ",(0,i.jsx)(t.code,{children:"NewTemplate"})," function, we get a ",(0,i.jsx)(t.code,{children:"Template"})," object that can be used to evaluate an already parsed template."]}),"\n",(0,i.jsx)(t.h3,{id:"available-configurations",children:"Available Configurations"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description of the configuration"}),(0,i.jsx)(t.th,{children:"Example value"}),(0,i.jsx)(t.th,{children:"Default value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TemplateDir"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:"The directory where Textwire will look for template files"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"src/templates"'})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"templates"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TemplateExt"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:"The extension of the template files"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'".html"'})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'".tw.html"'})})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Keep in mind that if you use VSCode and you change ",(0,i.jsx)(t.code,{children:"TemplateExt"})," to something else than ",(0,i.jsx)(t.code,{children:".tw.html"}),", you will lose the syntax highlighting for Textwire files if you use the ",(0,i.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire",children:"Textwire extension"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"write-response-to-the-client",children:"Write response to the client"}),"\n",(0,i.jsxs)(t.p,{children:["You can use the ",(0,i.jsx)(t.code,{children:"Response"})," method on ",(0,i.jsx)(t.code,{children:"Template"})," object to write the evaluated template to the client. The ",(0,i.jsx)(t.code,{children:"Response"})," method accepts a ",(0,i.jsx)(t.code,{children:"http.ResponseWriter"})," object, the name of the template file, and a map of variables that you want to inject into the template. Here is an example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func homeHandler(w http.ResponseWriter, r *http.Request) {\n    err := tpl.Response(w, "home", map[string]interface{}{\n        "title":     "Home page",\n        "names":     []string{"John", "Jane", "Jack", "Jill"},\n        "showNames": true,\n    })\n\n    if err != nil {\n        log.Fatal(err)\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"layouts",children:"Layouts"}),"\n",(0,i.jsx)(t.p,{children:'Defining a layout in Textwire is very simple. You need to create a file anywhere inside of your template files. Many developers just create a "layouts" directory for different layouts because you might have a main layout, one for admin panel, one for user cabinet and so on.'}),"\n",(0,i.jsx)(t.h3,{id:"reserve-space-in-the-layout",children:"Reserve space in the layout"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"reserve"})," statement (directive) is used to reserve a place for dynamic content that you can insert later in the layout. For example, you can reserve a place for the title of the page and then insert it later. Here is an example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>@reserve("title")</title>\n</head>\n<body>\n    @reserve("content")\n</body>\n</html>\n'})}),"\n",(0,i.jsx)(t.p,{children:"We reserve a place for the title and content of the page. We can then insert the title and content into these reserved places."}),"\n",(0,i.jsx)(t.h3,{id:"insert-content-into-reserved-space",children:"Insert content into reserved space"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"insert"}),' statement (directive) is used to insert content into reserved places. Insert statement can be defined in 2 ways, with and without the body. In the example below, we define the insert for "title" without the body, and for "content" with the body.']}),"\n",(0,i.jsxs)(t.p,{children:["Let's take a look at the example how I would define a ",(0,i.jsx)(t.code,{children:"home.tw.html"})," and then I'll explain each part of it:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",metastring:'title="home.tw.html"',children:'@use("layouts/main")\n\n@insert("title", "Home page")\n\n@insert("content")\n    <h1>Hello, World!</h1>\n    <p>This is a home page.</p>\n@end\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"First, we tell which layout we want to use by providing a path to the layout"}),"\n",(0,i.jsx)(t.li,{children:'Then we insert the title into layout with the value "Home page"'}),"\n",(0,i.jsx)(t.li,{children:"Then we insert the content into layout with the HTML body."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You can read more about ",(0,i.jsx)(t.a,{href:"/docs/v1/language-elements/statements#use-statement",children:"use"}),", ",(0,i.jsx)(t.a,{href:"/docs/v1/language-elements/statements#insert-statement",children:"insert"})," and ",(0,i.jsx)(t.a,{href:"/docs/v1/language-elements/statements#reserve-statement",children:"reserve"})," statements on the ",(0,i.jsx)(t.a,{href:"/docs/v1/language-elements/statements",children:"statements"})," page if you need more information about the syntax."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(6540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);