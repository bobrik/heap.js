(function() {
    var Heap   = require("./index"),
        assert = require("assert"),
        heap   = new Heap(),
        last   = 0,
        peek;

    [9, 6, 14, 19, 8, 4].forEach(function(i) {
        heap.push(i);
    });

    while (peek = heap.pop()) {
        assert.ok(last <= peek);
        last = peek;
    }
})();
