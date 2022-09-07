//(...생략)
Square.prototype = Object.create(Rectangle.prototype);
Object.freeze(Square.prototype);
//(...생략)