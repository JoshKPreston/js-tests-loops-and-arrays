// 1. Given an array, move the element at index 0 to the last position in the array. Return the modified array.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: ['is', 'a', 'split', 'sentence.', 'This']

function rearranger(arr) {
    let endOfArray = arr.shift()
    arr.push(endOfArray)
    return arr
}


// ------------------------------------------


// 2. Given an array of numbers, return the largest number in the array.
// Example:
// input: [6, 4, 8, 33, 42, 10]
// output: 42
// [10, 12, 3, 2, 42]
// [23, 12, 4, 6, 23, 23, 23, 13]

function largestNum(arr) {
    let highNum = 0
    let numObj = {}
    let numOfOccurrences = null

    for (const key in arr) {
        const elem = arr[key]
        if (elem > highNum) {
            highNum = elem
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        if (highNum === elem) {
            numOfOccurrences++
        }
    }

    if (numOfOccurrences > 1) {
        numObj[highNum] = numOfOccurrences
        return numObj
    } else {
        return highNum
    }
}


// ------------------------------------------


// 3. Given an array of numbers, return an array where every element in the given array is multiplied by the length of the given array.
// Example:
// input:  [4, 2, 1, 7]
// output: [16, 8, 4, 28]

function elemsTimesLength(arr) {
    numArray = new Array()
    for (const key in arr) {
        const elem = arr[key]
        numArray.push(elem * arr.length)
    }
    return numArray
}


// ------------------------------------------


// 4. Given a multidimensional array, return a single dimension array with all of the primitive data elements within the multidimensional array.
// Example:
// input:  [[['legume'], 3, []], 2, ['tree', [{}, [5]]]]
// output: ['legume', 3, 2, 'tree', 5]
// Primitive data types - https://developer.mozilla.org/en-US/docs/Glossary/Primitive
// [[['legume'], 3, []], 2, ['tree', [{}, [5]]]]

function arrayFlattener(arr) {

    let newArr = []

    for (const a of arr) {
        if (Array.isArray(a)) {
            newArr.push(...arrayFlattener(a));
        } else {
            newArr.push(a)
        }
    }

    newArr.forEach( elem => {
        let i = newArr.indexOf(elem)
        if ( typeof elem === 'object') {
            newArr.splice(i, 1)
        }
    })
    
    return newArr;
}


// ------------------------------------------


//5. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
    from: 'BOI',
    to: 'LAX',
    prices: {
        standard: 500,
        firstClass: 2200
    }
}, {
    from: 'BOI',
    to: 'SEA',
    prices: {
        standard: 800,
        firstClass: 1200
    }
}, {
    from: 'BOI',
    to: 'CAN',
    prices: {
        standard: 750,
        firstClass: 6200
    }
}]


function flightCost(destination, firstClass) {
    destination = destination.toUpperCase()
    let flight = flights.find( f => {
        return f.to === destination
    })
    if (firstClass) { 
        return flight.prices.firstClass
    } else {
        return flight.prices.standard
    }
}


// ------------------------------------------


// 6. Given a number, return the corresponding user object from the staff array that has the given number as the value of their id property. If no user is found, return an object with an error property and value of "No user with that id."
// Example:
// input: 17
// output: {id: 17, name: 'St. MaryLou de la Playa Carmen'}
//Example:
// input: 1000
// output: { error: "No user with that id." } 


let staff = [{ id: 1, name: 'Jon' }, { id: 2, name: 'Yuli' }, { id: 21, name: 'Peter' },
{ id: 17, name: 'St. MaryLou de la Playa Carmen' }, { id: 51, name: 'Doug' },
{ id: 881, name: 'Paul' }, { id: 0, name: 'Jon' }, { id: 999, name: 'Timma' }]

function findById(id) {
    let matchFound = null
    for (const s of staff) {
        if (s.id === id) {
            matchFound = s
            break
        } else {
            continue
        }
    }
    if (matchFound) {
        return matchFound
    } else {
        return {error: 'No user with that id.'}
    }
}


// ------------------------------------------


// 7. Write a function that accepts a name argument and will loop over theBand members and return the band member's name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"

let theBand = {
    homeCity: "Birmingham",
    members: [{
        name: 'Johnny P',
        instrument: 'sax'
    }, {
        name: 'River',
        instrument: 'drums'
    }, {
        name: 'Kris',
        instrument: 'guitar'
    }]
}

function bandMemberDetails(name) {
    let bandMember = theBand.members.find(b => {
        return b.name.includes(name)
    })
    return `${bandMember.name} is in the band and plays the ${bandMember.instrument}`
}