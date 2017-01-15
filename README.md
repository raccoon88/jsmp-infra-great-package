---
##Installing

Run ```npm install``` to **install** great-package. 
Run ```npm compile``` to **compile** code from ES6 to ES5

---

##Using and examples
To use code, import index.js file to your code and you can use to function transformString and transformArray from that.

```transformString``` takes a string as an argument and returns a mirrored string;

For example: 
Next function call will be return ```'olleH dlroW'```;

```
 transformString('Hello World')
```

```tranformArray``` takes two arrays as an arguments and return one.

For example:
Next function call will be return ```[1, 'a', 2, 'b', 3, 'c']```;


``` 
  transformArray([1,2,3], ['a', 'b', 'c']);
```