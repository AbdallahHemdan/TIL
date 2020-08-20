# 🚪 Component Declarations
> Here we will see the different variations of declaring a component in VueJS

## Global Component

> Global Components work very well for small to medium-sized projects, global components will be defined using **Vue.component**, 
followed by **new Vue({ el: '#container' })** to target a container element in the body of every page.


<div align="center">

![global component](https://user-images.githubusercontent.com/40190772/90828596-94136d00-e33e-11ea-9f86-97f88645a922.png)

</div>

## Single File Component
> Here we will dissucss What is SFC and Why we use it

### Intro
In many Vue projects, global components will be defined using `Vue.component`, followed by `new Vue({ el: '#container' })`.

This can work very well for small to medium-sized projects, In more complex projects however, or when your frontend is entirely driven by JavaScript, these disadvantages become apparent:
