// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?

new Set([1,1,2,2,3,4]) // a set type with values {1,2,3,4}
// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("") // "ref"
// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); 

//Map(2) {Array(3) => true, Array(3) => false}
//   because for map to see the array as the same you have to do:

let m = new Map();
const arr = [1,2,3];
m.set(arr, true);
m.set(arr, false); 
//with this, you will have a set with only one entry  
//Map(1) {Array(3) => false}


// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => arr.length !== new Set(arr).size;

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers 
//and the values are the count of the vowels in the string.

let vowelCount = str => {
    let lowerCasedStr = str.toLowerCase();
    let vowelsArr = lowerCasedStr.match(/[aeiou]/gi);

    let m = new Map();
    vowelsArr.forEach(char => { //https://stackoverflow.com/questions/53584369/javascript-map-increment-value
        if(m.get(char)){
            m.set(char, (m.get(char))+1);
        }else{
            m.set(char,1);
        }
    })
    return m;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

