heap.js
-----

This is simple as hell heap data structure for numbers for js. You know, to get peek element in O(1), remove it in O(log n) and insert new elements in O(log n).

This is so lame and useless for you so it's not even in npm. I used it for my last programming assigment in (Algorithms: Design and Analysis, Part 1 course)[https://www.coursera.org/course/algo].

## API

Require it:

```javascript
var Heap = require("heap.js"),
    heap = new Heap();
```

Push something:

```javascript
heap.push(123);
heap.push(456);
heap.push(-1);
```

Find out length:

```javascript
console.loog(heap.length);
```

Take smallest one:

```javascript
console.log(heap.top());
```

Remove it:

```javascript
console.log(heap.pop());
```
