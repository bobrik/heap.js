(function(module) {
    function Heap(less) {
        var self = this;

        if (less) {
            self.compare = less;
        } else {
            self.compare = function(left, right) {
                return left < right;
            }
        }

        self.heap = [];
        self.swap = function(i, j) {
            var tmp = self.heap[i];
            self.heap[i] = self.heap[j];
            self.heap[j] = tmp;
        };
    }

    Heap.prototype.length = 0;

    Heap.prototype.push = function(key) {
        var parent,
            current;

        this.heap.push(key);
        current = this.heap.length - 1;

        while (current != 0) {
            if (current < 2) {
                parent = 0;
            } else {
                parent = Math.floor((current + 1) / 2) - 1;
            }

            // bubble up
            if (this.compare(this.heap[current], this.heap[parent])) {
                this.swap(current, parent);
            }

            current = parent;

            if (current == 0) {
                break;
            }
        }

        this.length++;
    };

    Heap.prototype.pop = function() {
        var result, min, left, right, level, stop, current, shifts;

        if (!this.heap.length) {
            return undefined;
        }

        result = this.heap.shift();
        this.length--;

        if (this.heap.length) {
            this.heap.unshift(this.heap.pop());
            current = 0;
            level   = 0;
            shifts  = [];

            function calcShift(shifts) {
                return shifts.reduce(function(r, right, pos, shifts) {
                    if (right) {
                        return r + Math.pow(2, shifts.length - pos - 1);
                    } else {
                        return r;
                    }
                }, 0);
            }

            while (true) {
                left  = Math.pow(2, level + 1) - 1 + calcShift(shifts.concat([false]));
                right = left + 1;
                stop  = true;

                if (this.heap[left] !== undefined) {
                    if (this.compare(this.heap[left], this.heap[current])) {
                        stop = false;
                    }
                }

                if (stop) {
                    if (this.heap[right] !== undefined) {
                        if (this.compare(this.heap[right], this.heap[current])) {
                            stop = false;
                        }
                    }
                }

                if (stop) {
                    break;
                }

                if (this.heap[right] === undefined || this.compare(this.heap[left], this.heap[right])) {
                    // swap with left
                    this.swap(left, current);
                    current = left;
                    shifts.push(false);
                } else {
                    // swap with right
                    this.swap(right, current);
                    current = right;
                    shifts.push(true);
                }

                level++;
            }
        }

        return result;
    };

    Heap.prototype.top = function() {
        return this.heap[0];
    };

    Heap.prototype.dump = function() {
        return this.heap.slice();
    };

    if (module !== "undefined") {
        module.exports = Heap;
    } else {
        window.Heap = Heap;
    }
})(module);
