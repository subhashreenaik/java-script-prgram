//creating array named randoms
const randoms = [10];

//Generating 3 digits 10 random numbers
for(let i=0;i<11;i++){
    let random = Math.floor(Math.random()*(999-100+1)+100);
    console.log(random);
    //store random values into array randoms
    randoms[i] = random;
    console.log(randoms[i]);
}
//generating second max
var max = Math.max.apply(null, randoms); // get the max of the array
randoms.splice(randoms.indexOf(max), 1); // remove max from the array
var secondmax= Math.max.apply(null, randoms); //getting the second max
console.log("second max is "+secondmax);

//finding second minimum number in a array without sorting method
var min = Math.min.apply(null, randoms); // get the min of the array
randoms.splice(randoms.indexOf(min), 1); // remove min from the array
var secondmin= Math.min.apply(null, randoms); //getting the second min
console.log("second min is "+secondmin);

//finding second largest number in a array using sorting method
var secondlargest = randoms.sort(function(a, b) { return b - a; })[1];
console.log(secondlargest);


//finding second minimum number in a array using sorting method
var secondminimum = randoms.sort(function(a, b) { return a - b; })[1];
console.log(secondminimum);