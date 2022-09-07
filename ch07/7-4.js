//...
Grade.prototype = ['a', 'b', 'c', 'd'];
var g = new Grade(100,80);

g.push(90);
console.log(g); //Grade {0:100, 1:80, 2:90, length:3}
delete g.length;
g.push(70);
console.log(g); //Grade {0:100, 1:80, 2:90, ___ 4:70, length:5}