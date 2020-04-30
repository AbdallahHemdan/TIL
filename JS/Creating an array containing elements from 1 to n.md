## Creating an array containing elements from 1 to n

> Some languages, such as Ruby, have a built in range constraint that makes it easy to construct an array of values from 1 to N. JavaScript is not one of those languages. Nevertheless, if you don't mind the aesthetics, you can get away with something like this:


### Solution 1

> In ES6 using Array [from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) and [keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys) methods.

```javascript
let a = Array.from(Array(10).keys(), x => x + 1);
console.log(a);
```

![image](https://user-images.githubusercontent.com/40190772/80659222-98163900-8a88-11ea-8291-95567e21aeb7.png)


### Solution 2

> Shorter version using [spread operator]().


```javascript
let b = [...Array.from(Array(10).keys(), x => x + 1)];
console.log(b);
```

![image](https://user-images.githubusercontent.com/40190772/80659293-d4e23000-8a88-11ea-9e40-8241bb8e1805.png)

[Refernce 📚](https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n/33352604#33352604)
