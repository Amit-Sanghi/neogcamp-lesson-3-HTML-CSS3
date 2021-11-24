
function counter(){
    var a = 0
    incrementCounter = function(){
        a++;
        console.log(a)
    }
    decrementCounter = function(){
        a--;
        console.log(a)
    }
}
var counter1 = new counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();


