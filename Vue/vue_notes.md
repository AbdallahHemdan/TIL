# Vue notes
> List of some notes I take for thing I frequently forget in vuejs



## [1] What is the difference between **_v-if_** and **_v-show_**
> both are conditional directive to add the ability to show or hide elements base of condition 

1. v-if - Only renders the element to the DOM if the expression passes.
2. v-show - Renders all elements to the DOM and then uses the CSS display property to hide elements if the expression fails.
3. v-show - Does not support v-else, v-else-if

#### note 
> v-show has a performance advantage if the elements are switched on and off frequently, while the v-if has the advantage when it comes to initial render time.



## [2] We can use **_v-for_** to iterate over **object** not only arrays

```js
// app.js

let vm = new Vue({
  el: '#app',
  data: {
    person: {
      name: 'Abdallah Hemdan',
      age: 21,
      title: 'Software engineering intern @Instabug',
    },
  },
});

```

```html
<!-- index.html -->

<ul>
  <li v-for="(val, key) in person">
    Key : {{key}}, val : {{val}}
  </li>
</ul>
```



## [3] Multiple vue instances 
> You can create multiple vue instances and u can make them interact with each others using the name of each instance, or even you can inject any of the vue instances outside scope of any other vue instance (global scope)


```js
let firstInstance = new Vue({
  el : '.first-app',
  data : {
    title : 'Hello from 1st instance'
  },
  methods: {

  },
  computed:{

  }
})

let secondInstance = new Vue({
  el : '.second-app',
  data : {
    title : 'Hello from 2nd instance'
  },
  methods: {
    changeTitleOfFirstApp : function(){
      firstInstance.title = "Hacked!! 🐱‍💻🐱‍💻";
    }
  },
  computed:{

  }
})


// accessing the title of the second instance from global scope
secondInstance.title = "You HACKED too !! 🐱‍💻🐱‍💻";
```


```html
<div class="container">
  <div class="first-app">
    <h1>{{ title }}</h1>
  </div>

  <div class="second-app">
    <h1>{{ title }}</h1>
    <button @click="changeTitleOfFirstApp">Hack first app</button>
  </div>
</div>

```


## [4] Refs in Vuejs
> Refs helps up to access our template and get the need information out of it by providing the element we want to access attribute called **_ref="whatever-name-we-wand"_**



```js
new Vue({
  el: '#app',
  data: {},
  methods: {
    submit: function () {
      // this.$refs => allow us to access all the refs in scope of the vue instance
      console.log(this.$refs.username.value);
    },
  },
});
```


```html
<div class="container">
  <div id="app">
    <h1>Hello, Refs</h1>
    <input type="text" ref="username" />
    <button @click="submit">Submit</button>
  </div>
</div>
```

