var Iterator = function(items) {
    this.index = 0;
    this.items = items
}

Iterator.prototype = {
    first: function() {
        this.reset()
        return this.next()
    }, 
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index <= this.items.length;
    },
    reset: function() {
        this.index = 0
    }, 
    each: function() {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            Object.entries(item)
              .filter(([key]) => key === "name")
              .map((val) => console.log(val[1]));
          }
    }
}

Iterator.prototype.run = function() {
    var iter = new Iterator(this.items);
    iter.each()
}
module.exports = Iterator
