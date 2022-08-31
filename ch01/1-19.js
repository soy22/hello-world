var a;
console.log(a); //undefined

var obj={a:1};
console.log(obj.a); //1
console.log(obj.b);
console.log(b);

var func = function() {};
var c = func(); //return 값이 없으면 undefined를 반환한 것으로 간주.
console.log(c); //undefined