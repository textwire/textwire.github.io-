---
sidebar_position: 3
description: Learn how to use Textwire directives and more in your Textwire code
---

# Usage

## How do I use Textwire directives that start with @ symbol?

Textwire has several directives that you can use anywhere directly in your text files except for `{{ }}` curly braces. Here is the example of `@if` directive:

```html
<div>
    @if(isFast)
        <b>Can run</b>
    @else
        <b>Can't run</b>
    @end
</div>
```