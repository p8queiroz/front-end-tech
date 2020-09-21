//for using quokka js in a existing js file. "ctrl + k, q"

//REDUCE METHOD IN JAVASCRIPTS

/*
A function that accepts up to four arguments. The reduce method calls the callbackfn 
function one time for each element in the array. Calls the specified callback function 
for all the elements in an array. The return value of the callback function is the 
accumulated result, and is provided as an argument in the next call to the callback function.
*/


/*Example 1: Sum the items in a array*/

/*Initial  balance value*/
const initialBalance = 0;

/*Array with the values of all the orders requested by the user*/
const orderValues = [120, 59, 99, 12];

/*The reducer function recieves the acumulator and the current item of the array*/
const reducer = (acumulator, currentItem) => {
    //console.log("Acumulator: ", acumulator, "Current Item: ", currentItem);
    return acumulator + currentItem;
}

const total = orderValues.reduce(reducer, initialBalance);
//console.log(total)

/*Example 2: xxxxxx*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
//https://stackoverflow.com/questions/50993498/flat-is-not-a-function-whats-wrong

const numArray2 = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];
const flattenArray2 = (data) => {
    const initial = [];
    const fun = (acumulator, currentItem) => {
        return acumulator.concat(Array.isArray(currentItem) ? flattenArray2(currentItem) : currentItem)
    }
    return data.reduce(fun, initial);
}
//console.log(flattenArray2(numArray2))


/*Example 3: Changing an Object Structure*/

//Turn this...
const sellTicket = [
    { value: 231, code: 566551, customer: "Paulo", status: "Open" },
    { value: 232, code: 566552, customer: "Sampaio", status: "Open" },
    { value: 233, code: 566553, customer: "Peter", status: "Closed" },
    { value: 234, code: 566554, customer: "Santos", status: "Open" },
]

//Into this...
const user = {
    Paulo: { sellTicketValue: 231, code: 566551, sellTicketStatus: "Open" },
    Sampaio: { sellTicketValue: 232, code: 566552, sellTicketStatus: "Open" },
    //...
}

const userObject = (sellTicket) => {
    return sellTicket.reduce((acc, current) => {
        acc[current.customer] = {
            'sellTicketValue': current.value,
            'code': current.code,
            'sellTicketStatus': current.status
        }
        return acc;
    }, {});
}

console.log(userObject(sellTicket))



/*Example 4: xxxxxx*/
