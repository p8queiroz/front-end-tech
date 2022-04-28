console.log("Hello, world!");

//const initialValue = "79927398713".split('').reverse()
const initialValue = "79927398713".split('').reverse()

const newvalue = initialValue.reduce((acc: number, current: string, index: number): number => {

  if (index % 2 === 0) {
    console.log('index: ', index, acc + parseInt(current))
    return acc + parseInt(current)
  }
  else {
    let value = parseInt(current) * 2;
    if (value > 9) {
      value = JSON.stringify(value)
        .split('')
        .reduce(
          (acc, current) => {
            return ((acc) + parseInt(current))
          },
          0)
    }
    console.log('index: ', index, (acc) + (value))

    return (acc) + (value);
  }
}, 0);

const valid = (newvalue % 10 === 0)

console.log(valid)