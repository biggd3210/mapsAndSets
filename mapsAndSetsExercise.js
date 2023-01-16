// quick questions 1
// what does the following code return?
// new Set([1,1,2,2,3,4])//

// Returns {1,2,3,4}

//Quich question 2
//what does the following code return
// [...new Set('referee')].join("")

// returns 'ref'

//quick questions 3
//what does Map m look like after running the following code?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// m contains {
//    0: [1,2,3] => true, 
//    1: [1,2,3] => false}

// hasDuplicate

const hasDuplicate = (arr) => arr.length !== [...new Set(arr)].length;

//could also use 
// const hasDuplicate = (arr) => new.Set(arr).size !== arr. length;

// write a function called vowelCoutn which accepts a string and returns a map where the keys are numbers and the calues are the count of the vowels in the string

function vowelCount (string) {
    function isVowel(char) {
        return 'aieou'.includes(char)
    }
    const vowelMap = new Map();
    for (let char of string) {
        let lowerCaseChar = char.toLowerCase();
        if (isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
            vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1)
        } else {
            vowelMap.set(lowerCaseChar, 1);
        }
    }
    }
    return vowelMap;
}