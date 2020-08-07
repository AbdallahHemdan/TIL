# Dynamic components
> Dynamic components helps us to render the components dynamically based on user-interaction

```js
// Home.vue

<template>
  <div class="home">
    <component :is="oneOrTwo"></component>
    <button @click="changeToOne">One 1</button>
    <button @click="changeToTwo">One 2</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      oneOrTwo: 'one',
    };
  },
  components: {
    one: () => import('./../components/One'),
    two: () => import('./../components/Two'),
  },
  methods: {
    changeToOne: function() {
      this.oneOrTwo = 'one';
    },
    changeToTwo: function() {
      this.oneOrTwo = 'two';
    },
  },
};
</script>

<style lang="scss" scoped></style>
```
## Keep a live tag
> `<keep-alive></keep-alive>` tag help us to keep the wrapped components a live and save them from being destroyed


```js
// Home.vue

<template>
  <div class="home">
    <keep-alive>
      <component :is="oneOrTwo"></component>
    </keep-alive>
    
    <button @click="changeToOne">One 1</button>
    <button @click="changeToTwo">One 2</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      oneOrTwo: 'one',
    };
  },
  components: {
    one: () => import('./../components/One'),
    two: () => import('./../components/Two'),
  },
  methods: {
    changeToOne: function() {
      this.oneOrTwo = 'one';
    },
    changeToTwo: function() {
      this.oneOrTwo = 'two';
    },
  },
};
</script>

<style lang="scss" scoped></style>
```