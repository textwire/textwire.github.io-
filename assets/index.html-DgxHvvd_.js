import{_ as e,o as a,c as t,b as s}from"./app-Bp86MhpM.js";const n={},i=s(`<h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h1><h2 id="information" tabindex="-1"><a class="header-anchor" href="#information"><span>Information</span></a></h2><h3 id="what-exactly-is-textwire" tabindex="-1"><a class="header-anchor" href="#what-exactly-is-textwire"><span>What exactly is Textwire?</span></a></h3><p>Textwire is a programming language designed to be used with Go programs. Since Go doesn&#39;t have a simple and easy to use templating language, Textwire was created to fill that gap. It is a simple and easy to use language that can be used with any text files.</p><h3 id="is-textwire-a-templating-engine" tabindex="-1"><a class="header-anchor" href="#is-textwire-a-templating-engine"><span>Is Textwire a templating engine?</span></a></h3><p>Textwire is not exactly a templating engine. It is a separate language written in Go that comes as a package.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><h3 id="how-do-i-use-textwire-directives-that-start-with-symbol" tabindex="-1"><a class="header-anchor" href="#how-do-i-use-textwire-directives-that-start-with-symbol"><span>How do I use Textwire directives that start with @ symbol?</span></a></h3><p>Textwire has several directives that you can use anywhere directly in your text files except for <code>{{ }}</code> curly braces. Here is the example of <code>@if</code> directive:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    @if(isFast)
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>Can run<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>
    @else
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>Can&#39;t run<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>
    @end
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[i];function o(c,r){return a(),t("div",null,l)}const d=e(n,[["render",o],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/1.x/faq/","title":"FAQ","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Information","slug":"information","link":"#information","children":[{"level":3,"title":"What exactly is Textwire?","slug":"what-exactly-is-textwire","link":"#what-exactly-is-textwire","children":[]},{"level":3,"title":"Is Textwire a templating engine?","slug":"is-textwire-a-templating-engine","link":"#is-textwire-a-templating-engine","children":[]}]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"How do I use Textwire directives that start with @ symbol?","slug":"how-do-i-use-textwire-directives-that-start-with-symbol","link":"#how-do-i-use-textwire-directives-that-start-with-symbol","children":[]}]}],"git":{"updatedTime":1707929006000,"contributors":[{"name":"SerhiiCho","email":"serhiicho@protonmail.com","commits":6}]},"filePathRelative":"1.x/faq/index.md"}');export{d as comp,h as data};