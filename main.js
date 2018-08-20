// Problem 1

// declaring a function
function stringy(size){

    // defining an array as a variable
    var str = [];

    // running a "for" loop
    // as long as "i" is less than or equal to "size", the loop will continue to run
    // i++ keeps incrementing "i" each time through the loop
        for (i = 1; i <= size; i++){

    // the array variable += the remainder of "i" divided(%) 2 (1 / 2 = .5)
    // the remainder is .5 which will round up to one
    // 2nd time through the loop will be 2 % 2 which will have no remainder and result as a zero
        str += i % 2;
    }
    // returning the value
    return str;
}
// calling the function
console.log(stringy(6));

// Problem 2

// declaring a function with "arr" as a parameter
function numReverse(arr){

    // defining a variable and "String" as a constructor function
    var num = String(arr);

        // return the value
        // split is separating the integers 
        // map is calling each string in the array
        // reverse is flipping the order
        return num.split("").map(Number).reverse()
}
// invoking the function
console.log(numReverse(348597));

// Problem 3

// defining a function and variables with an array
function fibo(){
    var array = [];
    var b = 0;
    var c = 1;


    // running through the "for" loop
    // "i" is equal 0, as the sequence starts with "0+1"
    // the loop will stop when "i" is greater than 10
    for (var i = 0; i < 30; i++){

        // the push method adds a new item to the end of an array
        array.push(c);

        // += is adding the value of b to c and creating a new value for c
        c += b;
        b = c - b;
        
    } // returning the array and joining the elements into a string
    return array.join();

}// calling the function
console.log(fibo());

// Problem 4

// declaring a function with a parameter of "valid"
function checkCoupon(valid) {

        // "if" statement with Date.parse
        // Date.parse calculates milliseconds from 1/1/1970 until now
        if(Date.parse(valid) > Date.now()) {
            return true;
            } else {
                return false;
        }
}

console.log(checkCoupon("June 15, 2014"));
console.log(checkCoupon("August 25, 2019"));


// Problem 5

// declaring a function with "value"
function emailVal(value) {

    // defining the variable
    // ^ character means that there can be nothing before part one
    // ([a-z\w\.-]+) states first part must be a letter first, then can accept numbers and the "+" indicates it can be any length
    // @ is hardcoded into the variable value
    // ([a-z\d-]+) is stating the same as the first part. The \d is the same as [0-9]
    // last part is checking for letters and requires no less than 2 characters and no more then 8 characters
    var credentials = /^([a-z\w\.-]+)@([a-z\d-]+).([a-z]{2,8})$/i

        // test is a built-in function that tests for the criteria or matching strings
        // value is the parameter
        if (credentials.test(value)) {
            return true;
        } else {
    }       return false;
}
// calling the function
console.log(emailVal("dklipp6@gmail.com"));