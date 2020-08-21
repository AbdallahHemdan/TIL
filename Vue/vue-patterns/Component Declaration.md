# 🚪 Component Declarations
> Here we will see the different variations of declaring a component in VueJS

## [1] Global Component

> Global Components work very well for small to medium-sized projects, global components will be defined using **Vue.component**, 
followed by **new Vue({ el: '#container' })** to target a container element in the body of every page.

> In more complex projects however, or when your frontend is entirely driven by JavaScript, these disadvantages become apparent:

- **Global definitions** force unique names for every component
- **String templates** lack syntax highlighting and require ugly slashes for multiline HTML
- **No CSS support** means that while HTML and JavaScript are modularized into components, CSS is conspicuously left out
- **No build step** restricts us to HTML and ES5 JavaScript, rather than preprocessors like Pug (formerly Jade) and Babel

<br /> <br />

<div align="center">

![global component](https://user-images.githubusercontent.com/40190772/90828596-94136d00-e33e-11ea-9f86-97f88645a922.png)

</div>

## [2] Single File Component
