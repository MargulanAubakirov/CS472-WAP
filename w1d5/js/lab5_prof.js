/**
 * lab5.js
 */
"use strict"

//Q1
function max1(num1, num2) {

    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function max2(num1, num2) {
    let max = num1;
    if (num2 > num1) {
        max = num2;
    }
    return max;
}
function max3(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}
console.log(max1(1, 2));
console.log(max2(1, 2));
console.log(max3(1, 2));


//Q2
function maxOfThree(n, m, o) {
    let max = n;
    if (m > max) {
        max = m;
    }
    if (o > max) {
        max = o;
    }
    return max;
}
console.log(maxOfThree(2, 3, 4))

//Q3
function isVowel(ch) {
    //consider case-sensitive
    let r = false;
    switch (ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            r = true;
            break;
    }
    //if(ch =='a'||ch =='e')
    //use an array
    return r;
}
console.log(isVowel("e"));
//Q5
function reverse1(str) {//[abc]
    let revStr = [];
    for (let j = str.lenth - 1; j >= 0; j--) {
        revStr.push(str.charArt(j));
    }
    return revStr.join("");
}
//reverse in-place
function reverse2(str) {

}

//Q7
function filterLongWords(words, i) {
    return words.filter(w => w.length > i);
}
//Q11
function find2ndBiggest(nums) {
    if (nums.length < 2) {
        throw new Error("Invalid array size");
    }
    let biggest = (nums[0] > nums[1]) ? nums[0] : nums[1];
    let secBiggest = (nums[0] === biggest) ? nums[1] : nums[0];

    let c = 2;

    while (c < nums.lenth) {
        if (nums[c] > biggest) {
            //todo
            let temp = biggest;
            biggest = nums[c];
            secBiggest = temp;

        } else if (nums[c] > secBiggest) {
            secBiggest = nums[c];
        }
        c++;
    }
    return secBiggest;
}
console.log(find2ndBiggest([1, 2, 3]));//????

//[1,3,4,5,6,6]

//Q13 Fibo
function printFibo(n, a, b) {
    if (n === 0) return;
    if (n === 1) {
        console.log(`${a}`);
    } else if (n === 2) {
        console.log(`${a}, ${b}`);
    } else {
        let seq = `${a}, ${b}`;
        let nextA = a;
        let nextB = b;

        for (let i = 0; i < n - 2; i++) {
            let nextVal = nextA + nextB;
            nextA = nextB;
            nextB = nextVal;

            seq += `,${nextVal}`;

        }
        console.log(seq);
    }
}
printFibo(10, 0, 1);

//Q15
function getDateTime() {
    const currDateTine = new Date();
    document.querySelector("#spnClock").innerHTML = currDateTime;
    setTimeout(getDateTime, 1000); //how do stop it

}
getDateTime();
//setInterval , setTimeOut
// setInterval(getDateTime, 1000);
// setTimeout(getDateTime, 1000);

//how do you stop the effect of setInterval/setTimeout
//extraCredip

var add = (function () {
    var counter = 0;
    return function () {
        return counter += 1;

    }
    
})();
var reset = (function () {
    var counter = 0;
    return function () {
        return counter += 1;

    }
    
})();
console.log

