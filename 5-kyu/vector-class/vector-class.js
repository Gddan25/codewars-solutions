class Vector {
    constructor(components) {
        this.components = [...components]
    }
    toString() {
        return `(${this.components.join(",")})`
    }
    norm() {
        const sumSquares = this.components.reduce((acc, curr) => acc + Math.pow(curr, 2), 0)
      
        return Math.sqrt(sumSquares)
    }
    equals(vector) {
        return this.components.length === vector.components.length && this.components.every((component, index) => component === vector.components[index])
    }
    add(vector) {
        if (this.components.length !== vector.components.length) {
            throw new Error("Vectors must have the same length!")
        }
      
        return new Vector(this.components.map((component, index) => component + vector.components[index]))
    }
    subtract(vector) {
        if (this.components.length !== vector.components.length) {
            throw new Error("Vectors must have the same length!")
        }
      
        return new Vector(this.components.map((component, index) => component - vector.components[index]))
    }
    dot(vector) {
        if (this.components.length !== vector.components.length) {
            throw new Error("Vectors must have the same length!")
        }
        
        return this.components.reduce((acc, curr, index) => acc + curr * vector.components[index], 0)
    }
}