// ---------- (1)
var a=1;
function outer(){
    function inner(){
        console.log(a); //undefined
        var a=3;
    }
    inner(); // -------- (2)
    console.log(a);
}
outer(); // -------- (3)
console.log(a); // 1