function outer() {
    const score = 5;
    return function inner(){
        console.log(score);
    }
    
}

const res = outer()
// res();

function fun1() {
    let counter = 0;
    function inc() {
        counter++;
    }

    function getCounter() {
        console.log(counter);
    }

    return {
        inc,
        getCounter
    }
}

const counter = fun1();
// console.log(counter);
// counter.inc();
// counter.inc();
// counter.inc();
// counter.getCounter();


function generateID() {
    let previousID = 0;

    function lastId() {
        previousID++;
        return previousID;

    }
    return lastId;
}


const creatId = generateID()
// console.log(creatId());

function Test1(user) {
    function greet() {
        console.log(`Hello ${user} , How are you`);
    }

    return greet;
}

const greeting1 = Test1("mohan");
// greeting1()
const greeting2 = Test1("Ram Kumar")
// greeting2()


function Task5(length) {
    let ArrOfFunc = [];
    for (let index = 0; index < length; index++) {
        ArrOfFunc.push( () => {
            console.log(index);
        })
        
    }
    return ArrOfFunc;
}

const functions = Task5(50)
// functions[2]();
// functions[3]();
// functions[26]();
// functions[0]();


function modules() {
    let arr = []

    function add(item) {
        arr.push(item)
    }
    function remove(item) {
        const index = arr.indexOf(item)
        if(index !==-1){
            arr.splice(index, 1)
        }
        
    }

    function printItems() {
        return arr.slice();
    }

    return {
        add,
        remove, printItems
    }
}

const list = modules();
list.add(6);
list.add(7);
list.add(8);
list.add(9);
list.add(3);
list.remove(7)

// console.log(list.printItems());





function memoize(fn) {
        const cache = {}

    return function(...args) {
        const key = JSON.stringify(args);
        if(cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

function Function(x, y) {
    return x+y;
}

const ans = memoize(Function)
// console.log(ans(1, 2));
// console.log(ans(1, 2));
// console.log(ans(1, 2));


function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * factorial(num-1);
    }
}

const fact = memoize(factorial);

console.log(fact(5));
console.log(fact(5));
