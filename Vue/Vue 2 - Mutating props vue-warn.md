# Mutating props vue-warn

> This has to do with the fact that mutating a prop locally is considered an anti-pattern in Vue 2

> What you should do now, in case you want to mutate a prop locally, 
is to declare a field in your data that uses the props value as its initial value and then mutate the copy:

```js
Vue.component('task', {
    template: '#task-template',
    props: ['list'],
    data: function () {
        return {
            mutableList: JSON.parse(this.list);
        }
    }
});
```

[Refernce](https://stackoverflow.com/a/39910248/9980667)
