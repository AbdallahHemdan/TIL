# Check If Something Is An Array

The `Array` class has a function on it called
[`isArray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
which can be used to check if something is an array.

```javascript
> Array.isArray('Hello, World!');
// => false

> Array.isArray(['One', 2, [3]]);
// => true

> Array.isArray({ foo: 'bar' });
// => false

> Array.isArray([]);
// => true
```

![image](https://user-images.githubusercontent.com/40190772/80606520-b8b4a380-8a34-11ea-871a-4ec2ae906ca6.png)

The MDN docs provide an [example
polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill)
if it is not natively available.

```javascript
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```
