String.prototype.camelCase = function() {
    if (this.length === 0) {
        return String(this)
    }
  
    return this.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join("")
}