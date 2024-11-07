"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8016],{7052:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"guides/configurations","title":"Configurations - v2","description":"Learn how to setup and configure Textwire in your Go applications","source":"@site/versioned_docs/version-v2/guides/configurations.md","sourceDirName":"guides","slug":"/guides/configurations","permalink":"/docs/v2/guides/configurations","draft":false,"unlisted":false,"tags":[],"version":"v2","sidebarPosition":7,"frontMatter":{"title":"Configurations - v2","sidebar_label":"Configurations","sidebar_position":7,"description":"Learn how to setup and configure Textwire in your Go applications"},"sidebar":"tutorialSidebar","previous":{"title":"Error Handling","permalink":"/docs/v2/guides/error-handling"},"next":{"title":"Built-in Functions","permalink":"/docs/v2/functions/"}}');var o=i(4848),r=i(8453);const s={title:"Configurations - v2",sidebar_label:"Configurations",sidebar_position:7,description:"Learn how to setup and configure Textwire in your Go applications"},a="Configurations",l={},c=[{value:"Setting Configurations",id:"setting-configurations",level:2},{value:"Available Configurations",id:"available-configurations",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"configurations",children:"Configurations"})}),"\n",(0,o.jsxs)(t.p,{children:["Textwire has a few configurations that you can set to customize the behavior of the library. You can set the configurations using the ",(0,o.jsx)(t.code,{children:"textwire.Configure"})," function or pass the config to ",(0,o.jsx)(t.code,{children:"textwire.NewTemplate"})," function if you use templates."]}),"\n",(0,o.jsx)(t.h2,{id:"setting-configurations",children:"Setting Configurations"}),"\n",(0,o.jsx)(t.p,{children:"Here is the most basic example of how you can set the configurations:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/textwire/textwire/v2"\n    "github.com/textwire/textwire/v2/config"\n)\n\nfunc main() {\n    textwire.Configure(&config.Config{\n        TemplateDir: "templates",\n        TemplateExt: ".html",\n    })\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["In the example above the ",(0,o.jsx)(t.code,{children:"TemplateDir"})," and ",(0,o.jsx)(t.code,{children:"TemplateExt"})," make sense only if you use Textwire as a template engine for your project. For things like evaluating a single Textwire file or a string, you don't need to set these configurations."]}),"\n",(0,o.jsx)(t.p,{children:"All the configurations in Textwire are optional, because each configuration has a default value. Read more about the available configurations below."}),"\n",(0,o.jsx)(t.h2,{id:"available-configurations",children:"Available Configurations"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Property"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description of the configuration"}),(0,o.jsx)(t.th,{children:"Default value"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"TemplateDir"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"string"})}),(0,o.jsx)(t.td,{children:"The directory where Textwire will look for template files"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:'"templates"'})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"TemplateExt"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"string"})}),(0,o.jsx)(t.td,{children:"The extension of the template files"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:'".tw.html"'})})]})]})]}),"\n",(0,o.jsx)(t.admonition,{title:"Loosing extension benefits",type:"warning",children:(0,o.jsxs)(t.p,{children:["Keep in mind that if you use VSCode and you change ",(0,o.jsx)(t.code,{children:"TemplateExt"})," to something else than ",(0,o.jsx)(t.code,{children:".tw.html"}),", you will lose the syntax highlighting for Textwire files if you use the ",(0,o.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=SerhiiCho.textwire",children:"Textwire extension"}),"."]})}),"\n",(0,o.jsx)(t.admonition,{title:"Coming in the future",type:"info",children:(0,o.jsxs)(t.p,{children:["As Textwire grows, more configurations will be added to the library. If you have any suggestions for new configurations, feel free to open an issue on the ",(0,o.jsx)(t.a,{href:"https://github.com/textwire/textwire/issues",children:"GitHub repository"}),"."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);