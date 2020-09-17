---
title: HTML Questions
---

Answers to [Front-end Job Interview Questions - HTML Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/src/questions/html-questions.md). Pull requests for suggestions and corrections are welcome!

## Table of Contents

- ~[What does a doctype do?](#what-does-a-doctype-do)~
- ~[How do you serve a page with content in multiple languages?](#how-do-you-serve-a-page-with-content-in-multiple-languages)~
- [What kind of things must you be wary of when designing or developing for multilingual sites?](#what-kind-of-things-must-you-be-wary-of-when-designing-or-developing-for-multilingual-sites)
- [What are `data-` attributes good for?](#what-are-data--attributes-good-for)
- [Consider HTML5 as an open web platform. What are the building blocks of HTML5?](#consider-html5-as-an-open-web-platform-what-are-the-building-blocks-of-html5)
- [Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.](#describe-the-difference-between-a-cookie-sessionstorage-and-localstorage)
- [Describe the difference between `<script>`, `<script async>` and `<script defer>`.](#describe-the-difference-between-script-script-async-and-script-defer)
- [Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?](#why-is-it-generally-a-good-idea-to-position-css-links-between-headhead-and-js-scripts-just-before-body-do-you-know-any-exceptions)
- [What is progressive rendering?](#what-is-progressive-rendering)
- [Why you would use a `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.](#why-you-would-use-a-srcset-attribute-in-an-image-tag-explain-the-process-the-browser-uses-when-evaluating-the-content-of-this-attribute)
- [Have you used different HTML templating languages before?](#have-you-used-different-html-templating-languages-before)

### What does a DOCTYPE do?

**DOCTYPE** is an abbreviation for **DOCument TYPE**. A DOCTYPE is always associated to a **DTD** - for **Document Type Definition**.

A DTD defines how documents of a certain type should be structured (i.e. a `button` can contain a `span` but not a `div`), whereas a DOCTYPE declares what DTD a document _supposedly_ respects (i.e. this document respects the HTML DTD).

For webpages, the DOCTYPE declaration is required. It is used to tell user agents what version of the HTML specifications your document respects. Once a user agent has recognized a correct DOCTYPE, it will trigger the **no-quirks mode** matching this DOCTYPE for reading the document. If a user agent doesn't recognize a correct DOCTYPE, it will trigger the **quirks mode**.

The DOCTYPE declaration for the HTML5 standards is `<!DOCTYPE html>`.

###### References

- https://html.spec.whatwg.org/multipage/syntax.html#the-doctype
- https://html.spec.whatwg.org/multipage/xhtml.html
- https://quirks.spec.whatwg.org/

[[↑] Back to top](#table-of-contents)

### How do you serve a page with content in multiple languages?

I will assume that it is asking about the most common case, which is how to serve a page with content available in multiple languages, but the content within the page should be displayed only in one consistent language.

When an HTTP request is made to a server, the requesting user agent usually sends information about language preferences, such as in the `Accept-Language` header. The server can then use this information to return a version of the document in the appropriate language if such an alternative is available. The returned HTML document should also declare the `lang` attribute in the `<html>` tag, such as `<html lang="en">...</html>`.

Of course this is useless for letting a search engine know that the same content is available in different languages, and so you must also make use of the `hreflang` attribute in the `<head>`. Eg. `<link rel="alternate" hreflang="de" href="http://de.example.com/page.html" />`

In the back end, the HTML markup will contain `i18n` placeholders and content for the specific language stored in YML or JSON formats. The server then dynamically generates the HTML page with content in that particular language, usually with the help of a back end framework.

###### References

- https://www.w3.org/International/getting-started/language
- https://support.google.com/webmasters/answer/189077
