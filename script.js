"use strict";
//Phase 1//
class Room {
    constructor (name, length, width, capacity = 15) {
        this.roomName = name;
        this.roomLength = length;
        this.roomWidth = width;
        this.available = true;
        this.capacity = capacity;
    }
    getArea() {
        return this.roomLength * this.roomWidth;
    }
    getPerimeter() {
        return 2 * (this.roomLength + this.roomWidth);
    }
}

let room1 = new Room ("Sun",30,20);
let room2 = new Room ("Green", 15, 20, 18);

console.log(room1.roomName);
console.log(room1.roomLength);
console.log(room1.roomWidth);
console.log(room1.getArea());
console.log(room1.getPerimeter());

console.log(room2.roomName);
console.log(room2.roomLength);
console.log(room2.roomWidth);
console.log(room2.getArea());
console.log(room2.getPerimeter());

//Phase 2//
room2.available = false;
console.log(room1.available, room2.available);

//Phase 3//
console.log(room1.capacity, room2.capacity);