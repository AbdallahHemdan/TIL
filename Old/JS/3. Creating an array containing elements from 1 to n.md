## Creating an array containing elements from 1 to n

> Some languages, such as Ruby, have a built in range constraint that makes it easy to construct an array of values from 1 to N. JavaScript is not one of those languages. Nevertheless, if you don't mind the aesthetics, you can get away with something like this:


### Solution 1

> In ES6 using Array [from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) and [keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys) methods.

```javascript
let a = Array.from(Array(n).keys(), x => x + 1);
console.log(a);
```

![image](https://user-images.githubusercontent.com/40190772/80659929-9ea5b000-8a8a-11ea-8515-e0f82377446e.png)


### Solution 2

> Shorter version using [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) with [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).


```javascript
let b = [...Array(n).keys()].map(x => x + 1);
console.log(b);
```

![image](https://user-images.githubusercontent.com/40190772/80659944-a7968180-8a8a-11ea-8e26-a0b0f1989e7f.png)


### Solution 3

> Shorter version using [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) with [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

```javascript
let c = [...Array(n + 1).keys()].splice(1);
console.log(c);
```

![image](https://user-images.githubusercontent.com/40190772/80659958-b11fe980-8a8a-11ea-86b6-743062329cfc.png)



[Refernce 📚](https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n/33352604#33352604)
