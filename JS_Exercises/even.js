const isEven = (n) => n % 2 === 0;
const evenFilter = (list) => list.filter((n, i) => (isEven(n) && isEven(i)));

console.log(evenFilter([2,10,4,100,6,5,7,8,12]));
